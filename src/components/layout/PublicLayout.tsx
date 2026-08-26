import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import { ShieldCheck, Menu, X, Search, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search Advisories" },
  { href: "/report", label: "Report Incident" },
  { href: "/status", label: "Check Status" },
  { href: "/about", label: "About" },
]

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground tracking-tight">ScamSignal</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild>
              <Link href="/report">Report Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Button className="w-full" asChild onClick={() => setIsMenuOpen(false)}>
                <Link href="/report">Report an Incident</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-card py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">ScamSignal Nigeria</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/about" className="hover:text-primary">Privacy</Link>
            <Link href="/report" className="hover:text-primary">Report Incident</Link>
            <Link href="/about" className="hover:text-primary">Contact</Link>
            <Link href="/about" className="hover:text-primary">Disclaimer</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ScamSignal Nigeria. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating FAB on Mobile (except report page) */}
      {location !== "/report" && (
        <div className="md:hidden fixed bottom-6 right-4 z-50">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-transform active:scale-95"
            asChild
          >
            <Link href="/report">
              <AlertCircle className="h-6 w-6" />
              <span className="sr-only">Report Incident</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
