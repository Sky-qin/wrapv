<template>
  <OpreationBar
      :buttonList="buttonList"
      :linkList="linkList"
      total="wwww"
      @click="handleClick"
    >
      <el-input
        size="medium"
        v-model="input"
        placeholder="请输入内容"
        @change="InputChange"
      ></el-input>
      <el-select size="medium" v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </OpreationBar>
 
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "OpreationBar",
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
    };
  },
  mounted() {},
  methods: {
    handleClick: (key, item) => {
      console.log("itemotter", key, item);
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
