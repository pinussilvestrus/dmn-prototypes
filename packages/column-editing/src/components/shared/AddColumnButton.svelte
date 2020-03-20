<script>
    import { onMount } from 'svelte';

    import {
      map
    } from 'min-dash';

    import './AddColumnButton.scss';

    const noop = () => {};

    let addHandler = noop;

    function handleAddInputColumn() {
      addColumn('inputHeaders');
      updateRules('inputCells');

      onUpdateTable(tableData);
    }

    function handleAddOutputColumn() {
      addColumn('outputHeaders');
      updateRules('outputCells');

      onUpdateTable(tableData);
    }

    function updateRules(type) {
      const {
        rules
      } = tableData;

      const updatedRules = map(rules, r => {

        return {
          ...r,
          [type]: [
            ...r[type],
            '-'
          ]
        };
      });

      tableData = {
        ...tableData,
        rules: updatedRules
      };

    }

    function addColumn(type) {
      tableData = {
        ...tableData,
        [type]: [
          ...tableData[type],
          {
            idx: (type === 'inputHeaders'
              ? `input-header-${tableData[type].length}`
              : `output-header-${tableData[type].length}`),
            clause: 'And',
            expression: '',
            type: ''
          }
        ]
      };

    }


    // lifecycle //////////
    onMount(async () => {
      addHandler = id.includes('input') ? handleAddInputColumn : handleAddOutputColumn;
    });


    // exports //////////

    export let id;
    export let tableData = {};
    export let onUpdateTable = noop;
</script>

<div {id} class="new-column-button" on:click={addHandler}>
    +
</div>