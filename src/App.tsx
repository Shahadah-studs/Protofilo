import { useEffect, useState } from 'react'

type Project = {
  number: string
  name: string
  url: string
  domain: string
  tag: string
  accent: string
  mark: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'MineSocial',
    url: 'https://Minesocial.vercel.app',
    domain: 'minesocial.vercel.app',
    tag: 'WEB PROJECT',
    accent: 'mint',
    mark: 'MS',
  },
  {
    number: '02',
    name: 'Bloxd World Code',
    url: 'https://bloxdworldcode.vercel.app',
    domain: 'bloxdworldcode.vercel.app',
    tag: 'BLOXD PROJECT',
    accent: 'violet',
    mark: 'BW',
  },
  {
    number: '03',
    name: 'Sahih Finder',
    url: 'https://www.sahihfinder.com',
    domain: 'sahihfinder.com',
    tag: 'WEB PROJECT',
    accent: 'blue',
    mark: 'SF',
  },
]

const socials = [
  { name: 'GitHub', label: '@Shahadah-studs', url: 'https://github.com/Shahadah-studs', icon: 'GH' },
  { name: 'Itch.io', label: 'Shahadah Studios', url: 'https://shahadah-studios.itch.io', icon: 'IT' },
  { name: 'BloxdHub', label: '@Shahadah_Studios', url: 'https://bloxdhub.com/@Shahadah_Studios', icon: 'BH' },
]

function Loader() {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const started = Date.now()
    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.ceil(Math.random() * 12), 92)
        return next
      })
    }, 90)

    const finish = () => {
      const wait = Math.max(0, 1050 - (Date.now() - started))
      window.setTimeout(() => {
        setProgress(100)
        window.setTimeout(() => setLeaving(true), 250)
      }, wait)
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      window.clearInterval(timer)
      window.removeEventListener('load', finish)
    }
  }, [])

  if (leaving) return null

  return (
    <div className={`loader ${progress === 100 ? 'loader--out' : ''}`} aria-label="Loading portfolio" role="status">
      <div className="loader__content">
        <div className="loader__mark"><span>SS</span><i /></div>
        <p className="eyebrow loader__eyebrow">SHAHADAH STUDIOS <span>///</span> PORTFOLIO</p>
        <h1>Entering<br /><em>the grid.</em></h1>
        <div className="loader__bottom">
          <div className="loader__track"><span style={{ width: `${progress}%` }} /></div>
          <div className="loader__readout"><span>INITIALIZING INTERFACE</span><span>{String(progress).padStart(3, '0')}%</span></div>
        </div>
      </div>
      <div className="loader__coordinates">SS—01&nbsp;&nbsp; / &nbsp;&nbsp;ONLINE</div>
    </div>
  )
}

function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M4 3h9v9" /></svg>
}

function App() {
  return (
    <>
      <Loader />
      <div className="site-shell">
        <div className="noise" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Shahadah Studios home">
            <span className="brand__symbol">S<span>.</span></span>
            <span className="brand__name">SHAHADAH<br />STUDIOS</span>
          </a>
          <nav className="navigation" aria-label="Main navigation">
            <a href="#projects"><span>01</span> PROJECTS</a>
            <a href="#connect"><span>02</span> CONNECT</a>
          </nav>
          <a className="availability" href="https://github.com/Shahadah-studs" target="_blank" rel="noreferrer">
            <span className="availability__dot" /> FIND ME ONLINE <ArrowIcon />
          </a>
        </header>

        <main id="home">
          <section className="hero section-wrap">
            <div className="hero__left">
              <p className="eyebrow"><span className="eyebrow__line" /> DIGITAL PORTFOLIO <span className="eyebrow__muted">/ 2025—26</span></p>
              <h1>Ideas into<br /><span className="hero__outline">digital</span><br /><span className="hero__accent">worlds<span className="hero__period">.</span></span></h1>
              <p className="hero__intro">A home for the projects and places connected to Shahadah Studios. Pick a link and explore.</p>
              <a className="text-link" href="#projects">EXPLORE PROJECTS <span>↓</span></a>
            </div>
            <div className="hero__art" aria-label="Abstract neon geometric artwork">
              <div className="art-grid" />
              <div className="orbit orbit--one" /><div className="orbit orbit--two" /><div className="orbit orbit--three" />
              <div className="art-core"><span>SS</span></div>
              <span className="art-cross art-cross--a">+</span><span className="art-cross art-cross--b">+</span>
              <span className="art-label art-label--top">FIG. 001 / SIGNAL</span>
              <span className="art-label art-label--bottom">CREATIVE SPACE<br />ONLINE ↗</span>
              <span className="art-coordinate">35° 41′ 22″ N</span>
            </div>
            <div className="hero__side-note">INDEPENDENT<br />DIGITAL SPACE <span>↘</span></div>
          </section>

          <section className="projects section-wrap" id="projects">
            <div className="section-heading">
              <div><p className="eyebrow"><span className="eyebrow__line" /> SELECTED LINKS</p><h2>Things I’ve<br /><span>put out there.</span></h2></div>
              <p className="section-heading__note">A short list of projects.<br />Open one to take a look <span>↙</span></p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <a className={`project-card project-card--${project.accent}`} href={project.url} key={project.number} target="_blank" rel="noreferrer">
                  <span className="project-card__number">{project.number}<span> / 03</span></span>
                  <span className="project-card__mark" aria-hidden="true">{project.mark}<i>↗</i></span>
                  <span className="project-card__details"><span className="project-card__tag">{project.tag}</span><strong>{project.name}</strong><span className="project-card__url">{project.domain}</span></span>
                  <span className="project-card__arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </section>

          <section className="connect section-wrap" id="connect">
            <div className="connect__heading"><p className="eyebrow"><span className="eyebrow__line" /> FIND YOUR WAY</p><h2>Let’s connect<br /><span>out there.</span></h2></div>
            <div className="social-list">
              {socials.map((social, index) => (
                <a className="social-link" href={social.url} key={social.name} target="_blank" rel="noreferrer">
                  <span className="social-link__index">0{index + 1}</span><span className="social-link__icon">{social.icon}</span><span className="social-link__name">{social.name}<small>{social.label}</small></span><span className="social-link__arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer section-wrap"><a className="footer__brand" href="#home">SHAHADAH STUDIOS<span>®</span></a><span>MADE FOR THE DIGITAL WORLD <b>✳</b></span><a href="#home">BACK TO TOP ↑</a></footer>
      </div>
    </>
  )
}

export default App
