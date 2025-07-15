import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div >
             
                <nav>
                    <a href='/'>Home </a>
                    
                    <a href='/about'>about </a>

                </nav>
                <div >
                    <h1> Hello Home</h1>
                </div>
          
            </div>
        </>
    );
}
