import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className="LayoutWrap">
        <main>{children}</main>
      </div>
    </AnimatePresence>
  );
}
