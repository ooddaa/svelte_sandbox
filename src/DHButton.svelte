<!-- Digital Human Button -->
<script>
  let count = 0;
  function handleClick(e) {
    console.log("enter the new era of human privacy");
    count += 1;
  }

  function enough() {
    console.log(`you have clicked ${count}`);
  }
</script>

<main class="center">
  <div class="container center">
    <div class="dh-button center" on:click={handleClick}>
      <svg
        class="logo"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_7_26)">
          <path
            d="M0 1C0 0.447715 0.447715 0 1 0H2V9H0V1Z"
            fill="#131212"
            fill-opacity="0.93"
          />
          <rect
            width="2"
            height="8"
            transform="translate(3 5)"
            fill="#131212"
            fill-opacity="0.93"
          />
          <path
            d="M6 0H10C10.5523 0 11 0.447715 11 1V2H6V0Z"
            fill="#131212"
            fill-opacity="0.93"
          />
          <rect
            width="2"
            height="3"
            transform="translate(9 2)"
            fill="#131212"
            fill-opacity="0.93"
          />
          <rect
            width="2"
            height="10"
            transform="translate(6 3)"
            fill="#131212"
            fill-opacity="0.93"
          />
          <path
            d="M11 6H9V13H10C10.5523 13 11 12.5523 11 12V6Z"
            fill="#131212"
            fill-opacity="0.93"
          />
          <path
            d="M0 10H2V13H1C0.447715 13 0 12.5523 0 12V10Z"
            fill="#131212"
            fill-opacity="0.93"
          />
          <rect
            width="2"
            height="4"
            transform="translate(3)"
            fill="#131212"
            fill-opacity="0.93"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_26">
            <path
              d="M0 1C0 0.447715 0.447715 0 1 0H10C10.5523 0 11 0.447715 11 1V12C11 12.5523 10.5523 13 10 13H1C0.447715 13 0 12.5523 0 12V1Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    {#if count > 5}
      <div class="clicked-enough center">you have clicked {count} times
        <button class="mt-10" on:click={() => count = 0}>Remove</button>
      </div>
    {:else}
      <div class="clicked-enough invisible" />
    {/if}
  </div>
</main>

<style>
  main {
    /* background-color: rgba(200, 52, 52, 0.779); */
    background-color: rgba(222, 61, 32, 0.87);
    width: 100%;
    height: 100vh;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container {
    flex: 0 0 200px;
    width: 300px;
  }

  .dh-button {
    width: 110px;
    height: 130px;
    cursor: pointer;
    align-self: flex-start;
    align-self: center;
  }

  .dh-button:active {
    transform: scale(97%);
  }

  .logo {
    width: 50%;
    height: 50%;
  }

  .clicked-enough {
    height: 25px;
    align-self: center;
  }

  .mt-10 {
    margin-top: 10px;
  }
</style>
