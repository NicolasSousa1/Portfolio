import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Database, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import Achievements from './Achievements.jsx';
import Projects from './Projects.jsx';

const profile = {
  role: 'Desenvolvedor full stack',
  firstName: 'Nicolas',
  lastName: 'de Sousa',
  bio: 'Sou programador e estudante de Análise e Desenvolvimento de Sistemas (ADS). Desenvolvo aplicações web e automações, da interface à integração com APIs e bancos de dados.',
  photo: 'imagens/nicolas-de-sousa.jpeg',
  photoAlt: 'Retrato de Nicolas de Sousa',
};

const technologies = [
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
  { name: 'C', icon: 'c' },
  { name: 'Banco de dados' },
  { name: 'Java', icon: 'java' },
];

const navigation = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'conquistas', label: 'Conquistas' },
  { id: 'contato', label: 'Contato' },
];

const socialProfiles = [
  { name: 'LinkedIn', detail: 'nicolas-sousa1', href: 'https://www.linkedin.com/in/nicolas-sousa1/', Icon: Linkedin },
  { name: 'GitHub', detail: 'NicolasSousa1', href: 'https://github.com/NicolasSousa1', Icon: Github },
];

const email = 'dsousa.nicolas@gmail.com';
const contactLinks = [
  { name: 'E-mail', detail: email, href: `mailto:${email}`, Icon: Mail },
  ...socialProfiles,
];

function Brand({ href }) {
  const Tag = href ? 'a' : 'span';

  return (
    <Tag className="brand" href={href}>
      <span className="brand-mark"><Code2 size={20} aria-hidden="true" /></span>
      <span className="brand-name">{profile.firstName}{' '}<span className="accent">{profile.lastName}</span></span>
    </Tag>
  );
}

function SocialLinks({ label }) {
  return (
    <nav className="social-links" aria-label={label}>
      {socialProfiles.map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (abre em nova aba)`} title={name}>
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

function ThemePicker() {
  const [theme, setTheme] = useState(() => (
    document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  ));

  function selectTheme(nextTheme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The selection still applies to the current page.
    }
  }

  return (
    <div className="theme-picker" role="group" aria-label="Tema do site">
      <button type="button" aria-label="Tema claro" aria-pressed={theme === 'light'} onClick={() => selectTheme('light')} title="Tema claro">
        <Sun size={17} aria-hidden="true" />
      </button>
      <button type="button" aria-label="Tema escuro" aria-pressed={theme === 'dark'} onClick={() => selectTheme('dark')} title="Tema escuro">
        <Moon size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState(() => location.hash.slice(1) || 'inicio');

  useEffect(() => {
    function updateActiveSection() {
      setActiveSection(location.hash.slice(1) || 'inicio');
    }

    window.addEventListener('hashchange', updateActiveSection);
    return () => window.removeEventListener('hashchange', updateActiveSection);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <div className="header-left">
          <Brand href="#inicio" />
          <SocialLinks label="Perfis profissionais" />
        </div>
        <nav className="main-nav" aria-label="Navegação principal">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <ThemePicker />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-inner section-shell">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">
            {profile.firstName}{' '}
            <span className="accent">{profile.lastName}</span>
          </h1>
          <p className="hero-description">{profile.bio}</p>
          <ul className="technology-list" aria-label="Tecnologias">
            {technologies.map(({ name, icon }) => (
              <li key={name}>
                {icon ? (
                  <img src={`${import.meta.env.BASE_URL}icones/tecnologias/${icon}.svg`} alt="" width="18" height="18" />
                ) : (
                  <Database size={18} aria-hidden="true" />
                )}
                {name}
              </li>
            ))}
          </ul>
          <div className="hero-links">
            <a className="hero-action" href="#projetos">
              Ver projetos <ArrowDown size={17} aria-hidden="true" />
            </a>
            <SocialLinks label="Perfis de Nicolas de Sousa" />
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-frame">
            <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.photoAlt} width="960" height="1280" fetchPriority="high" />
          </div>
        </figure>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="contact section-shell" aria-labelledby="contato-titulo">
      <div className="section-heading">
        <h2 id="contato-titulo">Contato<span className="accent">.</span></h2>
      </div>
      <ul className="contact-list">
        {contactLinks.map(({ name, detail, href, Icon }) => {
          const opensNewTab = href.startsWith('https:');

          return (
            <li key={name}>
              <a
                className="contact-card"
                href={href}
                target={opensNewTab ? '_blank' : undefined}
                rel={opensNewTab ? 'noopener noreferrer' : undefined}
                aria-label={opensNewTab ? `${name} de Nicolas de Sousa (abre em nova aba)` : undefined}
              >
                <span className="contact-icon"><Icon size={20} aria-hidden="true" /></span>
                <span className="contact-text">
                  <span className="contact-label">{name}</span>
                  <span>{detail}</span>
                </span>
                <ArrowUpRight className="contact-arrow" size={17} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <Brand />
        </div>
      </footer>
    </>
  );
}
