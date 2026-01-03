import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";

import { Button } from "@/components/ui/button";

import CourseDropdown from "./CourseDropdown";

interface HeaderProps {
  isLoggedIn?: boolean;
  onSignIn?: () => void;
  onSignUp?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn = false,
  onSignIn = () => console.log("Sign in clicked"),
  onSignUp = () => console.log("Sign up clicked"),
}) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Mobile Search */}
        <div className="flex items-center gap-6 flex-1">
          <a href="/" className="flex items-center space-x-2">
            <img src="/sigmaedify.svg" alt="Logo" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">
              Sigma Edify
            </span>
          </a>

          {/* Mobile Search - Visible only on mobile */}
          <div className="flex md:hidden flex-1 max-w-xs">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="w-full pl-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/mock-tests")}>
              Mock Tests
            </Button>
            <Button variant="ghost" onClick={() => navigate("/courses")}>
              Courses
            </Button>
            <Button variant="ghost" onClick={() => navigate("/notes-library")}>
              Notes Library
            </Button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 px-4 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="w-full pl-8" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          {!isLoggedIn && (
            <div className="hidden sm:flex items-center space-x-4">
              <Button variant="ghost" onClick={onSignIn}>
                Sign In
              </Button>
              <Button onClick={onSignUp}>Sign Up</Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 space-y-4">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                navigate("/mock-tests");
                setIsMobileMenuOpen(false);
              }}
            >
              Mock Tests
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                navigate("/courses");
                setIsMobileMenuOpen(false);
              }}
            >
              Courses
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                navigate("/notes-library");
                setIsMobileMenuOpen(false);
              }}
            >
              Notes Library
            </Button>
            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="ghost" onClick={onSignIn}>
                  Sign In
                </Button>
                <Button onClick={onSignUp}>Sign Up</Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
