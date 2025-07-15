import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function Nav(){
    const {url} =usePage();

    return(
        <nav>
            <Link href='/'
               className={cn(
                    'transition-colors duration-300 ease-out',
                    url==='/'? 'underline text-green-500': 'text-forground'
               )}
               >
                Home
               </Link>

               <Link
                href='/about'
                className={cn(
                    'transition-colors duration-300 ease-out',
                    url === '/about' ? 'underline text-green-500' : 'text-foreground'
                )}
            >
                About
            </Link>

        </nav>
    );
}