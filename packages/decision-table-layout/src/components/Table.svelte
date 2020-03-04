<script>
  import { afterUpdate } from 'svelte';

  import { find, forEach } from 'min-dash';

  import dom from 'domtastic';

  import './Table.scss';

  const HIT_POLICIES = [
    {
      name: 'Unique',
      explanation:
        'No overlap is possible and all rules are disjoint. Only a single rule can be matched'
    },
    {
      name: 'Any',
      explanation: 'Rules may overlap. Their output have to match'
    },
    {
      name: 'Priority',
      explanation:
        'Rules may overlap. The one with the highest priority will be chosen'
    },
    {
      name: 'First',
      explanation: 'Rules may overlap. The first matching rule will be chosen'
    },
    {
      name: 'Collect',
      explanation: 'Collects the values of all matching rules'
    },
    {
      name: 'Collect (Sum)',
      explanation:
        'Collects the values of all matching rules and sums up to a single value'
    },
    {
      name: 'Collect (Max)',
      explanation:
        'Collects the values of all matching rules and uses the highest value'
    },
    {
      name: 'Collect (Min)',
      explanation:
        'Collects the values of all matching rules and uses the lowest value'
    },
    {
      name: 'Collect (Count)',
      explanation:
        'Collects the values of all matching rules and counts the number of them'
    }
  ];

  const HIGHLIGHT_MARKER = 'highlight';

  const noop = () => {};

  $: explanation = find(HIT_POLICIES, hp => hp.name === tableData.hitPolicy).explanation;
  $: tableLength = tableData.inputHeaders.length + tableData.outputHeaders.length + 2;


  // lifecycle //////////

  afterUpdate(async () => {

    const {
      inputHeaders,
      outputHeaders
    } = tableData;

    forEach(inputHeaders, ({ idx }) => {
      const header = dom(`[data-header-id="input-header-${idx}"`);
      initHeaderInteractions(header);
    });

    forEach(outputHeaders, ({ idx }) => {
      const header = dom(`[data-header-id="output-header-${idx}"`);
      initHeaderInteractions(header);
    });
  });


  // methods //////////

  function changeHitPolicy(event) {
    const {
      target: { value }
    } = event;

    tableData.hitPolicy = value;
  }

  function initHeaderInteractions(header) {
  
    // do not do anything if not in split screen
    if (onHighlight === noop) {
      return;
    }

    header.addClass('table-header');

    header.on('mouseover', event => {
      event.stopPropagation();
      event.preventDefault();

      if (header.hasClass(HIGHLIGHT_MARKER)) {
        return;
      }
  
      header.addClass(HIGHLIGHT_MARKER);
      onHighlight(header);
    });

    header.on('mouseout', event => {
      event.stopPropagation();
      event.preventDefault();

      if (!header.hasClass(HIGHLIGHT_MARKER)) {
        return;
      }
  
      header.removeClass(HIGHLIGHT_MARKER);
      onHighlight(header);
    });
  }


  // exports //////////

  export let onHighlight = noop;
  export let tableData = {};

</script>

<div class="decision-table">
  <table>
    <thead>
      <tr class="title-row">
        <th colspan="{tableLength}">
          <p>{tableData.name}</p>
          <span />
          <select on:change={changeHitPolicy}>
            {#each HIT_POLICIES as { name }}
              <option selected={name === tableData.hitPolicy}>{name}</option>
            {/each}
          </select>
          <p class="hp-explanation">{explanation}</p>
          <p />
        </th>
      </tr>
      <tr class="header-row">
        <th class="empty-cell"/>

        {#each tableData.inputHeaders as { idx, clause, name, type, smaller }}
          <th class="input-header" data-header-id={'input-header-' + idx}>
            <span class="clause">{clause}</span>
            <p class="label">{name}</p>
            <span class="type" data-size={smaller ? 'smaller' : ''}>
              {type}
            </span>
          </th>
        {/each}

        {#each tableData.outputHeaders as { idx, clause, name, type }}
          <th
            class="output-header output-cell"
            data-header-id={'output-header-' + idx}>
            <span class="clause">{clause}</span>
            <p class="label">{name}</p>
            <span class="type">{type}</span>
          </th>
        {/each}

        <th class="annotation-header annotation-cell">Annotations</th>
      </tr>
    </thead>
    <tbody>

      {#each tableData.rules as { idx, inputCells, outputCells }}
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
</div>
