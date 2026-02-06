import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaProjectDiagram, FaAward } from 'react-icons/fa'
import './About.css'

const stats = [
    { icon: FaProjectDiagram, number: '10+', label: 'AI Projects' },
    { icon: FaBrain, number: '1+', label: 'Years Experience' },
    { icon: FaAward, number: 'MSc', label: 'Distinction' },
]

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="number">01.</span>
                    About Me
                </motion.h2>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div className="about-text" variants={itemVariants}>
                        <p className="about-intro">
                            AI Engineer & Data Scientist with an{' '}
                            <span className="highlight">MSc in Data Science (Distinction)</span>{' '}
                            specializing in cutting-edge AI technologies.
                        </p>
                        <p>
                            I specialize in <strong>Autonomous Agentic Systems</strong>,{' '}
                            <strong>Voice AI solutions</strong>, and <strong>MLOps pipelines</strong>.
                            My expertise spans building production-grade multi-agent workflows with
                            LangGraph, real-time voice agents using LiveKit/Deepgram, and end-to-end
                            ML systems with CI/CD automation.
                        </p>
                        <p>
                            I've delivered AI solutions spanning RAG architectures, computer vision,
                            and business intelligence dashboards. I have a proven ability to translate
                            complex stakeholder requirements into scalable, enterprise-ready applications.
                        </p>
                    </motion.div>

                    <motion.div className="about-image" variants={itemVariants}>
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <div className="avatar-glow"></div>
                                <div className="avatar-icon">
                                    <FaBrain />
                                </div>
                                <div className="floating-badges">
                                    <span className="badge badge-1">AI</span>
                                    <span className="badge badge-2">ML</span>
                                    <span className="badge badge-3">LLM</span>
                                </div>
                            </div>
                            <div className="image-border"></div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item glass-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <stat.icon className="stat-icon" />
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
