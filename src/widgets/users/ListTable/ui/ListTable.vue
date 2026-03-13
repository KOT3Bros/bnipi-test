<script setup lang="ts">
import type { UserResponseData } from '@/entities/users/types/users.dto'
import EpRefresh from '~icons/ep/refresh'

const props = defineProps<{
  data: UserResponseData[]
  isPending: boolean
  isPendingError: string | null
}>()

const emits = defineEmits<{
  retryRequest: []
  openDrawer: [id: number]
}>()
</script>

<template>
  <div
    v-if="props.isPendingError"
    class="flex size-full flex-col items-center justify-center gap-2"
  >
    <ElIcon
      color="red"
      size="64"
    >
      <EpWarning />
    </ElIcon>
    {{ props.isPendingError }}
    <ElButton
      :icon="EpRefresh"
      @click="emits('retryRequest')"
    >
      Retry
    </ElButton>
  </div>

  <ElTable
    v-else
    v-loading="isPending"
    border
    :data="props.data"
    height="100%"
    row-class-name="cursor-pointer"
    row-key="id"
    @row-click="row => emits('openDrawer', row.id)"
  >
    <ElTableColumn
      label="Name"
      prop="name"
    />
    <ElTableColumn
      label="Email"
      prop="email"
    />
    <ElTableColumn
      label="Phone"
      prop="phone"
    />
    <ElTableColumn
      label="Company name"
      prop="company.name"
    />
  </ElTable>
</template>
