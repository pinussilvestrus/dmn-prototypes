"use strict";

import decision from "../resources/decision.dmn";

import DmnModeler from "dmn-js/lib/Modeler";

import createMoveSnapping from "./snapping";

var dmnJS = new DmnModeler({
  container: "#canvas",
  keyboard: {
    bindTo: window
  },
  drd: {
    additionalModules: [ createMoveSnapping ]
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
