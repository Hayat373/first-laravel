
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Layout from '@/components/layout';

export default function About() {
    const { auth } = usePage<SharedData>().props;

   return (
        <Layout title="About Us">
            <h1>This is about page, welcome </h1>
            {/* You can use auth or other props here if needed */}
        </Layout>
    );
}

    