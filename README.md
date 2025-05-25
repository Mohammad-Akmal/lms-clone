# Learning Management System (Udemy Clone)

## Project Overview
This project is a Learning Management System (LMS) inspired by Udemy, built with Next.js, React, Prisma ORM, Clerk authentication, Stripe payments, Mux video hosting, and MySQL (Aiven) as the database. 

The system allows an admin (teacher) to upload, monetize, and manage courses, while students can browse, enroll, and track their progress.

## Live Demo
Access the live site here:  
[LMS Clone Live](https://lms-clone-3d23kwg1g-mohammad-akmals-projects.vercel.app)

## Features
- Role-based authentication and authorization (Admin and Student roles)
- Course creation and management by admin
- Video hosting via Mux (free tier limitations apply)
- Stripe payment gateway for course purchases
- Responsive UI with Tailwind CSS and ShadCN UI components
- User progress tracking on courses and chapters
- Secure API routes and data validation

## Installation

1. Clone the repo:

```bash
git clone https://github.com/Mohammad-Akmal/lms-clone.git
cd lms-clone
Install dependencies:

bash
Copy
Edit
npm install
Create .env file in the root folder with the following variables:

ini
Copy
Edit
DATABASE_URL=<your_database_connection_string>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
MUX_TOKEN_ID=<your_mux_token_id>
MUX_TOKEN_SECRET=<your_mux_token_secret>
Run Prisma migrations and seed the database:

bash
Copy
Edit
npx prisma migrate deploy
npx prisma db seed
Start the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

Known Limitations
Video uploads are limited to 1 minute due to Mux free tier restrictions; videos are deleted after 24 hours.

Database on Aiven free tier may shut down after some months and requires manual restart.

Teacher module access requires authentication.

Purchased courses moved to draft by admin become inaccessible to students (issue pending fix).

Future Enhancements
Extend video upload limits and retention.

Automate database restart procedures or switch to paid hosting.

Fix draft course access for purchased users.

Add multi-language support.

Implement notifications and messaging system.
