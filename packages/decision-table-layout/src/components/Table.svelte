<script>
  // todo(pinussilvestrus): make it dynamic
  const inputHeaders = [];
  const outputHeaders = [];
  const rules = [];
</script>

<style lang="scss">
  $color-grey: rgba(
    $color: black,
    $alpha: 0.4
  );
  $color-black: #444;
  $color-background: #f8f8f8;

  .decision-table {
    border-collapse: collapse;
    border-spacing: 0;
    margin: 1rem 0rem 0rem 1rem;

    td {
      font-size: 14px;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      word-break: normal;
      border-color: black;
    }

    .output-cell,
    .annotation-cell {
      border-left: 4px double $color-black;
    }

    .output-cell + .output-cell {
      border-left: 1px solid $color-black;
    }

    th {
      font-size: 14px;
      font-weight: normal;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      word-break: normal;
      border-color: black;
    }

    thead {
      th {
        padding: 0.4rem;
      }

      .title-row {
        text-align: left;
        vertical-align: middle;

        th {
          font-size: 1.5rem;

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

        .input-header,
        .output-header {
          width: 7rem;
        }

        .input-header,
        .output-header {
          position: relative;

          .clause {
            position: absolute;
            left: 0.2rem;
            top: 0.1rem;
            margin-bottom: 0.5rem;
            color: $color-grey;
            font-size: 0.8rem;
          }

          .label {
            word-wrap: normal;
            font-size: 0.9rem;
            margin: 1rem 0rem 1.5rem 0rem;
          }

          .type {
            text-align: right;
            position: absolute;
            right: 0.2rem;
            bottom: 0.1rem;
            color: $color-grey;
            font-size: 0.7rem;
            word-wrap: break-word;
            width: 100%; 

            &[data-size='smaller'] {
              font-size: 0.6rem;
              width: 66%;
            } 
          }
        }

        .annotation-header {
          text-align: center;
          font-size: 1rem !important;
        }
      }
    }

    tbody {
      td {
        padding: 0.5rem;
      }

      .rule {
        text-align: right;
        width: 1rem;
      }

      tr:nth-child(2n) {
        background-color: $color-background;
      }
    }
  }
</style>

<table class="decision-table">
  <thead>
    <tr class="title-row">
      <th colspan=8>
        <p>Employee Suitability Score</p>
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
      <th />
      <th class="input-header">
        <span class="clause">When</span>
        <p class="label">Open Claims</p>
        <span class="type">integer</span>
      </th>
      <th class="input-header">
        <span class="clause">And</span>
        <p class="label">Employee.region = Claim.region</p>
        <span class="type">boolean</span>
      </th>
      <th class="input-header">
        <span class="clause">And</span>
        <p class="label">Claim.expenditure</p>
        <span class="type">integer</span>
      </th>
      <th class="input-header">
        <span class="clause">And</span>
        <p class="label">Employee Experience</p>
        <span class="type" data-size="smaller">["Experienced", "Senior", "Junior"]</span>
      </th>
       <th class="input-header">
        <span class="clause">And</span>
        <p class="label">Employee fills skillset</p>
        <span class="type">boolean</span>
      </th>
      <th class="output-header output-cell">
        <span class="clause">Then</span>
        <p class="label">Score</p>
        <span class="type">[&gt -50; &lt 20]</span>
      </th>
      <th class="annotation-header annotation-cell">Annotations</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
