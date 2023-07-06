<template>
  <div>
    <div class="container">

      <h1 class="mb-5">Login</h1>

      <!-- Components form -->
      <UserAuthForm :submitForm="loginUser" />

    </div>
  </div>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  components: {
    UserAuthForm
  },
  methods: {
    loginUser(loginInfo) {
      debugger
      alert('You pressed a button')
    }
  }
};
</script>

<style>
</style>
