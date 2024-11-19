import React, { useState } from "react";
import Inputfield from "../Components/Inputfield";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, Apple, X } from "lucide-react";
import SocialButton from "../Components/SocialButton";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example: Password should be at least 6 characters
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password should be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(
            "Authentication failed. Please check your credentials."
          );
        }

        const data = await response.json();

        // Assuming success means navigating to the home page
        console.log("Login successful:", data);
        navigate("/");
      } catch (error) {
        setAuthError(error.message);
      }
    }
  };

  return (
    <div className="bg-dark-gray min-h-screen flex items-center justify-center">
      <form
        className="bg-dark-gray w-full max-w-md p-8 space-y-6"
        onSubmit={handleSignup}
      >
        <h2 className="text-white text-2xl font-semibold">Sign In</h2>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-white text-sm">Email</label>
          <Inputfield
            type="Email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="block text-white text-sm">Password</label>
          <Inputfield
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
        </div>

        {/* Authentication Error */}
        {authError && <p className="text-red-500 text-sm">{authError}</p>}

        {/* Submit Button */}
        <Button type="submit" text="Sign In" />

        <label className="block text-white text-sm">Or continue with</label>

        {/* Social Media Icons */}
        <div className="space-y-2 max-w-sm">
          <SocialButton
            icon={Instagram}
            label="Instagram"
            url="https://www.instagram.com"
          />
          <SocialButton
            icon={Apple}
            label="Apple"
            url="https://www.apple.com"
          />
          <SocialButton
            icon={Facebook}
            label="Facebook"
            url="https://www.facebook.com"
          />
          <SocialButton icon={X} label="X" url="https://www.twitter.com" />
        </div>
      </form>
    </div>
  );
}
