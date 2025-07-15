import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Layout from '@/components/layout';

export default function Home() {
    const { auth } = usePage<SharedData>().props;

    return (
       <Layout title="Home">
            <h1>Hello Home how are you 
            </h1>
            {/* You can use auth or other props here if needed */}
        </Layout>
    );
}
