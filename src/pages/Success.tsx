import React, { useState } from "react"
import { Link } from "wouter"
import { CheckCircle, Copy, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Success() {
  const [copiedRef, setCopiedRef] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const copyToClipboard = (text: string, isRef: boolean) => {
    navigator.clipboard.writeText(text)
    if (isRef) {
      setCopiedRef(true)
      setTimeout(() => setCopiedRef(false), 2000)
    } else {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4 py-12">
      <Card className="max-w-xl w-full shadow-lg border-none animate-in zoom-in-95 duration-500">
        <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
          
          <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight mb-3">Report Submitted Successfully</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Your report has been received and safely stored. Our investigation team will review it shortly.
          </p>

          <div className="w-full space-y-4 mb-8">
            <div className="bg-card border rounded-xl p-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground mb-1">Reference Number</p>
                <p className="text-xl font-mono font-bold tracking-wider">INC-2026-00124</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 text-primary border-primary/30 hover:bg-primary/10"
                onClick={() => copyToClipboard("INC-2026-00124", true)}
              >
                {copiedRef ? <CheckCircle className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copiedRef ? "Copied" : "Copy"}
              </Button>
            </div>

            <div className="bg-card border rounded-xl p-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground mb-1">Access Code</p>
                <p className="text-xl font-mono font-bold tracking-wider text-amber-600">ABF9-KPL2</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 text-amber-600 border-amber-600/30 hover:bg-amber-50"
                onClick={() => copyToClipboard("ABF9-KPL2", false)}
              >
                {copiedCode ? <CheckCircle className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copiedCode ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-left mb-8 text-amber-900 w-full">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Keep these details safe</p>
              <p>You will need both your Reference Number and Access Code to check your report status or add more evidence later. <strong className="font-semibold">Do not share the access code.</strong></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Button size="lg" className="flex-1 bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/status">Check Report Status</Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
