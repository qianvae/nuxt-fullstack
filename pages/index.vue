<template>
  <div class="container">
    欢迎使用
    <el-button @click="handleClick">button</el-button>
    <el-button @click="handleRender">render</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchRender } from '@/services/standard'

@Component
export default class Home extends Vue {
  activeName = 'standard'
  res: any = []
  // async getAllTagList () {
  //   try {
  //     const res = await fetchAllTags()
  //     this.res = res

  //     console.log('res: ', res)
  //   } catch (error) {
  //     console.log('error: ', error)
  //   }
  // }

  // handleClick () {
  //   console.log('inclick')
  //   this.getAllTagList()
  // }

  async handleRender() {
    try {
      const res = await fetchRender()

      console.log('res: ', res)
    } catch (error) {
      console.log('error: ', error)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
