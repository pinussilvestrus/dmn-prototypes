import React, { Component } from "react";

import DMNJS from "dmn-js/dist/dmn-modeler.development";
import demoXML from "./demo-xml";

import itemDefinitionProvider from "./item-definition-provider";
import customContextPadProvider from "./custom-context-pad-provider";
import overlayReRenderer from "./overlay-rerenderer";

class Modeler extends Component {
  containerEl = React.createRef();

  componentDidMount() {
    this.modeler = new DMNJS({
      container: "#dmn-container",
      keyboard: { bindTo: document },
      position: "absolute",
      drd: {
        additionalModules: [
          itemDefinitionProvider,
          customContextPadProvider,
          overlayReRenderer
        ]
      },
      decisionTable: {
        additionalModules: []
      }
    });

    if (this.props.xml) {
      this.modeler.importXML(this.props.xml);
    }
  }

  render() {
    return <div id="dmn-container"></div>;
  }
}

function App() {
  return (
    <div>
      <Modeler xml={demoXML} />
    </div>
  );
}

export default App;
