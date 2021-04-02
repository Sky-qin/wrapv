<template>
  <div class="wrap-ui">
    <div class="header">
      <div class="header-bar">
        <div class="header-bar-title">Wrapv UI</div>
        <div class="header-bar-search">
          <el-input placeholder="搜索组件" />
        </div>
      </div>
    </div>
    <div class="body">
      <el-menu class="menu-bar" :default-active="activeNenu" @select="handleClickMenu">
        <el-menu-item
          v-for="item in menuList"
          :key="item.key"
          :index="item.key"
          >{{ `${item.key} ${item.name}` }}</el-menu-item
        >
      </el-menu>
      <div class="view-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { MENU_LIST } from "./config/common";

export default {
  name: "app",
  data() {
    return {
      menuList: MENU_LIST || [],
      activeNenu: (MENU_LIST && MENU_LIST[0] && MENU_LIST[0].key) || "",
    };
  },
  mounted() {
    console.log("MENU_LIST", MENU_LIST);
  },
  methods: {
    handleClickMenu(index, indexPath) {
      console.log(index, indexPath)
      this.activeNenu = index
      this.$router.push({ path: `/components/${index}` })
    }
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  overflow: hidden;
}

.wrap-ui {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  // flex: 1;
}

.header-bar {
  display: flex;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #EBEEF5;
}
.header-bar-title {
  color: #409eff;
  font-weight: 600;
  font-size: 24px;
  margin: 0 20px;
}
.header-bar-search {
  width: 280px;
  margin-left: 30px;
}

.header-bar-search:hover {
  width: 500px;
}

.body {
  flex: 1;
  overflow: hidden;
  display: flex;
  .menu-bar {
    min-width: 260px;
    overflow-y: auto;
  }
}

.view-content {
  flex: auto;
  overflow-y: auto;
}
</style>
