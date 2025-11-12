"use client";

import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="flex-none">
            {/* Profile image (put public/profile.jpg) */}
            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
              <img
                src="/profile.jpg"
                alt="Sai Yugandhar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // fallback if image not present
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='100%' height='100%' fill='%23e6e6e6'/%3E%3Ctext x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='12'%3Eprofile%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">Kammari Sai Yugandhar</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Data Engineering Associate @ Accenture
            </p>

            <div className="mt-4 flex flex-wrap gap-3 items-center text-sm text-gray-700 dark:text-gray-300">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 4.5 4 9c0 5 7 13 8 13s8-8 8-13c0-4.5-4-7-8-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Navi Mumbai
              </div>

              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5v4a6 6 0 006 6h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15v4a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +91 93817 59232
              </div>

              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-sm">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                saiyugandhar0720@gmail.com
              </div>

              <a
                href="https://linkedin.com/in/sai-yugandhar-kammari-a63530200"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM8 8h4.8v2h.1c.7-1.2 2.5-2.5 5.1-2.5 5.5 0 6.5 3.6 6.5 8.2V22H19V15.2c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.5V22H8V8z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:saiyugandhar0720@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Contact
              </a>

              <a
                href="resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 hover:shadow transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* Content grid */}
        <main className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column (main) */}
          <section className="md:col-span-2 space-y-6">
            {/* Summary card */}
            <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Results-driven Data Engineering Associate at Accenture with over 1 year of hands-on
                experience in data management, ETL pipeline development, and cloud-based analytics.
                Proficient in Databricks, Informatica, Python, SQL, and Big Data ecosystems, with a
                strong ability to design scalable, automated data workflows that enhance operational
                performance and decision-making efficiency.
              </p>
            </article>

            {/* Experience card */}
            <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Professional Experience</h2>
                <span className="text-sm text-gray-500">Since Jul 2024</span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="font-semibold">Accenture — Data Engineering, Management & Governance Associate</h3>
                  <p className="text-sm text-gray-500">Navi Mumbai | July 2024 – Present</p>
                  <ul className="mt-2 list-disc ml-5 text-gray-700 dark:text-gray-300">
                    <li>Engineered and optimized ETL pipelines using Informatica BDM and Databricks.</li>
                    <li>Automated workflows, reducing manual intervention by 40% and improving refresh speed by 30%.</li>
                    <li>Maintained Big Data Lake architecture on Azure and HDFS for scalability and accuracy.</li>
                    <li>Improved SQL performance via optimization, achieving 25% faster processing.</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Technologies: Databricks, Informatica BDM, Azure Data Factory, SQL, PySpark, Hadoop, Python</p>
                </div>
              </div>
            </article>

            {/* Projects card */}
            <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <div>
                <h4 className="font-semibold">Bank of Baroda Analytics and Reporting System</h4>
                <p className="text-sm text-gray-500">Informatica BDM, HDFS, Python, SQL</p>
                <ul className="mt-2 list-disc ml-5 text-gray-700 dark:text-gray-300">
                  <li>Designed ETL workflows to process 1M+ daily transactions.</li>
                  <li>Leveraged HDFS for distributed storage, reducing query latency by 20%.</li>
                  <li>Automated reporting pipelines using Python, increasing insight speed by 35%.</li>
                </ul>
              </div>
            </article>
          </section>

          {/* Right column (sidebar) */}
          <aside className="space-y-6">
            {/* Certifications card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <h3 className="font-semibold mb-2">Certifications</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Databricks Certified Data Engineer Professional</li>
                <li>Databricks Certified Data Engineer Associate</li>
                <li>From Data to Insights with Google Cloud (Coursera)</li>
                <li>Agentic AI — Accenture TQ</li>
              </ul>
            </div>

            {/* Skills card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Python</span>
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">SQL</span>
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">PySpark</span>
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Databricks</span>
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Informatica</span>
                <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Azure</span>
              </div>
            </div>

            {/* Achievements card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <h3 className="font-semibold mb-2">Achievements</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Technovanza 2.0 Hackathon Finalist (Smart India Hackathon)</li>
                <li>Information Security Advocate — Accenture</li>
                <li>Technical Lead, AI Club — CMRTC</li>
              </ul>
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kammari Sai Yugandhar — Built with Next.js & Tailwind
        </footer>
      </div>
    </div>
  );
}
