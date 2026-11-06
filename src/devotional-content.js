const dayStudies = [
  'A gratidão bíblica nasce de lembrar quem Deus é, não de fingir que tudo está bem. Paulo escreveu sobre alegria e gratidão em uma carta marcada por dificuldades; isso impede que transformemos esses versículos numa cobrança contra quem sofre. A memória da graça dá linguagem para agradecer sem negar a dor.',
  'A imagem de Deus concede dignidade antes de qualquer conquista. Gênesis fala de uma vocação compartilhada por toda a humanidade; Efésios acrescenta que a vida em Cristo nos prepara para boas obras. Identidade, portanto, é presente e também chamado: recebemos valor e somos convidados a cuidar do próximo.',
  'Tiago liga a escuta cuidadosa à prática da Palavra. Ouvir primeiro não significa concordar com tudo; significa dar espaço para compreender fatos, sentimentos e necessidades antes de responder. A sabedoria também reconhece que a ira humana pode distorcer a justiça que diz defender.',
  'Em 1 Coríntios 13, o amor aparece por ações observáveis: paciência, bondade, humildade e perseverança. Não é uma desculpa para tolerar abuso nem uma exigência de apagar limites. É uma disposição de buscar o bem sem manipular, cobrar perfeição ou usar o outro como instrumento.',
  'O perdão cristão enfrenta o mal com verdade, sem entregar a vingança o governo do coração. A reconciliação pode exigir arrependimento, reparação, tempo e proteção. Perdoar não obriga a retomar uma relação insegura; limites sábios podem ser parte do cuidado com a vida e com a justiça.',
  'A integridade une palavras e atitudes, inclusive quando não há plateia. A verdade bíblica não é licença para humilhar: ela deve caminhar com amor, responsabilidade e disposição para corrigir o próprio erro. Confiança se constrói com escolhas consistentes, e pode levar tempo para ser restaurada.',
  'A sabedoria bíblica considera mais do que o desejo imediato. Ela escuta a Palavra, busca conselhos confiáveis, examina consequências e pergunta quem será afetado pela decisão. Pedir orientação não elimina a responsabilidade pessoal; ajuda a exercê-la com humildade, informação e atenção ao bem comum.',
  'A Bíblia compara a fala cuidadosa a uma fonte de vida. Isso não pede silêncio diante da injustiça: pede palavras verdadeiras, proporcionais e dirigidas à construção do bem. Uma correção pode ser firme sem ser cruel; um elogio específico pode fortalecer alguém que se sente invisível.',
  'Jesus associa grandeza ao serviço e não ao prestígio. Servir não significa aceitar exploração ou assumir que uma pessoa deve resolver tudo sozinha. É perceber necessidades reais, usar capacidades com generosidade e também criar condições para que o cuidado seja compartilhado e respeite a dignidade de quem recebe.',
  'A coragem bíblica não é ausência de medo nem desejo de confronto. É fidelidade que continua agindo com prudência quando a pressão convida a abandonar o que é justo. Às vezes, coragem é falar; em outras, pedir ajuda, admitir limites ou recusar uma escolha que prejudicaria alguém.',
  'A esperança cristã está ligada ao caráter de Deus e à promessa de redenção, não à previsão de que tudo dará certo como desejamos. Ela permite lamentar e agir no presente, sem chamar sofrimento de bênção automática. Esperar também é buscar apoio e praticar o bem enquanto o futuro permanece incerto.',
  'A Bíblia trata recursos como responsabilidade, não como medida do valor humano. Planejamento, trabalho honesto, contentamento e generosidade se equilibram; nenhum deles autoriza desprezar quem enfrenta necessidade. Uma decisão financeira sábia considera compromissos, pessoas dependentes, consequências e oportunidades de compartilhar.',
  'Cuidar do corpo e da mente é reconhecer limites e valor, não perseguir um padrão impossível. Descanso, alimentação, movimento e apoio emocional podem ser atos de responsabilidade. A fé não substitui atendimento profissional quando necessário; pedir ajuda pode ser uma escolha corajosa e sábia.',
  'A influência das amizades é real, mas discernir não é rotular pessoas como descartáveis. Relações saudáveis permitem respeito, honestidade e limites; também nos chamam a ser influência para o bem. Quando uma amizade pressiona alguém a ferir a si ou a outros, buscar apoio é importante.',
  'Os profetas unem adoração a justiça concreta. Compaixão não é apenas sentir pena: é tratar pessoas com dignidade e questionar práticas que produzem exclusão. Ajudar exige escutar quem vive a necessidade, evitar promessas vazias e apoiar soluções que não exponham nem diminuam ninguém.',
  'A Bíblia valoriza a diligência, mas não confunde excelência com perfeccionismo ou excesso de trabalho. Estudo, profissão e tarefas comuns podem servir ao próximo quando feitos com honestidade e cuidado. Também é responsável reconhecer limites, pedir condições justas e descansar.',
  'As Escrituras apresentam famílias com conflitos, perdas e diferenças; não idealizam uma casa sem problemas. Compromisso saudável inclui cuidado, verdade, escuta e limites. Pertencer não significa tolerar violência. Quando há risco ou sofrimento persistente, procurar ajuda segura é compatível com a fé.',
  'A paz bíblica não é vencer uma discussão nem evitar todo desconforto. Reparar requer ouvir, reconhecer a própria contribuição, nomear danos com clareza e procurar uma solução justa. Nem todo conflito se resolve imediatamente; segurança e mediação podem ser necessárias.',
  'Contentamento é liberdade diante da comparação, não proibição de sonhar ou melhorar a vida. A publicidade e as redes podem transformar a aprovação em medida de valor. A gratidão ajuda a perceber o que já existe, enquanto a sabedoria permite planejar sem fazer do consumo uma promessa de identidade.',
  'A oração bíblica inclui adoração, confissão, gratidão, pedidos e lamento. Jesus ensina confiança, não uma fórmula para controlar resultados. Orar também pode nos tornar atentos à ação que nos cabe: pedir pão não elimina o trabalho, e pedir justiça não dispensa agir com responsabilidade.',
  'A Bíblia deve ser lida em contexto, considerando gênero, audiência e lugar de cada passagem na história da redenção. Um versículo isolado pode ser usado para justificar ideias que o texto não ensina. Ler com atenção, comparar passagens e conversar com pessoas maduras fortalece uma fé responsável.',
  'Humildade cristã não é negar dons nem aceitar humilhação. É reconhecer que somos aprendizes, que podemos errar e que precisamos uns dos outros. Receber correção com discernimento e também corrigir com respeito são práticas de maturidade, não sinais de fraqueza.',
  'A criação é apresentada como obra de Deus confiada ao cuidado humano. Essa responsabilidade se expressa em hábitos cotidianos, mas também em escolhas coletivas sobre recursos e comunidades. Cuidar do ambiente não é adorar a natureza; é tratar com respeito aquilo que não nos pertence em absoluto.',
  'As narrativas do nascimento de Jesus conectam promessa, história e resposta de fé. Maria não aparece como alguém que controla todos os acontecimentos; ela escuta, pergunta e confia. A esperança messiânica não é um enfeite de dezembro, mas parte da história bíblica de justiça e redenção.',
  'Emanuel, “Deus conosco”, anuncia proximidade divina em uma história humana concreta. A encarnação não transforma sofrimento em algo trivial; mostra que Deus não permanece distante da fragilidade humana. A comunidade cristã é chamada a refletir essa presença por meio de hospitalidade e cuidado.',
  'A graça exclui a ideia de que podemos comprar o amor de Deus com desempenho. Efésios mantém juntas salvação como presente e boas obras como caminho preparado: a obediência é resposta agradecida, não moeda de troca. Isso combate tanto o orgulho quanto o desânimo.',
  'A generosidade cristã responde ao que recebemos e preserva a dignidade de todos. Dar não concede controle sobre quem recebe, nem transforma a necessidade alheia em oportunidade de autopromoção. A ajuda responsável escuta, oferece escolhas e coopera com redes de cuidado confiáveis.',
  'Jesus oferece uma paz diferente da ausência de problemas. Ela orienta atitudes em meio a tensões, mas não exige esconder injustiças para manter aparência de harmonia. Reconciliação responsável combina verdade, justiça, limites e disponibilidade para reparar o que estiver ao nosso alcance.',
  'Os relatos do nascimento e o prólogo de João apontam para Jesus como centro da esperança cristã. A celebração pode incluir alegria e tradições, mas não depende de consumo nem de uma família perfeita. Adoração se torna visível quando a comunidade pratica amor, justiça, hospitalidade e fidelidade.',
];

