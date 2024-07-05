"use client";

import { useThemeStore } from "../store/themeStore";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
}
