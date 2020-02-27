<script>

</script>

<style lang="scss">

  $color-grey: rgba($color: black, $alpha: 0.4);
  $color-black: #444;

  .decision-table {
    border-collapse: collapse;
    border-spacing: 0;
    margin: 1rem 0rem 0rem 1rem;

    td {
      font-size: 14px;
      padding: 10px 5px;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      word-break: normal;
      border-color: black;
    }

    th {
      font-size: 14px;
      font-weight: normal;
      padding: 10px 5px;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      word-break: normal;
      border-color: black;
    }
  }

  .title-row {
    text-align: left;
    vertical-align: middle;

    th {
      font-size: 1.5rem;
      padding: 0.4rem;

      * {
        vertical-align: middle;
        display: inline-block;
      }
    }

    p, select {
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    }

    select {
      font-size: 1rem;
      padding: 0.5rem;
    }

    span {
      border-left: 2px solid $color-grey;
      height: 35px;
    }

    .hp-explanation {
      font-size: 1rem;
      margin-left: 0;
      color: $color-grey;
    }
  }

  .header-row {
    border-bottom: 4px double $color-black;
  }

  td {
    &.input-header,
    &.output-header {
      width: 100px;
    }

    &.output-cell,
    &.annotation-cell {
      border-left: 4px double $color-black;
    }

    &.output-cell + td.output-cell {
      border-left: 1px solid $color-black;
    }

    &.rule {
      text-align: right;
      width: 1rem;
    }
  }
</style>

<table class="decision-table">
  <tr class="title-row">
    <th colspan="7">
      <p>Decision 1</p>
      <span />
      <select>
        <option selected>Unique</option>
      </select>
      <p class="hp-explanation">
        no overlap is possible and all rules are disjoint. Only a single rule can be matched
      <p>
    </th>
  </tr>
  <tr class="header-row">
    <td />
    <td class="input-header">Input 1</td>
    <td class="input-header">Input 2</td>
    <td class="input-header">Input 3</td>
    <td class="output-header output-cell">Output 1</td>
    <td class="output-header output-cell">Output 2</td>
    <td class="annotation-cell">Annotations</td>
  </tr>
  <tr>
    <td class="rule">1</td>
    <td />
    <td />
    <td />
    <td class="output-cell" />
    <td class="output-cell" />
    <td class="annotation-cell" />
  </tr>
  <tr>
    <td class="rule">2</td>
    <td />
    <td />
    <td />
    <td class="output-cell" />
    <td class="output-cell" />
    <td class="annotation-cell" />
  </tr>
  <tr>
    <td class="rule">3</td>
    <td />
    <td />
    <td />
    <td class="output-cell" />
    <td class="output-cell" />
    <td class="annotation-cell" />
  </tr>
</table>
