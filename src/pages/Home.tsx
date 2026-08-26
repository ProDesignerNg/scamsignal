import React from "react"
import { Link } from "wouter"
import { ShieldCheck, Search, TrendingUp, HeartCrack, MessageSquareWarning, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockAdvisories } from "@/lib/mock-data"

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  HeartCrack,
  MessageSquareWarning,
  ShoppingBag,
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Hero Section */}
      <section className="bg-primary px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
            Protect Yourself from Scams
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Search verified scam advisories or report an incident for investigation. We rely on community reports to keep Nigerians safe online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold text-primary" asChild>
              <Link href="/report">Report an Incident</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/search">Search Advisories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 py-8 -mt-8 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg border-none">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search phone number, website, email, or keyword..." 
                    className="pl-10 h-12 text-base bg-muted/50 border-transparent focus-visible:bg-background"
                  />
                </div>
                <Button size="lg" className="w-full sm:w-auto h-12" asChild>
                  <Link href="/search">Search</Link>
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium mr-1">Popular:</span>
                {["GTBank phishing", "fake investment", "WhatsApp scam", "BVN fraud"].map((term) => (
                  <Badge key={term} variant="secondary" className="font-normal cursor-pointer hover:bg-muted-foreground/20">
                    {term}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Statistics */}
      <section className="px-4 py-8 md:py-12 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Published Advisories", value: "1,284" },
              { label: "Active Investigations", value: "47" },
              { label: "Scam Categories", value: "18" },
              { label: "Reports This Month", value: "312" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center p-6 bg-card border rounded-xl text-center shadow-sm">
                <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="px-4 py-8 border-y bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Trending Scam Types</h2>
          <div className="flex overflow-x-auto pb-4 -mb-4 gap-3 hide-scrollbar">
            {["Investment Fraud", "Romance Scam", "Phishing", "Job Scam", "Lottery Fraud", "Crypto Scam", "BEC Fraud", "POS Fraud"].map((cat) => (
              <Badge key={cat} variant="outline" className="px-4 py-2 text-sm whitespace-nowrap bg-card">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Advisories */}
      <section className="px-4 py-12 md:py-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Recent Advisories</h2>
              <p className="text-muted-foreground">Latest verified public safety warnings.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex" asChild>
              <Link href="/search">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockAdvisories.map((advisory) => {
              const Icon = iconMap[advisory.icon] || ShieldCheck
              return (
                <Card key={advisory.id} className="flex flex-col hover-elevate transition-all group cursor-pointer border-border/60">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="default" className="bg-primary/10 text-primary border-transparent hover:bg-primary/20">
                        Verified
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                      {advisory.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 py-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium">
                      <span>{advisory.category}</span>
                      <span>•</span>
                      <span>{advisory.state}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {advisory.summary}
                    </p>
                  </CardContent>
                  <div className="p-5 pt-4 mt-auto border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">{advisory.date}</span>
                    <Button variant="ghost" size="sm" className="h-8 text-primary px-2 hover:bg-primary/5" asChild>
                      <Link href={`/advisory/${advisory.id}`}>Read More</Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
          <div className="mt-8 text-center sm:hidden">
             <Button variant="outline" className="w-full" asChild>
              <Link href="/search">View All Advisories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
