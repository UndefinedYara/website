import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export function Picture({ picture }: { picture: StaticImageData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-9/12 lg:w-full h-full rounded-2xl overflow-hidden bg-transparent"
    >
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_65%_52%_at_50%_50%,transparent_20%,#0a0a0a_95%)] "></div>
      <Image src={picture} alt="Yara" width={1200} height={1200} />
    </motion.div>
  );
}
