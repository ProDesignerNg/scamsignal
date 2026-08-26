import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import { ShieldCheck, Menu, X, LayoutDashboard, FileText, Database, ShieldAlert, Settings, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin", label: "New Reports", icon: FileText },
  { href: "/admin", label: "Investigations", icon: ShieldAlert },
  { href: "/admin", label: "Published", icon: Database },
  { href: "/admin", label: "Settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-[100dvh] flex bg-background">
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 w-full h-16 border-b bg-card z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span className="font-bold text-lg">Admin Portal</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-[100dvh] w-64 border-r bg-card shadow-sm z-50 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center gap-2 px-6 border-b">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">ScamSignal</span>
          <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground ml-auto">Admin</span>
        </div>

        <div className="p-4 flex flex-col h-[calc(100vh-64px)] justify-between">
          <nav className="space-y-1">
            {adminLinks.map((link) => {
              const Icon = link.icon
              const isActive = location === link.href || location.startsWith(link.href + "/")
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="pb-4">
            <Button variant="outline" className="w-full justify-start text-muted-foreground" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Public Site
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 md:pt-0 pt-16">
        {children}
      </main>
    </div>
  )
}
