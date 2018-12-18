import $ from 'jquery';
import * as escodegen from 'escodegen';
import {substitute_Program,mark_code,parseCode} from './symbolic-substitution';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let argList = $('#argumentsPlaceHolder').val();
        let parsedCode = parseCode(codeToParse);
        let sub_output = substitute_Program(parsedCode);
        let generatedOutput = escodegen.generate(sub_output);
        let paintedOutput = mark_code(parseCode(generatedOutput),argList);
        let output = '';
        for(let i=0 ; i<paintedOutput.length;i++){
            output = output + paintedOutput[i] +'\n';
        }
        document.write('<pre>' + output + '</pre>');
    });
});


