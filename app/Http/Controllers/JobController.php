<?php 

namespace App\Http\Controllers;

use Inertia\Inertia;

class JobController extends Controller
{
    public function index()
    {
        $jobs = [
            ['id' => 1, 'title' => 'Software Developer', 'description' => 'Develops software applications.'],
            ['id' => 2, 'title' => 'Product Manager', 'description' => 'Manages product development.'],
            ['id' => 3, 'title' => 'UX Designer', 'description' => 'Designs user experiences.'],
            // Add more jobs as needed
        ];

        return Inertia::render('Home', [
            'jobs' => $jobs, // Pass the hardcoded jobs to the Home page
        ]);
    }

    public function show($id)
    {
        // Find the job from the hardcoded list
        $jobs = [
            ['id' => 1, 'title' => 'Software Developer', 'description' => 'Develops software applications.'],
            ['id' => 2, 'title' => 'Product Manager', 'description' => 'Manages product development.'],
            ['id' => 3, 'title' => 'UX Designer', 'description' => 'Designs user experiences.'],
        ];

        $job = array_filter($jobs, fn($job) => $job['id'] == $id);
        $job = reset($job); // Get the first element

        return Inertia::render('JobDetail', [
            'job' => $job, // Pass the specific job to the JobDetail page
        ]);
    }
}