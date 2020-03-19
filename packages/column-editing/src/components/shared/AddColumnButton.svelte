<script>
    import { onMount } from 'svelte';

    import {
      map
    } from 'min-dash';

    import './AddColumnButton.scss';

    const noop = () => {};

    let addHandler = noop;

    function addInputColumn() {
      addColumn('inputHeaders');
      updateRules('inputCells');

      onUpdateTable(tableData);
    }

    function addOutputColumn() {
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
    
          // todo(pinussilvestrus): make semantic
          {
            idx: 5,
            clause: 'And',
            name: 'foo',
            type: 'integer'
          }
        ]
      };

    }


    // lifecycle //////////
    onMount(async () => {
      addHandler = id.includes('input') ? addInputColumn : addOutputColumn;
    });


    // exports //////////

    export let id;
    export let tableData = {};
    export let onUpdateTable = noop;
</script>

<div {id} class="new-column-button" on:click={addHandler}>
    +
</div>