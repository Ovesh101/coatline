"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { navLinks as links } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ease } from "@/lib/motion";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/";
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change (compare with a ref to avoid redundant renders)
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      {/* ───────── DESKTOP NAV ───────── */}
      <header
        className={cn(
          "sticky top-0 z-40 hidden transition-colors duration-300 md:block",
          scrolled
            ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
            : "bg-transparent",
        )}
      >
        <div
          className="mx-auto flex h-[72px] items-center justify-between px-10"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-[var(--color-ink)]"
          >
            {site.name}
          </Link>
          <nav className="flex items-center gap-10">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors",
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-[var(--color-cta)] transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          <Button asChild size="sm" variant="primary">
            <Link href="/contact">Get a quote</Link>
          </Button>
        </div>
      </header>

      {/* ───────── MOBILE NAV ───────── */}
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 flex justify-center transition-[padding] duration-500 md:hidden",
          scrolled ? "pt-3" : "pt-0",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled
              ? "mx-4 w-[calc(100%-32px)] rounded-full border border-[var(--color-line)] bg-[var(--color-bg)]/92 pl-5 pr-2 py-2 shadow-lg shadow-black/5 backdrop-blur-lg"
              : "w-full border-b border-transparent bg-[var(--color-bg)]/0 px-5 py-4",
          )}
        >
          <Link
            href="/"
            className="font-display text-[19px] font-bold tracking-tight text-[var(--color-ink)]"
          >
            {site.name}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "inline-flex items-center justify-center rounded-full transition-all",
              scrolled
                ? "h-10 w-10 bg-[var(--color-ink)] text-[var(--color-bg)]"
                : "h-10 w-10 text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5",
            )}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* Mobile menu sheet — controlled by AnimatePresence so exit animates */}
      <AnimatePresence>
        {open && (
          <Dialog.Root open={open} onOpenChange={setOpen} modal>
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount id="mobile-menu">
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.45, ease }}
                  className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-hidden text-[var(--color-bg)] shadow-2xl"
                  style={{ background: "var(--color-frame)" }}
                >
                  <Dialog.Title className="sr-only">Main menu</Dialog.Title>

                  <div className="flex items-center justify-between px-6 py-5">
                    <p className="font-display text-base font-bold tracking-tight text-[var(--color-bg)]">
                      {site.name}
                    </p>
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 text-[var(--color-bg)]/90 transition-colors hover:bg-white/10"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M1 1l12 12M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="px-6 pt-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bg)]/50">
                      Menu
                    </p>
                  </div>

                  <nav className="mt-3 flex flex-1 flex-col divide-y divide-white/8">
                    {links.map((l, i) => {
                      const active = isActive(pathname, l.href);
                      return (
                        <motion.div
                          key={l.href}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 24 }}
                          transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease }}
                        >
                          <Link
                            href={l.href}
                            onClick={() => setOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className="group flex items-center justify-between px-6 py-5"
                          >
                            <span className="flex items-center gap-4">
                              <span className="w-6 text-[10px] font-semibold tabular-nums text-[var(--color-bg)]/40">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={cn(
                                  "font-display text-3xl font-semibold transition-colors",
                                  active
                                    ? "text-[var(--color-cta)]"
                                    : "text-[var(--color-bg)] group-hover:text-[var(--color-cta)]",
                                )}
                              >
                                {l.label}
                              </span>
                            </span>
                            <ArrowUpRight
                              className={cn(
                                "h-5 w-5 transition-all",
                                active
                                  ? "text-[var(--color-cta)] opacity-100"
                                  : "text-[var(--color-bg)]/40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                              )}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, delay: 0.35, ease }}
                    className="mt-auto flex flex-col gap-3 border-t border-white/10 bg-black/10 px-6 py-6"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-cta)] font-medium text-white transition-colors hover:bg-[var(--color-cta-hover)]"
                    >
                      Get a free quote
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl ring-1 ring-white/15 text-[var(--color-bg)] transition-colors hover:bg-white/5"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${site.whatsapp}`}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl ring-1 ring-white/15 text-[var(--color-bg)] transition-colors hover:bg-white/5"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">WhatsApp</span>
                      </a>
                    </div>
                    <p className="mt-2 text-[11px] text-[var(--color-bg)]/50">
                      {site.phone} · {site.address.city}
                    </p>
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </AnimatePresence>

      {/* reserve layout space for the fixed mobile header */}
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <motion.path
        d="M3 7h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={open ? { d: "M5 5l10 10" } : { d: "M3 7h14" }}
        transition={{ duration: 0.35, ease }}
      />
      <motion.path
        d="M3 13h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={open ? { d: "M5 15l10 -10" } : { d: "M3 13h9" }}
        transition={{ duration: 0.35, ease }}
      />
    </svg>
  );
}
