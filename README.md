# Advento — Jornada de Fé

Aplicativo React + Vite, sem backend e sem banco de dados. Progresso salvo localmente no navegador.

## Requisitos
- Node.js 20 ou superior
- npm

## Executar localmente
```bash
npm install
npm run dev
```

## Gerar build
```bash
npm run build
npm run preview
```

## Publicar no Vercel
1. Crie um repositório Git e envie todos os arquivos deste projeto.
2. No Vercel, importe o repositório.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Faça o deploy.

## Regras do calendário
- A primeira lição abre em 26/11/2026.
- Uma nova lição é liberada a cada dia, pela data local do dispositivo.
- Lições liberadas continuam acessíveis.
- Quatro versões por dia: adultos, crianças, pré-adolescentes e adolescentes.
- Leituras aprofundadas com duração mínima estimada de três minutos, com abordagem própria para cada faixa.
- Questões de verdadeiro ou falso com explicação, reflexões escritas com salvamento automático e missão prática.
- Atividade original de colorir para crianças, com opção de impressão.
- Referências bíblicas com links para ARC, ARA, NAA e NVI no YouVersion; os textos das traduções são abertos na fonte e não copiados para o app.
- Progresso, respostas e reflexões salvos em `localStorage` (116 atividades no total).

## Lembrete das 18h — limitação importante
O app verifica o horário enquanto a página está aberta e pode mostrar uma notificação do navegador se a permissão estiver concedida. Como não existe backend nem serviço push, não há garantia de disparo quando o navegador ou o sistema encerra o app. Para alarme confiável em segundo plano seria necessário adicionar notificações push com infraestrutura própria ou usar um app nativo.

## Dados e privacidade
Não há conta, servidor, analytics ou envio de dados pessoais. Marcações, respostas e reflexões ficam no navegador/dispositivo atual. Limpar os dados do navegador pode apagar essas informações. Para usar em outro aparelho, o progresso não é sincronizado.
# advento-app
