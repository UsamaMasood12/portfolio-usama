import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <section className="contact section" id="contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="number">05.</span>
                    Get In Touch
                </motion.h2>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="contact-heading">Let's Work Together</h3>
                        <p className="contact-text">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a project in mind, need AI consulting, or just want to connect,
                            feel free to reach out!
                        </p>

                        <div className="contact-info">
                            <motion.a
                                href="mailto:usamamasood.ai@gmail.com"
                                className="contact-item glass-card"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">usamamasood.ai@gmail.com</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+447724030958"
                                className="contact-item glass-card"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <div className="contact-icon">
                                    <FaPhone />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value">+44 7724 030958</span>
                                </div>
                            </motion.a>

                            <motion.div
                                className="contact-item glass-card"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">Middlesbrough, UK</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="contact-socials">
                            <motion.a
                                href="https://linkedin.com/in/masood-usama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedinIn />
                                <span>LinkedIn</span>
                            </motion.a>
                            <motion.a
                                href="https://github.com/UsamaMasood12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="cta-card glass-card">
                            <div className="cta-glow"></div>
                            <h4>Ready to collaborate?</h4>
                            <p>Let's discuss how I can help bring your AI vision to life.</p>
                            <motion.a
                                href="mailto:usamamasood.ai@gmail.com"
                                className="btn btn-primary btn-large"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPaperPlane />
                                Send Message
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
