const SERVICE_ID = 'service_lqntr7e';
const PUBLIC_KEY = 'T46vCEohH06cfn8Tr';
const TEMPLATE_CONTACT = 'template_np6gdab';
const TEMPLATE_TRAINING = 'template_2lsgbev'; 
const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

interface EmailParams {
  [key: string]: string;
}

export async function sendEmail(templateId: string, params: EmailParams): Promise<void> {
  console.log('Sending email via EmailJS', { templateId, params });
  const res = await fetch(EMAILJS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: templateId,
      user_id: PUBLIC_KEY,
      template_params: params,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('EmailJS error response', res.status, text);
    throw new Error(`${res.status}: ${text || res.statusText}`);
  }
  console.log('EmailJS success');
}

export { TEMPLATE_CONTACT, TEMPLATE_TRAINING };

export function mailtoHref(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
