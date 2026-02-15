"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LaunchContextType {
    isLaunched: boolean;
    setLaunched: (value: boolean) => void;
}

const LaunchContext = createContext<LaunchContextType | undefined>(undefined);

export function LaunchProvider({ children }: { children: ReactNode }) {
    const [isLaunched, setIsLaunched] = useState(false);

    return (
        <LaunchContext.Provider value={{ isLaunched, setLaunched: setIsLaunched }}>
            {children}
        </LaunchContext.Provider>
    );
}

export function useLaunch() {
    const context = useContext(LaunchContext);
    if (context === undefined) {
        throw new Error("useLaunch must be used within a LaunchProvider");
    }
    return context;
}
