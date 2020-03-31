export default function ellipsizeTextBox(node, fullExpression, expressionSuffix) {
  const element = node[0];

  element.innerHTML = fullExpression;

  let wordArray = element.innerHTML.split('');

  while (isTooLarge([element])) {
    wordArray.pop();
    element.innerHTML = wordArray.join('') + '...';
  }

  // add suffix
  element.innerHTML += expressionSuffix;

  return element.innerHTML;
}

function isTooLarge(node) {
  return getScrollHeight(node) > getOffsetHeight(node);
}

function getOffsetHeight(node) {
  return node[0].offsetHeight;
}

function getScrollHeight(node) {
  return node[0].scrollHeight;
}