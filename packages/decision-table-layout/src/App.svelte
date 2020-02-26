<script>
  export let title;

  function handleClick() {
    alert("no more alerts");
  }
</script>

<style>
  h1 {
    color: black;
  }
</style>

<h1>{title}</h1>

<button on:click|once={handleClick}>
	Click me
</button>
