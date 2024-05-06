"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang='en'>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProgressBar />
          <body className={inter.className}>{children}</body>
          <ToastContainer autoClose={2000} />
        </QueryClientProvider>
      </Provider>
    </html>
  );
}
