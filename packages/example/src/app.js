"use strict";

import decision from "../resources/decision.dmn";

import DmnViewer from "dmn-js";

var dmnJS = new DmnViewer({
  container: "#canvas",
  common: {
    keyboard: {
      bindTo: document
    }
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
