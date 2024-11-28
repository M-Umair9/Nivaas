import React, { useState } from "react";
import Inputfield from "../Components/Inputfield";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();

  const validateName = (name) => name.length > 1;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    let isValid = true;

    if (!validateName(name)) {
      setNameError("Please enter your name.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password should be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // Trigger OTP or authentication process here
      try {
        const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, password }),
        });

        if (!response.ok) {
          throw new Error("Signup failed. Please try again.");
        }

        const data = await response.json();
        console.log("Signup successful:", data);

        navigate("/Signin"); // Redirect to homepage on success
      } catch (error) {
        setAuthError(error.message);
      }
    }
  };

  return (
    <div className="bg-dark-grey min-h-screen flex items-center justify-center">
      <form
        className="bg-dark-grey w-full max-w-md p-8 space-y-6"
        onSubmit={handleSignup}
      >
        <h2 className="text-white text-2xl font-semibold">Sign Up</h2>

        {/* Name Field */}
        <div className="space-y-2">
          <label className="block text-white text-sm">Name</label>
          <Inputfield
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-white text-sm">Email</label>
          <Inputfield
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
        </div>

        {/* phone Field */}
        <div className="space-y-2">
          <label className="block text-white text-sm">Phone</label>
          <Inputfield
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={phoneError}
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

        <Button type="submit" text="Sign Un" />

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <span className="text-gray-400">Sign In</span>
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <div className="bg-gray-800 rounded-full p-2 text-white">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
          <div className="bg-gray-800 rounded-full p-2 text-white">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">
          By signing up, you agree to our{" "}
          <span className="text-gray-400">Terms of Service</span> &{" "}
          <span className="text-gray-400">Privacy Policy</span>.
        </p>
      </form>
    </div>
  );
}