const audienceStudies = {
  adultos: (title) => [
    `A pergunta adulta não é apenas “o que sinto sobre ${title.toLowerCase()}?”, mas “que tipo de pessoa minhas decisões estão formando?”. A fé cristã oferece uma visão de Deus, da dignidade humana e do bem comum que alcança a rotina inteira. Isso inclui a maneira de dividir responsabilidades em casa, cumprir acordos no trabalho, tratar quem presta um serviço e participar da comunidade. A espiritualidade não fica separada da ética: oração e leitura bíblica devem aprofundar a honestidade, a justiça e a compaixão.`,
    `Na vida familiar, praticar essa verdade pode significar escutar sem presumir que já conhecemos a intenção do outro, reparar uma palavra que feriu ou repartir tarefas sem transformar cuidado em favor. No trabalho, pode significar dar crédito à contribuição alheia, recusar um atalho desonesto e respeitar limites de tempo. Na cidadania, significa avaliar como nossas escolhas afetam pessoas que têm menos voz. Não precisamos resolver tudo hoje; maturidade começa ao assumir com clareza a parte que nos cabe.`,
    `Uma decisão cristã responsável considera princípios bíblicos, fatos, consequências e conselhos de pessoas confiáveis. Ela não usa a Bíblia como frase de efeito para encerrar conversas nem chama preferência pessoal de mandamento divino. A graça nos permite reconhecer erros sem desespero e mudar de rumo sem fingir que não houve dano. Pergunte: quem é afetado por esta escolha, que reparação é possível e que prática concreta tornaria minha fé mais coerente amanhã?`,
  ].join('\n\n'),
  criancas: (title) => [
    `Imagine uma criança que percebe alguém sozinho na hora do recreio. Ela pode parar, perguntar se a pessoa quer brincar e ouvir a resposta. Esse gesto pequeno mostra que ${title.toLowerCase()} não é só uma palavra bonita: é algo que podemos praticar. Na Bíblia, Deus ensina seu povo por meio de histórias, mandamentos e exemplos de pessoas que aprendem a confiar e cuidar. Podemos conversar sobre o que aconteceu, o que cada pessoa sentiu e qual atitude foi bondosa e justa.`,
    `Deus criou cada pessoa com valor. Por isso, ninguém deve ser excluído, machucado ou tratado como se não importasse. Crianças também podem aprender a dizer a verdade, pedir desculpas, dividir, esperar a vez e chamar um adulto de confiança quando algo parece perigoso. Ser corajoso não é fazer tudo sozinho; muitas vezes é pedir ajuda. E fazer uma pergunta não é errado: podemos abrir a Bíblia, conversar e aprender juntos.`,
    `Depois de ouvir a história bíblica, escolha uma cena e conte o que você notou: quem precisava de ajuda? Quem escutou? O que poderia acontecer em seguida? Desenhar também ajuda a lembrar. Você pode mostrar cuidado em casa, na escola ou com um amigo, sem precisar ganhar prêmio. Se errar, pare, conte a verdade e tente consertar com ajuda de um adulto. Deus nos ensina com paciência, e cada escolha bondosa pode ser um começo novo.`,
  ].join('\n\n'),
  'pre-adolescentes': (title) => [
    `Nessa fase, sentimentos fortes e a vontade de pertencer podem tornar ${title.toLowerCase()} mais complicado do que parece. Talvez você saiba o que considera certo, mas tenha receio de perder uma amizade, ser zoado ou ficar de fora. A Bíblia não trata pessoas como robôs sem emoções: ela nos ensina a reconhecer o que sentimos e a escolher o que fazer com isso. Sentir raiva, vergonha ou medo não define seu caráter; suas próximas decisões importam.`,
    `Antes de agir, experimente uma pausa: dê nome ao sentimento, pense no que aconteceu de fato e imagine as consequências de cada opção. Pergunte se a escolha respeita você e as outras pessoas. Um amigo confiável, familiar ou educador pode ajudar a enxergar o que ficou difícil de perceber sozinho. Pedir conselho não tira sua autonomia; oferece mais informação. Se alguém pressiona você a guardar um segredo que causa medo ou a fazer algo arriscado, procure um adulto seguro.`,
    `A fé não promete que todos vão gostar das suas escolhas, mas oferece princípios para não entregar sua consciência à pressão do grupo. Você pode discordar sem humilhar, estabelecer limites sem atacar e mudar de ideia quando aprende algo novo. Pense em uma situação recente: o que você sentiu, que opções tinha e qual delas aproximaria sua atitude da pessoa que deseja ser? Pequenos passos repetidos formam hábitos, e hábitos ajudam a construir confiança em si e nos outros.`,
  ].join('\n\n'),
  adolescentes: (title) => [
    `Levar ${title.toLowerCase()} a sério não exige desligar o pensamento crítico. A fé cristã pode ser examinada com honestidade: que visão de pessoa está por trás de uma tendência, quem se beneficia de determinada escolha e quem pode ser prejudicado? A Bíblia não responde mecanicamente a todo dilema moderno, mas oferece fundamentos — dignidade, verdade, justiça, misericórdia e amor ao próximo — que ajudam a avaliar caminhos sem reduzir a vida a slogans.`,
    `Considere a pressão de grupo, a exposição nas redes e os relacionamentos: uma decisão pode parecer inofensiva no momento e ainda assim afetar a privacidade, a autoestima ou a segurança de alguém. Pergunte se há consentimento, honestidade e respeito; procure fontes confiáveis antes de compartilhar uma afirmação; não confunda popularidade com caráter. Convicção não é agressividade: é explicar por que você escolhe certo caminho e continuar aberto a ouvir argumentos e corrigir erros.`,
    `A autonomia cresce junto com responsabilidade. Você pode conversar com adultos de confiança sem abrir mão de pensar por si, especialmente quando um dilema envolve saúde, violência, abuso ou risco. Nesses casos, segurança e apoio vêm primeiro. Em situações comuns, faça um pequeno plano: nomeie o conflito, identifique os valores envolvidos, consulte alguém sábio e escolha uma ação que não desumanize ninguém. A maturidade cristã aparece não em ter resposta pronta para tudo, mas em buscar a verdade e assumir as consequências com humildade.`,
  ].join('\n\n'),
};

