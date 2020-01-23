var diagram = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/DMN/20151101/dmn.xsd" xmlns:biodi="http://bpmn.io/schema/dmn/biodi/1.0" id="Definitions" name="DRD" namespace="http://camunda.org/schema/1.0/dmn" exporter="Camunda Modeler" exporterVersion="3.5.0">
  <decision id="Beverages" name="Beverages">
    <extensionElements>
      <biodi:bounds x="344" y="128" width="180" height="80" />
    </extensionElements>
    <decisionTable id="decisionTable_1">
      <input id="InputClause_1ategpc">
        <inputExpression id="LiteralExpression_1slufs4" typeRef="string">
          <text></text>
        </inputExpression>
      </input>
      <output id="output_1" typeRef="string" />
    </decisionTable>
  </decision>
  <inputData id="season" name="Season">
    <extensionElements>
      <biodi:bounds x="111" y="290" width="125" height="45" />
    </extensionElements>
  </inputData>
  <decision id="Food" name="Food">
    <extensionElements>
      <biodi:bounds x="308" y="381" width="180" height="80" />
    </extensionElements>
    <decisionTable id="DecisionTable_1sbu4g2">
      <input id="InputClause_1b9ijj7">
        <inputExpression id="LiteralExpression_101x3dc" typeRef="string">
          <text></text>
        </inputExpression>
      </input>
      <output id="OutputClause_0kfm5p3" typeRef="string" />
      <rule id="DecisionRule_04xoobj">
        <inputEntry id="UnaryTests_0w2nql3">
          <text></text>
        </inputEntry>
        <outputEntry id="LiteralExpression_127b99e">
          <text></text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_1ycipp1">
        <inputEntry id="UnaryTests_03546m2">
          <text></text>
        </inputEntry>
        <outputEntry id="LiteralExpression_1ofbpzk">
          <text></text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <inputData id="guestsWithChildren" name="Children coming?">
    <extensionElements>
      <biodi:bounds x="524" y="285" width="125" height="45" />
    </extensionElements>
  </inputData>
</definitions>
`;