import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "996997440799"; // Замени на свой номер
  const message = encodeURIComponent(
    "Саламатсызбы, мен recordonline.kg сайтынан курс боюнча маалымат алуу үчүн жазып жатам ..."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition animate-glow"
      style={{ backgroundColor: "#218838" }}
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute w-12 h-12 bg-green-500 opacity-50 rounded-full animate-ping"></span>
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
}