const applicationStudies = {
  adultos: (title, activity) => `Leve o tema para uma decisão real, sem tentar mudar todas as áreas de uma vez. Escolha um contexto — casa, trabalho ou comunidade — e identifique uma ação observável ligada a ${title.toLowerCase()}. A missão sugerida é: ${activity} Depois, avalie o resultado com honestidade. O objetivo não é provar que você é perfeito, mas praticar responsabilidade, reparar quando necessário e manter o compromisso além do entusiasmo de hoje.`,
  criancas: (title, activity) => `Agora transforme a ideia em uma ação pequena e segura. Converse com um adulto sobre como praticar ${title.toLowerCase()} em casa ou na escola. A missão é: ${activity} Se a atividade envolver outra pessoa, peça permissão e respeite a resposta. Você pode desenhar o que aprendeu, explicar para alguém e celebrar o esforço — não precisa fazer tudo perfeito para aprender.`,
  'pre-adolescentes': (title, activity) => `Escolha uma situação real dos próximos dias em que ${title.toLowerCase()} possa orientar sua resposta. Pense antes no obstáculo provável — vergonha, pressa, irritação ou pressão dos amigos — e prepare uma frase ou atitude concreta. A missão é: ${activity} Depois, observe o que sentiu e o que faria diferente. Refletir sem se atacar ajuda a transformar uma experiência em aprendizado.`,
  adolescentes: (title, activity) => `Conecte ${title.toLowerCase()} a um dilema concreto, não a uma resposta pronta. Escreva quais pessoas são afetadas, quais valores entram em tensão e que informação ainda falta. A missão é: ${activity} Se houver risco ou dano, procure apoio confiável. Ao final, avalie se sua decisão foi coerente, respeitou limites e deixou espaço para corrigir o rumo quando surgirem novos fatos.`,
};

