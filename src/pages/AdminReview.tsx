import React from "react"
import { Link, useParams } from "wouter"
import { ArrowLeft, User, MapPin, Download, Link as LinkIcon, ShieldCheck, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function AdminReview() {
  const { id } = useParams()

  return (
    <div className="p-6 space-y-6 bg-muted/20 min-h-full">
      <div className="flex items-center gap-4 mb-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin"><ArrowLeft className="h-5 w-5" /></Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Review Report: {id}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-transparent">Under Review</Badge>
            <span className="text-sm text-muted-foreground">Submitted on Jun 28, 2026 at 14:30</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT PANEL: Report Data */}
        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader className="bg-muted/30 border-b pb-4">
              <CardTitle className="text-base flex items-center justify-between">
                Incident Details
                <Badge variant="secondary">Investment Fraud</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Location</p>
                  <p className="flex items-center"><MapPin className="mr-1.5 h-4 w-4 text-muted-foreground" /> Lagos (Ikeja)</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Platform Used</p>
                  <p className="capitalize">WhatsApp</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Date of Incident</p>
                  <p>Jun 15, 2026</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Financial Impact</p>
                  <p className="text-red-600 font-medium">₦ 150,000 lost</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-muted-foreground font-medium mb-1 text-sm">Description</p>
                <div className="bg-muted/30 p-4 rounded-md text-sm leading-relaxed border">
                  They added me to a WhatsApp group called "VIP Crypto Earners". The admin posted screenshots of people cashing out double their investments in 45 minutes. I sent 150k to the Opay account they provided. When I tried to withdraw, they said I needed to pay a 50k clearance fee. That's when I knew it was a scam.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="bg-muted/30 border-b pb-4">
              <CardTitle className="text-base">Indicators</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y text-sm">
                <li className="p-4 flex justify-between">
                  <span className="text-muted-foreground font-medium">Scammer Phone</span>
                  <span className="font-mono">0803 123 4821</span>
                </li>
                <li className="p-4 flex justify-between">
                  <span className="text-muted-foreground font-medium">Scammer Website</span>
                  <span className="font-mono text-blue-600">https://vipcrypto-earn.net</span>
                </li>
                <li className="p-4 flex justify-between bg-red-50/50">
                  <span className="text-muted-foreground font-medium">Bank Details</span>
                  <div className="text-right">
                    <span className="font-mono block">003 456 7821</span>
                    <span className="text-xs text-muted-foreground">Opay (John Doe)</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-sm">
              <CardHeader className="bg-muted/30 border-b pb-3 p-4">
                <CardTitle className="text-sm">Reporter Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Identity Masked</span>
                </div>
                <p className="text-muted-foreground">j••••@gmail.com</p>
                <Badge variant="secondary" className="mt-2 text-xs">Consent: Yes</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="bg-muted/30 border-b pb-3 p-4">
                <CardTitle className="text-sm">Evidence (2)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs h-8">
                  <Download className="mr-2 h-3 w-3" /> chat_proof.jpg
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs h-8">
                  <Download className="mr-2 h-3 w-3" /> opay_receipt.pdf
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* RIGHT PANEL: Actions & Checklist */}
        <div className="space-y-6">
          <Card className="shadow-sm border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
              <CardTitle className="text-base flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                Verification Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {[
                "Indicators verified (Phone/URL/Bank)",
                "Story consistent with known scam patterns",
                "Evidence reviewed and corroborates story",
                "Checked against duplicate reports",
                "Legal review complete"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Checkbox id={`check-${i}`} />
                  <Label htmlFor={`check-${i}`} className="font-normal leading-snug cursor-pointer">
                    {item}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="bg-muted/30 border-b pb-4">
              <CardTitle className="text-base">Internal Notes</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Textarea placeholder="Add investigation notes here..." className="mb-3 min-h-[100px]" />
              <Button size="sm" variant="secondary">Save Note</Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100 pb-4 p-4">
              <CardTitle className="text-sm flex items-center text-amber-900">
                <AlertTriangle className="mr-2 h-4 w-4 text-amber-600" />
                Potential Duplicates (1)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-4 text-sm flex items-center justify-between hover:bg-muted/50">
                <div>
                  <p className="font-medium text-amber-900">INC-110</p>
                  <p className="text-xs text-amber-700">Same Opay Account Number</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-amber-700">
                  <LinkIcon className="h-4 w-4 mr-1" /> Compare
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
              <Link href={`/admin/editor/${id}`}>Convert to Public Advisory</Link>
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50">Approve for Inv.</Button>
              <Button variant="outline" className="flex-1 border-amber-200 text-amber-700 hover:bg-amber-50">Request Info</Button>
              <Button variant="outline" className="flex-1 border-red-200 text-red-700 hover:bg-red-50">Reject</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
