<template>
  <div class="dashboard">
    <h1>Dash</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'dashboard',
  components: {
    
  }
}
</script>

<style>
#nav {
  padding: 30px;
  background-color: grey;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: tomato;
}
</style>