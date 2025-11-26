import { motion } from "framer-motion";
export default function Journey() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative md:flex flex-col container gap-10 overflow-x-scroll"
    >
      <div className="w-full flex flex-col gap-16 ">
        {/* Experience */}
        <div className="flex flex-col gap-3 lg:gap-8 font-thin w-full ">
          <span className="flex w-full text-lg font-semibold">
            ✶ Experience ✶
          </span>
          <ul className="grid grid-cols-3 gap-y-5 md:gap-x-56 text-xs lg:text-base overflow-x-scroll md:overflow-x-hidden">
            {/* Devency */}
            <li className="flex flex-col gap-1">
              <span className="font-semibold">
                DEVENCY <span className="hidden lg:inline">(Remote)</span>
              </span>
              <span>AUG 2025 - NOV 2025</span>
              <span>CAIRO, EGYPT</span>
              <span className="italic">Software Developer</span>
            </li>

            {/* CrypticWeb3 */}
            <li className="flex flex-col gap-1">
              <span className="font-semibold">
                CRYPTICWEB3 <span className="hidden lg:inline">(Remote)</span>
              </span>
              <span>JAN 2024 - AUG 2025</span>
              <span>NETHERLANDS</span>
              <span className="italic">Full Stack Developer</span>
            </li>

            {/* Self Employed */}
            <li className="flex flex-col gap-1">
              <span className="font-semibold">SELF-EMPLOYED</span>
              <span>JUN 2023 - PRESENT</span>
              <span>WORLDWIDE, EARTH</span>
              <span className="italic">Full Stack Developer</span>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-3 lg:gap-8 font-thin w-full">
          <span className="flex w-full text-lg font-semibold">
            ✶ Technologies ✶
          </span>
          <ul className="grid grid-cols-3 md:grid-cols-3 gap-y-3 lg:gap-x-56 text-base">
            <li>TypeScript</li>
            <li>SQL</li>
            <li>Java</li>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Currently Learning */}
        <div className="flex flex-col gap-3 lg:gap-8 font-thin w-full">
          <span className="flex w-full text-lg font-semibold">
            ✶ Currently Learning ✶
          </span>
          <ul className="grid grid-cols-3 gap-y-3 gap-x-8 md:gap-x-56 text-base">
            <li>Clean Architecture</li>
            <li>Data Structures & Algorithms</li>
            <li>Advanced SQL</li>
            <li>System Design Fundamentals</li>
            <li>Scalable Backend Patterns</li>
            <li>Test-driven Development</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
