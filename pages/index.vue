<template>
  <div>

    <!-- description -->
    <div class="container">
      <h2 class="mb-5">Welcome on my first Nuxt.js app. I'm so exiting !! 😍</h2>
      <div class="px-3">
        <p>- My SpellChecker is an app which help you to create faultless texts, offers you correct turn of phrase (and
          soon in multi languages...).</p>
        <p>- Do not hesitate to try it, the app is free (for now... 😂).</p>
        <p>- To advance in the app, will <nuxt-link to="/login" class="text-decoration-none fw-bold">Login</nuxt-link>.
        </p>
        <p>- <strong>Good fun!</strong> 🤗</p>
      </div>

      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3"
        max-rows="6"></b-form-textarea>
      <button @click="$emit('textArea', text)" class="btn-primary">Correction</button>
    </div>

    <nuxt-link to="/test" class="m-5 text-decoration-none fw-bold">correction page</nuxt-link>

  </div>
</template>


<script>
export default {
  name: 'IndexPage'
}
</script>
