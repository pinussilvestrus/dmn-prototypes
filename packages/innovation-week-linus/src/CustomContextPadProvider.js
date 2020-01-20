/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import inherits from "inherits";

import ContextPadProvider from "dmn-js-drd/lib/features/context-pad/ContextPadProvider";

import { assign, bind } from "min-dash";

export default function CustomContextPadProvider(
  injector,
  translate,
  modeling,
  popupMenu,
  canvas,
  contextPad
) {
  injector.invoke(ContextPadProvider, this);

  const cached = bind(this.getContextPadEntries, this);

  this._canvas = canvas;
  this._contextPad = contextPad;

  this.getContextPadEntries = function(element) {
    let actions = cached(element);

    // ensure the entry is not shown for selected labels
    if (!element.labelTarget) {
      const html =
        '<div class="entry"><div class="cawemo-icon-colorize">&nbsp;&nbsp;</div></div>';

      const self = this;

      assign(actions, {
        colorize: {
          group: "connect",
          html,
          title: translate("Type"),
          action: {
            click: function(event, element) {
              popupMenu.open(
                element,
                "bpmn-colorize",
                assign(self.getColorMenuPosition(element), {
                  cursor: { x: event.x, y: event.y }
                })
              );
            }
          }
        }
      });
    }

    return actions;
  };
}

inherits(CustomContextPadProvider, ContextPadProvider);

CustomContextPadProvider.prototype.getColorMenuPosition = function(element) {
  const Y_OFFSET = 5;

  const diagramContainer = this._canvas.getContainer(),
    pad = this._contextPad.getPad(element).html;

  const diagramRect = diagramContainer.getBoundingClientRect(),
    padRect = pad.getBoundingClientRect();

  const top = padRect.top - diagramRect.top;
  const left = padRect.left - diagramRect.left;

  const pos = {
    x: left,
    y: top + padRect.height + Y_OFFSET
  };

  return pos;
};

CustomContextPadProvider.$inject = [
  "injector",
  "translate",
  "modeling",
  "popupMenu",
  "canvas",
  "contextPad"
];
