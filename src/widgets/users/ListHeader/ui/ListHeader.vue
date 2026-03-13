<script setup lang="ts">
import EpSearch from '~icons/ep/search'

const props = defineProps<{
  companys: string[]
  isPending: boolean
  isPendingError: string | null
}>()

const search = defineModel<string>('search', { required: true })
const filterByCompany = defineModel<string>('filterByCompany', { required: true })
</script>

<template>
  <div class="flex w-1/2 gap-3">
    <ElInput
      v-model="search"
      clearable
      :disabled="isPending || !!isPendingError"
      placeholder="Search"
      :prefix-icon="EpSearch"
    />
    <ElSelect
      v-model="filterByCompany"
      clearable
      :disabled="isPending || !!isPendingError"
      placeholder="Choose a company"
      value-on-clear=""
    >
      <ElOption
        v-for="company in props.companys"
        :key="company"
        :label="company"
        :value="company"
      />
    </ElSelect>
  </div>
</template>
