// data/profiles.ts
import { Profile } from '@/types/profile';

export const profiles: Profile[] = [
    {
        id: 'Karthik',
        name: 'Karthik S Salian',
        age: 23,
        gender: 'Male',
        avatar: '/suhan.jpeg',
        title: 'MSc | HectFin',
        location: 'Bengaluru, India',
        shortBio: 'Curious, detail-oriented, and obsessed with clean UI.',
        about:
            'I am Karthik, a results-driven individual who loves product thinking and design systems. I have worked on financial analytics case studies, growth experiments, and cross-functional collaboration.',
        skills: ['Next.js', 'Tailwind', 'TypeScript', 'Figma', 'Node.js', 'REST'],
        projects: [
            { id: 'omdc', title: 'OMDC Case Study', thumb: 'https://picsum.photos/seed/omdc/600/400', subtitle: 'Operations & Metrics Deep-dive' },
            { id: 'skills', title: 'Skills are key for success', thumb: '/tech.webp' },
            { id: 'finzzy', title: 'FinZzy Case Study', thumb: 'https://picsum.photos/seed/finzzy/600/400' },
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            website: 'https://example.com',
        },
    },

    {
        id: 'amrutha-rao',
        name: 'Amrutha Rao',
        age: 22,
        gender: 'Female',
        avatar: '/amrutha.jpeg',
        title: 'B.Tech | CSE',
        location: 'Udupi, India',
        shortBio: 'ML enthusiast and classical dancer.',
        about:
            'Passionate about AI/ML, creativity, and problem-solving. Loves building end-to-end applications and contributing to meaningful tech projects.',
        skills: ['Python', 'Pandas', 'XGBoost', 'Next.js', 'Tailwind'],
        projects: [
            { id: 'recsys', title: 'Recommendation System', thumb: 'https://picsum.photos/seed/recsys/600/400' },
            { id: 'lostfound', title: 'Lost & Found Portal', thumb: 'https://picsum.photos/seed/lost/600/400' },
        ],
    },

    {
        id: 'aastha-k',
        name: 'Aastha K',
        age: 22,
        gender: 'Female',
        avatar: '/aastha.jpeg',
        title: 'B.Tech | CSE',
        location: 'Kundapura, India',
        shortBio: 'Frontend enthusiast with a love for design.',
        about:
            'Aastha is passionate about UI development, pixel-perfect design, and creating smooth user experiences.',
        skills: ['React', 'Tailwind', 'Next.js', 'UI Design'],
        projects: [
            { id: 'uikit', title: 'UI Component Library', thumb: 'https://picsum.photos/seed/uikit/600/400' },
            { id: 'portfolio', title: 'Portfolio Website', thumb: 'https://picsum.photos/seed/portfolio123/600/400' },
        ],
    },

    {
        id: 'athul-raj',
        name: 'Athul Raj',
        age: 23,
        gender: 'Male',
        avatar: '/athul.webp',
        title: 'B.Tech | AIML',
        location: 'Kasargod, India',
        shortBio: 'AI enthusiast & backend developer.',
        about:
            'Athul loves deep learning, automation, and backend APIs. Passionate about building intelligent systems.',
        skills: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
        projects: [
            { id: 'chatbot', title: 'AI Chatbot System', thumb: 'https://picsum.photos/seed/chatbot/600/400' },
            { id: 'apihub', title: 'API Hub Backend', thumb: 'httpsum.photos/seed/apihub/600/400' },
        ],
    },

    {
        id: 'dhanya-s',
        name: 'Dhanya S',
        age: 21,
        gender: 'Female',
        avatar: '/dhanya.jpeg',
        title: 'B.Tech | ECE',
        location: 'Udupi, India',
        shortBio: 'Embedded systems & robotics learner.',
        about:
            'Dhanya works on hardware projects, IoT systems, and real-time embedded solutions.',
        skills: ['Arduino', 'Raspberry Pi', 'C', 'IoT'],
        projects: [
            { id: 'iot-home', title: 'Smart Home IoT System', thumb: 'https://picsum.photos/seed/iothome/600/400' },
        ],
    },

    {
        id: 'ananya-shetty',
        name: 'Ananya Shetty',
        age: 22,
        gender: 'Female',
        avatar: '/ananya.jpg',
        title: 'B.Tech | CSE',
        location: 'Mangaluru, India',
        shortBio: 'Creative UI/UX designer.',
        about:
            'Ananya specializes in user research, design systems, and intuitive digital experiences.',
        skills: ['Figma', 'Illustrator', 'UX Writing'],
        projects: [
            { id: 'designrevamp', title: 'App Redesign Project', thumb: 'https://picsum.photos/seed/designrevamp/600/400' },
        ],
    },

    {
        id: 'suhan-k',
        name: 'Suhan K',
        age: 23,
        gender: 'Male',
        avatar: '/suhan.jpeg',
        title: 'B.Tech | IT',
        location: 'Udupi, India',
        shortBio: 'Cybersecurity & networks enthusiast.',
        about:
            'Suhan is passionate about ethical hacking, security audits, and networking fundamentals.',
        skills: ['Kali Linux', 'Wireshark', 'Networking', 'Python'],
        projects: [
            { id: 'netsec', title: 'Network Security Analyzer', thumb: 'https://picsum.photos/seed/netsec/600/400' },
        ],
    },

    {
        id: 'sharanya-p',
        name: 'Sharanya P',
        age: 22,
        gender: 'Female',
        avatar: '/shranya.jpeg',
        title: 'B.Tech | CSE',
        location: 'Moodbidri, India',
        shortBio: 'Cloud & DevOps learner.',
        about:
            'Sharanya enjoys cloud architecture, CI/CD pipelines, and automation workflows.',
        skills: ['AWS', 'Docker', 'GitHub Actions', 'Linux'],
        projects: [
            { id: 'devops-pipeline', title: 'CI/CD Pipeline Setup', thumb: 'https://picsum.photos/seed/devops/600/400' },
        ],
    },

    {
        id: 'shraddha-m',
        name: 'Shraddha M',
        age: 21,
        gender: 'Female',
        avatar: '/shraddha.jpeg',
        title: 'B.Tech | AIML',
        location: 'Karkala, India',
        shortBio: 'NLP & data science enthusiast.',
        about:
            'Shraddha loves working on text analytics, ML models, and real-world data applications.',
        skills: ['Python', 'NLP', 'Scikit-learn', 'Data Visualization'],
        projects: [
            { id: 'nlp-sentiment', title: 'Sentiment Classifier', thumb: 'https://picsum.photos/seed/nlp/600/400' },
        ],
    },
];

export default profiles;
