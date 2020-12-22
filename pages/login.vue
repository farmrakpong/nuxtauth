<template>
  <!-- <form @submit="login"> -->
  <div>
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
    <button type="button" @click="login()">Login</button>
  </div>
  <!-- </form> -->
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      //   e.preventDefault();
      const payload = {
        email: this.email,
        password: this.password,
      };
      
      // console.log(this.$auth);
      try {
        // let res = await axios.post("http://localhost:12345/api/login",{data:payload})
        //       this.$store.commit('settoke',res.data)
        //      this.$router.push("/");

            // .then(response => {
            //     // console.log("response: ", response)
            //     this.$store.commit('settoke',response.data)
            //     // do something about response
                 
            // })
            // .catch(err => {
            //     console.error(err)
            // })
            // console.log(res.dar);
        // axios
        //   .get("http://localhost:12345/api/me")
        //   .then((response) => {
        //     console.log("response: ", response);
        //     // do something about response
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });
            // console.log(data);
      // console.log({
      //     data: payload,
      //   });
        await this.$auth.loginWith("local", {
          data: payload,
        });
          this.$router.push("/");
    //    console.log(this.$auth.user);
      } catch (e) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
