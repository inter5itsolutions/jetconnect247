import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348069381523"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-16 bg-brand-white text-white text-xs font-medium whitespace-nowrap px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with a specialist
      </span>
    </a>
  );
}
