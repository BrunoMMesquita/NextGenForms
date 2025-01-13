import { getClientSideCookie } from "./getClientSideCookie";
import { getServerSideCookie } from "./getServerSideCookie";

export async function getCookie(name: string): Promise<string | undefined> {
  if (typeof window === 'undefined') {
    return getServerSideCookie(name);
  } else {
    return getClientSideCookie(name);
  }
}
