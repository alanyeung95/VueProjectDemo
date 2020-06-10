import httpClient from "@/utils/http/httpClient";
import { getDownloadItemUrl } from "@/components/services/item";

export function downloadFile(url: string) {
  const a = document.createElement("a");
  a.href = url;
  //a.download = filename
  a.click();
}

export function downloadContent(id: string) {
  const url = getDownloadItemUrl(id);
  console.log(id);
  console.log(123);
  downloadFile(url);
}
