import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  XCircle,
  Clock,
  Award,
  BarChart,
  Users,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import { TestResults as TestResultsType } from "./MockTestInterface";

interface TestResultsProps {
  results: TestResultsType;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subject: string;
  }[];
  onRetry: () => void;
  onViewLeaderboard: () => void;
  onTakeAnotherTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
  results,
  questions,
  onRetry,
  onViewLeaderboard,
  onTakeAnotherTest,
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${remainingSeconds}s`;
  };

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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Test Results</h1>
          <p className="text-muted-foreground">
            Here's how you performed on this test
          </p>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div
                  className={`text-5xl font-bold mb-2 ${getScoreColor(results.score)}`}
                >
                  {Math.round(results.score)}%
                </div>
                <Progress
                  value={results.score}
                  className="h-2 mb-4"
                  indicatorClassName={getProgressColor(results.score)}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Questions Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Correct</span>
                  </div>
                  <span className="font-semibold">
                    {results.correctAnswers} / {results.totalQuestions}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span>Incorrect</span>
                  </div>
                  <span className="font-semibold">
                    {results.incorrectAnswers} / {results.totalQuestions}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-2"></div>
                    <span>Skipped</span>
                  </div>
                  <span className="font-semibold">
                    {results.skippedQuestions} / {results.totalQuestions}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Time & Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Time Taken</span>
                  </div>
                  <span className="font-semibold">
                    {formatTime(results.timeTaken)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Your Rank</span>
                  </div>
                  <span className="font-semibold">42 / 1,245</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-500 mr-2" />
                    <span>Percentile</span>
                  </div>
                  <span className="font-semibold">96.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Performance Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-indigo-500 mr-2" />
                    <span>Accuracy</span>
                  </div>
                  <span className="font-semibold">
                    {Math.round((results.correctAnswers / (results.totalQuestions - results.skippedQuestions)) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-orange-500 mr-2" />
                    <span>Speed</span>
                  </div>
                  <span className="font-semibold">
                    {Math.round(results.timeTaken / results.totalQuestions)}s/Q
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    <span>Trend</span>
                  </div>
                  <span className="font-semibold text-green-600">+12%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(results.subjectPerformance).map(
                ([subject, data]) => (
                  <div key={subject}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{subject}</span>
                      <span
                        className={`font-semibold ${getScoreColor(data.score)}`}
                      >
                        {Math.round(data.score)}% ({data.correct}/{data.total})
                      </span>
                    </div>
                    <Progress
                      value={data.score}
                      className="h-2"
                      indicatorClassName={getProgressColor(data.score)}
                    />
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Question Review */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Questions</TabsTrigger>
                <TabsTrigger value="correct">
                  Correct ({results.correctAnswers})
                </TabsTrigger>
                <TabsTrigger value="incorrect">
                  Incorrect ({results.incorrectAnswers})
                </TabsTrigger>
                <TabsTrigger value="skipped">
                  Skipped ({results.skippedQuestions})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {questions.map((question, index) => {
                  const userAnswer =
                    results.answeredQuestions[index].userAnswer;
                  const isCorrect = results.answeredQuestions[index].isCorrect;
                  const isSkipped = userAnswer === null;

                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-2 mb-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${isCorrect ? "bg-green-100 text-green-700" : isSkipped ? "bg-gray-100 text-gray-700" : "bg-red-100 text-red-700"}`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : isSkipped ? (
                            <span className="text-xs font-bold">S</span>
                          ) : (
                            <XCircle className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Question {index + 1}: {question.text}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Subject: {question.subject}
                          </p>
                        </div>
                      </div>

                      <div className="ml-8 space-y-2">
                        {question.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 border rounded-md ${optIndex === question.correctAnswer ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : optIndex === userAnswer ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800" : ""}`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center ${optIndex === question.correctAnswer ? "border-green-500 text-green-500" : optIndex === userAnswer ? "border-red-500 text-red-500" : "border-gray-300"}`}
                              >
                                {optIndex === question.correctAnswer && (
                                  <CheckCircle className="h-3 w-3" />
                                )}
                                {optIndex === userAnswer &&
                                  optIndex !== question.correctAnswer && (
                                    <XCircle className="h-3 w-3" />
                                  )}
                              </div>
                              <span
                                className={`${optIndex === question.correctAnswer ? "text-green-700 dark:text-green-300" : optIndex === userAnswer ? "text-red-700 dark:text-red-300" : ""}`}
                              >
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}

                        {/* Explanation */}
                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-800">
                          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                            Explanation:
                          </p>
                          <p className="text-sm mt-1 text-blue-700 dark:text-blue-200">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>

              <TabsContent value="correct" className="space-y-6">
                {questions
                  .filter(
                    (_, index) => results.answeredQuestions[index].isCorrect,
                  )
                  .map((question, i) => {
                    const originalIndex = questions.findIndex(
                      (q) => q.id === question.id,
                    );
                    return (
                      <div key={question.id} className="border rounded-lg p-4">
                        {/* Similar structure as above, but only for correct questions */}
                        <div className="flex items-start gap-2 mb-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center mt-0.5">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              Question {originalIndex + 1}: {question.text}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Subject: {question.subject}
                            </p>
                          </div>
                        </div>

                        {/* Rest of the content similar to above */}
                      </div>
                    );
                  })}
              </TabsContent>

              <TabsContent value="incorrect" className="space-y-6">
                {/* Similar structure for incorrect questions */}
              </TabsContent>

              <TabsContent value="skipped" className="space-y-6">
                {/* Similar structure for skipped questions */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" onClick={onRetry}>
            <ArrowRight className="mr-2 h-4 w-4" />
            Retry This Test
          </Button>
          <Button variant="default" onClick={onViewLeaderboard}>
            <BarChart className="mr-2 h-4 w-4" />
            View Leaderboard
          </Button>
          <Button variant="default" onClick={onTakeAnotherTest}>
            <ArrowRight className="mr-2 h-4 w-4" />
            Take Another Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
