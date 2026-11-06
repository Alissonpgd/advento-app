import React, { useEffect, useMemo, useState } from 'react';
import { Bell, BookOpen, CalendarDays, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3, Flame, Heart, LockKeyhole, Menu, RotateCcw, Sparkles, Sprout, Users, X } from 'lucide-react';
import { devotionals, START_DATE, DAILY_REMINDER_HOUR } from './devotionals';
import { createDevotionalContent } from './devotional-content';
import { ColoringPage, DevotionalActivities, DevotionalReading } from './DevotionalActivities';
import { getBibleLinks } from './bible-links';

const AUDIENCES = devotionals[0].audiences;
const STORAGE_KEY = 'advento-jornada-v1';
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
const dayDiff = (a,b) => Math.floor((new Date(`${b}T12:00:00`) - new Date(`${a}T12:00:00`)) / 86400000);
const readSaved = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } };

export default function App() {
  const [saved,setSaved] = useState(readSaved);
  const [audience,setAudience] = useState('adultos');
  const [selectedDay,setSelectedDay] = useState(1);
  const [now,setNow] = useState(new Date());
  const [alarm,setAlarm] = useState(() => localStorage.getItem('advento-alarm') !== 'off');
  const [permission,setPermission] = useState(typeof Notification === 'undefined' ? 'unsupported' : Notification.permission);
  const [showSettings,setShowSettings] = useState(false);
  const [toast,setToast] = useState('');
  const currentDate = todayISO();
  const elapsed = dayDiff(START_DATE,currentDate);
  const unlocked = Math.max(0,Math.min(29,elapsed + (now.getHours() >= DAILY_REMINDER_HOUR ? 1 : 0)));
  const progress = useMemo(() => {
    const total = 29 * 4;
    const done = Object.values(saved.completed || {}).filter(Boolean).length;
    return {done,total,pct:Math.round(done/total*100)};
  },[saved]);
  const devotional = devotionals[selectedDay-1];
  const audienceData = devotional.audiences.find(a=>a.id===audience);
  const content = useMemo(() => createDevotionalContent(devotional, audience), [devotional, audience]);
  const bibleLinks = useMemo(() => getBibleLinks(devotional.reference), [devotional.reference]);
  const answerKey = `${selectedDay}:${audience}`;
  const savedAnswers = saved.answers?.[answerKey] || {};
  const savedReflection = saved.reflections?.[answerKey] || '';
  const isUnlocked = selectedDay <= unlocked;
  const isDone = !!saved.completed?.[`${selectedDay}:${audience}`];
  const daysLeft = Math.max(0,29-unlocked);

  useEffect(() => {
    if (unlocked > 0) setSelectedDay(unlocked);
  }, [unlocked]);
  useEffect(() => {
    const t=setInterval(()=>setNow(new Date()),30000);
    const onVisible=()=>{ if(!document.hidden) setNow(new Date()); };
    document.addEventListener('visibilitychange',onVisible);
    return ()=>{clearInterval(t);document.removeEventListener('visibilitychange',onVisible);};
  },[]);
  useEffect(()=>{ localStorage.setItem(STORAGE_KEY,JSON.stringify(saved)); },[saved]);
  useEffect(()=>{ localStorage.setItem('advento-alarm',alarm?'on':'off'); },[alarm]);
  useEffect(()=>{
    if(!alarm || permission!=='granted') return;
    const key=`advento-notified-${todayISO()}`;
    const d=new Date();
    if(d.getHours()>=DAILY_REMINDER_HOUR && localStorage.getItem(key)!=='yes' && unlocked>0){
      new Notification('Hora do seu Advento 📖',{body:'Sua lição diária está esperando por você.',icon:'/icon.svg'});
      localStorage.setItem(key,'yes');
    }
  },[now,alarm,permission,unlocked]);

  const requestPermission=async()=>{
    if(!('Notification' in window)){setPermission('unsupported');return;}
    const p=await Notification.requestPermission(); setPermission(p);
    if(p==='granted'){setToast('Lembretes ativados neste navegador.');setTimeout(()=>setToast(''),3000);}
  };
  const toggleDone=()=>{
    const key=`${selectedDay}:${audience}`;
    setSaved(prev=>({ ...prev, completed:{...(prev.completed||{}),[key]:!prev.completed?.[key]} }));
  };
  const saveAnswer=(question,value)=>{
    setSaved(prev=>({
      ...prev,
      answers:{
        ...(prev.answers||{}),
        [answerKey]:{...(prev.answers?.[answerKey]||{}),[question]:value},
      },
    }));
  };
  const saveReflection=(value)=>{
    setSaved(prev=>({
      ...prev,
      reflections:{...(prev.reflections||{}),[answerKey]:value},
    }));
  };
  const goDay=(n)=>{if(n>=1 && n<=unlocked){setSelectedDay(n);document.getElementById('lesson')?.scrollIntoView({behavior:'smooth',block:'start'});}};
  const resetProgress=()=>{
    if(window.confirm('Apagar o progresso, as respostas e as reflexões salvos neste navegador? Esta ação não pode ser desfeita.')){
      setSaved({});setShowSettings(false);
    }
  };
  const dateLabel = new Date(`${START_DATE}T12:00:00`).toLocaleDateString('pt-BR',{day:'numeric',month:'long'});
  const selectedDate = new Date(new Date(`${START_DATE}T12:00:00`).getTime()+(selectedDay-1)*86400000).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
  const reminderStatus = permission==='granted' ? 'Notificações permitidas' : permission==='denied' ? 'Permissão bloqueada no navegador' : permission==='unsupported' ? 'Notificações indisponíveis' : 'Ative as notificações';

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" onClick={e=>{e.preventDefault();setSelectedDay(Math.max(1,unlocked));}}>
        <span className="brand-mark"><Sprout size={22}/></span><span>ADVENTO<span className="brand-light">.JORNADA</span></span>
      </a>
      <div className="top-actions">
        <span className="year-pill">EDIÇÃO 2026</span>
        <button className="icon-btn" aria-label="Configurações" onClick={()=>setShowSettings(true)}><Bell size={19}/></button>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={14}/> UMA JORNADA DE 29 DIAS</div>
          <h1>Prepare o coração.<br/><em>Transforme atitudes.</em></h1>
          <p>Uma nova oportunidade por dia para crescer na fé, no amor e no caráter — com a Palavra no centro.</p>
          <div className="hero-bottom">
            <div className="hero-date"><CalendarDays size={16}/><span>26 NOV — 24 DEZ, 2026</span></div>
            <div className="hero-time"><Clock3 size={16}/><span>LEMBRETE DIÁRIO • 18:00</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="wreath">✳</div><div className="candle candle-a"></div><div className="candle candle-b"></div><div className="candle candle-c"></div><div className="candle candle-d"></div><div className="flame"></div></div>
      </section>

      <section className="progress-panel">
        <div className="progress-copy">
          <div><span className="section-kicker">SUA CAMINHADA</span><h2>Progresso geral</h2></div>
          <div className="progress-number">{progress.pct}<small>%</small></div>
        </div>
        <div className="progress-track"><div className="progress-fill" style={{width:`${progress.pct}%`}}/></div>
        <div className="progress-meta"><span>{progress.done} de {progress.total} atividades concluídas</span><span>{unlocked} de 29 dias liberados</span></div>
      </section>

      <section className="today-row">
        <div><span className="section-kicker">CALENDÁRIO PROGRESSIVO</span><h2>Uma lição por dia</h2><p>Depois de liberada, cada lição fica disponível para sempre.</p></div>
        <div className="unlock-count"><strong>{String(unlocked).padStart(2,'0')}<span>/29</span></strong><small>{unlocked===29?'Jornada completa':daysLeft===29?'Começa em 26 de novembro':`${daysLeft} dias para liberar tudo`}</small></div>
      </section>

      <section className="calendar-grid" aria-label="Calendário de Advento">
        {devotionals.map(d=>{
          const open=d.day<=unlocked;
          const count=d.audiences.filter(a=>saved.completed?.[`${d.day}:${a.id}`]).length;
          return <button key={d.day} className={`day-tile ${open?'open':'locked'} ${selectedDay===d.day?'selected':''}`} disabled={!open} onClick={()=>goDay(d.day)}>
            <span className="tile-top"><span>DIA {String(d.day).padStart(2,'0')}</span>{open?<span className="tile-check">{count===4?<CheckCircle2 size={15}/>:count>0?`${count}/4`:''}</span>:<LockKeyhole size={14}/>}</span>
            <strong>{d.day===1?'Gratidão':d.day===29?'Cristo no centro':d.title.split(':')[0]}</strong>
            <small>{new Date(new Date(`${START_DATE}T12:00:00`).getTime()+(d.day-1)*86400000).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})}</small>
          </button>;
        })}
      </section>

      {unlocked===0 ? <section className="waiting-card"><div className="waiting-icon">🕯️</div><span className="section-kicker">A JORNADA COMEÇA EM {dateLabel.toUpperCase()}</span><h2>Um tempo de preparação.</h2><p>O primeiro devocional será liberado em 26 de novembro de 2026. Você poderá ativar o lembrete diário das 18h nas configurações.</p><button className="secondary-btn" onClick={()=>setShowSettings(true)}><Bell size={16}/> Configurar lembrete</button></section> :
      <section className="lesson-section" id="lesson">
        <div className="lesson-heading"><div><span className="section-kicker">DIA {String(selectedDay).padStart(2,'0')} • {selectedDate.toUpperCase()}</span><h2>{devotional.title}</h2></div><span className="available-tag"><Check size={13}/> LIBERADO</span></div>
        <div className="scripture-card"><div className="scripture-icon"><BookOpen size={20}/></div><div><span>LEITURA BÍBLICA</span><strong>{devotional.reference}</strong><small>Escolha uma tradução para abrir o texto completo em uma fonte autorizada.</small></div></div>
        <div className="bible-version-links" aria-label="Versões bíblicas">
          {bibleLinks.map(version=><details className="bible-version" key={version.code}>
            <summary>{version.label}</summary>
            <div>{version.passages.map(passage=><a key={passage.reference} href={passage.href} target="_blank" rel="noreferrer">{passage.reference}</a>)}</div>
          </details>)}
        </div>
        <p className="bible-source-note">Os textos completos abrem no YouVersion; as traduções não são armazenadas neste app.</p>
        <div className="reflection-card"><span className="section-kicker">REFLEXÃO DO DIA</span><p>{devotional.reflection}</p></div>
        <div className="audience-head"><div><span className="section-kicker">ESCOLHA SUA JORNADA</span><h3>Uma lição para cada fase</h3></div><span className="audience-count">4 VERSÕES</span></div>
        <div className="audience-tabs">
          {AUDIENCES.map(a=><button key={a.id} onClick={()=>setAudience(a.id)} className={audience===a.id?'active':''}><span>{a.icon}</span>{a.label}</button>)}
        </div>
        <DevotionalReading content={content}/>
        <article className="audience-card">
          <div className="audience-card-top"><div className="audience-icon">{audienceData.icon}</div><div><span className="section-kicker">DEVOCIONAL • {audienceData.label.toUpperCase()}</span><h3>{audienceData.subtitle}</h3></div></div>
          <div className="task-box"><div className="task-label"><Flame size={16}/> MISSÃO DE HOJE</div><p>{audienceData.activity}</p></div>
          <DevotionalActivities
            content={content}
            answers={savedAnswers}
            reflection={savedReflection}
            onAnswer={saveAnswer}
            onReflectionChange={saveReflection}
          />
          <button onClick={toggleDone} className={`complete-btn ${isDone?'completed':''}`}>{isDone?<><CheckCircle2 size={19}/> Atividade concluída</>:<><Check size={19}/> Marcar atividade como concluída</>}</button>
          <p className="completion-note">Seu progresso fica salvo neste dispositivo. Você pode desmarcar se precisar corrigir.</p>
        </article>
        {audience==='criancas'&&<ColoringPage/>}
        <div className="lesson-nav"><button className="nav-btn" disabled={selectedDay===1} onClick={()=>goDay(selectedDay-1)}><ChevronLeft size={17}/> Dia anterior</button><button className="nav-btn next" disabled={selectedDay>=unlocked} onClick={()=>goDay(selectedDay+1)}>Próximo dia <ChevronRight size={17}/></button></div>
      </section>}

      <section className="closing-note"><Heart size={18}/><p><strong>Não é sobre cumprir tarefas perfeitamente.</strong><br/>É sobre cultivar uma fé viva, relacionamentos saudáveis e atitudes que apontem para Cristo.</p></section>
    </main>
    <footer><span>ADVENTO.JORNADA © 2026</span><span>FÉ • FAMÍLIA • CARÁTER</span></footer>

    {showSettings&&<div className="modal-backdrop" onClick={()=>setShowSettings(false)}><div className="settings-modal" onClick={e=>e.stopPropagation()}>
      <div className="modal-head"><div><span className="section-kicker">PREFERÊNCIAS</span><h2>Configurações</h2></div><button className="icon-btn" onClick={()=>setShowSettings(false)}><X size={19}/></button></div>
      <div className="setting-row"><div className="setting-icon"><Bell size={19}/></div><div className="setting-copy"><strong>Lembrete diário — 18:00</strong><small>{reminderStatus}. O navegador precisa estar aberto para verificar o horário.</small></div><button className={`switch ${alarm?'on':''}`} onClick={()=>setAlarm(!alarm)} aria-label="Ativar ou desativar lembrete"><span/></button></div>
      <button className="primary-btn full" onClick={requestPermission}>{permission==='granted'?'Permissão de notificação concedida':'Permitir notificações'}</button>
      <div className="notice"><strong>Como funciona o lembrete?</strong><p>O app verifica o horário enquanto está aberto. Em celulares e computadores, permita notificações e mantenha o app aberto ou instalado em primeiro plano para receber o aviso. Sem servidor, não há garantia de alarme quando o navegador estiver totalmente fechado.</p></div>
      <div className="setting-row reset-row"><div className="setting-icon"><RotateCcw size={18}/></div><div className="setting-copy"><strong>Reiniciar progresso</strong><small>Apaga marcações, respostas e reflexões salvas neste navegador.</small></div><button className="text-danger" onClick={resetProgress}>Apagar</button></div>
      <p className="privacy-note">Seu progresso, respostas e reflexões ficam somente neste navegador. Limpar os dados do navegador pode apagá-los.</p>
    </div></div>}
    {toast&&<div className="toast"><CheckCircle2 size={17}/>{toast}</div>}
  </div>;
}