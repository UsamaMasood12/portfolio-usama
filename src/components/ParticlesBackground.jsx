import { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            particles = []
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    opacity: Math.random() * 0.3 + 0.1,
                    color: Math.random() > 0.5 ? '#0ea5e9' : '#8b5cf6'
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.speedX
                particle.y += particle.speedY

                // Wrap around screen
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.globalAlpha = particle.opacity
                ctx.fill()

                // Draw connections
                particles.forEach((particle2, j) => {
                    if (i === j) return
                    const dx = particle.x - particle2.x
                    const dy = particle.y - particle2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(particle2.x, particle2.y)
                        ctx.strokeStyle = particle.color
                        ctx.globalAlpha = (1 - distance / 120) * 0.15
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                })
            })

            ctx.globalAlpha = 1
            animationFrameId = requestAnimationFrame(drawParticles)
        }

        resize()
        createParticles()
        drawParticles()

        window.addEventListener('resize', () => {
            resize()
            createParticles()
        })

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.35
            }}
        />
    )
}

export default ParticlesBackground
