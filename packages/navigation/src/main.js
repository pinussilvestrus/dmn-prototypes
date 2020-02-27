import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    subtitle: 'Hypothesis 3',
    title: 'The decision table layout is a crucial part for understandability of the tables'
  }
});

window.app = app;

export default app;
