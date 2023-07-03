<template>
  <div>
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center m-3 mb-5">
      <nuxt-link to="/" class="mx-2 text-decoration-none fw-bold text-dark">
        <h1>My SpellChecker</h1>
      </nuxt-link>

      <div v-if="$auth.loggedIn" class="m-2">
        {{ $auto.user.name }}
        <v-btn text>Logout</v-btn>
        <nuxt-link to="/" class="mx-2 text-decoration-none fw-bold">Logout</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/login" class="mx-2 text-decoration-none fw-bold">Login</nuxt-link>
        <nuxt-link to="/register" class="mx-2 text-decoration-none fw-bold">Register</nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: rgb(235, 235, 235);
}

.container {
  max-width: 95%;
  /* background: rgb(211, 15, 15); */
}
</style>
