<template>
  <div class="view-box-item" :style="`width: ${itemWidth}%`" >
    <div class="view-box-item-inner" :style="`font-size: ${fontSize}px`">
      <div class="view-box-item-left">{{title}}</div>
      <div class="view-box-item-right" :title="label">
       {{label}}
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ViewBoxItem', // 注意这个name是必须的,
  props: {
    title: {
      type: String,
      default: "" 
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      count: 3,
      itemWidth: (1 / this.count) * 100,
      fontSize: 12
    }
  },
  computed: {},
  mounted() {
    const attrs = this.$parent.$attrs
    const options = this.$parent.$options
    if (options && options._componentTag === "view-box") {
      const { count, fontSize } = attrs
      if (fontSize) this.fontSize = fontSize;
      if (!count || count == 3) return;
      this.count = count || 3
      if (count) {
        this.itemWidth = (1 / count) * 100
      }
    }
  },
  methods: {
    // handleRenderInner() {
    //   const { label } = this;
    //   console.log("label",label)
    //   if (label) {
    //     return label;
    //   } else {
    //     return <slot />
    //   }
    // }
  }
} 
</script>

<style lang="scss" scoped>
  .view-box-item {
    width: 30%;
    // line-height: 36px;
    display: inline-block;
    padding: 8px 0;
    &-inner {
      display: flex;
      padding-right: 20px;
      padding-left: 12px;
    }
    &-left { 
      padding-right: 5px;
      color: #65676b;
    }
    &-right {
      flex: 1;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>