const closingStudies = {
  adultos: (title) => `Para continuar depois desta leitura, transforme “${title}” em um compromisso verificável para esta semana. Defina quando e onde vai agir, e considere quem pode caminhar ao seu lado. Se a prática revelar um erro ou uma consequência inesperada, não esconda o fato: escute quem foi afetado, procure reparar o que for possível e ajuste o plano. Perseverança cristã não é insistir num método que falhou; é permanecer fiel ao bem com humildade, coragem e disposição para aprender.`,
  criancas: (title) => `Você pode guardar “${title}” na memória escolhendo uma palavra, uma cor e um desenho. Conte a alguém o que aprendeu e pergunte como essa pessoa também pratica o bem. Se a atividade não sair como imaginou, tudo bem: tente de outro jeito ou peça ajuda. Não faça nada que pareça perigoso e não guarde sozinho um segredo que assusta. Um adulto de confiança pode ajudar. Aprender sobre Deus também acontece quando cuidamos uns dos outros com alegria e respeito.`,
  'pre-adolescentes': (title) => `Depois de agir, faça uma revisão sem se comparar com outras pessoas: o que funcionou, o que foi difícil e que apoio teria ajudado? Escreva uma frase que gostaria de lembrar na próxima situação ligada a “${title}”. Você não precisa resolver conflitos sozinho nem acertar sempre. Se algo ultrapassar seus limites ou envolver risco, procure um adulto confiável. Coragem inclui pedir ajuda. Cada tentativa honesta pode ensinar algo importante sobre suas emoções, seus valores e a maneira como quer tratar os outros.`,
  adolescentes: (title) => `Ao final, registre não só a decisão, mas também as razões que a sustentam. Que princípio bíblico orientou você? Que argumento contrário merece ser ouvido com seriedade? Essa revisão não enfraquece sua fé: ajuda a distinguir convicção de impulso. Para “${title}”, estabeleça um próximo passo possível, uma pessoa segura com quem conversar e um limite que proteja a dignidade de todos. Se novos fatos aparecerem, reavalie com honestidade. Convicções maduras permanecem abertas à verdade e assumem responsabilidade por seus efeitos.`,
};

