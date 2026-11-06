import { Check, Printer } from 'lucide-react';

export function DevotionalReading({ content }) {
  return <section className="devotional-reading">
    <div className="reading-heading">
      <div><span className="section-kicker">LEITURA APROFUNDADA</span><h3>Medite e leve para a vida</h3></div>
      <span className="reading-time">{content.estimatedMinutes} min de leitura</span>
    </div>
    {content.reading.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
  </section>;
}

export function DevotionalActivities({ content, answers, reflection, onAnswer, onReflectionChange }) {
  return <section className="activities-section">
    <div className="activity-heading"><span className="section-kicker">PENSE E RESPONDA</span><h3>Verdadeiro ou falso?</h3><p>Escolha uma resposta para conferir a explicação.</p></div>
    <div className="quiz-list">
      {content.quiz.map((question, index) => {
        const answer = answers[index];
        const isCorrect = answer === String(question.correct);
        return <article className="quiz-card" key={question.statement}>
          <strong className="quiz-question">{index + 1}. {question.statement}</strong>
          <div className="quiz-options" role="radiogroup" aria-label={`Resposta da questão ${index + 1}`}>
            <button type="button" role="radio" aria-checked={answer === 'true'} className={answer === 'true' ? 'chosen' : ''} onClick={() => onAnswer(index, 'true')}>Verdadeiro</button>
            <button type="button" role="radio" aria-checked={answer === 'false'} className={answer === 'false' ? 'chosen' : ''} onClick={() => onAnswer(index, 'false')}>Falso</button>
          </div>
          {answer && <p className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}><strong>{isCorrect ? 'Resposta correta.' : 'Vamos revisar.'}</strong> {question.explanation}</p>}
        </article>;
      })}
    </div>

    <label className="reflection-input">
      <span className="section-kicker">ESCREVA SUA REFLEXÃO</span>
      <strong>{content.reflectionPrompt}</strong>
      <textarea value={reflection} onChange={(event) => onReflectionChange(event.target.value)} rows={5} placeholder="Escreva aqui. Seu texto fica salvo neste dispositivo." />
      <small>Salvamento automático neste navegador.</small>
    </label>
  </section>;
}

export function ColoringPage() {
  return <section className="coloring-card">
    <div className="coloring-heading">
      <div><span className="section-kicker">ATIVIDADE CRIATIVA</span><h3>Uma cena para colorir</h3><p>Desenho original inspirado no nascimento de Jesus.</p></div>
      <button className="print-btn" type="button" onClick={() => window.print()}><Printer size={16}/> Imprimir</button>
    </div>
    <svg className="coloring-art" viewBox="0 0 640 440" role="img" aria-labelledby="coloring-title coloring-description">
      <title id="coloring-title">Cena do nascimento de Jesus para colorir</title>
      <desc id="coloring-description">Um estábulo, uma estrela, Maria, José e o bebê numa manjedoura, desenhados em linhas para colorir.</desc>
      <g fill="white" stroke="#28352f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M75 205 320 48l245 157v200H75z"/>
        <path d="M48 211 320 35l272 176-12 18L320 60 60 229z"/>
        <path d="M100 228h440v160H100z"/>
        <path d="M120 250h400M120 278h400M120 306h400M120 334h400M120 362h400"/>
        <path d="M155 205v-48l18-21 18 21v48M449 205v-48l18-21 18 21v48"/>
        <path d="m320 82 12 38 38 2-31 22 11 37-30-23-30 23 11-37-31-22 38-2z"/>
        <path d="M213 321c0-38 25-66 57-66s57 28 57 66v67H213z"/>
        <path d="M226 301c4-26 20-40 44-40 23 0 39 14 44 40-12 15-27 21-44 21s-32-6-44-21z"/>
        <path d="M260 320c-12 4-22 15-24 29h69c-2-14-12-25-24-29l-10 9z"/>
        <circle cx="284" cy="301" r="13"/>
        <path d="M260 294q24-18 48 0M268 303h1m28 0h1"/>
        <path d="M183 364q-34-10-38-48-2-24 20-38 16 21 18 45z"/>
        <circle cx="168" cy="270" r="20"/>
        <path d="M148 268q18-28 39 0M161 272h1m15 0h1M157 280q11 8 21 0"/>
        <path d="M366 364q34-10 38-48 2-24-20-38-16 21-18 45z"/>
        <circle cx="383" cy="270" r="20"/>
        <path d="M362 268q20-28 41 0M376 272h1m15 0h1M373 280q11 8 21 0"/>
        <path d="M205 385h158l-18 20H223zM230 405v16m108-16v16"/>
        <path d="M112 406h416M135 420h370"/>
        <path d="M92 121q-19-24-37-4 5 18 24 20m472-16q19-24 37-4-5 18-24 20"/>
        <path d="M284 143q-18-15-30 2 7 15 23 14m66-16q18-15 30 2-7 15-23 14"/>
        <path d="M121 390q-12-16-24 0 11 0 12 12 2-12 12-12zm408 0q-12-16-24 0 11 0 12 12 2-12 12-12z"/>
      </g>
    </svg>
    <p className="coloring-note"><Check size={14}/> Você pode imprimir a página e colorir com lápis de cor.</p>
  </section>;
}
