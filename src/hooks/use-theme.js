import { useLayoutEffect } from "react";
import { useState } from "react";

const isLightTheme = window?.matchMedia('()prefers-color-scheme: dark').matches;
const defaultTheme = isLightTheme ? 'light': 'dark';
console.log('defaultTheme', defaultTheme); 

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'dark');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme])

    return{theme, setTheme};
}
