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
    <el-button type="success" icon="el-icon-check">Üye Ol!</el-button>
  </el-form>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
