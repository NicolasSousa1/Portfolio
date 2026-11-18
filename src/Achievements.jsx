import { ArrowUpRight } from 'lucide-react';

const achievements = [
  {
    id: 'melhor-delegado',
    event: 'Model United Nations',
    title: 'Melhor delegado do comitê',
    description: 'Representei o Reino Unido em uma simulação escolar da ONU. O comitê debateu a regulamentação da inteligência artificial e a liberdade de expressão online.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7411224047159590913/',
  },
  {
    id: 'interfatecs',
    event: 'Maratona de Programação InterFatecs',
    title: '5º lugar na Fatec',
    description: 'A maratona reuniu 45 equipes na nossa Fatec em 24 de maio de 2026. Eu cursava o 1º semestre de Análise e Desenvolvimento de Sistemas, e minha equipe ficou a uma questão da primeira colocada.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7464821781279932416/',
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="conquistas" aria-labelledby="conquistas-titulo">
      <div className="section-shell">
        <div className="section-heading">
          <h2 id="conquistas-titulo">Conquistas acadêmicas<span className="accent">.</span></h2>
        </div>
        <div className="achievements-grid">
          {achievements.map(({ id, event, title, description, url }) => (
            <article className="achievement" aria-labelledby={id} key={id}>
              <p className="achievement-event">{event}</p>
              <h3 id={id}>{title}</h3>
              <p className="achievement-description">{description}</p>
              <a className="achievement-source" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Ver publicação sobre ${event} no LinkedIn (abre em nova aba)`}>
                Ver publicação no LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
