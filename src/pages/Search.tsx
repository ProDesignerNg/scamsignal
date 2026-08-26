import React, { useState } from "react"
import { Link } from "wouter"
import { Search as SearchIcon, Filter, MapPin, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { mockAdvisories, mockCategories, mockStates } from "@/lib/mock-data"

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("investment fraud")

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h4 className="font-medium text-sm">Status</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="status-verified" defaultChecked />
            <Label htmlFor="status-verified" className="font-normal">Verified Only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="status-review" />
            <Label htmlFor="status-review" className="font-normal">Under Review</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="font-medium text-sm">Category</h4>
        <div className="space-y-2">
          {mockCategories.slice(0, 5).map(cat => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox id={`cat-${cat}`} defaultChecked={cat === "Investment Fraud"} />
              <Label htmlFor={`cat-${cat}`} className="font-normal">{cat}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="font-medium text-sm">Location</h4>
        <Select defaultValue="all">
          <option value="all">All States</option>
          {mockStates.map(s => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>

      <div className="pt-4 flex gap-3">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full">Clear</Button>
      </div>
    </div>
  )

  return (
    <div className="bg-background min-h-screen">
      {/* Search Header */}
      <div className="border-b bg-card py-6 px-4 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 max-w-3xl">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-background" 
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            <Button size="lg" className="h-12 px-8 hidden sm:flex">Search</Button>
            
            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="h-12 px-3 sm:hidden">
                  <Filter className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:max-w-md overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle>Filter Advisories</SheetTitle>
                </SheetHeader>
                <FilterContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-40 bg-card border rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </h3>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">
                Showing 4 results for <span className="font-bold">"{searchQuery}"</span>
              </h2>
              <Select defaultValue="newest" className="w-40 h-10 hidden sm:flex">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="relevance">Relevance</option>
              </Select>
            </div>

            <div className="space-y-4">
              {mockAdvisories.map((advisory) => (
                <Card key={advisory.id} className="hover-elevate transition-all overflow-hidden border-border/60">
                  <div className="flex flex-col sm:flex-row">
                    <CardContent className="p-5 flex-1 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className="bg-primary/10 text-primary border-transparent hover:bg-primary/20">
                          <ShieldCheck className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground">{advisory.category}</span>
                        <span className="text-muted-foreground text-xs hidden sm:inline">•</span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="mr-1 h-3 w-3" /> {advisory.state}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 leading-tight">
                        <Link href={`/advisory/${advisory.id}`} className="hover:text-primary transition-colors">
                          {advisory.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {advisory.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs font-medium text-muted-foreground">{advisory.date}</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/advisory/${advisory.id}`}>View Advisory</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-8">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" className="w-10 p-0">1</Button>
              <Button variant="outline" className="w-10 p-0">2</Button>
              <Button variant="outline" className="w-10 p-0 hidden sm:flex">3</Button>
              <span className="px-2 text-muted-foreground">...</span>
              <Button variant="outline" className="w-10 p-0">5</Button>
              <Button variant="outline">Next</Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
