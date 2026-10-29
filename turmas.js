// ÁREA DO PROFESSOR: edite aqui as turmas (botões) e os materiais de cada uma.
// Você pode ter QUANTAS turmas quiser: copie um bloco { icone... } inteiro, cole embaixo
// e ponha vírgula no bloco de cima (o último bloco fica sem vírgula).
//
// Cada material fica em links: [ ... ] e tem:  icone (opcional), texto, url
// O site reconhece o tipo sozinho pelo endereço:
//   vídeo  (.mp4 .webm)   -> toca dentro da página   url: "materiais/aula1.mp4"
//   áudio  (.mp3 .wav)    -> toca dentro da página
//   PDF    (.pdf)         -> abre para ler na página, com botão de baixar
//   imagem (.jpg .png)    -> mostra na página, com botão de baixar
//   YouTube / Google Drive (link) -> abre dentro da página
//   Word, PowerPoint, Excel, ZIP... -> baixa o arquivo
//   outra página (https://... ou outra-pagina.html) -> abre em nova aba (seus outros sites)
// Opções extras:  baixar: true  (força o download)   legenda: "materiais/aula1.vtt" (legenda do vídeo)
//
// Arquivos próprios: suba na pasta "materiais" do GitHub e use o caminho, ex.: "materiais/apostila.pdf".
// Use nomes sem espaços e sem acentos. Link com url: "" (vazio) não aparece.
const TURMAS = [
  { icone: "📊", nome: "Turma A", tema: "1º ano ADM Integral",
    links: [
      { texto: "Página da turma", url: "" },
      { icone: "🎬", texto: "Vídeo aula: A ciência por trás da gestão das empresas modernas", url: "turma-a/a_ci%C3%AAncia_por_tr%C3%A1s_da_gest%C3%A3o_das_empresas_modernas.mp4" },
      { icone: "📘", texto: "Fundamentos da Administração (Parte 1)", url: "turma-a/fundamentos-da-administracao.pdf" },
      { icone: "📘", texto: "Fundamentos da Administração (Parte 2)", url: "turma-a/parte-2-fundamentos-da-administracao.pdf" },
      { icone: "📗", texto: "Curso de Administração Pública", url: "turma-a/curso-de-administracao-publica_1.pdf" },
      { icone: "📗", texto: "Terceiro Setor (Curso Técnico de Administração)", url: "turma-a/terceiro-setor_curso-tecnico-de-administracao.pdf" },
      { icone: "💡", texto: "Empreendedorismo 1", url: "turma-a/disciplina-empreendedorismo-1.pdf" },
      { icone: "💡", texto: "Empreendedorismo 2", url: "turma-a/disciplina-empreendedorismo-2.pdf" },
      { icone: "⚖️", texto: "Direito Empresarial, Trabalhista e Tributário", url: "turma-a/direito-empresarial-trabalhista-e-tributario.pdf" },
      { texto: "Slides da aula", url: "" },
      { icone: "🍔", texto: "Simulador: A Cantina do Técnico", url: "turma-a/simulador-cantina.html" }
    ] },
  { icone: "🤝", nome: "Turma B", tema: "2º ano ADM Integral",
    links: [
      { texto: "Página da turma", url: "" },
      { texto: "Vídeo aula", url: "" },
      { icone: "📘", texto: "Desvendando os Sistemas de Informação", url: "turma-b/desvendando-os-sistemas-de-informacao.pdf" },
      { icone: "📗", texto: "Empreendedorismo (2º Módulo)", url: "turma-b/empreendedorismo-2-mod.pdf" },
      { icone: "📗", texto: "Empreendedorismo: Livro Didático (1º Módulo)", url: "turma-b/empreendedorismo-livro-didatico-1-modulo.pdf" },
      { icone: "💰", texto: "Gestão Financeira", url: "turma-b/gestao-financeira.pdf" },
      { icone: "🧮", texto: "Matemática Financeira", url: "turma-b/matematica-financeira.pdf" },
      { icone: "🎯", texto: "Planejamento Estratégico 1", url: "turma-b/planejamento-estrategico1.pdf" },
      { icone: "🎯", texto: "Planejamento Estratégico 2", url: "turma-b/planejamento-estrategico2.pdf" },
      { icone: "♻️", texto: "Simulador: Cooperativa Escolar de Recicláveis", url: "turma-b/simulador-cooperativa.html" }
    ] },
  { icone: "💡", nome: "Turma C", tema: "2º e 3º Mod. ADM. EJATEC",
    links: [
      { texto: "Página da turma",   url: "" },
      { texto: "Vídeo aula",        url: "" },
      { icone: "📘", texto: "Direito Empresarial, Trabalhista e Tributário", url: "turma-c/direito-empresarial-trabalhista-e-tributario.pdf" },
      { icone: "📘", texto: "Curso de Administração Pública", url: "turma-c/curso-de-administracao-publica_1.pdf" },
      { icone: "📘", texto: "Disciplina Empreendedorismo 1", url: "turma-c/disciplina-empreendedorismo-1.pdf" },
      { icone: "📘", texto: "Disciplina Empreendedorismo 2", url: "turma-c/disciplina-empreendedorismo-2.pdf" },
      { icone: "📘", texto: "Gestão de Pessoas", url: "turma-c/gestao-de-pessoas.pdf" },
      { icone: "📘", texto: "Terceiro Setor", url: "turma-c/terceiro-setor_curso-tecnico-de-administracao.pdf" },
      { icone: "🧠", texto: "Quiz: Modelos de Administração Pública", url: "turma-c/quiz-modelos-adm.html" }
    ] },
  { icone: "🚀", nome: "Turma D", tema: "4º Mod. ADM. EJATEC",
    links: [
      { texto: "Página da turma",   url: "" },
      { texto: "Vídeo aula",        url: "" },
      { icone: "📒", texto: "Contabilidade Geral", url: "turma-d/contabilidade-geral.pdf" },
      { icone: "💰", texto: "Gestão Financeira", url: "turma-d/gestao-financeira.pdf" },
      { icone: "🧮", texto: "Matemática Financeira", url: "turma-d/matematica-financeira.pdf" }
    ] }
];

