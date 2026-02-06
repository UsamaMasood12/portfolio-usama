import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-brand">
                        <span className="footer-logo gradient-text">UM</span>
                        <p className="footer-tagline">Building AI solutions that matter</p>
                    </div>

                    <div className="footer-links">
                        <motion.a
                            href="https://linkedin.com/in/masood-usama"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -3 }}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </motion.a>
                        <motion.a
                            href="https://github.com/UsamaMasood12"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -3 }}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="mailto:usamamasood.ai@gmail.com"
                            whileHover={{ scale: 1.2, y: -3 }}
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </motion.a>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-credit">
                            Designed & Built with <FaHeart className="heart-icon" /> by{' '}
                            <span className="gradient-text">Usama Masood</span>
                        </p>
                        <p className="footer-copyright">© 2026 All Rights Reserved</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
