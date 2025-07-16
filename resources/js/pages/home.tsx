

import { usePage, Link } from '@inertiajs/react';
import Layout from '@/components/layout';
import { SharedData } from '@/types';

export default function Home() {
    const { jobs } = usePage<SharedData>().props;

    return (
        <Layout title="Job Listings">
            <h1>Job Listings</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}