<template>
  <div
    class="content-box"
    style="this.styles"
  >
    <slot />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "ContentBox", // 注意这个name是必须的
  props: {
    styles: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
     
    }
  },
  computed: {},
  mounted() {
    console.log("loadingloading", this.loading)
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  margin: 8px;
  padding: 12px;
  border: 1px solid #ebebeb;
  background: #fff;
}
.content-box:hover {
  box-shadow: 0px 0px 8px 0px #ebebeb, 0px 2px 4px 0px #ebebeb;
}
</style>
