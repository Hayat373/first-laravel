import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import Layout from '@/components/layout';

export default function JobDetail() {
    const { job } = usePage<SharedData>().props; // Use SharedData type

    return (
        <Layout title='Job detail '>
            <h1>{job?.title}</h1>
            <p>{job?.description}</p>
        </Layout>
    );
}