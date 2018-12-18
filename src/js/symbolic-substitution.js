import * as escodegen from 'escodegen';
import * as esprima from 'esprima';


class Scope {
    constructor(bindings) {
        this.bindings = bindings;
    }
}

let params = [];
let repeatToPrev = false;
let params_and_args = {};
const init_substitute = () => {
    params = [];
    repeatToPrev = false;
    params_and_args = {};
};

const parseCode = (codeToParse) => {
    return esprima.parseScript(codeToParse,{loc: true});
};

const mySplit = (args, seperator) => {
    let output = [];
    let acc = '';
    for (let i = 0; i < args.length; i++) {
        if (args[i] !== seperator) {
            if (i === args.length - 1) {
                acc += args[i];
                output.push(acc);
            } else
                acc += args[i];
        } else {
            output.push(acc);
            acc = '';
        }
    }
    return output;
};

const mark_code = (code, args) => {
    let splited_Arguments = mySplit(args, ',');
    let theCode = escodegen.generate(code).split('\n');
    for (let i = 0; i < params.length; i++) {
        params_and_args[params[i]] = splited_Arguments[i];
    }
    for (let j = 0; j < code.body.length; j++) {
        mark(code.body[j], theCode);
    }
    return theCode;
};

const getLine = (statement) => statement.loc.start.line;

const mark = (statement, theCode) => {
    if (statement.type === 'IfStatement') {
        mark_If(statement, theCode);
    }
    if (statement.type === 'BlockStatement') {
        mark_Block(statement, theCode);
    }
    if (statement.type === 'FunctionDeclaration') {
        mark_function(statement, theCode);
    }
};

const mark_Block = (statement, theCode) => {
    for (let i = 0; i < statement.body.length; i++) {
        mark(statement.body[i], theCode);
    }
};

const mark_function = (statement, theCode) => {
    mark(statement.body, theCode);
};

const replace_params = (aString) => {
    let words = mySplit(aString, ' ');
    words.map((word) => params.includes(word) ? params_and_args[word] : word);
    let output = ' ';
    for (let i = 0; i < words.length; i++) {
        if (params.includes(words[i])) {
            words[i] = params_and_args[words[i]];
            output = output + words[i];
        } else
            output = output + words[i];
    }
    return output;
};

const mark_If = (statement, theCode) => {
    let replacedTest = replace_params(escodegen.generate(statement.test));
    let res = eval(replacedTest);
    let line_in_code = getLine(statement.test) - 1;
    if (res === true) {
        theCode[line_in_code] = '<span style = "background-color: #37ff00">' + theCode[line_in_code] + '</span>';
    } else {
        theCode[line_in_code] = '<span style = "background-color: #ff000e">' + theCode[line_in_code] + '</span>';
    }
    mark(statement.consequent, theCode);
    mark(statement.alternate, theCode);
};

const copy_bindings = (bindings) => {
    return JSON.parse(JSON.stringify(bindings));
};

const substitute_Program = (code) => {
    let globalScope = new Scope({});
    for (let i = 0; i < code.body.length; i++) {
        code.body[i] = substitute(code.body[i], globalScope);
    }
    for (let j = 0; j < code.body.length; j++) {
        if(code.body[j] === null) {
            code.body.splice(j,1);
        }
    }
    return code;
};

const substitute = (statement, scope) => {
    let type_handlers = [VariableDeclaration_handler, FunctionDeclaration_handler, IfStatement_handler, WhileStatement_handler, BlockStatement_handler,
        ReturnStatement_handler, BinaryExpression_handler, Identifier_handler, AssignmentExpression_handler, ExpressionStatement_handler, MemberExpression_handler];
    let type_handlersNames = ['VariableDeclaration', 'FunctionDeclaration', 'IfStatement', 'WhileStatement', 'BlockStatement',
        'ReturnStatement', 'BinaryExpression', 'Identifier', 'AssignmentExpression', 'ExpressionStatement', 'MemberExpression'];
    if (statement.type === 'ArrayExpression') {
        return ArrayExpression_handler(statement);
    }
    if (type_handlersNames.includes(statement.type)) {
        return type_handlers[type_handlersNames.indexOf(statement.type)](statement, scope);
    } else return statement;

};

const VariableDeclaration_handler = (statement, scope) => {
    for (let i = 0; i < statement.declarations.length; i++) {
        addBinding(scope, statement.declarations[i].id, statement.declarations[i].init);
    }
    statement = null;  //we want to remove let from the json (and also the assignments)
    return statement;
};

const addBinding = (scope, variable, value) => {
    scope.bindings[escodegen.generate(variable)] = substitute(value, scope);
};

const FunctionDeclaration_handler = (statement, scope) => {
    params = statement.params.map((parameter) => parameter.name);
    let functionScope = new Scope(copy_bindings(scope.bindings));
    statement.body = substitute(statement.body, functionScope);
    return statement;
};

const IfStatement_handler = (statement, scope) => {
    statement.test = substitute(statement.test, scope);
    let ifScope = new Scope(copy_bindings(scope.bindings));
    statement.consequent = substitute(statement.consequent, ifScope);
    let elseScope = new Scope(copy_bindings(scope.bindings));
    statement.alternate = substitute(statement.alternate, elseScope);
    return statement;
};

const WhileStatement_handler = (statement, scope) => {
    statement.test = substitute(statement.test, scope);
    let whileScope = new Scope(copy_bindings(scope.bindings));
    statement.body = substitute(statement.body, whileScope);
    return statement;
};

const BlockStatement_handler = (statement, scope) => {
    let newScope = new Scope(copy_bindings(scope.bindings));
    for (let i = 0; i < statement.body.length; i++) {
        statement.body[i] = substitute(statement.body[i], newScope);
    }
    for (let i = 0; i < statement.body.length; i++) {
        if (repeatToPrev) {
            i--;
            repeatToPrev = false;
        }
        if (statement.body[i] === null) {
            repeatToPrev = true;
            statement.body.splice(i, 1);
        }
    }
    return statement;
};

const MemberExpression_handler = (statement, scope) => {
    let the_object = scope.bindings[statement.object.name];
    scope.bindings[statement.object.name].elements[statement.property.value] = substitute(the_object.elements[statement.property.value], scope);
    return scope.bindings[statement.object.name].elements[statement.property.value];
};

const ReturnStatement_handler = (statement, scope) => {
    statement.argument = substitute(statement.argument, scope);
    return statement;
};

const BinaryExpression_handler = (statement, scope) => {
    statement.right = substitute(statement.right, scope);
    statement.left = substitute(statement.left, scope);
    return statement;
};

const Identifier_handler = (statement, scope) => {
    if (params.includes(statement.name)) {
        return statement;
    } else
        return scope.bindings[statement.name];

};

const AssignmentExpression_handler = (statement, scope) => {
    statement.right = substitute(statement.right, scope);
    scope.bindings[escodegen.generate(statement.left)] = statement.right;
    statement = null;
    return statement;
};

const ExpressionStatement_handler = (statement, scope) => {
    statement = substitute(statement.expression, scope);
    return statement;
};

const ArrayExpression_handler = (statement) => {
    return statement;
};

export {substitute_Program, init_substitute, mark_code,parseCode};
