import type { UserResponseData } from '../types/users.dto'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usersService } from '../service/users.service'

export const useUsersStore = defineStore('users-store', () => {
  const isPending = ref<boolean>(false)
  const isPendingError = ref<string | null>(null)
  const usersList = ref<UserResponseData[]>([])

  async function getUsers(): Promise<void> {
    isPending.value = true
    isPendingError.value = null

    try {
      const response = await usersService.getAll()
      if (response.data) {
        usersList.value = response.data
      }
    }
    catch (e) {
      isPendingError.value = e instanceof Error ? e.message : 'An unknown error has occurred, please try again.'
      console.error(e)
    }
    finally {
      isPending.value = false
    }
  }
  return {
    isPending,
    isPendingError,
    usersList,
    getUsers,
  }
})
