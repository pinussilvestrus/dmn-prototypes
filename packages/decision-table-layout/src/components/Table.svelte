<script>
  import "./Table.scss";

  const inputHeaders = [
    {
      idx: 0,
      clause: "When",
      name: "Open Claims",
      type: "integer"
    },
    {
      idx: 1,
      clause: "And",
      name: "Employee.region = Claim.region",
      type: "boolean"
    },
    {
      idx: 2,
      clause: "And",
      name: "Claim.expenditure",
      type: "integer"
    },
    {
      idx: 3,
      clause: "And",
      name: "Employee Experience",
      type: "['Junior', 'Senior', 'Experienced']",
      smaller: true
    },
    {
      idx: 4,
      clause: "And",
      name: "Employee fills skillset",
      type: "boolean"
    }
  ];

  const outputHeaders = [
    {
      idx: 0,
      clause: "Then",
      name: "Score",
      type: "[> -50; < 20]"
    }
  ];

  const rules = [
    {
      idx: 1,
      inputCells: ["<=5", "-", "-", "-", "-"],
      outputCells: ["10"]
    },
    {
      idx: 2,
      inputCells: [">10", "-", "-", "'Junior'", "-"],
      outputCells: ["-25"]
    },
    {
      idx: 3,
      inputCells: [">5", "-", "-", "'Experienced', 'Senior'", "-"],
      outputCells: ["-10"]
    },
    {
      idx: 4,
      inputCells: ["-", "true", "-", "-", "-"],
      outputCells: ["20"]
    },
    {
      idx: 5,
      inputCells: ["-", "-", "<1000", "'Junior', 'Experienced'", "-"],
      outputCells: ["0"]
    },
    {
      idx: 6,
      inputCells: ["-", "-", "<1000", "'Senior'", "-"],
      outputCells: ["-20"]
    },
    {
      idx: 7,
      inputCells: ["-", "-", "[1000..10000", "'Junior'", "-"],
      outputCells: ["-15"]
    },
    {
      idx: 8,
      inputCells: ["-", "-", ">10000", "'Junior'", "-"],
      outputCells: ["-50"]
    },
    {
      idx: 9,
      inputCells: ["-", "-", ">10000", "'Experienced'", "-"],
      outputCells: ["-15"]
    },
    {
      idx: 10,
      inputCells: ["-", "-", "-", "'Junior'", "false"],
      outputCells: ["-50"]
    },
    {
      idx: 11,
      inputCells: ["-", "-", "-", "'Experienced', 'Senior'", "false"],
      outputCells: ["-10"]
    }
  ];
</script>

<table class="decision-table">
  <thead>
    <tr class="title-row">
      <th colspan="8">
        <p>Employee Suitability Score</p>
        <span />
        <select>
          <option selected>Collect (Sum)</option>
        </select>
        <p class="hp-explanation">
          collects the values of all matching rules and sums up to a single value
          <!-- no overlap is possible and all rules are disjoint. Only a single rule
          can be matched -->
        </p>
        <p />
      </th>
    </tr>
    <tr class="header-row">
      <th />

      {#each inputHeaders as { idx, clause, name, type, smaller }}
        <th class="input-header" id={idx}>
          <span class="clause">{clause}</span>
          <p class="label">{name}</p>
          <span class="type" data-size={smaller ? 'smaller' : ''}>{type}</span>
        </th>
      {/each}

      {#each outputHeaders as { idx, clause, name, type }}
        <th class="output-header output-cell" id={idx}>
          <span class="clause">{clause}</span>
          <p class="label">{name}</p>
          <span class="type">{type}</span>
        </th>
      {/each}

      <th class="annotation-header annotation-cell">Annotations</th>
    </tr>
  </thead>
  <tbody>

    {#each rules as { idx, inputCells, outputCells }}
      <tr id={idx}>
        <td class="rule">{idx}</td>
        {#each inputCells as input}
          <td class="input-cell">{input}</td>
        {/each}
        {#each outputCells as output}
          <td class="output-cell">{output}</td>
        {/each}
        <td class="annotation-cell" />
      </tr>
    {/each}

  </tbody>
</table>
