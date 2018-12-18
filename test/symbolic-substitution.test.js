
import assert from 'assert';
import {substitute_Program,init_substitute,mark_code,parseCode} from '../src/js/symbolic-substitution';
import * as escodegen from 'escodegen';
let input1_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "x"
                },
                {
                    "type": "Identifier",
                    "name": "y"
                },
                {
                    "type": "Identifier",
                    "name": "z"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "init": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "init": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                    }
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "z"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 5,
                                                "raw": "5"
                                            }
                                        }
                                    }
                                },
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "z"
                                            }
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "c"
                                        }
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "IfStatement",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "right": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "c"
                                            }
                                        }
                                    }
                                ]
                            },
                            "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "right": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "c"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let output1_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "x"
                },
                {
                    "type": "Identifier",
                    "name": "y"
                },
                {
                    "type": "Identifier",
                    "name": "z"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "x"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "y"
                                }
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "z"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "x"
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "y"
                                                }
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "z"
                                            }
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 5,
                                                "raw": "5"
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "IfStatement",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "y"
                                    }
                                },
                                "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "z"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            },
                                            "right": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "x"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "y"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                }
                                            },
                                            "right": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Literal",
                                                        "value": 0,
                                                        "raw": "0"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5"
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let input1_2 = parseCode(escodegen.generate(output1_1));
let output1_2 = [ 'function foo(x, y, z) {'
    ,'<span style = "background-color: #ff000e">    if (x + 1 + y < z) {</span>'
    , '        return x + y + z + (0 + 5);'
    , '<span style = "background-color: #37ff00">    } else if (x + 1 + y < z * 2) {</span>'
    , '        return x + y + z + (0 + x + 5);'
    , '    } else {'
    , '        return x + y + z + (0 + z + 5);'
    , '    }'
    , '}'];

let input2_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                },
                {
                    "type": "Identifier",
                    "name": "b"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "c"
                                },
                                "init": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "b"
                                    }
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "WhileStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10"
                            }
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "c"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "Identifier",
                                "name": "c"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "c"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let output2_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                },
                {
                    "type": "Identifier",
                    "name": "b"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "WhileStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10"
                            }
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "right": {
                                            "type": "Identifier",
                                            "name": "b"
                                        }
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let input2_2 = parseCode(escodegen.generate(output2_1));
let output2_2 = ['function foo(a, b) {'
, '    while (a + b > 10) {'
, '    }'
, '<span style = "background-color: #37ff00">    if (a + b > 0) {</span>'
, '        return a + b;'
, '    } else {'
, '        return 0;'
, '    }'
,'}'];

let input3_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "something"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "b"
                                },
                                "init": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5"
                                    }
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "WhileStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "b"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "a"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let output3_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "something"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "WhileStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 5,
                                    "raw": "5"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": []
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 5,
                                    "raw": "5"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let input3_2 = parseCode(escodegen.generate(output3_1));
let output3_2 = ['function something(a) {'
 ,'    while (a + 5 > 0) {'
 ,'    }'
 ,'<span style = "background-color: #ff000e">    if (a + 5 > 0) {</span>'
 ,'        return true;'
,'    } else {'
,'        return false;'
,'    }'
,'}'];

let input4_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "x"
                },
                {
                    "type": "Identifier",
                    "name": "y"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "array"
                                },
                                "init": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                        {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        },
                                        {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    ]
                                }
                            }
                        ],
                        "kind": "let"
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "array"
                                        },
                                        "property": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "array"
                                        },
                                        "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let output4_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "x"
                },
                {
                    "type": "Identifier",
                    "name": "y"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let input4_2 = parseCode(escodegen.generate(output4_1));
let output4_2 = ['function foo(x, y) {'
,'<span style = "background-color: #37ff00">    if (true) {</span>'
,'        return 1;'
,'    } else {'
,'        return 2;'
,'    }'
,'}'];

let input5_1 = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "varGlobal"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 32,
                        "raw": "32"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "goo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "varGlobal"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let output5_1 = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "goo"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 32,
                                        "raw": "32"
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ReturnStatement",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
};
let input5_2 = parseCode(escodegen.generate(output5_1));
let output5_2 = ['function goo(a) {'
,'<span style = "background-color: #ff000e">    if (a === true) {</span>'
,'        return 32;'
,'    } else {'
,'        return 0;'
,'    }'
,'}'];
describe('test1', () => {

    it('test 1.1', () => {
        init_substitute();
        assert.deepEqual(substitute_Program(input1_1) , output1_1);
    });
    it('test 1.2', () => {
        assert.deepEqual(mark_code(input1_2,'1,2,3') , output1_2);
    });
    it('test2.1', () => {
        init_substitute();
        assert.deepEqual(substitute_Program(input2_1) , output2_1);
    });
    it('test2.2', () => {
        assert.deepEqual(mark_code(input2_2,'40,1') , output2_2);
    });
    it('test3.1', () => {
        init_substitute();
        assert.deepEqual(substitute_Program(input3_1) , output3_1);
    });
    it('test3.2', () => {
        assert.deepEqual(mark_code(input3_2,'-5') , output3_2);
    });
    it('test4.1', () => {
        init_substitute();
        assert.deepEqual(substitute_Program(input4_1) , output4_1);
    });
    it('test4.2', () => {
        assert.deepEqual(mark_code(input4_2,'11,12') , output4_2);
    });
    it('test5.1', () => {
        init_substitute();
        assert.deepEqual(substitute_Program(input5_1) , output5_1);
    });
    it('test5.2', () => {
        assert.deepEqual(mark_code(input5_2,'false') , output5_2);
    });
});