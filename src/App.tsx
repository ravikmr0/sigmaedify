import { Suspense, lazy, memo } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";

// Lazy load Home component for better initial load
const Home = lazy(() => import("./components/home"));

// Lazy load all route components
const MockTestList = lazy(() => import("./components/mock-tests/MockTestList"));
const MockTestPage = lazy(() => import("./components/mock-tests/MockTestPage"));
const SpecificTest = lazy(() => import("./components/mock-tests/SpecificTest"));
const PerformanceDashboard = lazy(() => import("./components/mock-tests/PerformanceDashboard"));
const TutorialHome = lazy(() => import("./components/tutorials/TutorialHome"));
const TutorialExample = lazy(() => import("./components/tutorials/TutorialExample"));
const HistoryTutorial = lazy(() => import("./components/tutorials/HistoryTutorial"));
const EconomyTutorial = lazy(() => import("./components/tutorials/EconomyTutorial"));
const AncientHistoryTutorial = lazy(() => import("./components/tutorials/AncientHistoryTutorial"));
const MedievalHistoryTutorial = lazy(() => import("./components/tutorials/MedievalHistoryTutorial"));
const FreedomStruggleTutorial = lazy(() => import("./components/tutorials/FreedomStruggleTutorial"));
const GovernanceTutorial = lazy(() => import("./components/tutorials/GovernanceTutorial"));
const InternationalRelationsTutorial = lazy(() => import("./components/tutorials/InternationalRelationsTutorial"));
const EconomicBasicsTutorial = lazy(() => import("./components/tutorials/EconomicBasicsTutorial"));
const BudgetTutorial = lazy(() => import("./components/tutorials/BudgetTutorial"));
const BankingTutorial = lazy(() => import("./components/tutorials/BankingTutorial"));
const CategoryPage = lazy(() => import("./components/tutorials/CategoryPage"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Courses = lazy(() => import("./components/pages/Courses"));
const SuccessStories = lazy(() => import("./components/pages/SuccessStories"));
const LatestNews = lazy(() => import("./components/pages/LatestNews"));
const CareerGuide = lazy(() => import("./components/pages/CareerGuide"));
const HelpCenter = lazy(() => import("./components/pages/HelpCenter"));
const TermsOfService = lazy(() => import("./components/pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./components/pages/CookiePolicy"));
const RefundPolicy = lazy(() => import("./components/pages/RefundPolicy"));
const NotesLibrary = lazy(() => import("./components/pages/NotesLibrary"));
const CoursePage = lazy(() => import("./components/pages/CoursePage"));

// Lightweight loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen">
        {import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-tests" element={<MockTestList />} />
          <Route path="/mock-test/:testId" element={<MockTestPage />} />
          <Route path="/mock-test/specific" element={<SpecificTest />} />
          <Route path="/performance-dashboard" element={<PerformanceDashboard />} />
          <Route path="/tutorials" element={<TutorialHome />} />
          <Route path="/tutorials/:categoryId" element={<CategoryPage />} />
          <Route
            path="/tutorials/politics/indian-constitution"
            element={<TutorialExample />}
          />
          <Route
            path="/tutorials/history/modern-history"
            element={<HistoryTutorial />}
          />
          <Route
            path="/tutorials/history/ancient-history"
            element={<AncientHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/medieval-history"
            element={<MedievalHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/freedom-struggle"
            element={<FreedomStruggleTutorial />}
          />
          <Route
            path="/tutorials/politics/governance"
            element={<GovernanceTutorial />}
          />
          <Route
            path="/tutorials/politics/international-relations"
            element={<InternationalRelationsTutorial />}
          />
          <Route
            path="/tutorials/economy/indian-economy"
            element={<EconomyTutorial />}
          />
          <Route
            path="/tutorials/economy/basics"
            element={<EconomicBasicsTutorial />}
          />
          <Route
            path="/tutorials/economy/budget"
            element={<BudgetTutorial />}
          />
          <Route
            path="/tutorials/economy/banking"
            element={<BankingTutorial />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/notes-library" element={<NotesLibrary />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
