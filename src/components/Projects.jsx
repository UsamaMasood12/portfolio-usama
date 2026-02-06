import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaUsersCog, FaMicrophone, FaCogs, FaNewspaper, FaTrafficLight, FaHeartbeat, FaGem } from 'react-icons/fa'
import './Projects.css'

const projects = [
    {
        title: 'CodeSentry – Legacy Code Modernization',
        description: 'Autonomous multi-agent workflow system for code analysis, security vulnerability detection, and compliance checking (OWASP, PCI-DSS, ISO 27001). Features async task processing with Celery/Redis and multi-LLM integration.',
        tech: ['LangGraph', 'FastAPI', 'MongoDB', 'Celery', 'Redis', 'Docker'],
        icon: FaShieldAlt,
        github: 'https://github.com/UsamaMasood12',
        featured: true,
        label: 'AI Agents'
    },
    {
        title: 'AI-Powered CRM Marketing Agent',
        description: 'Intelligent AI agent with human-in-the-loop workflows for marketing operations. Features RFM customer segmentation, automated campaign creation, and personalized email generation.',
        tech: ['LangGraph', 'GPT-4', 'PostgreSQL', 'MCP', 'SQLAlchemy'],
        icon: FaUsersCog,
        github: 'https://github.com/UsamaMasood12',
        label: 'AI Agent'
    },
    {
        title: 'RoomiAI - Hotel Reservation Voice Agent',
        description: 'AI-powered voice agent using LiveKit for real-time audio with Deepgram STT/TTS. Built with Groq LLM (LLaMA 3.3-70B) and Twilio telephony integration.',
        tech: ['LiveKit', 'Deepgram', 'Groq LLM', 'FastAPI', 'MongoDB', 'Twilio'],
        icon: FaMicrophone,
        github: 'https://github.com/UsamaMasood12',
        featured: true,
        label: 'Voice AI'
    },
    {
        title: 'Engine Predictive Maintenance MLOps',
        description: 'End-to-end ML pipeline for engine failure prediction with automated CI/CD via GitHub Actions. Features MLflow tracking and interactive Streamlit dashboard.',
        tech: ['Scikit-learn', 'MLflow', 'Streamlit', 'Docker', 'GitHub Actions'],
        icon: FaCogs,
        github: 'https://github.com/UsamaMasood12/Predictive-Maintenance-Using-ML',
        label: 'MLOps'
    },
    {
        title: 'News Classification MLOps Pipeline',
        description: 'Automated ML pipeline with Prefect orchestration and MLflow tracking. Production-ready FastAPI with Prometheus/Grafana observability and Kubernetes deployment.',
        tech: ['FastAPI', 'Kubernetes', 'MLflow', 'Prefect', 'Prometheus'],
        icon: FaNewspaper,
        github: 'https://github.com/UsamaMasood12',
        label: 'MLOps'
    },
    {
        title: 'YOLO11 Traffic Signal Detection',
        description: 'Fine-tuned YOLO11s model achieving 98.2% mAP@50 on traffic signal detection. Real-time inference with ONNX export (19.2MB, 4.1ms/image).',
        tech: ['PyTorch', 'YOLO11', 'ONNX', 'Roboflow', 'Computer Vision'],
        icon: FaTrafficLight,
        github: 'https://github.com/UsamaMasood12',
        featured: true,
        label: 'Computer Vision'
    },
    {
        title: 'NHS Digital Data Analysis',
        description: 'Comprehensive analysis of 100,000+ NHS healthcare records. Applied statistical testing and created interactive dashboards for healthcare insights.',
        tech: ['Python', 'R', 'Excel', 'Statistics', 'Visualization'],
        icon: FaHeartbeat,
        github: 'https://github.com/UsamaMasood12',
        label: 'Data Analysis'
    },
    {
        title: 'Power BI Jewelry Analytics Dashboard',
        description: 'Star schema data model with 50+ DAX measures including time intelligence calculations. Created 5 interactive dashboard pages for business insights.',
        tech: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
        icon: FaGem,
        github: 'https://github.com/UsamaMasood12/Power-BI-analysis-Project',
        label: 'Business Intelligence'
    },
]

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section className="projects section" id="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="number">03.</span>
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="project-header">
                                <div className="project-icon">
                                    <project.icon />
                                </div>
                                <div className="project-links">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="GitHub"
                                    >
                                        <FaGithub />
                                    </motion.a>
                                </div>
                            </div>

                            <span className="project-label">{project.label}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
