import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import PerformanceAnalytics from "./PerformanceAnalytics";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Mock data - in real app this would come from API
const mockPerformanceData = {
  testHistory: [
    {
      testName: "UPSC Prelims Full Mock",
      date: "2024-01-15",
      score: 82,
      rank: 45,
      totalAttempts: 1234,
    },
    {
      testName: "SSC CGL Tier 1 Practice",
      date: "2024-01-12",
      score: 78,
      rank: 89,
      totalAttempts: 2156,
    },
    {
      testName: "Bank PO Quantitative",
      date: "2024-01-10",
      score: 85,
      rank: 23,
      totalAttempts: 987,
    },
    {
      testName: "Comprehensive 100 Question Test",
      date: "2024-01-08",
      score: 72,
      rank: 156,
      totalAttempts: 2345,
    },
    {
      testName: "UPSC Prelims Mini Mock",
      date: "2024-01-05",
      score: 68,
      rank: 234,
      totalAttempts: 756,
    },
  ],
  subjectStrength: [
    {
      subject: "English",
      score: 85,
      averageTime: 45,
      totalQuestions: 120,
      improvement: 8,
    },
    {
      subject: "Reasoning",
      score: 78,
      averageTime: 52,
      totalQuestions: 100,
      improvement: 12,
    },
    {
      subject: "Mathematics",
      score: 72,
      averageTime: 68,
      totalQuestions: 95,
      improvement: -3,
    },
    {
      subject: "General Knowledge",
      score: 82,
      averageTime: 38,
      totalQuestions: 110,
      improvement: 5,
    },
    {
      subject: "Current Affairs",
      score: 65,
      averageTime: 42,
      totalQuestions: 85,
      improvement: -5,
    },
  ],
  overallStats: {
    totalTests: 12,
    averageScore: 77.8,
    bestScore: 89,
    totalQuestions: 850,
    averageRank: 125,
    improvement: 6.5,
  },
  weakAreas: [
    {
      subject: "Mathematics",
      topic: "Algebra & Equations",
      score: 58,
      recommendedTests: [
        "Math Advanced Practice",
        "Algebra Mastery Test",
        "Quantitative Aptitude Drill",
      ],
    },
    {
      subject: "Current Affairs",
      topic: "International Relations",
      score: 62,
      recommendedTests: [
        "Current Affairs Monthly",
        "International News Quiz",
        "Geopolitics Assessment",
      ],
    },
    {
      subject: "Reasoning",
      topic: "Logical Puzzles",
      score: 65,
      recommendedTests: [
        "Reasoning Master Test",
        "Puzzle Solving Practice",
        "Logic & Deduction Quiz",
      ],
    },
  ],
};

export default function PerformanceDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/mock-tests")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold"
              >
                Performance Dashboard
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                Track your progress and identify areas for improvement
              </motion.p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PerformanceAnalytics data={mockPerformanceData} />
        </motion.div>
      </div>
      <Footer />
      <LegalFooter />
    </div>
  );
}
