import config from '@/config'
import httpClient from '@/utils/http/httpClient'

export function getDownloadItemUrl(id: string): string {
  return `${config.apiRootUrl}/items/${id}/raw`
}

export interface CreateItemParams {
  name: string
  description: string
}

const requestConfig = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NTk5Nzk0MDIsImlhdCI6MTU5OTk4MzAwMn0.t1gdXbZCwg7Jc-DtXuCQk40V_fPx9rO4bD-LOO-oQKU`
  }
}

export async function createItem(params: CreateItemParams): Promise<string> {
  const { data } = await httpClient.post(
    `${config.apiRootUrl}/items/`,
    {
      name: params.name,
      description: params.description
    },
    requestConfig
  )

  return data
}

export interface SearchItemParams {
  description: string
}

export async function searchItem(params: SearchItemParams): Promise<string> {
  const { data } = await httpClient.post(
    `${config.searchRootUrl}/domain_items/_search/`,
    queryESByDescription(params.description)
  )
  return data
}

interface IDataNode {
  query: {
    terms: {
      description: string
    }
  }
}

export function queryESByDescription(param: string): JSON {
  const a = {
    query: {
      terms: {
        description: [param]
      }
    }
  }
  var jsonString = JSON.stringify(a)
  return JSON.parse(jsonString)
}
