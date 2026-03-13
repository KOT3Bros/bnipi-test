import type { BaseResponse, Request } from '@/shared/types/api'
import axios from 'axios'
import { clearEmptyParams } from '@/shared/lib/clearEmpyParams'

export async function makeRequest<T>({
  url = '/',
  method = 'get',
  headers,
  params,
  data,
  responseType = 'json',
}: Request): BaseResponse<T> {
  return await axios<T>({
    url,
    method,
    responseType,
    headers: { ...headers },
    params: clearEmptyParams(params),
    data,
    paramsSerializer: { indexes: null },
    withCredentials: false,
  })
}

export default makeRequest
