<template>
  <div v-loading="loading" class="container">
    <div class="form-container">
      <label>题型规则</label>
      <el-select v-model="rules" multiple placeholder="请选择">
        <el-option
          v-for="item in ruleList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        <el-button
          :loading="searching"
          type="primary"
          icon="el-icon-search"
          @click="search"
        >
        搜索
        </el-button>
      </el-select>
    </div>
    <div v-if="result.length > 0" v-loading="searching">
      <div v-for="item in result" :key="item.id">
        <img
          v-if="result.renderResultBase64"
          :width="imgWidth"
          :src="`data:image/png;base64,${result.renderResultBase64}`"
        />
        <div>
          <div v-if="!editing">
            {{ result.content }}
            <el-button icon="el-icon-edit" circle></el-button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchAllRules, RuleItemType, fetchRenderList, RenderItemType } from '@/services/standard'



@Component
export default class Standard extends Vue {
  ruleList: RuleItemType[] = []
  loading = false
  searching = false
  rules: string[] = []
  result: RenderItemType[] = []
  editing = false

  async search() {
    this.searching = true
    try {
      const res = await fetchRenderList(this.rules.join(','))
      this.result = res ?? []
    } catch(e) {
      console.log('e: ', e);
    } finally {
      this.searching = false
    }
  }

  async getAllRules() {
    this.loading = true
    try {
      const res = await fetchAllRules()
      this.ruleList = res ?? []
    } catch(e) {
      console.log('e: ', e);
    } finally {
      this.loading = false
    }
  }

  created() {
    this.getAllRules()
  }
}
</script>

<style lang="less" scoped>
</style>
