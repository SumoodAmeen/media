import WhatsAppIcon from '../assets/whatsapp_icon.svg';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919567084303"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
            <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8 relative z-10" />
        </a>
    );
}
