<template>
  <div id="app-layout">
  <el-container>
    <el-header>
      <h1>Takvim</h1>
    </el-header>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3">
        <div class="menu">
          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>Ana Sayfa</span>
            </el-menu-item>
          </router-link>
          <router-link to="/login">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Giriş</span>
            </el-menu-item>
          </router-link>
          <router-link to="/signup">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>Üye Ol</span>
            </el-menu-item>
          </router-link>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="13">
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  <el-footer>Footer</el-footer>
</el-container>
  </div>
</template>

<script>
export default {
}
</script>
<style>
.menu{
  text-align:left;
}
.menu a{
  text-decoration: none;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
