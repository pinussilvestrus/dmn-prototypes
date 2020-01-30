import $ from 'jquery';

function split(val) {
  return val.split(/ \s*/);
}
function extractLast(term) {
  return split(term).pop();
}

export default function getAutocompleteConfig(items, selectCb) {
  return {
    minLength: 0,
    source: function(request, response) {
      response($.ui.autocomplete.filter(items, extractLast(request.term)));
    },
    focus: function(event, ui) {

      if (typeof selectCb === 'function') {
        selectCb({
          target: ui.item.value
        });
      }

      return false;
    },
    select: function(event, ui) {
      var terms = split(this.value);

      // remove the current input
      terms.pop();

      // add the selected item
      terms.push(ui.item.value);

      this.value = terms.join(' ');

      if (typeof selectCb === 'function') {
        selectCb({
          target: this
        });
      }

      return false;
    }
  };
}
