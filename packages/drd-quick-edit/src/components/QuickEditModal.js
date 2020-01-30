import "./QuickEditModal.css";

const MODAL_SKELETON = `
<!-- Modal -->
<div class="modal-container">

    <!-- Outputs -->
    <div class="outputs">
        <div class="outputs-header">Outputs</div>
    </div>

    
    <!-- Horizontal Line -->
    <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e66/c1b3/d277873db7f35d7a711bdc00546097cb" width="342" height="1" class="horizontal_line">

    <!-- Inputs -->
    <div class="inputs">
        <div class="inputs-header">Inputs</div
    </div>

</div>
`;

export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
  }

  init() {
    this._node.append(MODAL_SKELETON);
  }
}
