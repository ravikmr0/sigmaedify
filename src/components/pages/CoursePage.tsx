import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  CheckCircle,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  List,
  Lock,
  Users,
  Star,
  Download,
  Share2,
  Bookmark,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Video {
  id: string;
  title: string;
  duration: string;
  driveLink: string;
  isCompleted: boolean;
  isLocked: boolean;
  description?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

interface CourseData {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  totalDuration: string;
  modules: Module[];
  thumbnail: string;
}

// Course data with Google Drive video links - You can manually update these links
const coursesData: Record<string, CourseData> = {
  "upsc-cse": {
    id: "upsc-cse",
    title: "UPSC Civil Services Complete Course",
    category: "UPSC",
    description: "Comprehensive preparation for all three stages of the Civil Services Examination - Prelims, Mains, and Interview.",
    instructor: "Dr. Rajesh Kumar",
    rating: 4.8,
    students: 12500,
    totalDuration: "120+ hours",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    modules: [
      {
        id: "m1",
        title: "Module 1: Introduction to UPSC CSE",
        description: "Understanding the exam pattern, syllabus, and preparation strategy",
        videos: [
          {
            id: "v1",
            title: "Class 1: UPSC CSE Overview & Exam Pattern",
            duration: "45:00",
            driveLink: "https://drive.google.com/file/d/1vhOLHRMfMrcuV9NmlbtwpOerEGHUlH8u/view?usp=sharing",
            isCompleted: false,
            isLocked: false,
            description: "Complete overview of UPSC Civil Services Examination pattern and stages.",
          },
          {
            id: "v2",
            title: "Class 2: Syllabus Deep Dive - Prelims",
            duration: "52:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_2/preview",
            isCompleted: false,
            isLocked: false,
            description: "Detailed analysis of Prelims syllabus with subject-wise breakdown.",
          },
          {
            id: "v3",
            title: "Class 3: Preparation Strategy & Timeline",
            duration: "48:15",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_3/preview",
            isCompleted: false,
            isLocked: false,
            description: "Month-by-month preparation strategy for UPSC aspirants.",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Indian Polity & Constitution",
        description: "Comprehensive coverage of Indian Constitution and Political System",
        videos: [
          {
            id: "v4",
            title: "Class 1: Historical Background of Constitution",
            duration: "55:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_4/preview",
            isCompleted: false,
            isLocked: false,
            description: "Journey from British rule to the making of Indian Constitution.",
          },
          {
            id: "v5",
            title: "Class 2: Preamble & Fundamental Rights",
            duration: "58:20",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_5/preview",
            isCompleted: false,
            isLocked: false,
            description: "Understanding the soul of Constitution and citizens' rights.",
          },
          {
            id: "v6",
            title: "Class 3: Directive Principles & Fundamental Duties",
            duration: "50:45",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_6/preview",
            isCompleted: false,
            isLocked: false,
            description: "DPSP, their significance and relationship with Fundamental Rights.",
          },
          {
            id: "v7",
            title: "Class 4: Parliament & State Legislature",
            duration: "62:10",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_7/preview",
            isCompleted: false,
            isLocked: false,
            description: "Complete understanding of legislative process in India.",
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Indian Economy",
        description: "Economic concepts, policies, and current economic scenario",
        videos: [
          {
            id: "v8",
            title: "Class 1: Basic Economic Concepts",
            duration: "47:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_8/preview",
            isCompleted: false,
            isLocked: false,
            description: "GDP, GNP, inflation, and other fundamental concepts.",
          },
          {
            id: "v9",
            title: "Class 2: Indian Financial System",
            duration: "54:15",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_9/preview",
            isCompleted: false,
            isLocked: false,
            description: "Banking, RBI, monetary policy, and financial institutions.",
          },
          {
            id: "v10",
            title: "Class 3: Union Budget & Fiscal Policy",
            duration: "51:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_10/preview",
            isCompleted: false,
            isLocked: false,
            description: "Understanding budget components and fiscal policies.",
          },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Indian History",
        description: "Ancient, Medieval, and Modern Indian History",
        videos: [
          {
            id: "v11",
            title: "Class 1: Ancient India - Indus Valley Civilization",
            duration: "56:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_11/preview",
            isCompleted: false,
            isLocked: false,
            description: "Archaeological discoveries and civilization characteristics.",
          },
          {
            id: "v12",
            title: "Class 2: Vedic Period & Mahajanapadas",
            duration: "53:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_12/preview",
            isCompleted: false,
            isLocked: false,
            description: "Vedic literature, society, and rise of kingdoms.",
          },
          {
            id: "v13",
            title: "Class 3: Medieval India - Delhi Sultanate",
            duration: "59:45",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_13/preview",
            isCompleted: false,
            isLocked: false,
            description: "Administration, art, and culture during Sultanate period.",
          },
          {
            id: "v14",
            title: "Class 4: Modern India - Freedom Struggle",
            duration: "65:20",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_14/preview",
            isCompleted: false,
            isLocked: false,
            description: "National movement from 1857 to Independence.",
          },
        ],
      },
    ],
  },
  "ssc-cgl": {
    id: "ssc-cgl",
    title: "SSC CGL Tier I & II Course",
    category: "SSC",
    description: "Structured preparation for Staff Selection Commission Combined Graduate Level examination.",
    instructor: "Amit Verma",
    rating: 4.7,
    students: 18900,
    totalDuration: "80+ hours",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    modules: [
      {
        id: "m1",
        title: "Module 1: Quantitative Aptitude",
        description: "Complete mathematics preparation for SSC CGL",
        videos: [
          {
            id: "v1",
            title: "Class 1: Number System Basics",
            duration: "42:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_1/preview",
            isCompleted: false,
            isLocked: false,
            description: "Divisibility rules, LCM, HCF, and number properties.",
          },
          {
            id: "v2",
            title: "Class 2: Percentage & Profit-Loss",
            duration: "48:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_2/preview",
            isCompleted: false,
            isLocked: false,
            description: "Short tricks for percentage and profit-loss problems.",
          },
          {
            id: "v3",
            title: "Class 3: Time, Speed & Distance",
            duration: "45:15",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_3/preview",
            isCompleted: false,
            isLocked: false,
            description: "Trains, boats, and relative speed concepts.",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: English Language",
        description: "Grammar, vocabulary, and comprehension",
        videos: [
          {
            id: "v4",
            title: "Class 1: Parts of Speech & Tenses",
            duration: "40:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_4/preview",
            isCompleted: false,
            isLocked: false,
            description: "Foundation of English grammar for competitive exams.",
          },
          {
            id: "v5",
            title: "Class 2: Error Detection & Correction",
            duration: "44:20",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_5/preview",
            isCompleted: false,
            isLocked: false,
            description: "Common error patterns and correction techniques.",
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Reasoning Ability",
        description: "Logical and analytical reasoning",
        videos: [
          {
            id: "v6",
            title: "Class 1: Coding-Decoding & Series",
            duration: "38:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_6/preview",
            isCompleted: false,
            isLocked: false,
            description: "Pattern recognition and series completion.",
          },
          {
            id: "v7",
            title: "Class 2: Syllogism & Blood Relations",
            duration: "42:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_SSC_7/preview",
            isCompleted: false,
            isLocked: false,
            description: "Venn diagram approach for syllogism problems.",
          },
        ],
      },
    ],
  },
  "bank-po": {
    id: "bank-po",
    title: "Bank PO & Clerk Complete Course",
    category: "Banking",
    description: "Prepare for IBPS, SBI, and other banking examinations with this comprehensive course.",
    instructor: "Priya Sharma",
    rating: 4.6,
    students: 21300,
    totalDuration: "70+ hours",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    modules: [
      {
        id: "m1",
        title: "Module 1: Banking Awareness",
        description: "Complete banking knowledge and current affairs",
        videos: [
          {
            id: "v1",
            title: "Class 1: Indian Banking System Overview",
            duration: "50:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_BANK_1/preview",
            isCompleted: false,
            isLocked: false,
            description: "Structure of Indian banking and RBI functions.",
          },
          {
            id: "v2",
            title: "Class 2: Types of Banks & Accounts",
            duration: "45:30",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_BANK_2/preview",
            isCompleted: false,
            isLocked: false,
            description: "Commercial banks, cooperative banks, and account types.",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Quantitative Aptitude for Banking",
        description: "Data interpretation and numerical ability",
        videos: [
          {
            id: "v3",
            title: "Class 1: Data Interpretation - Tables",
            duration: "52:00",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_BANK_3/preview",
            isCompleted: false,
            isLocked: false,
            description: "Solving tabular DI with speed and accuracy.",
          },
          {
            id: "v4",
            title: "Class 2: Data Interpretation - Graphs",
            duration: "48:15",
            driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID_BANK_4/preview",
            isCompleted: false,
            isLocked: false,
            description: "Bar graphs, line graphs, and pie charts.",
          },
        ],
      },
    ],
  },
  // Add more courses as needed...
};

// Default course data for courses not yet detailed
const getDefaultCourseData = (courseId: string): CourseData => ({
  id: courseId,
  title: "Course Content Coming Soon",
  category: "General",
  description: "This course content is being prepared. Please check back soon.",
  instructor: "Sigma Edify Team",
  rating: 4.5,
  students: 1000,
  totalDuration: "Coming Soon",
  thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  modules: [
    {
      id: "m1",
      title: "Module 1: Introduction",
      description: "Getting started with the course",
      videos: [
        {
          id: "v1",
          title: "Welcome to the Course",
          duration: "10:00",
          driveLink: "https://drive.google.com/file/d/SAMPLE_VIDEO_ID/preview",
          isCompleted: false,
          isLocked: false,
          description: "Introduction and course overview.",
        },
      ],
    },
  ],
});

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const courseData = courseId && coursesData[courseId] 
    ? coursesData[courseId] 
    : getDefaultCourseData(courseId || "default");

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(true);
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(new Set());

  const currentModule = courseData.modules[currentModuleIndex];
  const currentVideo = currentModule?.videos[currentVideoIndex];

  const totalVideos = courseData.modules.reduce((acc, module) => acc + module.videos.length, 0);
  const progressPercentage = (completedVideos.size / totalVideos) * 100;

  const handleVideoSelect = (moduleIndex: number, videoIndex: number) => {
    const video = courseData.modules[moduleIndex].videos[videoIndex];
    if (!video.isLocked) {
      setCurrentModuleIndex(moduleIndex);
      setCurrentVideoIndex(videoIndex);
    }
  };

  const handleMarkComplete = () => {
    if (currentVideo) {
      const newCompleted = new Set(completedVideos);
      newCompleted.add(currentVideo.id);
      setCompletedVideos(newCompleted);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < currentModule.videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentVideoIndex(0);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentVideoIndex(courseData.modules[currentModuleIndex - 1].videos.length - 1);
    }
  };

  const isFirstVideo = currentModuleIndex === 0 && currentVideoIndex === 0;
  const isLastVideo = currentModuleIndex === courseData.modules.length - 1 && 
    currentVideoIndex === currentModule.videos.length - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/courses')}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to Courses
                </Button>
                <div>
                  <Badge variant="secondary">{courseData.category}</Badge>
                  <h1 className="text-xl font-bold mt-1">{courseData.title}</h1>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Progress: {completedVideos.size}/{totalVideos} videos
                </div>
                <Progress value={progressPercentage} className="w-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Video Player Section */}
          <div className={cn(
            "flex-grow",
            isPlaylistOpen ? "lg:w-2/3" : "w-full"
          )}>
            {/* Video Player */}
            <div className="bg-black aspect-video relative">
              {currentVideo ? (
                <iframe
                  src={currentVideo.driveLink}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={currentVideo.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>Select a video to start watching</p>
                </div>
              )}
            </div>

            {/* Video Controls */}
            <div className="bg-card border-b p-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handlePreviousVideo}
                    disabled={isFirstVideo}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleNextVideo}
                    disabled={isLastVideo}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                    className="lg:hidden"
                  >
                    <List className="h-4 w-4 mr-1" />
                    Playlist
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant={completedVideos.has(currentVideo?.id || '') ? "secondary" : "default"}
                    size="sm"
                    onClick={handleMarkComplete}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {completedVideos.has(currentVideo?.id || '') ? "Completed" : "Mark Complete"}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold mb-2">{currentVideo?.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {currentVideo?.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {currentModule?.title}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {courseData.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {courseData.rating}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {currentVideo?.description}
                </p>

                {/* Instructor Info */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-bold">
                        {courseData.instructor.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{courseData.instructor}</h3>
                      <p className="text-sm text-muted-foreground">Course Instructor</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Notes
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask a Doubt
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className={cn(
            "lg:w-1/3 border-l bg-card",
            !isPlaylistOpen && "hidden lg:hidden"
          )}>
            <div className="p-4 border-b sticky top-0 bg-card z-10">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Course Content</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsPlaylistOpen(false)}
                  className="hidden lg:flex"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {totalVideos} videos • {courseData.totalDuration}
              </p>
            </div>

            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="p-4 space-y-4">
                {courseData.modules.map((module, moduleIndex) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: moduleIndex * 0.1 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="bg-muted/50 p-3 border-b">
                      <h4 className="font-medium text-sm">{module.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {module.videos.length} videos
                      </p>
                    </div>
                    <div className="divide-y">
                      {module.videos.map((video, videoIndex) => {
                        const isActive = moduleIndex === currentModuleIndex && 
                          videoIndex === currentVideoIndex;
                        const isCompleted = completedVideos.has(video.id);

                        return (
                          <button
                            key={video.id}
                            onClick={() => handleVideoSelect(moduleIndex, videoIndex)}
                            disabled={video.isLocked}
                            className={cn(
                              "w-full text-left p-3 hover:bg-muted/50 transition-colors flex items-start gap-3",
                              isActive && "bg-primary/10 border-l-2 border-l-primary",
                              video.isLocked && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {video.isLocked ? (
                                <Lock className="h-4 w-4 text-muted-foreground" />
                              ) : isCompleted ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : isActive ? (
                                <Play className="h-4 w-4 text-primary" />
                              ) : (
                                <Play className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-grow min-w-0">
                              <p className={cn(
                                "text-sm font-medium truncate",
                                isActive && "text-primary"
                              )}>
                                {video.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {video.duration}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Toggle Button for Playlist (when hidden) */}
          {!isPlaylistOpen && (
            <Button
              variant="secondary"
              size="sm"
              className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex"
              onClick={() => setIsPlaylistOpen(true)}
            >
              <List className="h-4 w-4 mr-1" />
              Playlist
            </Button>
          )}
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default CoursePage;
