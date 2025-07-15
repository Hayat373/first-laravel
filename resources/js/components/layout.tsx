// resources/js/Components/Layout.tsx

import React from 'react';
import { Head } from '@inertiajs/react';

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <nav>
                <a href='/'>Home </a>
                <a href='/about'>About </a>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;