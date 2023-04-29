import React from "react";

const ThemeButton = (onClick, theme) => {
    return (
        <button onClick={onClick}>
            {theme === 'light' ?  'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    )
}

export default ThemeButton;