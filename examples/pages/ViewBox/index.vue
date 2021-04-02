<template>
  <ViewBox count="4" fontSize="12">
    <ViewBoxItem
      title="测试"
      label="我任何工具的存在都是更高效地解决问题. 页面可视化搭建工具, 用于解决页面生成的效率问题. 可能前端工程师会觉得最有效率的页面生成方式是打代码, 但有搭建页面"
    />
    <ViewBoxItem title="测试" label="啊实打实打算啊撒打算" />
    <ViewBoxItem title="测试" label="2022020" />
    <ViewBoxItem title="测试" label="2022020" />
    <ViewBoxItem title="测试" label="2022020" />
  </ViewBox>
</template>

<script>
/* eslint-disable */
export default {
  name: "ViewBox",
  components: {},
  data() {
    return {
      input: "",
      selectValue: null,
      loading: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      buttonList: [
        {
          key: "add",
          label: "新增",
          icon: "el-icon-plus",
          btType: "success",
          size: "small",
        },
        { key: "delete", label: "删除", icon: "el-icon-delete" },
      ],
      linkList: [
        { key: "export", label: "导出", icon: "el-icon-plus", size: "small" },
        { key: "delete", label: "删除", icon: "el-icon-delete" },
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
      this.loading = false;
    }, 1000);
  },
  methods: {
    handleClick: (key, item) => {
      console.log("itemotter", key, item);
    },
    testCuston: () => {
      console.log("点击测试");
    },
    InputChange: (value) => {
      console.log(value);
    },
  },
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
