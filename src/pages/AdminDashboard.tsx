import React from "react"
import { Link } from "wouter"
import { Users, FileText, Database, XCircle, Clock, Eye, Edit } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const mockReports = [
  { id: "INC-124", cat: "Investment Fraud", state: "Lagos", date: "2 hrs ago", status: "New" },
  { id: "INC-123", cat: "Romance Scam", state: "Abuja", date: "5 hrs ago", status: "Under Review" },
  { id: "INC-120", cat: "Phishing", state: "Rivers", date: "1 day ago", status: "Investigation" },
  { id: "INC-118", cat: "Job Scam", state: "Kano", date: "2 days ago", status: "Verification" },
  { id: "INC-115", cat: "Crypto Scam", state: "Oyo", date: "3 days ago", status: "Published" },
]

const statusColors: Record<string, string> = {
  "New": "bg-blue-100 text-blue-800 hover:bg-blue-100",
  "Under Review": "bg-amber-100 text-amber-800 hover:bg-amber-100",
  "Investigation": "bg-purple-100 text-purple-800 hover:bg-purple-100",
  "Verification": "bg-indigo-100 text-indigo-800 hover:bg-indigo-100",
  "Published": "bg-green-100 text-green-800 hover:bg-green-100",
}

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6 bg-muted/20 min-h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <Button>Generate Report</Button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "New Reports (Today)", value: "23", icon: FileText, color: "text-blue-600" },
          { label: "Pending Reviews", value: "47", icon: Users, color: "text-amber-600" },
          { label: "Published Advisories", value: "1,284", icon: Database, color: "text-green-600" },
          { label: "Rejected Reports", value: "156", icon: XCircle, color: "text-red-600" },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-full bg-muted/50 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Reports Table */}
        <Card className="lg:col-span-2 shadow-sm flex flex-col">
          <CardHeader className="border-b bg-card pb-4">
            <CardTitle className="text-lg">Recent Incident Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-muted/50 border-b uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium">ID</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Location</th>
                  <th className="px-6 py-3 font-medium">Submitted</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockReports.map((report) => (
                  <tr key={report.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium">{report.id}</td>
                    <td className="px-6 py-4">{report.cat}</td>
                    <td className="px-6 py-4">{report.state}</td>
                    <td className="px-6 py-4 text-muted-foreground">{report.date}</td>
                    <td className="px-6 py-4">
                      <Badge className={`font-medium border-transparent ${statusColors[report.status]}`}>
                        {report.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/review/${report.id}`}>
                          Review <Eye className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Activity & Performance */}
        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4 border rounded-lg bg-muted/20 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Avg Investigation Time</p>
                <p className="text-3xl font-bold text-foreground">8.3 <span className="text-lg font-medium text-muted-foreground">days</span></p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm flex-1">
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {[
                  { time: "10 min ago", action: "Advisory published", user: "Admin Sarah", id: "ADV-089" },
                  { time: "45 min ago", action: "Report rejected", user: "Admin John", id: "INC-122" },
                  { time: "2 hrs ago", action: "Status updated to Investigation", user: "Admin Sarah", id: "INC-120" },
                  { time: "3 hrs ago", action: "Evidence requested", user: "Admin Mike", id: "INC-119" },
                ].map((act, i) => (
                  <li key={i} className="p-4 flex gap-3 items-start hover:bg-muted/10">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Edit className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{act.action} <span className="font-mono text-muted-foreground text-xs bg-muted px-1 py-0.5 rounded ml-1">{act.id}</span></p>
                      <p className="text-xs text-muted-foreground mt-1">{act.user} • {act.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  )
}
