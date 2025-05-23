import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if(saveTheme) {
            setTheme(saveTheme)
        } else if(systemPrefersDark) {
            setTheme('dark')
        }
    }, [])

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toogleTheme = () => {
        setTheme(theme === "light" ? 'dark' : 'light')
        console.log('toggole theme');
    }


    return (
        <div>
            <header>
                <Navbar toogleTheme = {toogleTheme}></Navbar>
            </header>

            <main className='mt-[64px] dark:bg-gradient-to-b from-gray-900 to-gray-800'>
                <Outlet></Outlet>
                
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;