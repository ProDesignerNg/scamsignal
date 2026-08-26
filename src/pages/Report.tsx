import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import { Upload, File as FileIcon, X, CheckCircle, ChevronLeft, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { mockCategories, mockStates } from "@/lib/mock-data"

const TOTAL_STEPS = 6

export default function Report() {
  const [, setLocation] = useLocation()
  const [step, setStep] = useState(1)

  const progress = (step / TOTAL_STEPS) * 100

  const handleNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const handleBack = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLocation("/success")
  }

  return (
    <div className="min-h-screen bg-muted/20 py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" /> Home
            </Link>
            <span>/</span>
            <span>Report Incident</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Report an Incident</h1>
          <p className="text-muted-foreground mt-2">
            Your report helps our investigators uncover scams and protect others.
          </p>
        </div>

        <Card className="shadow-lg border-none overflow-hidden">
          <div className="bg-muted/50 p-4 border-b flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Step {step} of {TOTAL_STEPS}</span>
              <span className="text-primary">{Math.round(progress)}% Completed</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Incident Details */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Incident Details</h2>
                    <p className="text-sm text-muted-foreground">Provide general information about what happened.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Incident Category *</Label>
                      <Select id="category" defaultValue="" required>
                        <option value="" disabled>Select category...</option>
                        {mockCategories.map(c => <option key={c} value={c}>{c}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date of Incident *</Label>
                      <Input type="date" id="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select id="state" defaultValue="" required>
                        <option value="" disabled>Select state...</option>
                        {mockStates.map(s => <option key={s} value={s}>{s}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City/LGA</Label>
                      <Input type="text" id="city" placeholder="e.g. Ikeja" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform Used *</Label>
                      <Select id="platform" defaultValue="" required>
                        <option value="" disabled>Select platform...</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="website">Website</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Explain how the scam happened from the beginning..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Indicators */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Scam Indicators</h2>
                    <p className="text-sm text-muted-foreground">Provide details of the scammer (phone, email, bank details). Leave blank if unknown.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="scammer_phone">Scammer's Phone Number</Label>
                      <Input type="tel" id="scammer_phone" placeholder="e.g. 08012345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scammer_email">Scammer's Email Address</Label>
                      <Input type="email" id="scammer_email" placeholder="e.g. fake@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scammer_website">Fraudulent Website URL</Label>
                      <Input type="url" id="scammer_website" placeholder="e.g. https://fake-invest.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scammer_social">Social Media Username</Label>
                      <Input type="text" id="scammer_social" placeholder="e.g. @invest_guru" />
                    </div>
                  </div>

                  <div className="p-4 bg-muted/40 rounded-lg border space-y-4">
                    <h3 className="font-medium">Bank Details Provided by Scammer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bank_name">Bank Name</Label>
                        <Input type="text" id="bank_name" placeholder="e.g. GTBank" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account_name">Account Name</Label>
                        <Input type="text" id="account_name" placeholder="e.g. John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account_number">Account Number</Label>
                        <Input type="text" id="account_number" placeholder="10 digits" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Financial Impact */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Financial Impact</h2>
                    <p className="text-sm text-muted-foreground">Detail any monetary losses associated with this incident.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="money_requested">Amount Requested (₦)</Label>
                      <Input type="number" id="money_requested" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="money_lost">Actual Amount Lost (₦)</Label>
                      <Input type="number" id="money_lost" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment_method">Payment Method</Label>
                      <Select id="payment_method" defaultValue="">
                        <option value="" disabled>Select method...</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="pos">POS</option>
                        <option value="crypto">Cryptocurrency</option>
                        <option value="mobile">Mobile Money</option>
                        <option value="cash">Cash</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-3">
                      <Label>Were you able to recover any money?</Label>
                      <RadioGroup defaultValue="no" className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="rec_yes" />
                          <Label htmlFor="rec_yes" className="font-normal">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="rec_no" />
                          <Label htmlFor="rec_no" className="font-normal">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-3">
                      <Label>Have you reported this to your bank?</Label>
                      <RadioGroup defaultValue="no" className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="bank_yes" />
                          <Label htmlFor="bank_yes" className="font-normal">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="bank_no" />
                          <Label htmlFor="bank_no" className="font-normal">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-3">
                      <Label>Have you reported this to the Police/EFCC?</Label>
                      <RadioGroup defaultValue="no" className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="pol_yes" />
                          <Label htmlFor="pol_yes" className="font-normal">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="pol_no" />
                          <Label htmlFor="pol_no" className="font-normal">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Evidence */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Evidence Upload</h2>
                    <p className="text-sm text-muted-foreground">Upload screenshots of chats, payment receipts, or any other proof.</p>
                  </div>

                  <div className="border-2 border-dashed border-primary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground mb-4">Supported: Images, PDF, Audio (Max 10MB per file)</p>
                    <Button variant="outline" size="sm" type="button">Select Files</Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Uploaded Files (2)</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-background">
                        <div className="flex items-center gap-3">
                          <FileIcon className="h-8 w-8 text-blue-500 p-1.5 bg-blue-50 rounded" />
                          <div>
                            <p className="text-sm font-medium">whatsapp_chat_screenshot.jpg</p>
                            <p className="text-xs text-muted-foreground">1.2 MB</p>
                          </div>
                        </div>
                        <button type="button" className="text-muted-foreground hover:text-destructive">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg bg-background">
                        <div className="flex items-center gap-3">
                          <FileIcon className="h-8 w-8 text-red-500 p-1.5 bg-red-50 rounded" />
                          <div>
                            <p className="text-sm font-medium">bank_receipt.pdf</p>
                            <p className="text-xs text-muted-foreground">0.8 MB</p>
                          </div>
                        </div>
                        <button type="button" className="text-muted-foreground hover:text-destructive">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Contact */}
              {step === 5 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Your Contact Details</h2>
                    <p className="text-sm text-muted-foreground">This is optional and will NEVER be published.</p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-sm flex gap-3 items-start">
                    <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-blue-600" />
                    <p>We collect contact details only to verify complex reports. Your identity will remain confidential and protected under our privacy policy.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reporter_email">Email Address</Label>
                      <Input type="email" id="reporter_email" placeholder="Optional" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reporter_phone">Phone Number</Label>
                      <Input type="tel" id="reporter_phone" placeholder="Optional" />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-4">
                    <Checkbox id="contact_consent" defaultChecked />
                    <Label htmlFor="contact_consent" className="font-normal leading-snug text-muted-foreground">
                      I allow ScamSignal investigators to contact me privately if they need additional information to verify this report.
                    </Label>
                  </div>
                </div>
              )}

              {/* STEP 6: Review */}
              {step === 6 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Review & Submit</h2>
                    <p className="text-sm text-muted-foreground">Review your report details before final submission.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Incident Details", summary: "Investment Fraud in Lagos via WhatsApp" },
                      { title: "Indicators", summary: "Bank: GTBank, Acc: 0123456789" },
                      { title: "Financial Impact", summary: "₦50,000 lost, paid via Bank Transfer" },
                      { title: "Evidence", summary: "2 files uploaded" },
                      { title: "Contact", summary: "Email provided, consent given" }
                    ].map((section, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                        <div>
                          <h4 className="font-semibold text-sm">{section.title}</h4>
                          <p className="text-sm text-muted-foreground mt-0.5">{section.summary}</p>
                        </div>
                        <Button variant="ghost" size="sm" type="button" onClick={() => setStep(i + 1)}>
                          Edit
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-muted/40 rounded-lg space-y-4 border">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="confirm_truth" required />
                      <Label htmlFor="confirm_truth" className="font-normal leading-snug">
                        I confirm that the information in this report is truthful and accurate to the best of my knowledge.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="confirm_consequence" required />
                      <Label htmlFor="confirm_consequence" className="font-normal leading-snug">
                        I understand that submitting false or misleading reports may result in rejection without notice.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="confirm_privacy" required />
                      <Label htmlFor="confirm_privacy" className="font-normal leading-snug">
                        I have read and agree to the Privacy Policy.
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t mt-8">
                {step > 1 ? (
                  <Button variant="outline" type="button" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <Button variant="ghost" asChild>
                    <Link href="/">Cancel</Link>
                  </Button>
                )}
                
                {step < TOTAL_STEPS ? (
                  <Button type="button" onClick={handleNext}>
                    Continue Step {step + 1}
                  </Button>
                ) : (
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 text-white shadow-lg">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Submit Report
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
