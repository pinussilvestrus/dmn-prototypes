import $ from 'jquery';

export default function getElement(id) {
    return $(`[data-element-id=${id}]`);
}