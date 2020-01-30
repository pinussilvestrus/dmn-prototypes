function split(val) {
  return val.split(/ \s*/);
}
function extractLast(term) {
  return split(term).pop();
}

export default function getAutocompleteConfig(items) {
  return {
    minLength: 0,
    source: function(request, response) {
      response($.ui.autocomplete.filter(items, extractLast(request.term)));
    },
    focus: function() {
      return false;
    },
    select: function(event, ui) {
      var terms = split(this.value);
      
      // remove the current input
      terms.pop();

      // add the selected item
      terms.push(ui.item.value);

      // add placeholder to get the comma-and-space at the end
      terms.push("");
      this.value = terms.join(" ");
      return false;
    }
  };
}
