<script setup lang="ts">
import type { UserResponseData } from '@/entities/users/types/users.dto'

const props = defineProps<{
  selectedUser: UserResponseData | null
}>()

const toggleDrawer = defineModel<boolean>('toggleDrawer')
</script>

<template>
  <ElDrawer
    v-model="toggleDrawer"
    header-class="m-0"
    size="800"
  >
    <template #header>
      <p class="font-bold">
        User Info
      </p>
    </template>

    <ElDescriptions
      v-if="props.selectedUser"
      border
      :column="1"
      direction="vertical"
    >
      <ElDescriptionsItem label="Name">
        {{ props.selectedUser.name }}
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Username">
        {{ props.selectedUser.username }}
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Email">
        {{ props.selectedUser.email }}
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Phone">
        {{ props.selectedUser.phone }}
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Website">
        {{ props.selectedUser.website }}
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Address">
        <ul>
          <li>
            City: {{ props.selectedUser.address.city }}
          </li>
          <li>
            Street: {{ props.selectedUser.address.street }}
          </li>
        </ul>
      </ElDescriptionsItem>

      <ElDescriptionsItem label="Company">
        {{ props.selectedUser.company.name }}
        <br>
        &laquo;{{ props.selectedUser.company.catchPhrase }}&raquo;
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElDrawer>
</template>
