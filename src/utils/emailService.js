import emailjs from '@emailjs/browser';

// These should be set in your .env file
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formElement) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS keys are missing. Please check your .env file.');
        return {
            success: false,
            error: 'Configuration Error: EmailJS keys missing. Please contact support.'
        };
    }

    try {
        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY);
        return { success: true, text: result.text };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return { success: false, error: error.text || 'Failed to send email' };
    }
};
