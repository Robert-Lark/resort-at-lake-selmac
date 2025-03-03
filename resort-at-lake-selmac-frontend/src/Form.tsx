import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/form.css'; // We'll add basic CSS next

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_5iz8nmj'; // Replace with your EmailJS Service ID
    const templateId = 'template_mzxptoh'; // Replace with your EmailJS Template ID
    const publicKey = 'kjcUnrNo8NbK1NotO'; // Replace with your EmailJS Public Key

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, { publicKey });
      setMessage('Message sent successfully!');
      formRef.current?.reset(); // Reset form after success
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 3000); // Clear message after 3s
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone (optional):</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;