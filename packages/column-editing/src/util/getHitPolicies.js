export default [
  {
    name: 'Unique',
    explanation:
        'No overlap is possible and all rules are disjoint. Only a single rule can be matched'
  },
  {
    name: 'Any',
    explanation: 'Rules may overlap. Their output have to match'
  },
  {
    name: 'Priority',
    explanation:
        'Rules may overlap. The one with the highest priority will be chosen'
  },
  {
    name: 'First',
    explanation: 'Rules may overlap. The first matching rule will be chosen'
  },
  {
    name: 'Collect',
    explanation: 'Collects the values of all matching rules'
  },
  {
    name: 'Collect (Sum)',
    explanation:
        'Collects the values of all matching rules and sums up to a single value'
  },
  {
    name: 'Collect (Max)',
    explanation:
        'Collects the values of all matching rules and uses the highest value'
  },
  {
    name: 'Collect (Min)',
    explanation:
        'Collects the values of all matching rules and uses the lowest value'
  },
  {
    name: 'Collect (Count)',
    explanation:
        'Collects the values of all matching rules and counts the number of them'
  }
];