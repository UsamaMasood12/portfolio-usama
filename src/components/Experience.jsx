import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaUniversity, FaCertificate, FaAward } from 'react-icons/fa'
import './Experience.css'

const timelineData = [
    {
        type: 'experience',
        icon: FaBriefcase,
        title: 'AI Engineer',
        company: 'Techionik, Lahore, Pakistan',
        date: 'Sep 2022 - Jan 2024',
        points: [
            'Led end-to-end design and deployment of advanced AI/ML solutions including LLMs, RAG pipelines, and multi-agent systems',
            'Owned client relationships from requirement gathering to delivery, led stakeholder presentations'
        ]
    },
    {
        type: 'education',
        icon: FaGraduationCap,
        title: 'MSc in Data Science with Advanced Practice',
        company: 'Teesside University, UK',
        date: 'February 2026',
        highlight: 'Distinction',
        thesis: 'AI Chatbot for Donor Support using RAG architecture, LangChain, LLMs, and FAISS vector database',
        courses: 'Machine Learning, Statistical Analysis, Data Mining, Big Data Analytics, Deep Learning'
    },
    {
        type: 'education',
        icon: FaUniversity,
        title: 'BSc in Electrical Engineering',
        company: 'National University of Science and Technology (NUST), Pakistan',
        date: '2021'
    }
]

const certifications = [
    { icon: FaAward, title: 'IBM Data Science Professional Certificate' },
    { icon: FaCertificate, title: 'Data Science Specialization' }
]

const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section className="experience section" id="experience" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="number">04.</span>
                    Experience & Education
                </motion.h2>

                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${item.type}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <motion.div
                                    className="marker-icon"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon />
                                </motion.div>
                                <div className="marker-line"></div>
                            </div>

                            <motion.div
                                className="timeline-content glass-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className={`timeline-badge ${item.type}`}>
                                    {item.type === 'experience' ? 'Experience' : 'Education'}
                                </span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <span className="timeline-date">
                                    {item.date}
                                    {item.highlight && (
                                        <span className="timeline-highlight">{item.highlight}</span>
                                    )}
                                </span>

                                {item.points && (
                                    <ul className="timeline-list">
                                        {item.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}

                                {item.thesis && (
                                    <p className="timeline-thesis">
                                        <strong>Thesis:</strong> {item.thesis}
                                    </p>
                                )}

                                {item.courses && (
                                    <p className="timeline-courses">
                                        <strong>Coursework:</strong> {item.courses}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    className="certifications"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="subsection-title">
                        <FaCertificate className="subsection-icon" />
                        Certifications
                    </h3>
                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="cert-card glass-card"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <cert.icon className="cert-icon" />
                                <h4>{cert.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
