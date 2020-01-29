export default class QuickEditModal {

    constructor(options) {
        this._node = options.node;
    }
    
    init() {
        this._node.append('<div>Hello World</div>')
    }
}