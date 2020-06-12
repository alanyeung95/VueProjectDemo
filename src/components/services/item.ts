import config from "@/config";
import httpClient from "@/utils/http/httpClient";

export function getDownloadItemUrl(id: string): string {
  return `${config.apiRootUrl}/items/${id}/raw`;
}

export interface CreateItemParams {
  name: string;
  description: string;
}

export async function createItem(params: CreateItemParams): Promise<string> {
  const { data } = await httpClient.post(`${config.apiRootUrl}/items`, {
    name: "string",
    description: "123"
  });

  return data;
}
