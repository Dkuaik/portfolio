"use client";
import { Flex } from "@/once-ui/components";
import React, { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('https://portfolio-backend.dkuaik.dev/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            
            setSubmitStatus({
                type: 'success',
                message: '¡Mensaje enviado exitosamente! Te contactaré pronto.'
            });

            // Limpiar formulario
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                phone: ''
            });

        } catch (error) {
            console.error('Error sending contact form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        fontFamily: 'inherit'
    };

    const inputFocusStyle = {
        borderColor: '#3b82f6'
    };

    const buttonStyle = {
        width: '100%',
        padding: '14px 24px',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        backgroundColor: isLoading ? '#9ca3af' : '#3b82f6',
        border: 'none',
        borderRadius: '8px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
        fontFamily: 'inherit'
    };

    // Bloque 1: Header
    const headerBlock = (
        <div>
            <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '1rem',
                color: '#1f2937'
            }}>
                Contacto
            </h2>
            
            <p style={{ 
                textAlign: 'center', 
                marginBottom: '3rem', 
                fontSize: '1.1rem', 
                color: '#6b7280',
                lineHeight: '1.6'
            }}>
                ¿Tienes algún proyecto en mente? Me encantaría escuchar sobre él. 
                Envíame un mensaje y hablemos.
            </p>
        </div>
    );

    // Bloque 2: Formulario
    const formBlock = (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
            </div>

            <input
                type="tel"
                name="phone"
                placeholder="Teléfono (opcional)"
                value={formData.phone}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />

            <input
                type="text"
                name="subject"
                placeholder="Asunto *"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />

            <textarea
                name="message"
                placeholder="Mensaje *"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px'
                }}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />

            <button
                type="submit"
                disabled={isLoading}
                style={buttonStyle}
                onMouseEnter={(e) => {
                    if (!isLoading) {
                        e.currentTarget.style.backgroundColor = '#2563eb';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isLoading) {
                        e.currentTarget.style.backgroundColor = '#3b82f6';
                    }
                }}
            >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
        </form>
    );

    // Bloque 3: Status del envío
    const statusBlock = submitStatus.type && (
        <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: submitStatus.type === 'success' ? '#dcfce7' : '#fef2f2',
            color: submitStatus.type === 'success' ? '#16a34a' : '#dc2626',
            border: `1px solid ${submitStatus.type === 'success' ? '#bbf7d0' : '#fecaca'}`
        }}>
            {submitStatus.message}
        </div>
    );

    // Bloque 4: Contactos alternativos
    const alternativeContactsBlock = (
        <div style={{ 
            marginTop: '3rem', 
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
        }}>
            <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#374151'
            }}>
                Otras formas de contacto
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <a 
                    href="mailto:enrq.rios.f@gmail.com" 
                    style={{ 
                        color: '#3b82f6', 
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}
                >
                    📧 Email directo
                </a>
                <a 
                    href="https://www.linkedin.com/in/enrqriosf/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        color: '#3b82f6', 
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}
                >
                    💼 LinkedIn
                </a>
                <a 
                    href="https://github.com/dkuaik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        color: '#3b82f6', 
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}
                >
                    🐙 GitHub
                </a>
            </div>
        </div>
    );

    return (
        <Flex
            id="contact"
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
                padding: "6rem 2rem",
                maxWidth: 1400,
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
                background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03), transparent)",
            }}
        >
            <div style={{ maxWidth: '600px', width: '100%' }}>
                {headerBlock}
                {formBlock}
                {statusBlock}
                {alternativeContactsBlock}
            </div>
        </Flex>
    );
};

export default Contact;
