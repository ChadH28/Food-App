export default ({
  state: {
    // storing objects or plain strings
    token: null,
    user: null,
    email: null
  },
  mutations: {
    // updating those objects and strings 
  },
  actions: {
    // requests and commits mutations
    async signIn( {dispatch} ) {
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
          // console.log(json); //token
          this.token = json.token;
        });

        dispatch('attempt', this.token )
    },
  },
  async attempt (_, token) {
    console.log(token)
  }
})
