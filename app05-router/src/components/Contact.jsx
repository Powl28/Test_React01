import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate("/contact/us")}>.Us</button>
      <button onClick={() => navigate("/contact/in")}>.In</button>
      <button onClick={() => navigate("/contact/eu")}>.Eu</button>
      <Outlet/>


    </div>
  );
}

export default Contact;
