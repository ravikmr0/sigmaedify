import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle,
  Filter,
  Play,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  new?: boolean;
  thumbnail: string;
}

const courses: Course[] = [
  {
    id: "upsc-cse",
    title: "UPSC Civil Services Complete Course",
    category: "UPSC",
    description:
      "Comprehensive preparation for all three stages of the Civil Services Examination - Prelims, Mains, and Interview.",
    instructor: "Dr. Rajesh Kumar",
    rating: 4.8,
    students: 12500,
    duration: "12 months",
    level: "All Levels",
    price: "₹45,999",
    originalPrice: "₹59,999",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    features: [
      "Complete study material for Prelims and Mains",
      "Regular mock tests and evaluations",
      "Current affairs updates and analysis",
      "Personalized mentorship",
      "Interview guidance and mock interviews",
    ],
    popular: true,
  },
  {
    id: "ssc-cgl",
    title: "SSC CGL Tier I & II Course",
    category: "SSC",
    description:
      "Structured preparation for Staff Selection Commission Combined Graduate Level examination.",
    instructor: "Amit Verma",
    rating: 4.7,
    students: 18900,
    duration: "6 months",
    level: "Intermediate",
    price: "₹12,999",
    originalPrice: "₹15,999",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    features: [
      "Comprehensive coverage of all subjects",
      "Topic-wise tests and full-length mock tests",
      "Detailed solutions and explanations",
      "Shortcut techniques and tricks",
      "Previous years' question papers analysis",
    ],
    popular: true,
  },
  {
    id: "bank-po",
    title: "Bank PO & Clerk Complete Course",
    category: "Banking",
    description:
      "Prepare for IBPS, SBI, and other banking examinations with this comprehensive course.",
    instructor: "Priya Sharma",
    rating: 4.6,
    students: 21300,
    duration: "5 months",
    level: "Beginner",
    price: "₹9,999",
    originalPrice: "₹12,999",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    features: [
      "Complete coverage of all banking exam topics",
      "Sectional tests and full-length mock tests",
      "Banking awareness and current affairs",
      "Interview preparation for PO candidates",
      "Doubt clearing sessions",
    ],
  },
  {
    id: "rrb-ntpc",
    title: "RRB NTPC Course",
    category: "Railways",
    description:
      "Comprehensive preparation for Railway Recruitment Board Non-Technical Popular Categories examination.",
    instructor: "Vikram Singh",
    rating: 4.5,
    students: 15600,
    duration: "4 months",
    level: "Beginner",
    price: "₹7,999",
    originalPrice: "₹9,999",
    thumbnail: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
    features: [
      "Complete study material for all stages",
      "Regular practice tests and assessments",
      "Previous years' papers with solutions",
      "Tips and tricks for quick solving",
      "General awareness updates",
    ],
  },
  {
    id: "ctet",
    title: "CTET Paper I & II Complete Course",
    category: "Teaching",
    description:
      "Prepare for Central Teacher Eligibility Test for both primary and upper primary levels.",
    instructor: "Dr. Meena Gupta",
    rating: 4.7,
    students: 9800,
    duration: "3 months",
    level: "Intermediate",
    price: "₹8,999",
    originalPrice: "₹10,999",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    features: [
      "Comprehensive coverage of all subjects",
      "Child development and pedagogy focus",
      "Practice questions and mock tests",
      "Teaching methodologies and techniques",
      "NCERT-based content analysis",
    ],
  },
  {
    id: "upsc-optional",
    title: "UPSC Optional: Public Administration",
    category: "UPSC",
    description:
      "In-depth preparation for Public Administration optional subject for UPSC Civil Services Mains examination.",
    instructor: "Prof. Sanjay Rao",
    rating: 4.9,
    students: 5600,
    duration: "6 months",
    level: "Advanced",
    price: "₹18,999",
    originalPrice: "₹22,999",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: [
      "Comprehensive coverage of the syllabus",
      "Answer writing practice and feedback",
      "Case studies and contemporary issues",
      "Previous years' question analysis",
      "Notes and study material",
    ],
  },
  {
    id: "state-psc",
    title: "State PSC General Studies",
    category: "State Services",
    description:
      "Prepare for various State Public Service Commission examinations with focus on general studies.",
    instructor: "Anand Kumar",
    rating: 4.6,
    students: 7800,
    duration: "5 months",
    level: "Intermediate",
    price: "₹14,999",
    originalPrice: "₹17,999",
    thumbnail: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    features: [
      "State-specific content and focus",
      "General studies comprehensive coverage",
      "Current affairs with state perspective",
      "Mock tests and practice questions",
      "Interview preparation",
    ],
  },
  {
    id: "defense-exams",
    title: "Defense Services Examination Course",
    category: "Defense",
    description:
      "Prepare for NDA, CDS, AFCAT, and other defense services entrance examinations.",
    instructor: "Col. Ravi Sharma (Retd.)",
    rating: 4.8,
    students: 6200,
    duration: "4 months",
    level: "Beginner",
    price: "₹11,999",
    originalPrice: "₹14,999",
    thumbnail: "https://images.unsplash.com/photo-1484820301304-0b43afecb2b1?w=800&q=80",
    features: [
      "Comprehensive coverage of all subjects",
      "Physical fitness guidance",
      "SSB interview preparation",
      "Mock tests and previous papers",
      "Defense awareness and current affairs",
    ],
    new: true,
  },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );
  const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null);

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory && course.category !== selectedCategory) return false;
    if (selectedLevel && course.level !== selectedLevel) return false;
    return true;
  });

  const categories = Array.from(
    new Set(courses.map((course) => course.category)),
  );
  const levels = Array.from(new Set(courses.map((course) => course.level)));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto py-12 px-4 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive courses designed by experts to help you succeed in
            government exams.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium mr-2">Filter by:</span>

            <div className="space-x-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>


        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.popular && (
                    <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">
                      Popular
                    </Badge>
                  )}
                  {course.new && (
                    <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                      New
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {course.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium mb-2">What you'll learn:</p>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {course.features.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-6">
                          +{course.features.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex-shrink-0 border-t pt-4 flex justify-between items-center">
                  <Button variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    One Short Video
                  </Button>
                  <Button>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to find more courses.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedLevel(null);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Course Benefits */}
        <div className="bg-accent rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced educators and top rankers who have deep knowledge of exam patterns and requirements.",
              },
              {
                title: "Comprehensive Content",
                description:
                  "Our courses cover the entire syllabus with structured study materials, practice questions, and mock tests.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Access course content anytime, anywhere. Study at your own pace with lifetime access to materials.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Sharma",
                course: "UPSC Civil Services Complete Course",
                testimonial:
                  "The comprehensive approach and mentorship provided by Sigma Edify helped me secure AIR 45 in UPSC CSE. The faculty's guidance was invaluable.",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
              },
              {
                name: "Priyanka Patel",
                course: "SSC CGL Tier I & II Course",
                testimonial:
                  "I cleared SSC CGL with a top rank thanks to the structured preparation and mock tests. The shortcuts and techniques taught were extremely helpful.",
                avatar:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=priyanka",
              },
              {
                name: "Arun Kumar",
                course: "Bank PO & Clerk Complete Course",
                testimonial:
                  "Got selected as a Probationary Officer in SBI. The banking awareness section and interview preparation modules were particularly useful.",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arun",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long will I have access to the course?",
                answer:
                  "You will have lifetime access to the course materials once enrolled. You can revisit the content anytime, even after completing the course.",
              },
              {
                question:
                  "Are there any prerequisites for joining these courses?",
                answer:
                  "Most of our courses are designed for all levels of learners. Basic educational qualifications as required by the respective exam eligibility criteria are sufficient.",
              },
              {
                question: "How are the mock tests conducted?",
                answer:
                  "Mock tests are conducted online through our platform. They simulate the actual exam environment with similar question patterns, difficulty levels, and time constraints.",
              },
              {
                question:
                  "Is there any installment option available for course fees?",
                answer:
                  "Yes, we offer EMI options for most of our premium courses. You can check the available payment plans during the checkout process.",
              },
              {
                question: "Will I get personal mentorship?",
                answer:
                  "Yes, our premium courses include personal mentorship sessions where you can interact with faculty members to clarify doubts and get personalized guidance.",
              },
              {
                question: "How are the courses updated with current affairs?",
                answer:
                  "We provide regular updates through our current affairs section. Important news and events relevant to exams are analyzed and added to the course materials.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/10 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose from our wide range of courses and begin your journey towards
            success in government exams.
          </p>
          <Button size="lg">Browse All Courses</Button>
        </motion.div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default Courses;
