export default ({
  namespaced: true,
  state: {
    // storing objects or plain strings
    token: null,
    user: null,
      customer_email: null,
      customer_password: null
  },
  mutations: {
    // updating those objects and strings 
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    // requests and commits mutations
    async signIn() {
      const url = "http://localhost:3000/api/auth";
      await fetch(url, {
        method: "POST", //get post put delete, default GET
        body: JSON.stringify({
          customer_email: this.customer_email,
          customer_password: this.customer_password,
        }),
        mode: "cors", //if FE and BE are on different hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(json => {
          console.log(json); //token
          this.token = json.token;
          // dispatch('attempt', this.token )
        });
    },
  },
  // async attempt({commit}, token) {
  //   commit('SET_TOKEN', token)
  // }
})
