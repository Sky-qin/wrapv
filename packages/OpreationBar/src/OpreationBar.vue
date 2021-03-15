<template>
  <div class="opreation-bar">
    <div class="opreation-bar-left" >
      <el-button
        v-for="item in buttonList" 
        :key="item.key" 
        :type="item.btType || `primary`"
        :size="item.size || `small`"
        :icon="item.icon || ''"
        @click="handleClick(item)"
      >
        {{item.label}}
      </el-button>
    </div>
    <div class="opreation-bar-right">
      <el-button
        v-for="item in linkList" 
        :key="item.key" 
        :type="item.btType || `text`"
        :size="item.size || `small`"
        :icon="item.icon || ''"
        @click="handleClick(item)"
      >
        {{item.label}}
      </el-button>
      <span v-if="total !== false" class="total-count">共 {{parseInt(total) || 0}} 条</span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'OpreationBar', // 注意这个name是必须的,
  props: {
    buttonList: {
      type: Array,
      default: () => [] 
    },
    linkList: {
      type: Array,
      default: () => []
    },
    total: {
      default: false
    },
  },
  computed: {},
  mounted() {},
  methods: {
    handleClick(item) {
      let { key } = item;
      this.$emit('click', key, item);
    }
  }
} 
</script>

<style lang="scss" scoped>
.opreation-bar {
  padding: 3px 8px;
  // background: red;
  line-height: 50px;
  display: flex;
  font-style: 12px;
  &-left {
    flex: 1;
    text-align: left;
  }
  &-right {
    flex: 1;
    text-align: right;
    .total-count {
      margin-left: 12px;
      font-size: 12px;
      color: #606266;
    }
  }
}
</style>
