/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

// import editorActions from "dmn-js-decision-table/lib/features/editor-actions";

// import DmnModdle from "dmn-moddle";

function OverlayReRenderer(modeling, eventBus, editorActions, overlays) {
  eventBus.on(["connection.changed"], ({ element }) => {
    const { source, target } = element;

    if (target.businessObject.$type === "dmn:Decision") {
      const { decisionTable } = target.businessObject;

      const inputName = source.businessObject.name;
      const inputType = source.businessObject.$attrs.itemDefinition;

      const { input } = decisionTable;

      const cl = clone(input[0]);

      cl.label = inputName;
      cl.inputExpression.text = inputName;
      cl.inputExpression.typeRef = inputType;
      cl.id = inputName;

      input.push(cl);
    }
  });
}

function clone(obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}

OverlayReRenderer.$inject = ["modeling", "eventBus", "overlays"];

export default {
  // __depends__: [editorActions],
  __init__: ["overlayReRenderer"],
  overlayReRenderer: ["type", OverlayReRenderer]
};
