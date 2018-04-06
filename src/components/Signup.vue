<template>
  <div class="hello">
    <h2>Üye Ol</h2>
    <input v-model="message" placeholder="Kullanıcı adı">
    <input v-model="message" placeholder="Şifre">
    <button name="btn-login">Giriş</button>
  </div>
</template>

<script>
export default {
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
