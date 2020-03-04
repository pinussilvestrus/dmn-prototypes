<script>
  import Table from './components/Table.svelte';

  export let title;
  export let subtitle;

  let tableData = {
    name: 'Employee Suitability Score',
    hitPolicy: 'Collect (Sum)',
    inputHeaders: [
      {
        idx: 0,
        clause: 'When',
        name: 'Open Claims',
        type: 'integer'
      },
      {
        idx: 1,
        clause: 'And',
        name: 'Employee.region = Claim.region',
        type: '[true, false]'
      },
      {
        idx: 2,
        clause: 'And',
        name: 'Claim.expenditure',
        type: 'integer'
      },
      {
        idx: 3,
        clause: 'And',
        name: 'Employee Experience',
        type: "['Junior', 'Senior', 'Experienced']",
        smaller: true
      },
      {
        idx: 4,
        clause: 'And',
        name: 'Employee fills skillset',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 0,
        clause: 'Then',
        name: 'Score',
        type: '[> -50; < 20]'
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
    ]
  };
</script>

<style lang="scss">
  h1, h3 {
    color: black;
    margin: 0.5rem 0 1rem 1.5rem;
  }

  h1 {
    font-size: 200%;
  }

  hr {
    width: 50%;
    border: 0.5px solid gray;
  }
</style>

<h3>{subtitle}</h3>
<h1>{title}</h1>
<hr>

<Table {tableData}></Table>
