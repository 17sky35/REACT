import React, {createContext, useState} from "react";


// Context 생성
export const ThemeContext  = createContext();

// ThemeProvider 컴포넌트
export const ThemeProvider = ({children}) => {
    const[isDarkMode, SetDarkMode] = useState(false);

    const toggleTheme = () => {
        SetDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
}