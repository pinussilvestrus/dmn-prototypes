<script>

</script>

<style lang="scss">
  $color-grey: rgba(
    $color: black,
    $alpha: 0.4
  );
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

    p,
    select {
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

  .input-header,
  .output-header {
    width: 7rem;
  }

  .input-header,
  .output-header {
    .clause {
      color: $color-grey;
      font-size: 0.8rem;
    }

    p {
      font-size: 1.1rem;
      text-align: left;
      margin: 0.5rem 0rem 0rem 0rem;
    }

    .type {
      float: right;
      color: $color-grey;
      font-size: 0.8rem;
    }
  }

  td {
    &.output-cell,
    &.annotation-cell {
      border-left: 4px double $color-black;
    }

    &.output-cell + &.output-cell {
      border-left: 1px solid $color-black;
    }
  }

  .annotation-header {
    text-align: center;
    font-size: 1.1rem !important;
  }

  .rule {
    text-align: right;
    width: 1rem;
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
        no overlap is possible and all rules are disjoint. Only a single rule
        can be matched
      </p>
      <p />
    </th>
  </tr>
  <tr class="header-row">
    <td />
    <td class="input-header">
      <span class="clause">When</span>
      <p>Input 1</p>
      <span class="type">integer</span>
    </td>
    <td class="input-header">
      <span class="clause">And</span>
      <p>Input 3</p>
      <span class="type">[foo, bar]</span>
    </td>
    <td class="input-header">
      <span class="clause">And</span>
      <p>Input 3</p>
      <span class="type">[> 5000]</span>
    </td>
    <td class="output-header output-cell">
      <span class="clause">Then</span>
      <p>Output 1</p>
      <span class="type">string</span>
    </td>
    <td class="output-header output-cell">
      <span class="clause">And</span>
      <p>Output 2</p>
      <span class="type">long</span>
    </td>
    <td class="annotation-header annotation-cell">Annotations</td>
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
