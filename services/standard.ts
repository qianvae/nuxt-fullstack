import request from '@/utils/http/index'

const baseURL = ''

export function fetchRenderList(rules: string): Promise<any> {
  return request({
    method: 'GET',
    baseURL,
    url: `/api/standard/render/list?rules=${rules}`,
  })
}
