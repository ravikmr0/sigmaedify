import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  FileText,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
}

interface MockTestProps {
  testId: string;
  testName: string;
  duration: number; // in minutes
  questions: Question[];
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  onComplete: (results: TestResults) => void;
}

export interface TestResults {
  testId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  skippedQuestions: number;
  timeTaken: number;
  subjectPerformance: Record<
    string,
    {
      total: number;
      correct: number;
      score: number;
    }
  >;
  answeredQuestions: {
    questionId: number;
    userAnswer: number | null;
    isCorrect: boolean;
  }[];
}

const MockTestInterface: React.FC<MockTestProps> = ({
  testId,
  testName,
  duration,
  questions,
  category,
  difficulty,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [markedForReview, setMarkedForReview] = useState<boolean[]>(
    Array(questions.length).fill(false),
  );
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0 || isTestCompleted) {
      handleTestCompletion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTestCompleted]);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const toggleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestionIndex] =
      !newMarkedForReview[currentQuestionIndex];
    setMarkedForReview(newMarkedForReview);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmitTest = () => {
    setIsSubmitDialogOpen(true);
  };

  const confirmSubmit = () => {
    setIsSubmitDialogOpen(false);
    handleTestCompletion();
  };

  const handleTestCompletion = () => {
    setIsTestCompleted(true);

    // Calculate results
    const timeTaken = duration * 60 - timeLeft;
    const subjectPerformance: Record<
      string,
      { total: number; correct: number; score: number }
    > = {};
    let correctAnswers = 0;

    const answeredQuestions = questions.map((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.correctAnswer;

      if (isCorrect) correctAnswers++;

      // Track subject performance
      if (!subjectPerformance[question.subject]) {
        subjectPerformance[question.subject] = {
          total: 0,
          correct: 0,
          score: 0,
        };
      }

      subjectPerformance[question.subject].total++;
      if (isCorrect) subjectPerformance[question.subject].correct++;

      return {
        questionId: question.id,
        userAnswer,
        isCorrect,
      };
    });

    // Calculate subject scores
    Object.keys(subjectPerformance).forEach((subject) => {
      const { total, correct } = subjectPerformance[subject];
      subjectPerformance[subject].score = (correct / total) * 100;
    });

    const results: TestResults = {
      testId,
      score: (correctAnswers / questions.length) * 100,
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers:
        questions.length -
        correctAnswers -
        answers.filter((a) => a === null).length,
      skippedQuestions: answers.filter((a) => a === null).length,
      timeTaken,
      subjectPerformance,
      answeredQuestions,
    };

    onComplete(results);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${remainingSeconds}s`;
  };

  const getQuestionStatus = (index: number) => {
    if (markedForReview[index]) return "review";
    if (answers[index] !== null) return "answered";
    return "unanswered";
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (isTestCompleted) {
    return null; // The parent component will show results
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with timer and progress */}
      <div className="bg-card shadow-sm p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-bold">{testName}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{category}</Badge>
              <Badge
                variant="outline"
                className={cn(
                  difficulty === "Easy" &&
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
                  difficulty === "Medium" &&
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
                  difficulty === "Hard" &&
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
                )}
              >
                {difficulty}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span
                className={`font-mono ${timeLeft < 300 ? "text-red-500 font-bold" : ""}`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
            <Button variant="destructive" onClick={handleSubmitTest}>
              Submit Test
            </Button>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm mt-1">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}% completed</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Question and options */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">
                    Question {currentQuestionIndex + 1}: {currentQuestion.text}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-accent rounded-md">
                      {currentQuestion.subject}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-md cursor-pointer transition-colors ${answers[currentQuestionIndex] === index ? "bg-primary/10 border-primary" : "hover:bg-accent"}`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestionIndex] === index ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}`}
                      >
                        {answers[currentQuestionIndex] === index && (
                          <CheckCircle className="h-4 w-4" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="flex justify-between w-full">
                <Button
                  variant="outline"
                  onClick={toggleMarkForReview}
                  className={
                    markedForReview[currentQuestionIndex]
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      : ""
                  }
                >
                  <Flag className="mr-2 h-4 w-4" />
                  {markedForReview[currentQuestionIndex]
                    ? "Marked for Review"
                    : "Mark for Review"}
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Helpful Tips Section */}
              {answers[currentQuestionIndex] === null && (
                <div className="w-full p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-xs text-blue-900 dark:text-blue-200">
                      <span className="font-medium">Tip:</span> Read the question carefully and eliminate obviously wrong answers first.
                    </div>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>

        {/* Question palette */}
        <div className="w-64 bg-card border-l p-4 overflow-y-auto hidden md:block">
          <h3 className="font-semibold mb-3">Question Palette</h3>
          <div className="grid grid-cols-4 gap-2">
            {questions.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "h-10 w-10 p-0",
                    currentQuestionIndex === index && "border-primary",
                    status === "answered" &&
                      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
                    status === "review" &&
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
                  )}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900 rounded"></div>
              <span>Marked for Review</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-white dark:bg-gray-800 border rounded"></div>
              <span>Not Visited</span>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="destructive"
              className="w-full"
              onClick={handleSubmitTest}
            >
              Submit Test
            </Button>
          </div>
        </div>
      </div>

      {/* Submit confirmation dialog */}
      <AlertDialog
        open={isSubmitDialogOpen}
        onOpenChange={setIsSubmitDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit your test? This action cannot be
              undone.
              {answers.filter((a) => a === null).length > 0 && (
                <div className="mt-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                  <AlertTriangle className="h-5 w-5" />
                  <span>
                    You have {answers.filter((a) => a === null).length}{" "}
                    unanswered questions.
                  </span>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSubmit}>
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MockTestInterface;
