import { redirect } from 'next/navigation'

export default async function AuthCallback({
  searchParams,
}: {
  searchParams: { code: string }
}) {
  const { code } = searchParams

  if (!code) {
    redirect('/login')
  }

  // await authenticateUser(code)
  // const user = getUserInfo()

  // if (user) {
  //   redirect('/dashboard')
  // } else {
    redirect('/login')
  // }
}
