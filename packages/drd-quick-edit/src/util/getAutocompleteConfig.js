import $ from 'jquery';

const CREATE_NEW_DECISION = 'Create new Decision Table';
const CREATE_NEW_INPUT_DATA = 'Create new Input Data';

export default function getAutocompleteConfig(options) {

  const {
    items, selectCb, createCb, disableCreate
  } = options;

  function defaultSelect(node, selectedValue) {
    let terms = split(node.value);

    // remove the current input
    terms.pop();

    // add the selected item
    terms.push(selectedValue);

    node.value = terms.join(' ');

    typeof selectCb === 'function' && selectCb({
      target: node,
      isSelect: true
    });
  }

  return {
    minLength: 0,
    source: function(request, response) {

      const {
        term
      } = request;

      let results = $.ui.autocomplete.filter(items, extractLast(term));

      // add new input / decision options
      if (!disableCreate && term) {
        results = [
          ...results,
          CREATE_NEW_DECISION,
          CREATE_NEW_INPUT_DATA
        ];
      }

      response(results);
    },
    focus: function(event, ui) {

      typeof selectCb === 'function' && selectCb({
        target: ui.item.value
      });

      return false;
    },
    select: function(event, ui) {

      const { item: { value: selectedValue } } = ui;

      event.preventDefault();

      // check for predefined actions
      if (selectedValue === CREATE_NEW_DECISION) {
        typeof createCb === 'function' && createCb('decisionTable', this.value);
        return;
      }

      if (selectedValue === CREATE_NEW_INPUT_DATA) {
        typeof createCb === 'function' && createCb('inputData', this.value);
        return;
      }

      defaultSelect(this, selectedValue);

      return false;
    }
  };
}

// helpers ///////////

function split(val) {
  return val.split(/ \s*/);
}

function extractLast(term) {
  return split(term).pop();
}
