import React, { useState } from "react"
import { Link, useParams } from "wouter"
import { ArrowLeft, Save, Globe, Smartphone, Monitor, Tablet, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockCategories } from "@/lib/mock-data"

export default function AdminEditor() {
  const { id } = useParams()
  const [device, setDevice] = useState("desktop")

  return (
    <div className="h-full flex flex-col bg-muted/10">
      
      {/* Topbar */}
      <div className="h-16 border-b bg-card px-6 flex items-center justify-between shrink-0 sticky top-0 md:top-0 z-20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/admin/review/${id}`}><ArrowLeft className="h-5 w-5" /></Link>
          </Button>
          <div>
            <h1 className="font-bold">Draft Advisory</h1>
            <p className="text-xs text-muted-foreground">Source: {id}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Save className="mr-2 h-4 w-4" /> Save Draft
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Globe className="mr-2 h-4 w-4" /> Publish Advisory
          </Button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* Editor (Left) */}
        <div className="flex-1 overflow-y-auto p-6 border-r">
          <div className="max-w-2xl mx-auto space-y-8 pb-12">
            
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Basic Details</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Headline (Public Title)</Label>
                  <Input defaultValue="Fake Investment Platform Targeting Young Professionals in Lagos" className="font-medium text-lg h-12" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select defaultValue="Investment Fraud">
                      {mockCategories.map(c => <option key={c} value={c}>{c}</option>)}
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Confidence Level</Label>
                    <Select defaultValue="confirmed">
                      <option value="confirmed">Confirmed Verified</option>
                      <option value="high">High Confidence</option>
                      <option value="probable">Probable</option>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Executive Summary (Max 200 chars)</Label>
                  <Textarea className="min-h-[80px]" defaultValue="A fraudulent scheme promising 50% weekly returns, primarily targeting individuals via WhatsApp and Telegram groups." />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Narrative</h2>
              <div className="space-y-2">
                <Label>Public Description (Rich Text)</Label>
                <div className="border rounded-md bg-card">
                  <div className="border-b px-3 py-2 bg-muted/30 flex gap-2">
                    {/* Fake toolbar */}
                    <div className="h-6 w-6 bg-muted rounded"></div>
                    <div className="h-6 w-6 bg-muted rounded"></div>
                    <div className="h-6 w-6 bg-muted rounded"></div>
                  </div>
                  <Textarea className="border-0 rounded-t-none min-h-[250px] focus-visible:ring-0 focus-visible:ring-offset-0" 
                    defaultValue="ScamSignal investigators have confirmed a coordinated investment fraud operation targeting young professionals primarily in the Lagos metropolitan area..." 
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Masked Indicators</h2>
                <Button variant="outline" size="sm"><Plus className="mr-1 h-3 w-3" /> Add Indicator</Button>
              </div>
              <Card className="shadow-sm">
                <CardContent className="p-0 divide-y">
                  {[
                    { type: "Phone", val: "08031234821", masked: "0803 ••• 4821" },
                    { type: "Website", val: "vipcrypto-earn.net", masked: "vipcrypto-e•••.net" },
                    { type: "Bank Acct", val: "0034567821", masked: "003 ••••• 821" }
                  ].map((ind, i) => (
                    <div key={i} className="p-3 flex items-center justify-between bg-card">
                      <div className="flex gap-4 items-center">
                        <span className="text-xs font-semibold text-muted-foreground w-16">{ind.type}</span>
                        <Input defaultValue={ind.masked} className="h-8 font-mono text-sm w-48" />
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500 h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground">Indicators must be masked before publication to comply with safety guidelines.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Safety Advice</h2>
              <div className="space-y-2">
                <Label>Actionable Bullet Points (One per line)</Label>
                <Textarea className="min-h-[120px]" defaultValue="Never invest in platforms promising guaranteed, risk-free returns exceeding 10% monthly.
Do not trust screenshots of bank alerts or dashboard balances shared in social media groups.
Always verify the company's registration with the SEC Nigeria." />
              </div>
            </section>

          </div>
        </div>

        {/* Preview (Right) */}
        <div className="hidden lg:flex flex-col w-[450px] xl:w-[600px] bg-muted/30">
          <div className="h-14 border-b flex justify-center items-center gap-1 bg-card">
            <Button variant={device === "desktop" ? "secondary" : "ghost"} size="icon" onClick={() => setDevice("desktop")} className="rounded-full">
              <Monitor className="h-4 w-4" />
            </Button>
            <Button variant={device === "tablet" ? "secondary" : "ghost"} size="icon" onClick={() => setDevice("tablet")} className="rounded-full">
              <Tablet className="h-4 w-4" />
            </Button>
            <Button variant={device === "mobile" ? "secondary" : "ghost"} size="icon" onClick={() => setDevice("mobile")} className="rounded-full">
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 flex justify-center items-start">
            <div className={`
              bg-background border shadow-xl rounded-md transition-all duration-300 origin-top
              ${device === "mobile" ? "w-[375px] h-[812px]" : device === "tablet" ? "w-[768px] scale-[0.65]" : "w-[1024px] scale-[0.5] xl:scale-[0.55]"}
            `}>
              {/* Fake Preview Content */}
              <div className="p-8 space-y-6 opacity-60 pointer-events-none">
                <div className="w-24 h-6 bg-primary rounded"></div>
                <div className="w-3/4 h-10 bg-foreground/20 rounded"></div>
                <div className="w-full h-32 bg-muted rounded"></div>
                <div className="w-full h-4 bg-muted rounded"></div>
                <div className="w-5/6 h-4 bg-muted rounded"></div>
                <div className="w-4/6 h-4 bg-muted rounded"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium shadow-sm border border-border">
                  Live Preview Mode
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
