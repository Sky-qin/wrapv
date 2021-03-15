<template>
  <div name="view-box">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'ViewBox', // 注意这个name是必须的
}
</script>

<style lang="scss" scoped>
  .view-box {
    text-align: inherit;
  }
</style>