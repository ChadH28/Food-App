<template>
  <div class="login">
    <h1>This is a login page</h1>
    <!-- {{ form }} -->
    <form @submit.prevent="submit">
      <div>
        <label for="email">Email</label>
      </div>
      <div>
        <input
          type="text"
          name="email"
          v-model="customer_email"
          id="email"
        />
      </div>
      <div>
        <label for="password">Password</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          v-model="customer_password"
          id="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      customer_email: null,
      customer_password: null,
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      //     let res = axios.post('http://localhost:3000/api/auth', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // )
      // alert(res.data);
      // this.signIn();
      const url = "http://localhost:3000/api/auth";
      fetch(url, {
        method: "POST", //get post put delete, default GET
        body: JSON.stringify({
          customer_email: this.customer_email,
          customer_password: this.customer_password,
        }), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(json => {
          console.log(json); //token
          this.token = json.token;
        });
    },
  },
};
</script>
