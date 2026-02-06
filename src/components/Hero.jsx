import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaRocket, FaEnvelope, FaLinkedinIn, FaGithub, FaChevronDown } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import './Hero.css'

import profileImg from '../assets/profile.png'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-gradient"></div>

            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <HiSparkles className="badge-icon" />
                    <span>AI Engineer & Data Scientist</span>
                </motion.div>

                <motion.div
                    className="hero-title-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <motion.div
                        className="hero-image-wrapper"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={profileImg} alt="Usama Masood" className="hero-profile-img" />
                    </motion.div>
                    <h1 className="hero-title">
                        Hi, I'm{' '}
                        <span className="gradient-text">Usama Masood</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <TypeAnimation
                        sequence={[
                            'I build Autonomous AI Agents',
                            2000,
                            'I create Voice AI Solutions',
                            2000,
                            'I design MLOps Pipelines',
                            2000,
                            'I develop RAG Architectures',
                            2000,
                            'I craft Computer Vision Systems',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="typing-text"
                    />
                    <span className="cursor">|</span>
                </motion.div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Building production-grade AI solutions with{' '}
                    <span className="highlight">LangGraph Multi-Agents</span>,{' '}
                    <span className="highlight">Voice AI</span>, and{' '}
                    <span className="highlight">MLOps</span> pipelines
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaRocket />
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaEnvelope />
                        Get in Touch
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.a
                        href="https://linkedin.com/in/masood-usama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedinIn />
                    </motion.a>
                    <motion.a
                        href="https://github.com/UsamaMasood12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="mailto:usamamasood.ai@gmail.com"
                        className="social-link"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaEnvelope />
                    </motion.a>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span>Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaChevronDown />
                </motion.div>
            </motion.a>
        </section>
    )
}

export default Hero
