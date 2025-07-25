'use client';

import dynamic from 'next/dynamic';

// Importación dinámica del ChatBot para evitar problemas de hidratación
const ChatBot = dynamic(() => import('./ChatBot'), {
  ssr: false,
  loading: () => null
});

export default function ChatBotWrapper() {
  return <ChatBot />;
}
