import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Clock,
  Award,
  BarChart,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

interface PerformanceData {
  testHistory: {
    testName: string;
    date: string;
    score: number;
    rank: number;
    totalAttempts: number;
  }[];
  subjectStrength: {
    subject: string;
    score: number;
    averageTime: number;
    totalQuestions: number;
    improvement: number;
  }[];
  overallStats: {
    totalTests: number;
    averageScore: number;
    bestScore: number;
    totalQuestions: number;
    averageRank: number;
    improvement: number;
  };
  weakAreas: {
    subject: string;
    topic: string;
    score: number;
    recommendedTests: string[];
  }[];
}

interface PerformanceAnalyticsProps {
  data: PerformanceData;
}

const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ data }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-blue-600 dark:text-blue-400";
    if (score >= 40) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600";
    if (score >= 60) return "bg-blue-600";
    if (score >= 40) return "bg-yellow-600";
    return "bg-red-600";
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    } else if (trend < 0) {
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    }
    return <div className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Overall Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {data.overallStats.totalTests}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.overallStats.totalQuestions} questions attempted
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getScoreColor(data.overallStats.averageScore)}`}>
              {data.overallStats.averageScore.toFixed(1)}%
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getTrendIcon(data.overallStats.improvement)}
              <p className={`text-xs ${data.overallStats.improvement > 0 ? "text-green-600" : "text-red-600"}`}>
                {data.overallStats.improvement > 0 ? "+" : ""}{data.overallStats.improvement}% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Best Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {data.overallStats.bestScore}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Personal best achievement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              #{data.overallStats.averageRank}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Among all test takers
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="subject-wise">
        <TabsList>
          <TabsTrigger value="subject-wise">Subject-wise Analysis</TabsTrigger>
          <TabsTrigger value="test-history">Test History</TabsTrigger>
          <TabsTrigger value="weak-areas">Areas to Improve</TabsTrigger>
        </TabsList>

        {/* Subject-wise Analysis */}
        <TabsContent value="subject-wise" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {data.subjectStrength.map((subject) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{subject.subject}</span>
                          <div className="flex items-center gap-3">
                            <span className={`font-semibold ${getScoreColor(subject.score)}`}>
                              {subject.score.toFixed(1)}%
                            </span>
                            {getTrendIcon(subject.improvement)}
                          </div>
                        </div>
                        <Progress
                          value={subject.score}
                          className="h-2"
                          indicatorClassName={getProgressColor(subject.score)}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>{subject.totalQuestions} questions</span>
                          <span>Avg time: {subject.averageTime}s/question</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test History */}
        <TabsContent value="test-history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Test Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.testHistory.map((test, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{test.testName}</h4>
                      <p className="text-sm text-muted-foreground">{test.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(test.score)}`}>
                          {test.score}%
                        </div>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">
                          #{test.rank}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          of {test.totalAttempts}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weak Areas */}
        <TabsContent value="weak-areas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Areas Requiring Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.weakAreas.map((area, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">
                            {area.subject} - {area.topic}
                          </h4>
                          <span className="text-red-600 font-semibold">
                            {area.score}%
                          </span>
                        </div>
                        <Progress
                          value={area.score}
                          className="h-1.5 mb-3"
                          indicatorClassName="bg-red-600"
                        />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            Recommended tests:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {area.recommendedTests.map((test, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                              >
                                {test}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceAnalytics;
