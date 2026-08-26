import React, { useState } from "react"
import { Search, CheckCircle2, Clock, ShieldAlert, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Status() {
  const [isChecked, setIsChecked] = useState(false)
  const [refNum, setRefNum] = useState("")
  const [code, setCode] = useState("")

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (refNum && code) {
      setIsChecked(true)
    }
  }

  return (
    <div className="min-h-screen bg-muted/10 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Check Report Status</h1>
          <p className="text-muted-foreground">
            Enter your reference number and access code to track your investigation.
          </p>
        </div>

        <Card className="shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleCheck} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ref">Reference Number</Label>
                <Input 
                  id="ref" 
                  placeholder="e.g. INC-2026-00124" 
                  value={refNum}
                  onChange={(e) => setRefNum(e.target.value)}
                  required 
                  className="font-mono text-base uppercase h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Access Code</Label>
                <Input 
                  id="code" 
                  placeholder="e.g. ABF9-KPL2" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required 
                  className="font-mono text-base uppercase h-12"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                Check Status
              </Button>
            </form>
          </CardContent>
        </Card>

        {isChecked && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            
            {/* Info Request Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm">
              <div className="flex items-start gap-3 text-amber-900">
                <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-amber-800">Additional Information Requested</h4>
                  <p className="text-sm">Investigators need a clearer copy of the bank receipt to proceed with verification.</p>
                </div>
              </div>
              <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white shrink-0">
                <Upload className="mr-2 h-4 w-4" />
                Upload Evidence
              </Button>
            </div>

            {/* Timeline */}
            <Card className="shadow-sm">
              <CardHeader className="border-b bg-muted/20 pb-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Investigation Timeline</span>
                  <span className="text-sm font-normal text-muted-foreground font-mono">INC-2026-00124</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-border">
                  
                  {/* Step 1: Received */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl border shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-foreground">Report Received</h4>
                        <span className="text-xs font-medium text-muted-foreground">Jun 28, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Your report was successfully submitted and logged in our system.</p>
                    </div>
                  </div>

                  {/* Step 2: Under Review */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl border shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-foreground">Initial Review</h4>
                        <span className="text-xs font-medium text-muted-foreground">Jul 1, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">A preliminary review confirmed the details meet our investigation criteria.</p>
                    </div>
                  </div>

                  {/* Step 3: Active Investigation (Current) */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 animate-pulse">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary/5 p-4 rounded-xl border-2 border-primary/30 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-primary">Active Investigation</h4>
                        <span className="text-xs font-medium text-primary">In Progress</span>
                      </div>
                      <p className="text-sm text-foreground/80">Investigators are currently cross-referencing indicators and gathering more intelligence.</p>
                    </div>
                  </div>

                  {/* Step 4: Verification (Pending) */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl border">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-foreground">Verification</h4>
                        <span className="text-xs font-medium text-muted-foreground">Pending</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Final fact-checking and legal review before public disclosure.</p>
                    </div>
                  </div>

                  {/* Step 5: Published (Pending) */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl border">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-foreground">Published</h4>
                        <span className="text-xs font-medium text-muted-foreground">Pending</span>
                      </div>
                      <p className="text-sm text-muted-foreground">The report is converted into a verified public advisory.</p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
