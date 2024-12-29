import axiosInstance from '@/infrastructure/api/axiosInstance';
import { services } from '@/infrastructure/config/services';
import { getBase64Auth } from '@/utils';

export const getAccessToken = async (code: string) => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
  const authBase64 = getBase64Auth({
    clientId,
    secretId: process.env.NEXT_PUBLIC_CLIENT_SECRET
  })

  const data = new URLSearchParams()
  data.append('grant_type', 'authorization_code')
  data.append('redirect_uri', '')
  data.append('code', code)
  data.append('client_id', clientId || '')
  const headers = {
    Authorization: `Basic ${authBase64}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  }
  const response = await axiosInstance.post(`${services.usmService}/accesstokens`, data, { headers });
  return response;
};