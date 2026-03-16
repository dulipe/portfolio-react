import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-500 bg-neutral-900 text-white cursor-pointer transition transform hover:scale-105 hover:bg-neutral-800 hover:shadow-lg"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;