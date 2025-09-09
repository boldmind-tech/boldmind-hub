"use client";
import { motion } from "framer-motion";

export default function MotionDebug() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-brand-primary">Framer Motion Debug</h1>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {["Primary","Secondary","White"].map((label, i) => (
          <motion.div
            key={label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 24, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={
              label === "Primary"   ? "rounded-2xl bg-brand-primary p-4 text-white shadow-soft" :
              label === "Secondary" ? "rounded-2xl bg-brand-secondary p-4 text-black shadow-soft" :
                                      "rounded-2xl border border-brand-primary bg-brand-white p-4 text-black shadow-soft"
            }
          >
            {label}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
