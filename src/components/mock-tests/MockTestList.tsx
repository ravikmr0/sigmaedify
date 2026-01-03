import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  BarChart,
  Timer,
  Filter,
  Search,
  BookOpen,
  Trophy,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface MockTest {
  id: string;
  title: string;
  category: string;
  duration: string;
  questionsCount: number;
  difficulty: "Easy" | "Medium" | "Hard";
  participants: number;
  subjects: string[];
  premium?: boolean;
  featured?: boolean;
  new?: boolean;
  averageScore?: number;
  topScore?: number;
  qualityRating?: number;
  tags?: string[];
}

const mockTests: MockTest[] = [
  {
    id: "specific",
    title: "Comprehensive 100 Question Test",
    category: "General",
    duration: "60 mins",
    questionsCount: 100,
    difficulty: "Medium",
    participants: 2345,
    subjects: ["English", "Reasoning", "Mathematics", "GK/GS"],
    featured: true,
    new: true,
    averageScore: 68.5,
    topScore: 98,
    qualityRating: 4.7,
    tags: ["High Quality", "Detailed Analysis", "Expert Curated"],
  },
  {
    id: "1",
    title: "UPSC Prelims Full Mock",
    category: "UPSC",
    duration: "2 hours",
    questionsCount: 100,
    difficulty: "Hard",
    participants: 1234,
    subjects: ["Polity", "Geography", "Economy", "History", "Science"],
    featured: true,
    averageScore: 58.3,
    topScore: 95,
    qualityRating: 4.9,
    tags: ["Previous Year Pattern", "IAS Toppers Reviewed"],
  },
  {
    id: "2",
    title: "SSC CGL Tier 1 Practice",
    category: "SSC",
    duration: "1 hour",
    questionsCount: 50,
    difficulty: "Medium",
    participants: 2156,
    subjects: [
      "Quantitative Aptitude",
      "English",
      "Reasoning",
      "General Awareness",
    ],
    averageScore: 72.4,
    topScore: 100,
    qualityRating: 4.6,
    tags: ["Latest Pattern", "Detailed Solutions"],
  },
  {
    id: "3",
    title: "Bank PO Quantitative",
    category: "Banking",
    duration: "30 mins",
    questionsCount: 25,
    difficulty: "Easy",
    participants: 987,
    subjects: ["Quantitative Aptitude"],
  },
  {
    id: "4",
    title: "UPSC Prelims Mini Mock",
    category: "UPSC",
    duration: "30 mins",
    questionsCount: 25,
    difficulty: "Medium",
    participants: 756,
    subjects: ["Polity", "Geography", "Economy"],
  },
  {
    id: "5",
    title: "RRB NTPC General Awareness",
    category: "Railways",
    duration: "45 mins",
    questionsCount: 40,
    difficulty: "Medium",
    participants: 1432,
    subjects: ["General Awareness", "Current Affairs"],
  },
  {
    id: "6",
    title: "CTET Paper I Full Mock",
    category: "Teaching",
    duration: "2.5 hours",
    questionsCount: 150,
    difficulty: "Hard",
    participants: 892,
    subjects: [
      "Child Development",
      "Mathematics",
      "EVS",
      "Language I",
      "Language II",
    ],
    premium: true,
  },
  {
    id: "7",
    title: "Bank Clerk Reasoning",
    category: "Banking",
    duration: "20 mins",
    questionsCount: 20,
    difficulty: "Easy",
    participants: 654,
    subjects: ["Reasoning"],
  },
  {
    id: "8",
    title: "SSC CHSL Tier 1 Mock",
    category: "SSC",
    duration: "1 hour",
    questionsCount: 60,
    difficulty: "Medium",
    participants: 1876,
    subjects: [
      "Quantitative Aptitude",
      "English",
      "Reasoning",
      "General Awareness",
    ],
  },
  {
    id: "9",
    title: "UPSC Ethics Case Studies",
    category: "UPSC",
    duration: "1 hour",
    questionsCount: 10,
    difficulty: "Hard",
    participants: 543,
    subjects: ["Ethics", "Integrity", "Aptitude"],
    premium: true,
    new: true,
  },
];

const getDifficultyColor = (difficulty: MockTest["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-500";
    case "Medium":
      return "text-yellow-500";
    case "Hard":
      return "text-red-500";
    default:
      return "text-primary";
  }
};

