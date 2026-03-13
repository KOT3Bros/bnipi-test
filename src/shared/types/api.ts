import type { AxiosResponse, ResponseType } from "axios"

export type BaseResponse<T> = Promise<AxiosResponse<T>>

export interface ErrorResponse {
  response: {
    data: {
      msg: string
    }
  }
}

export interface Request {
  url: string
  method?: string
  responseType?: ResponseType
  headers?: any
  params?: any
  data?: any
}