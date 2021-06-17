<template>
  <div class="login">
    <h1>This is a login page</h1>
    {{form}}
    <form @submit.prevent="submit">
      <div>
        <label for="email">Email</label>
      </div>
      <div>
        <input type="text" name="email" v-model="form.email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          v-model="form.password"
          id="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      alert("submitted");
    },
  },
};
</script>
