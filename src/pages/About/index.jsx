import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (!isLoggedIn) return <Navigate to="/error" />;
  return <div>Welcome to the about page</div>;
}
