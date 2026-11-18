import { ArrowUpRight, Github } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel.jsx';

const projects = [
  {
    id: 'plannedgoal',
    name: 'PlannedGoal',
    type: 'Planejamento financeiro',
    description:
      'Aplicação de educação financeira que simula metas com base na renda, nos gastos fixos, nas dívidas, no valor desejado e no prazo. O Google Gemini analisa a viabilidade da meta e apresenta sugestões personalizadas de planejamento.',
    url: 'https://planned-goal-gilt.vercel.app/',
    repository: 'https://github.com/NicolasSousa1/PlannedGoal',
    aspectRatio: '2 / 1',
    images: [
      { file: 'projeto-plannedgoal-claro.png', alt: 'Resultado da simulação do PlannedGoal no tema claro', width: 1280, height: 635 },
      { file: 'projeto-plannedgoal-escuro.png', alt: 'Resultado da simulação do PlannedGoal no tema escuro', width: 480, height: 237 },
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google Gemini'],
  },
  {
    id: 'barto-info',
    name: 'Bartô Info',
    type: 'Site educacional',
    description:
      'Site responsivo e informativo que centraliza descrições de cursos e objetivos educacionais da Etec, além de contar com um quiz interativo respondido por Inteligência Artificial. A partir das respostas do usuário, a IA analisa o perfil, interesses e afinidades, auxiliando na indicação do curso técnico mais compatível.',
    url: 'https://barto-info.vercel.app/paginas/index.html',
    repository: 'https://github.com/NicolasSousa1/BartoInfo',
    aspectRatio: '2 / 1',
    images: [
      { file: 'projeto-barto-info-inicio.jpg', alt: 'Página inicial do Bartô Info com a fachada da Etec', width: 1500, height: 750 },
      { file: 'projeto-barto-info-cursos.jpg', alt: 'Carrossel com cinco cursos técnicos da Etec', width: 1500, height: 629 },
      { file: 'projeto-barto-info-cursos-detalhes.jpg', alt: 'Carrossel com a opção de consultar informações sobre Segurança do Trabalho', width: 1500, height: 677 },
      { file: 'projeto-barto-info-quiz.jpg', alt: 'Formulário do quiz de indicação de cursos técnicos', width: 1500, height: 750 },
      { file: 'projeto-barto-info-criadores.jpg', alt: 'Página que apresenta os criadores do Bartô Info', width: 1500, height: 750 },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Google Gemini'],
  },
  {
    id: 'bot-de-automacao',
    name: 'Bot de automação',
    type: 'Cadastro de produtos',
    description:
      'Bot em Python que lê uma planilha CSV e cadastra os produtos automaticamente em um sistema web. O Pandas lê os registros e o PyAutoGUI controla o Chrome para fazer login e preencher o formulário de cada produto em sequência.',
    repository: 'https://github.com/NicolasSousa1/Bot-de-automacao',
    video: { file: 'projeto-bot-de-automacao.mp4', width: 1920, height: 1080 },
    technologies: ['Python', 'Pandas', 'PyAutoGUI'],
  },
  {
    id: 'busca-de-clima-e-endereco',
    name: 'Busca de clima e endereço',
    type: 'Aplicativo multiplataforma',
    description:
      'Aplicativo que consulta endereços pelo CEP e localiza o CEP a partir do estado, cidade e logradouro. Também mostra as condições atuais do tempo, com temperatura, umidade e vento, e salva as consultas em um histórico local.',
    repository: 'https://github.com/NicolasSousa1/Busca-de-clima-e-endereco',
    video: { file: 'projeto-busca-de-clima-e-endereco.mp4', width: 1920, height: 1080 },
    technologies: ['React Native', 'Expo', 'AsyncStorage', 'ViaCEP', 'OpenWeather'],
  },
]

export default function Projects() {
  return (
    <section className="projects section-shell" id="projetos" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Portfólio</p>
        <h2 id="projects-title">
          Projetos em destaque<span className="accent">.</span>
        </h2>
      </div>

      <div className="projects-list">
        {projects.map(({ id, name, type, description, images, video, technologies, url, repository, aspectRatio }) => (
          <section className="project" id={`projeto-${id}`} aria-labelledby={`titulo-projeto-${id}`} key={id}>
            <div className="project-body">
              <p className="project-type">{type}</p>
              <h3 id={`titulo-projeto-${id}`}>{name}</h3>
              <p className="project-description">{description}</p>
              <ul className="project-tags" aria-label="Tecnologias">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {(url || repository) && (
                <div className="project-links">
                  {url && (
                    <a className="project-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site de ${name} (abre em nova aba)`}>
                      Visitar site <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  )}
                  {repository && (
                    <a className="project-link project-link-secondary" href={repository} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${name} no GitHub (abre em nova aba)`}>
                      <Github size={17} aria-hidden="true" /> Ver código
                    </a>
                  )}
                </div>
              )}
            </div>
            {video ? (
              <video
                className="project-video"
                src={`${import.meta.env.BASE_URL}videos/${video.file}`}
                width={video.width}
                height={video.height}
                aria-label={`Demonstração do projeto ${name}`}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <ProjectCarousel images={images} projectName={name} aspectRatio={aspectRatio} />
            )}
          </section>
        ))}
      </div>
    </section>
  )
}
