import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Award, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Clock,
  Zap
} from "lucide-react";

interface QuestionQualityIndicatorProps {
  difficulty: "Easy" | "Medium" | "Hard";
  qualityRating: number;
  solvedByUsers: number;
  averageTime: number;
  isQualityVerified?: boolean;
  expertReviewed?: boolean;
}

export const QuestionQualityIndicator: React.FC<QuestionQualityIndicatorProps> = ({
  difficulty,
  qualityRating,
  solvedByUsers,
  averageTime,
  isQualityVerified = false,
  expertReviewed = false,
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 dark:text-green-400";
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400";
      case "Hard":
        return "text-red-600 dark:text-red-400";
    }
  };

  const getQualityBadge = () => {
    if (qualityRating >= 4.5) {
      return { label: "Excellent Quality", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" };
    } else if (qualityRating >= 4.0) {
      return { label: "High Quality", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" };
    } else if (qualityRating >= 3.5) {
      return { label: "Good Quality", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" };
    } else {
      return { label: "Standard", color: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300" };
    }
  };

  const qualityBadge = getQualityBadge();

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Badge className={qualityBadge.color}>
          <Star className="h-3 w-3 mr-1 fill-current" />
          {qualityBadge.label}
        </Badge>
        
        {isQualityVerified && (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
        
        {expertReviewed && (
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            <Award className="h-3 w-3 mr-1" />
            Expert Reviewed
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{qualityRating.toFixed(1)}/5.0</span>
        </div>
        
        <div className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-blue-500" />
          <span>{solvedByUsers.toLocaleString()} solved</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-orange-500" />
          <span>~{averageTime}s</span>
        </div>
      </div>
    </div>
  );
};

interface TestQualityCardProps {
  totalQuestions: number;
  averageQuality: number;
  expertCuratedCount: number;
  verifiedCount: number;
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export const TestQualityCard: React.FC<TestQualityCardProps> = ({
  totalQuestions,
  averageQuality,
  expertCuratedCount,
  verifiedCount,
  difficultyDistribution,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-600" />
          Test Quality Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-accent rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {averageQuality.toFixed(1)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Average Quality
            </div>
          </div>

          <div className="text-center p-3 bg-accent rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {expertCuratedCount}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Expert Curated
            </div>
          </div>

          <div className="text-center p-3 bg-accent rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {verifiedCount}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Verified Questions
            </div>
          </div>

          <div className="text-center p-3 bg-accent rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {totalQuestions}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Total Questions
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-sm font-medium mb-2">Difficulty Distribution</div>
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Easy</span>
                <span>{difficultyDistribution.easy}%</span>
              </div>
              <div className="h-2 bg-green-100 dark:bg-green-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600"
                  style={{ width: `${difficultyDistribution.easy}%` }}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Medium</span>
                <span>{difficultyDistribution.medium}%</span>
              </div>
              <div className="h-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-600"
                  style={{ width: `${difficultyDistribution.medium}%` }}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Hard</span>
                <span>{difficultyDistribution.hard}%</span>
              </div>
              <div className="h-2 bg-red-100 dark:bg-red-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-600"
                  style={{ width: `${difficultyDistribution.hard}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