const getDifficultyBadgeClass = (difficulty: MockTest["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
    case "Hard":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
    default:
      return "";
  }
};

export default function MockTestList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    MockTest["difficulty"] | null
  >(null);

  const categories = Array.from(
    new Set(mockTests.map((test) => test.category)),
  );
  const difficulties: MockTest["difficulty"][] = ["Easy", "Medium", "Hard"];

  const filteredTests = mockTests.filter((test) => {
    const matchesSearch =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.subjects.some((subject) =>
        subject.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === null || test.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === null || test.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleStartTest = (testId: string) => {
    // In a real app, this would navigate to the specific test
    // For now, we'll just navigate to a mock test page
    navigate(`/mock-test/${testId}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Performance Dashboard Quick Access Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Track Your Progress</h3>
                <p className="text-sm text-muted-foreground">
                  View detailed analytics and performance insights
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/performance-dashboard")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Trophy className="h-4 w-4 mr-2" />
              View Performance Dashboard
            </Button>
          </div>
        </motion.div>

        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Mock Tests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Practice with exam-pattern questions and track your progress with
            our comprehensive mock tests
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by test name, category, or subject..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedDifficulty === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty(null)}
              >
                All Levels
              </Badge>
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={
                    selectedDifficulty === difficulty ? "default" : "outline"
                  }
                  className={`cursor-pointer ${selectedDifficulty !== difficulty ? getDifficultyBadgeClass(difficulty) : ""}`}
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Tests</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>

          {/* All Tests Tab */}
          <TabsContent value="all">
            {filteredTests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map((test, index) => (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl mb-2">
                              {test.title}
                              {test.new && (
                                <Badge className="ml-2 bg-blue-500">NEW</Badge>
                              )}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge
                                variant="outline"
                                className="bg-primary/10"
                              >
                                {test.category}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={getDifficultyBadgeClass(
                                  test.difficulty,
                                )}
                              >
                                {test.difficulty}
                              </Badge>
                              {test.premium && (
                                <Badge
                                  variant="outline"
                                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                                >
                                  Premium
                                </Badge>
                              )}
                            </div>
                          </div>
                          {test.featured && (
                            <Badge className="bg-yellow-500">
                              <Trophy className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {test.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BarChart className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {test.questionsCount} Questions
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {test.participants.toLocaleString()} Attempts
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {test.subjects.length} Subjects
                            </span>
                          </div>
                          {test.qualityRating && (
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">
                                {test.qualityRating.toFixed(1)}/5.0
                              </span>
                            </div>
                          )}
                          {test.averageScore && (
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-blue-500" />
                              <span className="text-sm text-muted-foreground">
                                Avg: {test.averageScore}%
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex flex-wrap gap-1">
                            {test.subjects.slice(0, 3).map((subject, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-accent rounded-full"
                              >
                                {subject}
                              </span>
                            ))}
                            {test.subjects.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-accent rounded-full">
                                +{test.subjects.length - 3} more
                              </span>
                            )}
                          </div>
                          {test.tags && test.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {test.tags.map((tag, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                >
                                  <Award className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        <Button
                          className="w-full"
                          variant={test.premium ? "outline" : "default"}
                          onClick={() => handleStartTest(test.id)}
                        >
                          {test.premium ? "Unlock Premium Test" : "Start Test"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-accent rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No tests found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setSelectedDifficulty(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Featured Tests Tab */}
          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests
                .filter((test) => test.featured)
                .map((test, index) => (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Same card structure as above */}
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      {/* Card content similar to above */}
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          {/* Other tabs with similar structure */}
          <TabsContent value="premium">{/* Premium tests */}</TabsContent>

          <TabsContent value="free">{/* Free tests */}</TabsContent>

          <TabsContent value="new">{/* New tests */}</TabsContent>
        </Tabs>

        {/* Premium Features Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Upgrade to Premium</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get access to expert-curated mock tests with detailed explanations
              and performance analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Expert-Curated Tests
              </h3>
              <p className="text-muted-foreground text-sm">
                Access mock tests designed by subject matter experts and exam
                toppers
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Get comprehensive performance reports with subject-wise analysis
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rank Comparison</h3>
              <p className="text-muted-foreground text-sm">
                Compare your performance with other aspirants and track your
                progress
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <LegalFooter />
    </div>
  );
}
