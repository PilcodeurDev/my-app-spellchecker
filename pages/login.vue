<template>
  <div>
    <div class="container">

      <h1 class="mb-5">Login</h1>

      <!-- Components form -->
      <UserAuthForm />

    </div>
  </div>
</template>

<script>
import UserAuthForm from "~/components/UserAuthForm.vue";

export default {
  components: {
    UserAuthForm
  },
};
</script>

<style>
</style>
