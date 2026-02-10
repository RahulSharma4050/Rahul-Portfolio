import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
    name: 'Rahul Sharma',
    role: 'Full-Stack Developer',
    summary: 'Full-stack developer with hands-on expertise in .NET Core, Angular, React, and Node.js, passionate about building scalable web applications and developing AI-driven solutions using ML.NET.',
    email: 'rahulsharma292948@gmail.com',
    phone: '9592292097',
    linkedin: 'https://www.linkedin.com/in/rahulsharma4050/',
    github: 'https://github.com/RahulSharma4050',
    leetcode: 'https://leetcode.com/u/rahuls4050/',
    profileImage: 'assets/footer/Profile.jpeg',
    resumeUrl: 'assets/Resume/Rahul Sharma (SDE).pdf',
    experience: [
        {
            company: 'NATIONAL INFORMATICS CENTRE',
            role: 'Full Stack Developer',
            duration: '07/2024 - Present',
            description: [
                'Designed and developed 5+ web applications and API’s using .NET Core and Angular, increasing operational efficiency by 30% in processing government data.',
                'Enhanced backend solutions, reducing API response time by 40%, which improved user satisfaction and engagement.',
                'Created responsive user interfaces, leading to a 25% increase in user accessibility metrics, allowing more citizens to interact with government services.',
                'Collaborated with cross-functional teams to align project objectives, resulting in the successful delivery of 3 major projects ahead of schedule.'
            ]
        },
        {
            company: 'NATIONAL INFORMATICS CENTRE',
            role: 'SDE Intern',
            duration: '01/2024 - June 2024',
            description: [
                'Assisted in the evolution of 3 key web applications, contributing to a 20% reduction in processing times for public service requests.',
                'Participated in Building and implementing RESTful APIs, enabling seamless communication that increased application uptime by 15%.',
                'Collaborated with senior developers to enhance application features, which reduced reported bugs by 30%, improving overall user experience and engaged in daily stand-ups and sprint planning, improving team communication and project delivery timelines by 10%.'
            ]
        }
    ],
    projects: [
        {
            title: 'Singga Official',
            role: 'Developer',
            duration: 'Live',
            category: 'Live',
            featured: true,
            description: ['Official website for the artist Singga.'],
            techStack: ['Angular', 'TypeScript', 'SCSS'],
            link: 'https://singademo.netlify.app',
            imageUrl: 'assets/Works/sinngaProject.png'
        },
        {
            title: 'Diecast Sphere',
            role: 'Developer',
            duration: 'Live',
            category: 'Live',
            featured: true,
            description: ['E-commerce or showcase platform for diecast models.'],
            techStack: ['Shopify'],
            link: 'https://diecastsphere.com/',
            imageUrl: 'assets/Works/diecast.png'
        },
        {
            title: 'KHAZAANA-AI',
            role: 'Developer',
            duration: 'October 2025 – Now',
            category: 'Government',
            featured: false,
            description: [
                'Developed an AI-powered chat-bot using Phi-3.5 (primary) and Gemma2 (backup) LLM models with ML.NET, enabling intelligent conversational capabilities and automated customer query resolution with high accuracy.',
                'Implemented RAG (Retrieval-Augmented Generation) architecture using FAISS for vector-based document chunking and storage, enabling contextual responses and integrated database connectivity for bill status inquiries via bill/reference numbers.',
                'Designed an automated retraining API that executes bi-daily to continuously improve model performance by learning from historical question-answer interactions, ensuring evolving accuracy and enhanced user experience.'
            ],
            techStack: ['Phi-3.5', 'Gemma2', 'ML.NET', 'RAG', 'FAISS']
        },
        {
            title: 'WINDOW SERVICE',
            role: 'Developer',
            duration: 'January 2025 – Now',
            category: 'Government',
            featured: false,
            description: [
                'Built a .NET Core micro-service for inter-department APIs, improving processing speed by 80% through automation of previously manual file reading processes.',
                'Enabled asynchronous background processing for bill data extraction and storage, cutting processing time by 50%.'
            ],
            techStack: ['.NET Core', 'Microservices', 'Automation']
        },
        {
            title: 'MyOffice',
            role: 'Developer',
            duration: 'August 2024 – Now',
            category: 'Government',
            featured: false,
            description: [
                'Built a real-time ticket management system for Punjab government to track leave applications and facilitate communication across different ranks.',
                'Serves as the universal Ticket Management System for NIC (IFMS) – Punjab, enabling users to raise requirements or log tickets for any issues they encounter.',
                'Engineered MyOffice, an enterprise workflow automation platform supporting 5,000+ daily active users, digitizing document approval processes and reducing turnaround time by 40% through seamless integration with existing HR and finance systems.'
            ],
            techStack: ['Full Stack', 'Workflow Automation']
        },
        {
            title: 'SNA-SPARSH',
            role: 'Developer',
            duration: 'November 2024 – Now',
            category: 'Government',
            featured: false,
            description: [
                'Engineered a secure, high-volume fund management system handling ₹800+ crore in annual transactions for the Punjab Government, with seamless integration to RBI’s EKuber, PFMS, and State IFMIS systems.',
                'Enhanced transparency and accountability by ensuring just-in-time fund disbursement to beneficiaries through automated workflows and real-time validations.',
                'Contributed to digital public finance reforms by integrating core treasury functions across central and state financial infrastructures.'
            ],
            techStack: ['Security', 'Fund Management', 'Integration']
        },
        {
            title: 'SMART VISION GLASSES',
            role: 'Developer',
            duration: 'January 2024 – June 2024',
            category: 'Government',
            featured: false,
            description: [
                'Developed machine learning-powered smart glasses formulated to assist visually impaired users by detecting objects and announcing their presence with high accuracy.',
                'Implemented real-time object detection algorithms, enhancing user safety and navigation.'
            ],
            techStack: ['ML', 'Object Detection', 'Computer Vision']
        }
    ],
    skills: [
        {
            name: 'Programming',
            skills: ['C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP']
        },
        {
            name: 'Frameworks',
            skills: ['.NET Core', 'Angular', 'React', 'Node.js']
        },
        {
            name: 'Libraries',
            skills: ['jQuery', 'FAISS', 'Scikit-learn', 'OpenCV', 'ONNX Runtime']
        },
        {
            name: 'AI/ML & LLM',
            skills: ['Phi-3.5', 'Gemma2', 'RAG', 'FAISS', 'Scikit-learn', 'ML.NET', 'ONNX Runtime', 'OpenCV', 'Computer Vision']
        },
        {
            name: 'Databases & Competencies',
            skills: ['MySQL', 'MongoDB', 'SQL Server', 'NoSQL', 'Problem Solving', 'Team Collaboration', 'Agile', 'UI/UX Design']
        }
    ],
    education: [
        {
            institution: 'THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY',
            degree: 'B.E. in Computer Science and Engineering',
            year: '2021-2024',
            location: 'Patiala, Punjab'
        },
        {
            institution: 'THAPAR POLYTECHNIC COLLEGE',
            degree: 'Diploma in Computer Science and Technology',
            year: '2018-2021',
            location: 'Patiala, Punjab'
        },
        {
            institution: 'ST. JOSEPH CONVENT SCHOOL',
            degree: 'Grade 10 | ICSE',
            year: '2006-2018',
            location: 'Firozpur, Punjab'
        }
    ],
    achievements: [
        'Recipient of the Java and PHP Certification from Techsquare Solutions Pvt Ltd.',
        'Achieved a React Front End Development certificate from Coursera.',
        'Core Member of VIRSA, the largest society at Thapar Institute.'
    ]
};
