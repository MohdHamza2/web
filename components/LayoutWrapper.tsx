"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LaunchProvider } from "@/context/LaunchContext";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LaunchProvider>
            <Navbar />
            {children}
            <Footer />
        </LaunchProvider>
    );
}
