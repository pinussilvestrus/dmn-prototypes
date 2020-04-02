export default function ellipsizeTextBox(node, fullExpression) {
  const element = node[0];

  element.innerHTML = fullExpression;

  let wordArray = element.innerHTML.split('');

  while (isTooLarge([element])) {
    wordArray.pop();
    element.innerHTML = wordArray.join('') + '...';
  }

  // add suffix
  element.innerHTML;

  return element.innerHTML;
}

function isTooLarge(node) {
  return getScrollWidth(node) > getOffsetWidth(node);
}

function getOffsetWidth(node) {
  return node[0].offsetWidth;
}

function getScrollWidth(node) {
  return node[0].scrollWidth;
}