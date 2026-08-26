import React, { useState } from "react"
import { Link } from "wouter"
import { 
  ChevronLeft, ShieldCheck, MapPin, Calendar, ExternalLink, AlertTriangle, Info, Clock, CheckCircle2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { mockAdvisories } from "@/lib/mock-data"

export default function Advisory() {
  const advisory = mockAdvisories[0] // Mocking ID 1

  return (
    <div className="bg-muted/10 min-h-screen py-8">
      <div className="container mx-auto max-w-4xl px-4">
        
        {/* Header Navigation */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-foreground" asChild>
            <Link href="/search">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Search
            </Link>
          </Button>
        </div>

        {/* Advisory Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className="bg-primary text-white border-transparent py-1 px-3">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              Verified Advisory
            </Badge>
            <Badge variant="outline" className="py-1 px-3 bg-card">
              {advisory.category}
            </Badge>
            <Badge variant="outline" className="py-1 px-3 bg-card">
              <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
              {advisory.state} State
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {advisory.title}
          </h1>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1.5 h-4 w-4" />
            Published: {advisory.date}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Summary */}
            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Info className="mr-2 h-5 w-5 text-primary" />
                  Executive Summary
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  {advisory.summary} This scheme has defrauded over 40 reported victims in the past three months. The scammers use high-pressure tactics and fabricated testimonials to convince victims to deposit funds into microfinance bank accounts.
                </p>
              </CardContent>
            </Card>

            {/* Narrative */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">What Happened</h2>
              <div className="prose prose-neutral max-w-none text-foreground/90">
                <p>
                  ScamSignal investigators have confirmed a coordinated investment fraud operation targeting young professionals primarily in the Lagos metropolitan area. The perpetrators create highly sophisticated fake company profiles on Instagram and LinkedIn, presenting themselves as legitimate forex and crypto trading firms.
                </p>
                <p>
                  Victims are lured into private WhatsApp and Telegram groups where accomplices (often using stolen photos) share fake alerts of massive daily profits. Once a victim shows interest, they are directed to a spoofed dashboard website that simulates account growth.
                </p>
                <p>
                  When the victim attempts to withdraw their "profits," the scammers demand additional "tax," "upgrade," or "clearance" fees. Once these fees are paid, the victim is blocked across all channels and the website is taken offline.
                </p>
              </div>
            </section>

            <Separator />

            {/* Contact Methods */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">How Victims Were Contacted</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["WhatsApp Direct Messages", "Sponsored Instagram Ads", "Telegram Investment Groups", "LinkedIn InMail"].map((method) => (
                  <li key={method} className="flex items-start bg-card border rounded-lg p-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm font-medium">{method}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            {/* Safety Recommendations */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight flex items-center text-amber-600">
                <AlertTriangle className="mr-2 h-6 w-6" />
                Safety Recommendations
              </h2>
              <ul className="space-y-3">
                {[
                  "Never invest in platforms promising guaranteed, risk-free returns exceeding 10% monthly.",
                  "Do not trust screenshots of bank alerts or dashboard balances shared in social media groups.",
                  "Always verify the company's registration with the SEC Nigeria or CAC before parting with money.",
                  "If you are asked to pay a fee to withdraw your own funds, you are dealing with a scammer."
                ].map((rec, i) => (
                  <li key={i} className="flex items-start bg-amber-50/50 p-4 rounded-lg border border-amber-100">
                    <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold mr-3 shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-amber-900">{rec}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Indicators */}
            <Card className="border-t-4 border-t-red-500 shadow-sm sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-red-600 flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  Known Indicators
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Identifying details used by the scammers. Sensitive info is partially masked for privacy.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Phone Numbers</h4>
                    <ul className="space-y-1">
                      <li className="text-sm font-mono bg-muted p-1.5 rounded">0803 ••• 4821</li>
                      <li className="text-sm font-mono bg-muted p-1.5 rounded">0908 ••• 3312</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Email Addresses</h4>
                    <ul className="space-y-1">
                      <li className="text-sm font-mono bg-muted p-1.5 rounded">invest••••@gmail.com</li>
                      <li className="text-sm font-mono bg-muted p-1.5 rounded">support@quickr•••.com</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Social Handles</h4>
                    <ul className="space-y-1">
                      <li className="text-sm font-mono bg-muted p-1.5 rounded flex items-center justify-between">
                        @invest•••• 
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </li>
                      <li className="text-sm font-mono bg-muted p-1.5 rounded flex items-center justify-between">
                        @profit••••
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Bank Accounts</h4>
                    <ul className="space-y-1">
                      <li className="text-sm font-mono bg-muted p-1.5 rounded">
                        <div className="font-semibold text-xs mb-0.5">Opay (Paycom)</div>
                        003 ••••• 821
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Related Advisories */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Advisories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockAdvisories.slice(1, 3).map((adv) => (
              <Card key={adv.id} className="hover-elevate transition-all border-border/60">
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-3">{adv.category}</Badge>
                  <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                    <Link href={`/advisory/${adv.id}`} className="hover:text-primary transition-colors">
                      {adv.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="mr-1 h-3 w-3" /> {adv.state} • {adv.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}
