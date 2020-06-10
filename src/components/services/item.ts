import config from "@/config";
export function getDownloadItemUrl(id: string): string {
  return `${config.apiRootUrl}/items/${id}/raw`;
}
