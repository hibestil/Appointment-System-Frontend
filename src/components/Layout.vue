<template>
  <div id="app-layout">
  <b-navbar toggleable type="light" variant="light" sticky>
    <b-container>
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <b-navbar-brand>Takvim</b-navbar-brand>
      <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav>
              <router-link to="/">Ana Sayfa</router-link>
              <router-link to="/login">Giriş</router-link>
              <router-link to="/signup">Üye Ol</router-link>
          </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
  <b-container class="bv-example-row">

    <b-row>
        <b-col>1 of 3</b-col>
        <b-col cols="8">
          <router-view></router-view>
        </b-col>
        <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
}
</script>
