"use strict";

import { forEach } from "min-dash";

import decision from "../resources/decision.dmn";

import DmnModeler from "dmn-js/lib/Modeler";

import ortho from "./ortho-connections";

var dmnJS = new DmnModeler({
  container: "#canvas",
  common: {
    keyboard: {
      bindTo: document
    }
  },
  drd: {
    additionalModules: [ortho]
  }
});

dmnJS.importXML(decision, function(err) {
  if (err) {
    console.log("something went wrong:", err);
    return;
  }

  var activeViewer = dmnJS.getActiveViewer(),
    canvas = activeViewer.get("canvas"),
    orthoConnections = activeViewer.get("orthoConnections"),
    elementRegistry = activeViewer.get("elementRegistry");

  canvas.zoom("fit-viewport");

  document.getElementById("btn").onclick = () => {
    forEach(elementRegistry.getAll(), shape => {
      orthoConnections.format(shape);
    });
  };
});