const quizPrompts = {
  adultos: {
    true: (title) => `A mensagem “${title}” deve influenciar decisões e responsabilidades concretas, não apenas sentimentos.`,
    false: (title) => `Para viver “${title}”, boas intenções bastam; consequências e necessidades das outras pessoas não precisam ser consideradas.`,
  },
  criancas: {
    true: (title) => `Posso praticar “${title}” com uma atitude pequena e bondosa hoje.`,
    false: (title) => `“${title}” só conta quando alguém me vê e me dá um prêmio.`,
  },
  'pre-adolescentes': {
    true: (title) => `Pensar no que sinto e nas consequências pode me ajudar a viver “${title}”.`,
    false: (title) => `Se meus amigos me pressionam, não sou responsável por nenhuma escolha ligada a “${title}”.`,
  },
  adolescentes: {
    true: (title) => `Posso avaliar “${title}” com convicção cristã, pensamento crítico e respeito por quem discorda.`,
    false: (title) => `Uma convicção cristã significa que nunca preciso fazer perguntas ou rever uma decisão sobre “${title}”.`,
  },
};

const quizExplanations = {
  adultos: {
    true: (reflection) => `Verdadeiro. ${reflection} A fé se torna visível em escolhas, relações e responsabilidades; intenção sem prática não basta.`,
    false: () => 'Falso. Boa intenção não apaga efeitos reais. A sabedoria cristã considera pessoas afetadas, consequências e a possibilidade de reparar danos.',
  },
  criancas: {
    true: () => 'Verdadeiro. Uma atitude pequena também pode mostrar amor e cuidado. Não é preciso esperar uma ocasião especial.',
    false: () => 'Falso. Fazer o bem não depende de aplauso ou prêmio. O importante é tratar as pessoas com respeito e pedir ajuda quando precisar.',
  },
  'pre-adolescentes': {
    true: () => 'Verdadeiro. Reconhecer emoções e pensar antes de agir ajuda você a escolher com mais liberdade e cuidado.',
    false: () => 'Falso. A pressão dos amigos é difícil, mas você continua podendo pausar, dizer não e buscar apoio de alguém confiável.',
  },
  adolescentes: {
    true: () => 'Verdadeiro. Convicções firmes podem conviver com perguntas honestas, escuta e revisão quando aparecem novos fatos.',
    false: () => 'Falso. Pensar criticamente não é abandonar a fé. Perguntas e correção responsável podem aprofundar uma convicção.',
  },
};

