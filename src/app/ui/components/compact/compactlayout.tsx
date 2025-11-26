import { motion } from "framer-motion";
import Header from "./header";
import Journey from "../journey";
import { Builds } from "../builds";
import { Contact } from "../contact";

export default function CompactLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" grid grid-cols-1 gap-10 md:hidden"
    >
      <Header />
      <Journey />
      <Builds />
      <Contact />
    </motion.div>
  );
}
