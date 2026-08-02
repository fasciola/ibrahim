import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/siteConfig";

export default function StickyWhatsApp() {
  const message = "Hello Ibrahim, I would like guidance on setting up a Dubai Mainland company.";
  const link = whatsappLink(message);

  return (
    <div className="fixed bottom-4 left-4 z-40 sm:hidden">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp Ibrahim"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
        <span>WhatsApp Ibrahim</span>
      </a>
    </div>
  );
}
