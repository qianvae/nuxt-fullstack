<template>
  <div class="container">
    {{ tagList }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { fetchAllTags } from '@/services/standard'

@Component({})
export default class Standard extends Vue {
  loading = false
  tagList: any = []

  // async getAllTagList () {
  //   this.loading = true
  //   try {
  //     const res = await fetchAllTags()
  //     this.tagList = res
  //     console.log('res: ', res)
  //   } catch (error) {
  //     console.log('error: ', error)
  //   } finally {
  //     this.loading = false
  //   }
  // }

  mounted () {
    // this.getAllTagList()
  }
}
</script>

<style lang="less" scoped>
</style>
