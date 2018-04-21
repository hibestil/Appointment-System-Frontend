<template>
 <div>
  <b-form @submit="authenticate" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup1"label="Email:" label-for="email">
          <b-form-input id="email"
            type="text"
            v-model="form.email"
            required
            placeholder="Kullanıcı adı"/>
        </b-form-group>
        <b-form-group label="Şifre :" label-for="pass" description="Lüften şifrenizi giriniz">
          <b-form-input id="pass"
            type="password"
            v-model="form.password"
            required
            placeholder="Şifre"/>
        </b-form-group>
        <b-button type="submit">Giriş</b-button>
  </b-form>
 </div>
</template>

<script>
import {HTTP} from '../controllers/http-common.js'
export default {
  data () {
    return {
      form: {
        email: '',
        name: ''  
      },

      show: true
    }
  },
  methods: {
    authenticate(){
      let credentials = {
         username  : this.form.email,
         password : this.form.password
      }
    
      HTTP.post(`user/login`,credentials)
        .then(response => {
          window.localStorage.setItem('token',response.data.token)
            window.localStorage.setItem('auth-user',JSON.stringfy(response.data.user))
            console.log("DATA:")
            console.log(respose.data);
        })
        .catch(e => {
          console.log(e)
        })


    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