//================= BIBLIOTECA DE MATERIAIS (links ilimitados) =================
// Uma linha por material. O portal reconhece o tipo pelo endereço (vídeo, PDF, imagem, YouTube, Drive...).
// Campos:  texto (nome)  url (endereço)  area (ex.: "Contabilidade")  descricao (opcional)
//          imagem (capa opcional, ex.: "imagens/capa1.jpg")  destaque: true (aparece em Destaques)
//          categoria: "Quiz" (opcional, cria um filtro com esse nome)  promo: true (marca como Indicação)
//          baixar: true (força download)  legenda: "materiais/aula.vtt" (vídeo)
// Capa automática: YouTube e Google Drive. Nos demais, use "imagem" ou fica o ícone.
// Linha com url: "" não aparece. Para adicionar: copie uma linha, cole embaixo, vírgula na anterior.
// A BIBLIOTECA é montada sozinha a partir das TURMAS acima: todo material com url preenchida
// entra aqui, agrupado pela turma (campo "area" = nome da turma). Para novos materiais,
// basta acrescentar o link na turma certa; não precisa repetir nesta seção.
// Extras opcionais (destaque, categoria, descricao) por endereço:
const BIBLIOTECA_EXTRAS = {
  "turma-c/quiz-modelos-adm.html":      { categoria: "Quiz", destaque: true, descricao: "Patrimonialista, burocrático e gerencial." },
  "turma-a/simulador-cantina.html":     { categoria: "Simulador", destaque: true, descricao: "16 decisões em 3 níveis sobre o plano de negócios da cantina. 1º ano integral." },
  "turma-b/simulador-cooperativa.html": { categoria: "Simulador", destaque: true, descricao: "16 decisões em 3 níveis sobre o plano de negócios da cooperativa. 2º ano integral." }
};
const BIBLIOTECA = [];
TURMAS.forEach(t => (t.links || []).forEach(l => {
  if (!l.url) return;
  BIBLIOTECA.push(Object.assign(
    { texto: l.texto, url: l.url, icone: l.icone, area: t.nome, descricao: t.tema },
    BIBLIOTECA_EXTRAS[l.url] || {}
  ));
}));

// Aviso mostrado quando houver links marcados com promo: true
const AVISO_PROMO = "Links marcados como Indicação levam a sites externos de terceiros, podem conter publicidade e não são de responsabilidade do professor. Confira preços e condições no site de destino.";

// Currículo Lattes: o endereço aparece no cabeçalho e na seção "Sobre o professor".
// LATTES_PDF é o nome do PDF do currículo, enviado para a raiz do repositório (ao lado do index.html).
// Deixe "" para esconder o botão do PDF.
const LATTES_URL = "https://lattes.cnpq.br/6776837697626675";
const LATTES_PDF = encodeURI("currículo_do_sistema_de_currículos_lattes-(antonio_marques_de_frança).pdf");

// Texto da seção "Sobre o professor" (apague as aspas internas se quiser esconder a seção)
const SOBRE = "Professor Antonio Marques. Materiais, vídeos, atividades e quizzes para as turmas de Administração do Ensino Médio.";
