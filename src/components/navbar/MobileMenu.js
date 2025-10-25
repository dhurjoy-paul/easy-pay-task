"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import NavLink from "./NavLink";

export default function MobileMenu({ open, menu }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full bg-white shadow-md md:hidden z-50 border-t"
        >
          <div className="flex flex-col items-center py-5 space-y-5">
            {menu.map((m) => (
              <NavLink
                key={m.name}
                href={m.href}
                onClick={() => setOpen(false)}
              >
                {m.name}
              </NavLink>
            ))}
            <Button className="w-6/12">Contact Us</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}