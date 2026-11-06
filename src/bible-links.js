export const BIBLE_VERSIONS = [
  { id: '212', code: 'ARC', label: 'Almeida Revista e Corrigida (ARC)' },
  { id: '1608', code: 'ARA', label: 'Almeida Revista e Atualizada (ARA)' },
  { id: '1840', code: 'NAA', label: 'Nova Almeida Atualizada (NAA)' },
  { id: '129', code: 'NVI', label: 'Nova Versão Internacional (NVI)' },
];

const BOOK_CODES = {
  '1 Tessalonicenses': '1TH',
  '2 Timóteo': '2TI',
  '1 Coríntios': '1CO',
  '2 Coríntios': '2CO',
  'Gênesis': 'GEN',
  'Salmo': 'PSA',
  'Efésios': 'EPH',
  'Tiago': 'JAS',
  'Provérbios': 'PRO',
  'João': 'JHN',
  'Colossenses': 'COL',
  'Marcos': 'MRK',
  'Filipenses': 'PHP',
  'Josué': 'JOS',
  'Romanos': 'ROM',
  'Lamentações': 'LAM',
  'Lucas': 'LUK',
  'Miqueias': 'MIC',
  'Gálatas': 'GAL',
  'Hebreus': 'HEB',
  'Mateus': 'MAT',
  'Isaías': 'ISA',
};

const toPassageUrl = (reference, version) => {
  const match = reference.trim().match(/^(.+?)\s+(\d+):(\d+)(?:[–-](\d+))?$/);
  const bookCode = match && BOOK_CODES[match[1]];
  if (!match || !bookCode) {
    throw new Error(`Referência bíblica não reconhecida: ${reference}`);
  }
  const passage = `${bookCode}.${match[2]}.${match[3]}${match[4] ? `-${match[4]}` : ''}.${version.code}`;
  return `https://www.bible.com/pt/bible/${version.id}/${passage}`;
};

export const getBibleLinks = (reference) => {
  const passages = reference.split(';').map((item) => item.trim());
  return BIBLE_VERSIONS.map((version) => ({
    ...version,
    passages: passages.map((passage) => ({
      reference: passage,
      href: toPassageUrl(passage, version),
    })),
  }));
};
