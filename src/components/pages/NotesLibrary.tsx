import React, { useState } from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  FileText,
  Download,
  Filter,
  BookOpen,
  Clock,
  Eye,
  Star,
  ChevronDown,
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  pages: number;
  format: "PDF" | "DOC" | "PPT";
  downloadCount: number;
  rating: number;
  date: string;
  fileSize: string;
  featured?: boolean;
  driveLink?: string;
}

const notes: Note[] = [
  {
    id: "upsc-gs-1",
    title: "UPSC General Studies Paper I Complete Notes",
    category: "UPSC",
    subcategory: "General Studies",
    description:
      "Comprehensive notes covering all topics of GS Paper I including History, Geography, Society and Culture.",
    pages: 245,
    format: "PDF",
    downloadCount: 15420,
    rating: 4.8,
    date: "2023-12-15",
    fileSize: "12.5 MB",
    featured: true,
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "upsc-gs-2",
    title: "UPSC General Studies Paper II (Polity & Governance)",
    category: "UPSC",
    subcategory: "General Studies",
    description:
      "Detailed notes on Indian Constitution, Governance, Social Justice and International Relations.",
    pages: 180,
    format: "PDF",
    downloadCount: 12350,
    rating: 4.7,
    date: "2023-11-20",
    fileSize: "10.2 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "upsc-gs-3",
    title: "UPSC General Studies Paper III (Economy & Environment)",
    category: "UPSC",
    subcategory: "General Studies",
    description:
      "Comprehensive coverage of Indian Economy, Environment, Biodiversity, Security and Technology.",
    pages: 210,
    format: "PDF",
    downloadCount: 11280,
    rating: 4.6,
    date: "2023-10-05",
    fileSize: "11.8 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "upsc-gs-4",
    title: "UPSC General Studies Paper IV (Ethics & Case Studies)",
    category: "UPSC",
    subcategory: "General Studies",
    description:
      "Complete notes on Ethics, Integrity, Aptitude and Case Studies with solved examples.",
    pages: 150,
    format: "PDF",
    downloadCount: 9870,
    rating: 4.9,
    date: "2023-09-12",
    fileSize: "8.5 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-cgl-math",
    title: "SSC CGL Mathematics Complete Notes",
    category: "SSC CGL",
    subcategory: "Mathematics",
    description:
      "Comprehensive mathematics notes with shortcuts and tricks for SSC CGL examination.",
    pages: 120,
    format: "PDF",
    downloadCount: 18650,
    rating: 4.7,
    date: "2023-08-25",
    fileSize: "7.2 MB",
    featured: true,
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-cgl-reasoning",
    title: "SSC CGL Reasoning Ability Notes",
    category: "SSC CGL",
    subcategory: "Reasoning",
    description:
      "Complete notes on verbal and non-verbal reasoning with practice questions and shortcuts.",
    pages: 135,
    format: "PDF",
    downloadCount: 16780,
    rating: 4.6,
    date: "2023-07-18",
    fileSize: "8.1 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-cgl-english",
    title: "SSC CGL English Language Notes",
    category: "SSC CGL",
    subcategory: "English",
    description:
      "Comprehensive notes on English grammar, vocabulary, comprehension and other language topics.",
    pages: 110,
    format: "PDF",
    downloadCount: 14520,
    rating: 4.5,
    date: "2023-06-30",
    fileSize: "6.8 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-cgl-gk",
    title: "SSC CGL General Awareness Notes",
    category: "SSC CGL",
    subcategory: "General Knowledge",
    description:
      "Complete notes on static GK, current affairs and general science for SSC CGL examination.",
    pages: 160,
    format: "PDF",
    downloadCount: 15320,
    rating: 4.6,
    date: "2023-05-22",
    fileSize: "9.3 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-chsl-complete",
    title: "SSC CHSL Complete Study Material",
    category: "SSC CHSL",
    subcategory: "Complete Package",
    description:
      "Comprehensive study material covering all subjects for SSC CHSL Tier I and Tier II examination.",
    pages: 280,
    format: "PDF",
    downloadCount: 12450,
    rating: 4.7,
    date: "2023-04-15",
    fileSize: "15.6 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "ssc-cpo-complete",
    title: "SSC CPO Complete Study Notes",
    category: "SSC CPO",
    subcategory: "Complete Package",
    description:
      "Comprehensive study material for SSC CPO examination including all subjects and physical test preparation.",
    pages: 230,
    format: "PDF",
    downloadCount: 9870,
    rating: 4.5,
    date: "2023-03-10",
    fileSize: "13.2 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "railway-rrb-ntpc",
    title: "Railway RRB NTPC Complete Notes",
    category: "Railway",
    subcategory: "RRB NTPC",
    description:
      "Comprehensive study material for Railway NTPC examination covering all subjects and stages.",
    pages: 250,
    format: "PDF",
    downloadCount: 14560,
    rating: 4.6,
    date: "2023-02-05",
    fileSize: "14.8 MB",
    featured: true,
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
  {
    id: "railway-group-d",
    title: "Railway Group D Complete Study Material",
    category: "Railway",
    subcategory: "Group D",
    description:
      "Complete study notes for Railway Group D examination with practice questions and previous papers.",
    pages: 180,
    format: "PDF",
    downloadCount: 13250,
    rating: 4.5,
    date: "2023-01-20",
    fileSize: "10.5 MB",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  },
];

const NotesLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const categories = Array.from(new Set(notes.map((note) => note.category)));
  const formats = Array.from(new Set(notes.map((note) => note.format)));

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === null || note.category === selectedCategory;
    const matchesFormat =
      selectedFormat === null || note.format === selectedFormat;

    return matchesSearch && matchesCategory && matchesFormat;
  });

  const handleDownload = (noteId: string) => {
    const note = notes.find((note) => note.id === noteId);
    if (note?.driveLink) {
      // Open Google Drive link in a new tab
      window.open(note.driveLink, '_blank');
    } else {
      alert('Download link not available for this note.');
    }
  };

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
            Notes Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Download comprehensive study notes for various competitive exams
            prepared by experts
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search notes by title, subject or keyword..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-sm font-medium mr-2">Exam:</span>
              <div className="space-x-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
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

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium mr-2">Format:</span>
              <div className="space-x-2">
                <Button
                  variant={selectedFormat === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFormat(null)}
                >
                  All
                </Button>
                {formats.map((format) => (
                  <Button
                    key={format}
                    variant={selectedFormat === format ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFormat(format)}
                  >
                    {format}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Notes */}
        {filteredNotes.some((note) => note.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes
                .filter((note) => note.featured)
                .map((note, index) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">
                              {note.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{note.category}</Badge>
                              <Badge variant="outline">
                                {note.subcategory}
                              </Badge>
                            </div>
                          </div>
                          <Badge className="bg-yellow-500 hover:bg-yellow-600">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            Featured
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm mb-4">
                          {note.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-muted-foreground mr-1" />
                            <span>{note.pages} pages</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span>{note.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 text-muted-foreground mr-1" />
                            <span>
                              {note.downloadCount.toLocaleString()} downloads
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-auto pt-4 border-t">
                          <div className="flex items-center">
                            <Badge variant="outline">{note.format}</Badge>
                            <span className="text-xs text-muted-foreground ml-2">
                              {note.fileSize}
                            </span>
                          </div>
                          <Button onClick={() => handleDownload(note.id)}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* All Notes  // All notes section with tabs for filtering by exam type */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">All Study Notes</h2>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Notes</TabsTrigger>
              <TabsTrigger value="upsc">UPSC</TabsTrigger>
              <TabsTrigger value="ssc">SSC</TabsTrigger>
              <TabsTrigger value="railway">Railway</TabsTrigger>
              <TabsTrigger value="banking">Banking</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              {filteredNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNotes
                    .filter((note) => !note.featured)
                    .map((note, index) => (
                      <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="pb-2">
                            <div>
                              <CardTitle className="text-lg">
                                {note.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">{note.category}</Badge>
                                <Badge variant="outline">
                                  {note.subcategory}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm mb-4">
                              {note.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4 text-xs">
                              <div className="flex items-center">
                                <FileText className="h-3 w-3 text-muted-foreground mr-1" />
                                <span>{note.pages} pages</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                <span>{note.rating}</span>
                              </div>
                              <div className="flex items-center">
                                <Eye className="h-3 w-3 text-muted-foreground mr-1" />
                                <span>
                                  {note.downloadCount.toLocaleString()}{" "}
                                  downloads
                                </span>
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t">
                              <div className="flex items-center">
                                <Badge variant="outline">{note.format}</Badge>
                                <span className="text-xs text-muted-foreground ml-2">
                                  {note.fileSize}
                                </span>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => handleDownload(note.id)}
                              >
                                <Download className="mr-1 h-3 w-3" />
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-accent rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No notes found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                      setSelectedFormat(null);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="upsc">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes
                  .filter((note) => note.category === "UPSC")
                  .map((note, index) => (
                    <Card
                      key={note.id}
                      className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Same card structure as above */}
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ssc">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes
                  .filter((note) =>
                    ["SSC CGL", "SSC CHSL", "SSC CPO"].includes(note.category),
                  )
                  .map((note, index) => (
                    <Card
                      key={note.id}
                      className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Same card structure as above */}
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="railway">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes
                  .filter((note) => note.category === "Railway")
                  .map((note, index) => (
                    <Card
                      key={note.id}
                      className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Same card structure as above */}
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="banking">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Banking exam notes will be available shortly. Check back soon!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Request Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-lg p-8 text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Request specific study materials or suggest improvements to existing
            notes. Our team will work to provide what you need.
          </p>
          <Button size="lg">Request Study Material</Button>
        </motion.div>

        {/* How to Use Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How to Use Our Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Download & Print",
                description:
                  "Our notes are optimized for both digital reading and printing. Download in PDF format and print for offline study.",
              },
              {
                title: "Structured Learning",
                description:
                  "Follow the chapter sequence for structured learning. Each section builds upon previous concepts for better understanding.",
              },
              {
                title: "Practice Questions",
                description:
                  "Use the practice questions at the end of each section to test your understanding and reinforce learning.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Are these notes free to download?",
                answer:
                  "Yes, all the notes in our library are completely free to download and use for your exam preparation.",
              },
              {
                question: "How often are the notes updated?",
                answer:
                  "We update our notes regularly to ensure they cover the latest exam patterns and syllabus changes. Check the 'Last Updated' date on each note.",
              },
              {
                question: "Can I share these notes with others?",
                answer:
                  "Yes, you can share these notes with your friends and study groups. We encourage collaborative learning.",
              },
              {
                question: "Are these notes sufficient for exam preparation?",
                answer:
                  "Our notes provide comprehensive coverage of exam topics, but we recommend supplementing them with practice tests and other study materials for best results.",
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
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default NotesLibrary;
