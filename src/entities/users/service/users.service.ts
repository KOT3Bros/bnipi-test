import type { UserResponseData } from '../types/users.dto'
import type { BaseResponse } from '@/shared/types/api'
import { makeRequest } from '@/shared/service/api'

export const usersService = {
  async getAll(): BaseResponse<UserResponseData[]> {
    return await makeRequest<UserResponseData[]>({
      url: 'https://jsonplaceholder.typicode.com/users',
    })
  },
}
