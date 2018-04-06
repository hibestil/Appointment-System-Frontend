<template>

  <el-form >
      <el-input
      placeholder="E-mail"
      v-model="input10"
      type="email"
      clearable>
    </el-input>
    <el-input
      placeholder="Şifre"
      v-model="input10"
      type="password"
      clearable>
    </el-input>
    <el-button type="success" icon="el-icon-check">Giriş</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
