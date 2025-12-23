import { Picture } from "../picture";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <section
      className="relative flex flex-col items-center container"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col w-full "
      >
        <div className="flex flex-col justify-center ">
          <p className="font-semibold text-2xl">
            Hey, How goes it! it&apos;s me,
          </p>
          <p className="text-4xl lg:text-7xl uppercase font-extralight ">
            Yara.
          </p>
        </div>
        <div className="relative flex flex-row-reverse justify-between gap-2 w-full items-center">
          <div className="flex justify-end -mr-14 -mt-6">
            <Picture />
          </div>
          <p className="absolute -bottom-10 left-0 w-1/5 text-4xl capitalize font-light ">
            I build neat stuff for the internet.
          </p>
        </div>

        <div className="flex flex-col  gap-5 mt-20 ">
          <p className="text-lg capitalize">
            I&apos;m a web-centric software developer, passionate
            problem-solver, and lifelong learning advocate.
            <br />
            <span className="text-red-700 uppercase">Fueled by curiosity.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
