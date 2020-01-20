/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import PopupMenuModule from "dmn-js-drd/lib/features/popup-menu";

import ItemDefinitionProvider from "./ItemDefinitionProvider";

export default {
  __depends__: [PopupMenuModule],
  __init__: ["itemDefinitionProvider"],
  itemDefinitionProvider: ["type", ItemDefinitionProvider]
};
