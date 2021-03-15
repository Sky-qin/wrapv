<template>
  <content-box
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <OpreationBar :buttonList="buttonList" :linkList="linkList" total="wwww" @click="handleClick" />
      <el-table :data="tableData" border styles="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
      <div>
      <view-box count="4" fontSize="12">
        <ViewBoxItem title="测试" label="我任何工具的存在都是更高效地解决问题. 页面可视化搭建工具, 用于解决页面生成的效率问题. 可能前端工程师会觉得最有效率的页面生成方式是打代码, 但有搭建页面" />
        <ViewBoxItem title="测试" label="啊实打实打算啊撒打算" />
        <ViewBoxItem title="测试" label="2022020" />
        <ViewBoxItem title="测试" label="2022020" />
        <ViewBoxItem title="测试" label="2022020" />
      </view-box>
      </div>
    </content-box>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      loading: true,
      buttonList: [
        { key: "add", label: "新增", icon: "el-icon-plus", btType: "success", size: "small" },
        { key: "delete", label: "删除", icon: "el-icon-delete" }
      ],
      linkList: [
        { key: "export", label: "导出", icon: "el-icon-plus", size: "small" },
        { key: "delete", label: "删除", icon: "el-icon-delete" }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    },1000)
  },
  methods: {
    handleClick: (key, item) => {
      console.log('itemotter', key, item)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
