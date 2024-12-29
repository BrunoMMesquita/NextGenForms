import { Buffer } from 'buffer';

interface SSOConfig {
  clientId?: string;
  secretId?: string;
}

export function getBase64Auth(config: SSOConfig): string {
  const { clientId, secretId } = config;

  if (typeof window !== 'undefined' && window.btoa) {
    return window.btoa(`${clientId}:${secretId}`);
  }
  return Buffer.from(`${clientId}:${secretId}`).toString('base64');

}

