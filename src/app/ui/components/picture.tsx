import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import yara from "../../../../public/images/yara.webp";

export function Picture() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="relative w-9/12 lg:w-full h-full rounded-2xl overflow-hidden bg-transparent"
    >
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_65%_52%_at_50%_50%,transparent_20%,#0a0a0a_95%)]"></div>
      <Image
        src={yara}
        alt="Yara"
        width={800}
        height={800}
        priority
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  );
}
