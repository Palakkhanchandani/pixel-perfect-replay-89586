import { motion } from "framer-motion";
const URL = "https://wa.me/918107035735?text=" + encodeURIComponent("Hi ELWOURA, I'd like to know more about your services.");
export function WhatsAppButton() {
  return (
    <motion.a href={URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5, type: "spring" }} whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-paper shadow-lift ring-4 ring-paper/20">
      <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-30" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.700 15.600 2.200 13.800 2.200 12 2.200 6.600 6.600 2.200 12 2.200S21.800 6.600 21.800 12 17.400 21.800 12 21.800M12 0C5.400 0 0 5.400 0 12c0 2.100.6 4.200 1.600 6L0 24l6.200-1.600C8 23.400 10 24 12 24c6.600 0 12-5.400 12-12S18.600 0 12 0"/></svg>
    </motion.a>
  );
}
