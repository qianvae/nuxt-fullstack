<template>
  <div class="container">
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><nuxt-link to="/standard">标准化</nuxt-link></el-menu-item>
      <el-menu-item index="2"><nuxt-link to="/multiple">多题测试</nuxt-link></el-menu-item>
    </el-menu>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Activity extends Vue {
  handleSelect(value: any) {
    console.log('value: ', value);
  }
}
</script>

<style lang="less" scoped>
</style>
