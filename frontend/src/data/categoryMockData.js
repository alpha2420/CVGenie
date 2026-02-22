import { Monitor, Users, Megaphone, Truck, Scale } from 'lucide-react';

export const CATEGORIES = [
    { id: 'it', name: 'IT', icon: Monitor, color: '#3B82F6', bg: '#EFF6FF' },
    { id: 'hr', name: 'HR', icon: Users, color: '#8B5CF6', bg: '#F5F3FF' },
    { id: 'marketing', name: 'Marketing', icon: Megaphone, color: '#EC4899', bg: '#FDF2F8' },
    { id: 'operations', name: 'Operations & Logistics', icon: Truck, color: '#F59E0B', bg: '#FFFBEB' },
    { id: 'legal', name: 'Legal & Compliance', icon: Scale, color: '#10B981', bg: '#ECFDF5' },
];

export const CATEGORY_MOCK_DATA = {
    it: {
        personal_info: {
            full_name: 'John Doe',
            profession: 'Full Stack Developer',
            email: 'johndoe@email.com',
            phone: '+1 (555) 123-4567',
            location: 'San Francisco, CA',
            linkedin: 'https://linkedin.com/in/johndoe',
            website: 'https://johndoe.dev',
        },
        professional_summary: 'Results-driven full stack developer with 5+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about writing clean code and delivering exceptional user experiences.',
        experience: [
            {
                company: 'Tech Corp',
                position: 'Senior Software Engineer',
                start_date: '2022-01',
                end_date: '',
                description: 'Led development of microservices architecture serving 1M+ users.\nMentored a team of 4 junior developers and conducted code reviews.\nReduced API response time by 40% through database optimization.',
                is_current: true,
            },
            {
                company: 'StartupXYZ',
                position: 'Frontend Developer',
                start_date: '2019-06',
                end_date: '2021-12',
                description: 'Built responsive web applications using React and TypeScript.\nImplemented CI/CD pipelines reducing deployment time by 60%.',
                is_current: false,
            },
        ],
        education: [
            {
                institution: 'University of California, Berkeley',
                degree: 'Bachelor of Science',
                field: 'Computer Science',
                graduation_date: '2019-05',
                gpa: '3.8',
            },
        ],
        project: [
            {
                name: 'E-Commerce Platform',
                type: 'Web Application',
                description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time order tracking.',
                codeUrl: 'https://github.com/johndoe/ecommerce',
                hostedUrl: 'https://shop.johndoe.dev',
            },
            {
                name: 'Task Manager API',
                type: 'REST API',
                description: 'RESTful API built with Node.js and MongoDB for managing tasks with authentication and role-based access.',
                codeUrl: 'https://github.com/johndoe/task-api',
                hostedUrl: '',
            },
        ],
        skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'],
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional'],
    },

    hr: {
        personal_info: {
            full_name: 'Sarah Mitchell',
            profession: 'HR Manager',
            email: 'sarah.mitchell@email.com',
            phone: '+1 (555) 234-5678',
            location: 'New York, NY',
            linkedin: 'https://linkedin.com/in/sarahmitchell',
            website: '',
        },
        professional_summary: 'Strategic HR professional with 7+ years of experience in talent acquisition, employee engagement, and organizational development. Proven track record of reducing turnover by 25% and building high-performing teams across diverse industries.',
        experience: [
            {
                company: 'GlobalTech Inc.',
                position: 'Senior HR Manager',
                start_date: '2021-03',
                end_date: '',
                description: 'Managed end-to-end recruitment for 200+ annual hires across engineering and product teams.\nDesigned and launched employee wellness program with 90% participation rate.\nLed diversity & inclusion initiatives increasing underrepresented hires by 35%.',
                is_current: true,
            },
            {
                company: 'PeopleFirst Solutions',
                position: 'HR Generalist',
                start_date: '2017-08',
                end_date: '2021-02',
                description: 'Administered benefits programs for 500+ employees.\nConducted performance review cycles and developed competency frameworks.\nResolved employee relations issues maintaining 95% satisfaction score.',
                is_current: false,
            },
        ],
        education: [
            {
                institution: 'Cornell University',
                degree: 'Master of Science',
                field: 'Human Resource Management',
                graduation_date: '2017-05',
                gpa: '3.9',
            },
        ],
        project: [
            {
                name: 'Employee Onboarding Revamp',
                type: 'HR Initiative',
                description: 'Redesigned the onboarding process reducing new hire ramp-up time from 90 to 45 days with structured mentoring and digital handbook.',
                codeUrl: '',
                hostedUrl: '',
            },
        ],
        skills: ['Talent Acquisition', 'Employee Relations', 'HRIS Systems', 'Performance Management', 'Compensation & Benefits', 'Labor Law', 'Conflict Resolution', 'Workday', 'Diversity & Inclusion', 'Team Building'],
        certifications: ['SHRM-SCP', 'PHR - Professional in Human Resources'],
    },

    marketing: {
        personal_info: {
            full_name: 'Emily Carter',
            profession: 'Digital Marketing Manager',
            email: 'emily.carter@email.com',
            phone: '+1 (555) 345-6789',
            location: 'Los Angeles, CA',
            linkedin: 'https://linkedin.com/in/emilycarter',
            website: 'https://emilycarter.co',
        },
        professional_summary: 'Creative and data-driven digital marketing manager with 6+ years of experience scaling brands through SEO, paid ads, and content strategy. Successfully grew organic traffic by 300% and managed ad budgets exceeding $500K annually.',
        experience: [
            {
                company: 'BrandWave Agency',
                position: 'Digital Marketing Manager',
                start_date: '2021-06',
                end_date: '',
                description: 'Developed and executed multi-channel campaigns generating $2M+ in annual revenue.\nManaged a team of 5 content creators and 2 graphic designers.\nAchieved 40% increase in email open rates through A/B testing and segmentation.',
                is_current: true,
            },
            {
                company: 'GrowthHive',
                position: 'SEO & Content Specialist',
                start_date: '2018-09',
                end_date: '2021-05',
                description: 'Grew organic search traffic from 10K to 150K monthly visitors.\nCreated content strategy resulting in 50+ high-ranking blog posts.\nManaged Google Ads campaigns with ROAS of 5.2x.',
                is_current: false,
            },
        ],
        education: [
            {
                institution: 'University of Southern California',
                degree: 'Bachelor of Arts',
                field: 'Marketing & Communications',
                graduation_date: '2018-05',
                gpa: '3.7',
            },
        ],
        project: [
            {
                name: 'Product Launch Campaign',
                type: 'Marketing Campaign',
                description: 'Led a cross-platform product launch campaign resulting in 10K pre-orders within the first week and 2M social media impressions.',
                codeUrl: '',
                hostedUrl: 'https://campaign.brandwave.com',
            },
        ],
        skills: ['SEO/SEM', 'Google Analytics', 'Content Strategy', 'Social Media Marketing', 'Email Marketing', 'Copywriting', 'HubSpot', 'Facebook Ads', 'A/B Testing', 'Brand Management'],
        certifications: ['Google Analytics Certified', 'HubSpot Inbound Marketing'],
    },

    operations: {
        personal_info: {
            full_name: 'Michael Chen',
            profession: 'Operations Manager',
            email: 'michael.chen@email.com',
            phone: '+1 (555) 456-7890',
            location: 'Chicago, IL',
            linkedin: 'https://linkedin.com/in/michaelchen',
            website: '',
        },
        professional_summary: 'Detail-oriented operations manager with 8+ years of experience optimizing supply chains and warehouse logistics. Expertise in Lean Six Sigma methodologies, reducing operational costs by 20% while improving delivery times by 30%.',
        experience: [
            {
                company: 'LogiFlow Systems',
                position: 'Senior Operations Manager',
                start_date: '2020-04',
                end_date: '',
                description: 'Oversaw end-to-end supply chain operations for 3 distribution centers.\nImplemented warehouse automation reducing processing time by 45%.\nNegotiated vendor contracts saving $1.2M annually.',
                is_current: true,
            },
            {
                company: 'SwiftShip Inc.',
                position: 'Logistics Coordinator',
                start_date: '2016-07',
                end_date: '2020-03',
                description: 'Managed fleet of 50+ vehicles and optimized delivery routes.\nReduced shipping errors by 60% through process standardization.\nCoordinated cross-border logistics across 12 countries.',
                is_current: false,
            },
        ],
        education: [
            {
                institution: 'Northwestern University',
                degree: 'Master of Business Administration',
                field: 'Operations Management',
                graduation_date: '2016-06',
                gpa: '3.6',
            },
        ],
        project: [
            {
                name: 'Warehouse Automation Project',
                type: 'Operations',
                description: 'Led the implementation of automated sorting systems and IoT sensors across 3 warehouses, reducing labor costs by 30% and improving accuracy to 99.8%.',
                codeUrl: '',
                hostedUrl: '',
            },
        ],
        skills: ['Supply Chain Management', 'Lean Six Sigma', 'ERP Systems (SAP)', 'Inventory Management', 'Vendor Relations', 'Process Optimization', 'Warehouse Management', 'Data Analysis', 'Budgeting', 'Project Management'],
        certifications: ['Lean Six Sigma Black Belt', 'APICS CSCP'],
    },

    legal: {
        personal_info: {
            full_name: 'Rachel Thompson',
            profession: 'Compliance Manager',
            email: 'rachel.thompson@email.com',
            phone: '+1 (555) 567-8901',
            location: 'Washington, D.C.',
            linkedin: 'https://linkedin.com/in/rachelthompson',
            website: '',
        },
        professional_summary: 'Experienced legal and compliance professional with 6+ years specializing in regulatory compliance, risk management, and corporate governance. Expert in GDPR, SOX, and industry-specific regulations with a proven track record of implementing compliance frameworks.',
        experience: [
            {
                company: 'FinSecure Corp.',
                position: 'Senior Compliance Manager',
                start_date: '2021-01',
                end_date: '',
                description: 'Developed and implemented enterprise-wide compliance program covering 5 regulatory frameworks.\nConducted 50+ internal audits identifying and mitigating critical risk areas.\nTrained 300+ employees on anti-money laundering and data privacy protocols.',
                is_current: true,
            },
            {
                company: 'Whitfield & Associates LLP',
                position: 'Legal Analyst',
                start_date: '2018-03',
                end_date: '2020-12',
                description: 'Reviewed and drafted contracts, NDAs, and compliance documentation.\nAssisted in regulatory filings and maintained compliance calendars.\nResearched case law and regulatory updates for client advisory.',
                is_current: false,
            },
        ],
        education: [
            {
                institution: 'Georgetown University',
                degree: 'Juris Doctor',
                field: 'Law',
                graduation_date: '2018-05',
                gpa: '3.7',
            },
        ],
        project: [
            {
                name: 'GDPR Compliance Framework',
                type: 'Compliance',
                description: 'Designed and rolled out a comprehensive GDPR compliance framework across the organization, achieving full certification in 6 months with zero violations.',
                codeUrl: '',
                hostedUrl: '',
            },
        ],
        skills: ['Regulatory Compliance', 'Risk Assessment', 'Contract Review', 'Corporate Governance', 'GDPR', 'SOX Compliance', 'Policy Development', 'Internal Auditing', 'Legal Research', 'Anti-Money Laundering'],
        certifications: ['Certified Compliance & Ethics Professional (CCEP)', 'Certified Information Privacy Professional (CIPP)'],
    },
};
