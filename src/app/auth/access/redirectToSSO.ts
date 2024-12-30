export const redirectToSSO = () => {
  const searchParams = new URLSearchParams()
  searchParams.append('response_type', `code`)
  searchParams.append('scope', ``)
  searchParams.append('client_id', `${process.env.NEXT_PUBLIC_CLIENT_ID}`)
  searchParams.append('redirect_uri', `http://localhost:3000/auth/callback`)
  searchParams.append('title', `Sua jornada financeira começa agora!`)
  searchParams.append('subtitle', `Boas-vindas ao IOB Gestão Financeira!`)
  searchParams.append('isSignUpDisable', 'false')
  searchParams.append('showFAQ', 'false')
  searchParams.append('isSocialLoginDisable', 'false')
  const uri = `${process.env.NEXT_PUBLIC_SSO_URL}/signin?${searchParams.toString()}`
  window.open(uri, '_self')
}