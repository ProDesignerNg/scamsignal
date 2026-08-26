import React from "react"
import { ShieldCheck, Target, Search, FileCheck, GlobeLock, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function About() {
  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        
        {/* Mission */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
            <ShieldCheck className="h-10 w-10 text-primary -rotate-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About ScamSignal Nigeria</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A public safety platform dedicated to documenting, investigating, and exposing digital fraud and scams operating within Nigeria.
          </p>
        </div>

        {/* How it Works */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">How Investigations Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileCheck, title: "1. Report Received", desc: "Citizens submit detailed incident reports with evidence." },
              { icon: Search, title: "2. Initial Review", desc: "Our team filters out spam and categorizes the incident." },
              { icon: Target, title: "3. Investigation", desc: "We cross-reference data, trace accounts, and gather OSINT." },
              { icon: GlobeLock, title: "4. Publication", desc: "Verified threats are published as public safety advisories." }
            ].map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="text-center border-none shadow-md bg-card">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Privacy Commitment</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We take the privacy and security of our reporters seriously. Any contact information provided during the reporting process is strictly confidential. Published advisories completely omit victim details and mask sensitive scammer indicators to prevent vigilantism while remaining informative.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Verification Standard</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We do not publish unverified claims. Every advisory on this platform requires corroborating evidence—such as multiple independent reports, verifiable digital footprints, or irrefutable documented proof. This high bar ensures our advisories remain trusted by the public and law enforcement.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <Card className="shadow-sm">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is my report anonymous?",
                  a: "Yes. While we optionally ask for your contact details in case our investigators need clarification, your identity is never published, shared with third parties, or exposed to the scammers."
                },
                {
                  q: "How long does an investigation take?",
                  a: "Depending on the complexity of the scam and the amount of evidence provided, initial review takes 24-48 hours. Full verification and publication can take anywhere from 3 to 14 days."
                },
                {
                  q: "Can I update my report after submission?",
                  a: "Yes. Using the Reference Number and Access Code provided after submission, you can visit the 'Check Status' page and upload additional evidence at any time."
                },
                {
                  q: "Are all submitted reports published?",
                  a: "No. We only publish reports that pass our verification standards and present a clear, ongoing public threat. Isolated personal disputes or unprovable claims are kept in our internal database but not published."
                },
                {
                  q: "Can ScamSignal help me recover my money?",
                  a: "No. ScamSignal is an intelligence and public safety platform, not a law enforcement agency or recovery service. We strongly advise reporting financial losses to your bank and the EFCC immediately. Beware of 'recovery scammers' who claim they can retrieve your funds for a fee."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-[15px]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="bg-muted p-6 rounded-xl border border-border/50 text-sm text-muted-foreground text-center">
          <p>
            <strong>Legal Disclaimer:</strong> ScamSignal Nigeria provides information for educational and public safety purposes. While we strive for accuracy, the contents of advisories represent the findings of our investigators based on available evidence and community reports. We are not liable for actions taken based on this information.
          </p>
        </div>

      </div>
    </div>
  )
}
