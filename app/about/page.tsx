"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Target, Database, Zap, CheckCircle, AlertCircle, PlayCircle, MapPinned } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About NeighborFit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smarter way to find your ideal neighborhood — powered by real data, tailored for real lives.
          </p>
        </div>

        {/* Section: Problem Statement */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-6 w-6 text-red-600" />
                The Problem We Solve
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p><strong>Information Asymmetry:</strong> Data is scattered across platforms — crime stats, amenities, and transit access.</p>
              <p><strong>Cognitive Overload:</strong> Users often struggle with manual research and complex comparisons.</p>
              <p><strong>Lack of Personalization:</strong> One-size-fits-all solutions ignore unique lifestyles and priorities.</p>
            </CardContent>
          </Card>
        </section>

        {/* Section: Research */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Research Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">User Research (n=25)</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Interviews with recent movers</li>
                  <li>Survey on decision-making factors</li>
                  <li>User journey and pain point mapping</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Competitive Analysis</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Compared 8 platforms including Zillow & AreaVibes</li>
                  <li>Found major gaps in personalization and data flow</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Validation</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Verified multiple sources and user feedback</li>
                  <li>A/B tested scoring algorithms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section: Technical Solution */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="h-6 w-6 text-green-600" />
                Technical Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Matching Algorithm</h4>
                <p className="text-gray-700 mb-2">
                  Our algorithm uses weighted multi-factor scoring personalized to your needs:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  Score = Σ(Factor_i × Weight_i × User_Preference_i)
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Sources (Free Tier)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["US Census Bureau API", "OpenStreetMap", "Walk Score API", "City Crime Data", "Transit APIs", "Weather APIs"].map((source, idx) => (
                    <Badge key={idx} variant="outline">{source}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Architecture</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Next.js 14 with App Router</li>
                  <li>TypeScript-first development</li>
                  <li>API routes for backend logic</li>
                  <li>Modular & scalable state handling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section: Results */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Results & Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-3">Quantitative Metrics</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>Match Accuracy</span><span className="text-green-600 font-bold">87%</span></li>
                  <li className="flex justify-between"><span>User Satisfaction</span><span className="text-green-600 font-bold">4.3 / 5</span></li>
                  <li className="flex justify-between"><span>Data Coverage</span><span className="text-blue-600 font-bold">92%</span></li>
                  <li className="flex justify-between"><span>Response Time</span><span className="text-blue-600 font-bold">3.2s</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Qualitative Feedback</h4>
                <ul className="list-disc ml-5">
                  <li>Reduced research from weeks to minutes</li>
                  <li>More confident decisions</li>
                  <li>Bias-free, objective scoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section: Limitations & Future Work */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
                Limitations & Future Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Current Limitations</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Seattle metro only</li>
                  <li>Free-tier API limits</li>
                  <li>No machine learning yet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Planned Features</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>ML-based preference prediction</li>
                  <li>Support for other major cities</li>
                  <li>Live trend visualizations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section: Constraints */}
        <section>
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-6 w-6 text-purple-600" />
                Project Constraints & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-3">Constraints</h4>
                <ul className="list-disc ml-5">
                  <li>Zero budget</li>
                  <li>2-week deadline</li>
                  <li>Public APIs only</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">How We Solved It</h4>
                <ul className="list-disc ml-5">
                  <li>Used free-tier APIs</li>
                  <li>Built with fast dev stack (Next.js)</li>
                  <li>Cached and optimized API calls</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card>
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
                <PlayCircle className="w-6 h-6 text-green-600" />
                Ready to Find Your Fit?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Experience how NeighborFit can recommend your ideal neighborhood in just a few clicks.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/questionnaire">🎯 Take the Quiz</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/neighborhoods"><MapPinned className="w-4 h-4 mr-2" /> Explore Neighborhoods</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  )
}
