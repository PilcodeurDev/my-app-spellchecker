<template>
  <div>
    <!-- Bootstrap Form  -->
    <form id="UserForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email:</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email outside of this test.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password:</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-4">
        <nuxt-link to="/signup" class="text-decoration-none fw-bold">Register</nuxt-link>
      </div>
      <button type="submit" value="submit" class="btn btn-primary fw-bold">Submit</button>
    </form>
  </div>
</template>

<script>
</script>

<style>
</style>
