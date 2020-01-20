/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

const TYPES = [
  { label: "boolean" },
  { label: "string" },
  { label: "integer" },
  { label: "long" },
  { label: "double" },
  { label: "date" }
];

const overlaysPerElementId = {};

export default function ItemDefinitionProvider(
  popupMenu,
  modeling,
  translate,
  overlays
) {
  this._popupMenu = popupMenu;
  this._modeling = modeling;
  this._translate = translate;
  this._overlays = overlays;

  this.register();
}

ItemDefinitionProvider.prototype.register = function() {
  this._popupMenu.registerProvider("bpmn-colorize", this);
};

ItemDefinitionProvider.prototype.getEntries = function() {
  return [];
};

ItemDefinitionProvider.prototype.getHeaderEntries = function(element) {
  const modeling = this._modeling;
  const overlays = this._overlays;

  return TYPES.map(type => {
    return {
      id: `type-${type.label}`,
      title: type.label,
      className: "bjs-color-menu-entry",
      action: function() {
        modeling.updateProperties(element, { itemDefinition: type.label });

        if (overlaysPerElementId[element.id]) {
          overlays.remove(overlaysPerElementId[element.id]);
        }

        overlaysPerElementId[element.id] = overlays.add(
          element,
          "type-definition",
          {
            position: {
              y: 0,
              x: 0
            },
            show: {
              maxZoom: 8,
              minZoom: 0.1
            },
            html: `<span class="type-overlay">${type.label}</span>`
          }
        );
      }
    };
  });
};

ItemDefinitionProvider.$inject = [
  "popupMenu",
  "modeling",
  "translate",
  "overlays",
  "config.itemDefinitionProvider"
];
