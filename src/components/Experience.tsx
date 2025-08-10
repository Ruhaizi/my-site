type Experience = {
    company: string;
    role: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
    tech?: string[];
    link?: string;
};

export const EXPERIENCE: Experience[] = [
    {
        company: "Holiday Channel",
        role: "Software Engineer",
        start: "Mar 2025",
        end: "Present",
        bullets: [
            "Built a responsive product page with React + TypeScript, lifting engagement by 35% and reducing bounce rate.",
            "Added form validation, image uploads, and cart features with React hooks/APIs, scaling to 500+ users.",
            "Developed Java/Spring Boot services with PostgreSQL; handled 10K+ products, 500+ daily cart ops, and S3 uploads via pre-signed URLs."
        ],
        tech: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "AWS S3"]
    },
    {
        company: "DBS Bank",
        role: "Full Stack Developer II",
        start: "Nov 2022",
        end: "Aug 2023",
        bullets: [
            "Owned user-profile & user-info microservices (secondary domain), maintaining 99.9% uptime and +20% scalability.",
            "Built a coupon management feature in Angular/TypeScript, increasing redemptions by 25% and improving access for 10K+ mobile users.",
            "Deployed on AWS with Docker/Kubernetes; automated infra with Terraform and sped up CI/CD by 22% via Jenkins improvements.",
            "Optimized Kafka/JMS message flow for reliability, increasing data throughput by 14%.",
            "Integrated OAuth 2.0 authz, protecting 2.2M+ users and cutting unauthorized access by 30%."
        ],
        tech: ["Angular", "TypeScript", "Java", "Spring Boot", "Kafka", "JMS", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "OAuth 2.0"]
    },
    {
        company: "DBS Bank",
        role: "Full Stack Developer I",
        start: "Jul 2021",
        end: "Nov 2022",
        bullets: [
            "Built REST APIs in Java/Spring Boot for PayLah, supporting 5,000 TPS peaks and serving 2.2M users.",
            "Shipped a Smart Fee Waiver feature with secure coding, driving +30% adoption and +15% retention.",
            "Introduced Redis caching to cut retrieval time by 30% and speed up API responses.",
            "Raised quality with 90%+ unit test coverage (TDD) and BDD (Gherkin); reduced post-deploy issues by 20%."
        ],
        tech: ["Java", "Spring Boot", "Redis", "JUnit", "Mockito", "Gherkin", "Jira", "Hibernate"]
    },
    {
        company: "TEKsystems Global Services",
        role: "Full Stack Developer Intern",
        start: "Nov 2020",
        end: "Jun 2021",
        bullets: [
            "Built the E-Healthcare app with C#, ASP.NET, Angular, and SQL Server; enabled 5+ core services and automated 95% of patient management tasks."
        ],
        tech: ["C#", "ASP.NET", "Angular", "SQL Server"]
    }
];


const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Experience</h2>
                    <p className="text-gray-300 mt-3">What I’ve worked on recently</p>
                </div>

                <div className="space-y-6">
                    {EXPERIENCE.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10 hover:bg-white/15 transition"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xl font-semibold text-white hover:underline"
                                            >
                                                {item.company}
                                            </a>
                                        ) : (
                                            <div className="text-xl font-semibold text-white">{item.company}</div>
                                        )}
                                        <div className="text-gray-300">{item.role}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300">
                                    {item.location && (
                                        <span className="inline-flex items-center gap-1">
                                            <span className="material-icons text-sm">location_on</span>
                                            {item.location}
                                        </span>
                                    )}
                                    <span className="inline-flex items-center gap-1">
                                        {item.start} — {item.end}
                                    </span>
                                </div>
                            </div>

                            <details className="group">
                                <summary className="flex w-full gap-0 cursor-pointer text-gray-200 select-none whitespace-nowrap">
                                    <span className="font-medium">Highlights</span>

                                    {/* caret wrapper keeps width stable when swapping */}
                                    <span className="inline-flex w-5 h-5 items-center justify-center">
                                        <span className="group-open:hidden text-gray-300">▾</span>
                                        <span className="hidden group-open:inline text-gray-300">▴</span>
                                    </span>
                                </summary>
                                {/* ...content */}



                                <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-200">
                                    {item.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </details>

                            {item.tech?.length ? (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200 border border-white/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
