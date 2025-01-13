
export async function getServerSideCookie(name: string): Promise<string | undefined> {
  const { cookies } = await import('next/headers')
  const cookieManager = cookies()
  return (await cookieManager).get(name)?.value;
}