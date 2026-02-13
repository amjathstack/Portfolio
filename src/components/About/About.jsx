import React from "react";
import profile from "../../assets/profile_logo.jpg"
import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about" className="py-30 sm:py-40 md:px-20">

            <h1 className="text-3xl font-semibold text-center mx-auto">
                About me<span className="text-[40px] text-indigo-600">.</span>
            </h1>

            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                Everything you need to manage, track, and grow your finances, securely and efficiently.
            </p>

            <div className="mt-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                <div className="flex flex-col items-start md:items-start text-center md:text-left">
                    <div className="w-full flex items-center justify-center md:justify-start">
                        <Image
                            src={profile}
                            alt="Profile"
                            className="w-48 h-48 rounded-full shadow-lg mb-6"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="w-full" >
                        <h1 className="text-center sm:text-left text-xl sm:text-3xl font-bold text-gray-800">Mohammed Amjath</h1>
                        <p className="text-center sm:text-left text-sm sm:text-lg text-indigo-600 font-medium">Fullstack Developer</p>
                    </div>
                    <p className="mt-5 text-gray-700 text-[14px] md:max-w-[500px] md:text-[15px]">
                        My name is Mohammed Amjath, and I am a self taught full stack developer with hands on experience building real world applications since the age of 14.
                        I specialize in the MERN stack and Next.js, and have developed multiple fullstack projects featuring authentication, dashboards, API integrations, databases, and admin systems.
                        Although I do not have formal professional qualifications, I bring strong practical experience, a passion for development, and a commitment to continuous learning,
                        enabling me to confidently contribute to real world projects and deliver high quality web applications.
                    </p>
                </div>

                <div className="space-y-8">

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Authentication", "NextAuth", "Express.js", "Postgresql", "Javascript", "TypeScript", "Prisma ORM", "Cloudinary"].map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">What I Do</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Build scalable SaaS & LMS platforms</li>
                            <li>Design reusable UI components</li>
                            <li>Implement advanced authentication (SSO, MFA, RBAC)</li>
                            <li>Optimize performance & accessibility</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Experience</h2>
                        <div className="space-y-2 text-gray-600">
                            <p><strong>2024 / 08 – 2024 / 11 :</strong> EPOS Developer at SMEBizness Pvt Ltd.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Education</h2>
                        <p className="text-gray-600">G. C. E. Advanced Level in Engineering technology stream.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
