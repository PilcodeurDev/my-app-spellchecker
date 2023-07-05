<template>
  <div>

    <!-- description -->
    <div class="container">
      <h2 class="mb-5">Welcome on my first Nuxt.js app. I'm so exiting !! 😍</h2>
      <div class="px-3">
        <p>- My SpellChecker is an app which helps you to create faultless texts and offers multiples suggestions (and
          soon in multi languages...).</p>
        <p>- Do not hesitate to try it, the app is free (for now... 😂).</p>
        <!-- <p>- To advance in the app, will <nuxt-link to="/login" class="text-decoration-none fw-bold">Login</nuxt-link>.
        </p> -->
        <p>- <strong>Good fun!</strong> 🤗</p>
      </div>
      <div class="pt-5 d-flex justify-content-center">
        <button>
          <nuxt-link to="/spellcheck" class="mx-2 main_button main_color">Spellcheck</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #223545;
  font-size: 20px;
}

.main_button {
  padding: 18px 50px;

  border: 2px solid #363636;
  border-radius: 21px;

  letter-spacing: 1px;
  font-weight: bold;
  background: #5cbe95;

}

.main_color {
  color: #2f495e;
}
</style>
