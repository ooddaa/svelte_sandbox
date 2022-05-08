<script>
  export let pages;
  export let show = 6;
  let from = 0, to = show;
  let displayedPages = pages.slice(from, to) 

  // $: console.log(pages)
  // $: console.log(displayedPages)

  function update(newFrom, newTo) {
    from = newFrom, to = newTo
    displayedPages = pages.slice(from, to)
  }

  function movePagesLeft() {
    let newFrom = from - show,
      newTo;

    if (newFrom <= 0) {
      newTo = show;
      newFrom = 0;
    } else {
      newTo = to - show;
    }

    update(newFrom, newTo)
  }

  function movePagesRight() {
    let newFrom,
      newTo = to + show;

    newTo = Math.min(newTo, pages.length);
    newFrom = newTo - show;

    update(newFrom, newTo)
  }
</script>

<main>
  <div class="pagination center">
    <button class="btn btn-nav left" 
    on:click={movePagesLeft}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <div class="displayed-pages center">
      {#each displayedPages as page}
        <a class={`btn page-btn center`} href="#">
          {page}
        </a>
      {/each}
    </div>
    <button class="btn btn-nav right" on:click={movePagesRight}>
      <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --green: #087f5b;
    --grey: #343a40;
  }

  body {
    line-height: 1;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    color: var(--grey);
  }

  .pagination {
    height: 100px;
    height: fit-content;
    width: fit-content;
    margin: auto;
    margin-top: 200px;
  }

  .pagination > * {
    margin: 5px;
  }

  .btn {
    border-radius: 50%;
    background-color: #fff;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn-nav {
    width: 50px;
    height: 50px;
    border: 1px solid var(--green);
  }

  .btn-nav:hover {
    background-color: var(--green);
  }

  .btn-nav:hover .chevron {
    stroke: #fff;
  }

  .page-btn,
  .page-btn.link,
  .page-btn.visited {
    width: 40px;
    height: 40px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    color: var(--grey);
    text-decoration: none;
  }

  .page-btn:hover,
  .page-btn:active {
    background-color: var(--green);
    color: #fff;
  }

  .chevron {
    width: 24px;
    height: 24px;
    color: var(--green);
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
