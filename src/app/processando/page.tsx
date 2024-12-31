'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Processing() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken='));

    if (accessToken) {
      router.push('/dashboard');
    } else {
      router.push('/auth/access');
    }
  }, [router]);

  return <p>Processando autenticação...</p>;
}