const reflectionPrompts = {
  adultos: (title) => `Em que decisão concreta, em casa, no trabalho ou na comunidade, “${title}” desafia sua prática? Qual próximo passo está ao seu alcance?`,
  criancas: (title) => `O que “${title}” faz você lembrar? Conte uma situação em que pode praticar isso ou desenhe sua ideia.`,
  'pre-adolescentes': (title) => `Que emoção ou pressão pode dificultar “${title}” para você? O que poderia ajudar na próxima vez?`,
  adolescentes: (title) => `Que dilema real ligado a “${title}” exige equilibrar convicção, respeito e responsabilidade? Que informação ou apoio lhe falta?`,
};

export function createDevotionalContent(devotional, audience) {
  const audienceData = devotional.audiences.find((item) => item.id === audience);
  const note = dayStudies[devotional.day - 1];
  if (!audienceData || !note) {
    throw new Error(`Conteúdo devocional ausente para o dia ${devotional.day} e faixa ${audience}.`);
  }

  const reading = [
    devotional.reflection,
    note,
    audienceStudies[audience](devotional.title),
    applicationStudies[audience](devotional.title, audienceData.activity),
    closingStudies[audience](devotional.title),
  ];
  const wordCount = reading.join(' ').trim().split(/\s+/).length;
  const quiz = [
    { correct: true, statement: quizPrompts[audience].true(devotional.title), explanation: quizExplanations[audience].true(devotional.reflection) },
    { correct: false, statement: quizPrompts[audience].false(devotional.title), explanation: quizExplanations[audience].false() },
  ];

  return {
    reading,
    wordCount,
    estimatedMinutes: Math.ceil(wordCount / 130),
    quiz,
    reflectionPrompt: reflectionPrompts[audience](devotional.title),
  };
}
