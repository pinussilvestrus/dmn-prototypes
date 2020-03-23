export default {
  Decision_03absfl: {
    id: 'Decision_03absfl',
    name: 'Employee Suitability Score',
    hitPolicy: 'Collect (Sum)',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Open Claims',
        type: 'integer'
      },
      {
        idx: 'input-header-1',
        clause: 'And',
        expression: 'Employee.region = Claim.region',
        type: '[true, false]'
      },
      {
        idx: 'input-header-2',
        clause: 'And',
        expression: 'Claim.expenditure',
        type: 'integer'
      },
      {
        idx: 'input-header-3',
        clause: 'And',
        expression: 'Employee Experience',
        type: "['Junior', 'Senior', 'Experienced']",
        smaller: true
      },
      {
        idx: 'input-header-4',
        clause: 'And',
        expression: 'Employee fills skillset',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Score',
        type: '[-50..20]'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['<=5', '-', '-', '-', '-'],
        outputCells: ['10']
      },
      {
        idx: 2,
        inputCells: ['>10', '-', '-', "'Junior'", '-'],
        outputCells: ['-25']
      },
      {
        idx: 3,
        inputCells: ['>5', '-', '-', "'Experienced', 'Senior'", '-'],
        outputCells: ['-10']
      },
      {
        idx: 4,
        inputCells: ['-', 'true', '-', '-', '-'],
        outputCells: ['20']
      },
      {
        idx: 5,
        inputCells: ['-', '-', '<1000', "'Junior', 'Experienced'", '-'],
        outputCells: ['0']
      },
      {
        idx: 6,
        inputCells: ['-', '-', '<1000', "'Senior'", '-'],
        outputCells: ['-20']
      },
      {
        idx: 7,
        inputCells: ['-', '-', '[1000..10000]', "'Junior'", '-'],
        outputCells: ['-15']
      },
      {
        idx: 8,
        inputCells: ['-', '-', '>10000', "'Junior'", '-'],
        outputCells: ['-50']
      },
      {
        idx: 9,
        inputCells: ['-', '-', '>10000', "'Experienced'", '-'],
        outputCells: ['-15']
      },
      {
        idx: 10,
        inputCells: ['-', '-', '-', "'Junior'", 'false'],
        outputCells: ['-50']
      },
      {
        idx: 11,
        inputCells: ['-', '-', '-', "'Experienced', 'Senior'", 'false'],
        outputCells: ['-10']
      }
    ],
    bindings: [
      {
        element: 'InputData_0qarm4x',
        connection: 'connection_134',
        headerIdx: ['input-header-1', 'input-header-2']
      },
      {
        element: 'Decision_11xban0',
        connection: 'connection_136',
        headerIdx: ['input-header-4']
      },
      {
        element: 'Decision_19jtlzt',
        connection: 'connection_137',
        headerIdx: ['input-header-3']
      },
      {
        element: 'InputData_011xp5m',
        connection: 'connection_133',
        headerIdx: ['input-header-1']
      },
      {
        element: 'InputData_13z77r8',
        connection: 'connection_135',
        headerIdx: ['input-header-0']
      },
      {
        element: 'Decision_13nychf',
        connection: 'connection_132',
        headerIdx: ['output-header-0']
      }
    ]
  },
  Decision_19jtlzt: {
    id: 'Decision_19jtlzt',
    name: 'Employee Experience',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Approval Authority',
        type: 'integer'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Experience',
        type: 'string'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['<1000'],
        outputCells: ["'Junior'"]
      },
      {
        idx: 2,
        inputCells: ['[1000..10000]'],
        outputCells: ["'Experienced'"]
      },
      {
        idx: 3,
        inputCells: ['[10000..20000]'],
        outputCells: ["'Senior'"]
      },
      {
        idx: 4,
        inputCells: ['>20000'],
        outputCells: ["'Partner'"]
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_137',
        headerIdx: ['output-header-0']
      },
      {
        element: 'InputData_1vzqswv',
        connection: 'connection_138',
        headerIdx: ['input-header-0']
      }
    ]
  },
  Decision_11xban0: {
    id: 'Decision_11xban0',
    name: 'Employee Skill Approval',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Employee Skillset includes Required Skills',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Employee fills skills',
        type: '[true, false]'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['true'],
        outputCells: ['true']
      },
      {
        idx: 2,
        inputCells: ['false'],
        outputCells: ['false']
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_137',
        headerIdx: ['output-header-0']
      },
      {
        element: 'InputData_1x2qw0w',
        connection: 'connection_139',
        headerIdx: ['input-header-0']
      }
    ]
  },
  Decision_13nychf: {
    id: 'Decision_13nychf',
    name: 'Determine Employee',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Score < 20',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Output',
        type: 'string'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['true'],
        outputCells: ["'Employee not suitable'"]
      },
      {
        idx: 2,
        inputCells: ['false'],
        outputCells: ["'Employee is suitable'"]
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_132',
        headerIdx: ['input-header-0']
      }
    ]
  }
};
