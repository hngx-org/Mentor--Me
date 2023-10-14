import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter, Hanken_Grotesk as HankenGrotesk } from "next/font/google";
import AuthContextProvider from "@/context/AuthContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const hanken = HankenGrotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Mentor Me",
  description: "No.1 Mentoring app, All the help you need in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hanken.variable}`}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
