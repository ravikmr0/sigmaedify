import React from "react";
import Header from "./navigation/Header";
import Footer from "./Footer";
import LegalFooter from "./LegalFooter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  TestTube,
  Briefcase,
  Check,
  CreditCard,
  CalendarDays,
  Shield,
  Users,
  Trophy,
  Target,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeProps {
  isLoggedIn?: boolean;
}

const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators and top rankers",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Comprehensive Content",
    description: "Well-structured study materials and resources",
  },
  {
    icon: <TestTube className="h-6 w-6" />,
    title: "Regular Mock Tests",
    description: "Practice with exam-pattern questions",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Job Updates",
    description: "Latest notifications and career guidance",
  },
];

const stats = [
  {
    value: "15K+",
    label: "Active Students",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "100+",
    label: "Expert Faculty",
  },
  {
    value: "50+",
    label: "Courses",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "per month",
    description: "Perfect for getting started",
    features: [
      "Access to basic courses",
      "Limited mock tests",
      "Basic study materials",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹1,999",
    duration: "per month",
    description: "Best for serious aspirants",
    features: [
      "Access to all courses",
      "Unlimited mock tests",
      "Complete study materials",
      "Priority support",
      "Live doubt clearing",
      "Performance analytics",
    ],
  },
  {
    name: "Premium",
    price: "₹2,999",
    duration: "per month",
    description: "For maximum preparation",
    features: [
      "Everything in Pro",
      "1-on-1 mentorship",
      "Interview preparation",
      "Personalized feedback",
      "Career guidance",
      "Lifetime access",
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: <Youtube className="h-5 w-5" />,
  },
];

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Our Courses", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Latest News", href: "#" },
  { name: "Career Guide", href: "#" },
  { name: "Help Center", href: "#" },
];

const popularExams = [
  { name: "UPSC Civil Services", href: "#" },
  { name: "SSC CGL", href: "#" },
  { name: "Bank PO", href: "#" },
  { name: "Railway RRB", href: "#" },
  { name: "Teaching (CTET)", href: "#" },
  { name: "Defence Services", href: "#" },
];

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "123 Education Street, Learning Hub, New Delhi - 110001",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "+91 98765 43210",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "contact@sigmaedify.com",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Monday - Saturday: 9:00 AM - 7:00 PM",
  },
];

const legalLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
];

const paymentFeatures = [
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Multiple payment options with end-to-end encryption",
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Flexible Plans",
    description: "Choose monthly or yearly subscriptions",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Money Back Guarantee",
    description: "7-day refund policy for your peace of mind",
  },
];

const Home = ({ isLoggedIn = false }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={isLoggedIn} />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#050c1c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>

        {/* Animated blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-fast"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl leading-tight"
              >
                Prepare for Government Exams with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Confidence
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed"
              >
                Join thousands of successful candidates who have achieved their
                dreams with our comprehensive exam preparation platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* 3D Animated LMS System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl animate-float-slow">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/20 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-0 w-56 h-56 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl animate-float-medium">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="flex justify-between mb-2">
                      <div className="w-16 h-4 bg-white/20 rounded"></div>
                      <div className="w-8 h-4 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-white/30 rounded-full"></div>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-white/30 rounded-full"></div>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-10 w-60 h-60 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-xl animate-float-fast">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="grid grid-cols-3 gap-1 mb-3">
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/20 rounded"></div>
                      <div className="w-full h-2 bg-white/20 rounded"></div>
                      <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to crack your dream exam with excellence
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LMS Features Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Learning Management Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our platform offers comprehensive tools to enhance your learning
                experience
              </p>
            </motion.div>
          </div>

          {/* AI-Powered Doubt Resolution - NEW FEATURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600 dark:text-indigo-400"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.84 6.71 2.26" />
                    <path d="M21 3v9h-9" />
                    <path d="M7.35 16.65a4 4 0 0 0 5.66 0" />
                    <circle cx="9" cy="10" r="1" />
                    <circle cx="15" cy="10" r="1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  AI-Powered Doubt Resolution
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers to your questions with our advanced AI
                  assistant that understands complex exam topics and provides
                  detailed explanations 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Instant responses to subject-specific questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Step-by-step problem solving assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Conceptual clarifications with examples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Available 24/7 with no waiting time</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
                  Try AI Assistant
                </Button>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0"></div>
                    <div className="bg-white/20 rounded-lg p-3 text-white text-sm">
                      <p>Can you explain the concept of fiscal deficit?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.84 6.71 2.26" />
                        <path d="M21 3v9h-9" />
                      </svg>
                    </div>
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-3 text-gray-800 dark:text-white text-sm">
                      <p>
                        Fiscal deficit is the difference between the
                        government's total expenditure and its total receipts
                        excluding borrowing. It represents how much the
                        government needs to borrow to meet its expenses.
                      </p>
                      <p className="mt-2">The formula is:</p>
                      <p className="mt-1 font-medium">
                        Fiscal Deficit = Total Expenditure - Total Receipts
                        (excluding borrowings)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0"></div>
                    <div className="bg-white/20 rounded-lg p-3 text-white text-sm">
                      <p>Can you give an example with numbers?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Virtual Reality Learning Environment - NEW FEATURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 flex items-center justify-center order-2 md:order-1">
                <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1616587894289-86480e533129?w=800&q=80"
                  >
                    <source
                      src="/public/videos/sigmaedify.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="/public/videos/sigmaedify.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <span className="bg-black/50 px-2 py-1 rounded">
                        
                      </span>
                      <span className="bg-black/50 px-2 py-1 rounded">
                        03:45
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Virtual Reality Learning Environment
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience immersive learning with our cutting-edge VR
                  technology that brings historical events, scientific concepts,
                  and geographical locations to life.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Virtual tours of Parliament, Supreme Court, and historical
                      sites
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Interactive 3D models of complex scientific concepts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Historical events recreated in immersive environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Compatible with most VR headsets and mobile devices
                    </span>
                  </li>
                </ul>
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Explore VR Content
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Personalized Learning Paths
                </h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered learning paths tailored to your strengths and
                  weaknesses, ensuring efficient preparation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Adaptive question difficulty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Progress tracking dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Personalized study schedules</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Interactive Live Classes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Engage with expert faculty in real-time interactive sessions
                  with Q&A and collaborative learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>HD video streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Interactive polls and quizzes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Recorded sessions for revision</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive performance analytics to identify strengths and
                  areas for improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Topic-wise performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Comparative percentile ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Time management insights</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Digital Library & Resources
                </h3>
                <p className="text-muted-foreground mb-4">
                  Access a vast collection of study materials, e-books, and
                  reference guides anytime, anywhere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>10,000+ e-books and PDFs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Searchable content database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Offline reading capability</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
                  <TestTube className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Exam Simulation Environment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Practice in an environment that mimics the actual exam
                  interface and conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Realistic exam interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Timer and stress management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Detailed solution explanations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful candidates who have achieved their
            goals with Sigma Edify.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="default">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
