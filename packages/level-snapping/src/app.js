"use strict";

import decision from "../resources/decision.dmn";

import DmnModeler from "dmn-js/lib/Modeler";

import createMoveSnapping from "./snapping";
import levels from "./levels";

var dmnJS = new DmnModeler({
  container: "#canvas",
  common: {
    keyboard: {
      bindTo: document
    }
  },
  drd: {
    additionalModules: [ createMoveSnapping, levels ]
  }
});

dmnJS.importXML(decision, function(err) {
  if (!err) {
    console.log("success!");

    dmnJS
      .getActiveViewer()
      .get("canvas")
      .zoom("fit-viewport");
  } else {
    console.log("something went wrong:", err);
  }
});
