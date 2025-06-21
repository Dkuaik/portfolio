'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Icon } from '@/once-ui/components';
import { OpenRouterService } from './OpenRouterService';
import styles from './ChatBot.module.scss';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ConversationMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy el **asistente virtual** de Enrique Ríos Flores.\n\nEstoy aquí para ayudarte a conocer mejor su trabajo, experiencia y proyectos.\n\n¿Hay algo específico que te gustaría saber?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const openRouterService = useRef<OpenRouterService | null>(null);

  // Inicializar el servicio de OpenRouter
  useEffect(() => {
    openRouterService.current = new OpenRouterService();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mantener el foco en el input después de enviar un mensaje
  useEffect(() => {
    if (!isTyping && isOpen && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isTyping, isOpen]);

  // Enfocar el input cuando se abre el chat
  useEffect(() => {
    if (isOpen && textAreaRef.current) {
      // Pequeño delay para asegurar que la animación termine
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !openRouterService.current) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Resetear la altura del textarea después de limpiar el contenido
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
    }
    
    setIsTyping(true);

    try {
      // Obtener respuesta del modelo de lenguaje
      const response = await openRouterService.current.sendMessage(
        userMessage.text,
        conversationHistory
      );

      // Actualizar historial de conversación
      const newHistory: ConversationMessage[] = [
        ...conversationHistory,
        { role: 'user', content: userMessage.text },
        { role: 'assistant', content: response }
      ];
      
      // Mantener solo los últimos 10 intercambios para no exceder límites
      if (newHistory.length > 20) {
        setConversationHistory(newHistory.slice(-20));
      } else {
        setConversationHistory(newHistory);
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      
      // Fallback a respuesta local en caso de error
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, estoy experimentando **dificultades técnicas** en este momento.\n\nPor favor:\n- Inténtalo de nuevo más tarde\n- Contacta directamente a Enrique a través del formulario de contacto\n\n> Si el problema persiste, puedes usar el chat sin conexión a internet.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    // Auto-resize textarea
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Chat Panel */}
      <div className={`${styles.chatPanel} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <h3 className={styles.chatTitle}>Chat de Asistencia</h3>
          <button 
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar chat"
          >
            <Icon name="close" size="s" />
          </button>
        </div>

        {/* Messages */}
        <div className={styles.chatMessages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${
                message.sender === 'user' ? styles.messageUser : styles.messageBot
              }`}
            >
              {message.sender === 'bot' ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Customizar componentes para que se vean bien en el chat
                    p: ({ children }) => <p style={{ margin: '0 0 8px 0' }}>{children}</p>,
                    h1: ({ children }) => <h1 style={{ fontSize: '1.2em', margin: '8px 0 4px 0', fontWeight: 'bold' }}>{children}</h1>,
                    h2: ({ children }) => <h2 style={{ fontSize: '1.1em', margin: '6px 0 4px 0', fontWeight: 'bold' }}>{children}</h2>,
                    h3: ({ children }) => <h3 style={{ fontSize: '1em', margin: '4px 0 2px 0', fontWeight: 'bold' }}>{children}</h3>,
                    ul: ({ children }) => <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>{children}</ul>,
                    ol: ({ children }) => <ol style={{ margin: '4px 0', paddingLeft: '16px' }}>{children}</ol>,
                    li: ({ children }) => <li style={{ margin: '2px 0' }}>{children}</li>,
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code style={{ 
                          backgroundColor: 'var(--neutral-background-strong)', 
                          padding: '2px 4px', 
                          borderRadius: '3px',
                          fontSize: '0.9em',
                          fontFamily: 'var(--font-code)'
                        }}>{children}</code>
                      ) : (
                        <pre style={{ 
                          backgroundColor: 'var(--neutral-background-strong)', 
                          padding: '8px', 
                          borderRadius: '6px',
                          overflow: 'auto',
                          fontSize: '0.85em',
                          fontFamily: 'var(--font-code)'
                        }}>
                          <code>{children}</code>
                        </pre>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote style={{ 
                        borderLeft: '3px solid var(--brand-solid-medium)', 
                        paddingLeft: '12px', 
                        margin: '8px 0',
                        fontStyle: 'italic',
                        opacity: 0.9
                      }}>{children}</blockquote>
                    ),
                    strong: ({ children }) => <strong style={{ fontWeight: 'bold' }}>{children}</strong>,
                    em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
                    a: ({ href, children }) => (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: 'var(--brand-solid-medium)', 
                          textDecoration: 'underline' 
                        }}
                      >
                        {children}
                      </a>
                    )
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              ) : (
                message.text
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className={styles.typing}>
              <span>Escribiendo</span>
              <div className={styles.typingDots}>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.chatInput}>
          <div className={styles.inputContainer}>
            <textarea
              ref={textAreaRef}
              className={styles.textInput}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              rows={1}
              disabled={isTyping}
            />
            <button
              className={styles.sendButton}
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Enviar mensaje"
            >
              <Icon name="send" size="s" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        <Icon name={isOpen ? "close" : "chat"} size="m" />
      </button>
    </div>
  );
};

export default ChatBot;