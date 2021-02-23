import React from 'react';
import { ThemeContext } from './themeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="transition duration-1000 ease-in-out rounded-xl border">
            {theme === 'dark' ? (
                    <button className="flex items-center p-2"  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <HiSun
                           
                            className="text-gray-500 dark:text-gray-100 text-2xl cursor-pointer"
                        />
                        <p className="text-white tracking-wider">Set Light</p>
                    </button>
            ) : (  
                    <button   className="flex items-center p-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <HiMoon
                            className="text-gray-100 dark:text-gray-100 text-2xl cursor-pointer"
                        />
                        <p className="text-white  tracking-wider">Set Dark</p>
                    </button>
                )}
        </div>
    );
}

export default Toggle;