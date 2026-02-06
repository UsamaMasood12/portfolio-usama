import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaCode, FaBrain, FaChartBar, FaDatabase, FaCloud, FaPlug
} from 'react-icons/fa'
import {
    SiPython, SiTensorflow, SiPytorch, SiDocker, SiKubernetes,
    SiMongodb, SiPostgresql, SiRedis, SiFastapi, SiStreamlit,
    SiOpenai, SiAmazon
} from 'react-icons/si'
import './Skills.css'

const skillCategories = [
    {
        icon: FaCode,
        title: 'Programming Languages',
        color: '#00d4ff',
        skills: ['Python', 'R', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn']
    },
    {
        icon: FaBrain,
        title: 'Machine Learning & AI',
        color: '#7c3aed',
        skills: ['TensorFlow', 'PyTorch', 'LangChain', 'LangGraph', 'YOLO', 'RAG', 'MLflow', 'Deep Learning']
    },
    {
        icon: FaChartBar,
        title: 'Data & Visualization',
        color: '#ec4899',
        skills: ['Power BI', 'Streamlit', 'Grafana', 'EDA', 'Feature Engineering', 'Statistical Analysis']
    },
    {
        icon: FaDatabase,
        title: 'Databases',
        color: '#10b981',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'FAISS', 'Vector DBs', 'Data Warehousing']
    },
    {
        icon: FaCloud,
        title: 'Cloud & DevOps',
        color: '#f59e0b',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Hugging Face']
    },
    {
        icon: FaPlug,
        title: 'APIs & Integrations',
        color: '#06b6d4',
        skills: ['OpenAI API', 'Anthropic', 'Groq', 'Twilio', 'FastAPI', 'REST APIs', 'Celery']
    },
]

const techIcons = [
    { Icon: SiPython, name: 'Python', color: '#3776ab' },
    { Icon: SiTensorflow, name: 'TensorFlow', color: '#ff6f00' },
    { Icon: SiPytorch, name: 'PyTorch', color: '#ee4c2c' },
    { Icon: SiDocker, name: 'Docker', color: '#2496ed' },
    { Icon: SiKubernetes, name: 'Kubernetes', color: '#326ce5' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169e1' },
    { Icon: SiRedis, name: 'Redis', color: '#dc382d' },
    { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { Icon: SiStreamlit, name: 'Streamlit', color: '#ff4b4b' },
    { Icon: SiOpenai, name: 'OpenAI', color: '#412991' },
    { Icon: SiAmazon, name: 'AWS', color: '#ff9900' },
]

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section className="skills section" id="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="number">02.</span>
                    Technical Skills
                </motion.h2>

                {/* Tech Icons Marquee */}
                <motion.div
                    className="tech-marquee"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="marquee-track">
                        {[...techIcons, ...techIcons].map((tech, index) => (
                            <div key={index} className="tech-icon-wrapper" style={{ '--icon-color': tech.color }}>
                                <tech.Icon className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            style={{ '--card-color': category.color }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon-wrapper">
                                    <category.icon className="skill-icon" />
                                </div>
                                <h3 className="skill-title">{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ type: 'spring', stiffness: 400 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
