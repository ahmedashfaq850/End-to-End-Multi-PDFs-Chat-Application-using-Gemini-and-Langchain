import React from "react";
import Image from "next/image";
import { LoginForm } from "@/components/Login/LoginForm";

const page = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        {/* Login Form */}
        <LoginForm />
      </div>
    </>
  );
};

export default page;

/* 
  
*/
