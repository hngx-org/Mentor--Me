import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Hanken_Grotesk as HankenGrotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "max-content",
              padding: "16px 24px",
              color: "#333333",
            },
          }}
        />
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
