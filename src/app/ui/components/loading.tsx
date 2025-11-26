// components/LoadingScreen.tsx
import { useEffect, useState } from "react";
import yara from "../../../../public/images/yara.webp";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = yara.src;
    img.onload = () => setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center text-2xl font-extralight justify-center bg-black z-[40]">
      <span>Wait for it...</span>
      <div className="ml-4 animate-bounce duration-800 rounded-full text-4xl h-10 w-10  border-primary">
        ;(
      </div>
    </div>
  );
}
