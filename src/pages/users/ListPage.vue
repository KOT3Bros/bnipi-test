<script setup lang="ts">
import type { UserResponseData } from '@/entities/users/types/users.dto'
import { useUsersStore } from '@/entities/users/store/users.store'
import { DetailUserDrawer } from '@/widgets/users/DetailUserDrawer'
import { ListHeader } from '@/widgets/users/ListHeader'
import { ListTable } from '@/widgets/users/ListTable'

const usersStore = useUsersStore()
const { usersList, isPending, isPendingError } = storeToRefs(usersStore)

const selectedUser = ref<UserResponseData | null>(null)
const isDetailUserDrawerVisible = ref<boolean>(false)
const search = ref<string>('')
const filterByCompany = ref<string>('')

const data = computed(() => {
  return usersList.value.filter(user =>
    (user.name
      .toLowerCase()
      .trim()
      .includes(search.value.toLowerCase().trim())
      || user.email
        .toLowerCase()
        .trim()
        .includes(search.value.toLowerCase().trim())
    )
    && user.company.name
      .toLowerCase()
      .trim()
      .includes(filterByCompany.value
        .toLowerCase()
        .trim(),
      ),
  )
})

const companys = computed(() => {
  return [...new Set(usersList.value.map(user => user.company.name))]
})

function openDetailUserDrawer(id: number) {
  const findUser = usersList.value.find(user => user.id === id)
  if (findUser) {
    selectedUser.value = findUser
    isDetailUserDrawerVisible.value = true
  }
}

onMounted(async () => {
  await usersStore.getUsers()
})
</script>

<template>
  <div class="flex size-full flex-col gap-3">
    <ListHeader
      v-model:filter-by-company="filterByCompany"
      v-model:search="search"
      :companys="companys"
      :is-pending="isPending"
      :is-pending-error="isPendingError"
    />
    <ListTable
      :data="data"
      :is-pending="isPending"
      :is-pending-error="isPendingError"
      @open-drawer="openDetailUserDrawer"
      @retry-request="usersStore.getUsers()"
    />
    <DetailUserDrawer
      v-model:toggle-drawer="isDetailUserDrawerVisible"
      :selected-user="selectedUser"
    />
  </div>
</template>
