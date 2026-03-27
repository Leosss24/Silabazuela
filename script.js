const syllables = {
  inicio: [
    "Yus", "Yei", "Yor", "Yu", "Ma", "Dei", "Lei", "Jhos", "Jhei", "Wuin",
    "Ander", "Brayan", "Kei", "Jor", "Wil", "Dai", "Grei", "Marly", "Yan", "Dar",

    "Yail", "Yaim", "Yaid", "Yorlin", "Yusm", "Yaidel",
    "Deivy", "Deilyn", "Deimar", "Deibis",
    "Wuil", "Wuilker", "Winder", "Wist",
    "Jhon", "Jhony", "Jhorman", "Jhostin",
    "Keiner", "Keimar", "Keilin",
    "Andry", "Andriel", "Anderson",
    "Brail", "Braylin", "Brayker",
    "Darwin", "Darlis", "Dariel",
    "Gleid", "Gleimar", "Gleiver"
  ],
  medio: [
    "lei", "ber", "nai", "vis", "mir", "dan", "lian", "suel", "fer", "yel",
    "smar", "niel", "son", "mar", "zair", "neth", "luis", "dri", "cel", "dair",

    "derson", "leison", "berson", "driel", "nerson",
    "merson", "luison", "briam", "briel", "miel",
    "kelvis", "yelvis", "nelvis", "melvis",
    "nielson", "leimar", "nismar", "yomar",
    "dairon", "daison", "yerson", "yersi",
    "linson", "lison", "dison", "disonel",
    "mari", "maris", "mariel", "marion",
    "zuel", "zuela", "zuar", "zueli"
  ],
  final: [
    "son", "mar", "nys", "der", "lin", "suel", "ker", "jhos", "del", "beth",
    "dani", "fer", "niel", "drix", "yel", "day", "elis", "manuel", "car", "jair",

    "sonny", "sonel", "sonair",
    "marley", "marlin", "marvis",
    "derson", "dersony", "dersonel",
    "kerlin", "kerlis", "kerbel",
    "bethany", "bethlin", "bethair",
    "luis", "luison", "luisel",
    "manuelito", "manuelson",
    "jhonson", "jhonsito",
    "dairon", "dairson",
    "yelson", "yerson",
    "ferney", "fernand",
    "nelson", "nelvis",
    "orlando", "orlin"
  ],
  cursed: [
    "x", "xx", "zz", "sh", "th", "ph", "ck", "sky", "lux",
    "jr", "iii", "iv", "prime", "pro", "vip"
  ]
};

const starterNames = [
  "Yusleimar",
  "Deiberson",
  "Wuinferlin",
  "Jheisonmar",
  "Marlydair",
  "Yornelis",
  "Brayandel",
  "Keismarbeth",
  "Yaidersonel",
  "Jhormarvis",
  "Wuilkerson Prime",
  "Deilynzuel",
  "Braykerluison",
  "Andrielnethair",
  "Gleidersonxx",
  "Yusmarlin Pro"
];

const challenges = [
  {
    title: "Modo Barrio Legendario",
    desc: "Te damos 3 sílabas. Júntalas y fabrica un nombre que suene a primo que vende rifas, canta duro y llega en moto.",
    picks: ["Yus", "lei", "mar"]
  },
  {
    title: "Modo Tía del Registro",
    desc: "Haz un nombre que obligue a repetirlo dos veces para entenderlo bien.",
    picks: ["Dei", "ber", "son"]
  },
  {
    title: "Modo Influencer de Guarenas",
    desc: "Tiene que sonar a persona que sube estados con frases motivacionales y un filtro sospechoso.",
    picks: ["Yor", "neth", "dair"]
  },
  {
    title: "Modo Multiverso del SAIME",
    desc: "Combina sílabas como si el teclado hubiera tomado café.",
    picks: ["Wuin", "fer", "lin"]
  },
  {
    title: "Modo Gemelo del Meme",
    desc: "Aquí el objetivo no es la elegancia. Es el puro poder nominal.",
    picks: ["Jhei", "smar", "beth"]
  }
];

const roastParts = {
  intro: [
    "Esto no es un nombre, es un evento canónico.",
    "El registro civil acaba de suspirar.",
    "Aquí hay un talento administrativo muy serio.",
    "Este nombre llega con eco propio.",
    "Esto suena a protagonista de cadena de WhatsApp.",
    "Tu creatividad acaba de estacionar en doble fila.",
    "Esto tiene más presencia que una tía corrigiendo el árbol genealógico.",
    "Acabas de fabricar una criatura nominal de alto octanaje."
  ],
  body: [
    "Tiene energía de piñata, bachata y reunión familiar con parlante gigante.",
    "Suena a alguien que podría vender Avon, rapear y arbitrar una caimanera el mismo día.",
    "Podría ser cantante, mototaxista o leyenda urbana. Las tres encajan.",
    "Tiene una vibra tan potente que hasta el carnet se imprime en negrita.",
    "Parece el nombre de alguien que resuelve problemas a puro audio de 2 minutos.",
    "Si lo gritas desde un balcón, al menos tres personas responden.",
    "Suena a persona que llega tarde, pero con una historia excelente.",
    "Tiene aura de sticker de WhatsApp y de alcalde honorífico del barrio."
  ],
  ending: [
    "Nivel meme: altísimo.",
    "Nivel barriofantasía: desbloqueado.",
    "Nivel acta de nacimiento irrepetible: máximo.",
    "Nivel poder nominal: ridículamente alto.",
    "Nivel nombre con aura: certificado.",
    "Nivel tía orgullosa: 100%.",
    "Nivel multiverso registral: activado.",
    "Nivel protagonista de cadena familiar: total."
  ]
};

let score = 0;
let round = 0;
let timer = 45;
let selected = [];
let history = [];
let availablePool = [];
let interval = null;

const generatorName = document.getElementById("generatorName");
const randomBtn = document.getElementById("randomBtn");
const copyBtn = document.getElementById("copyBtn");
const startBtn = document.getElementById("startBtn");

const gameSection = document.getElementById("gameSection");
const historySection = document.getElementById("historySection");
const resultsSection = document.getElementById("resultsSection");

const roundInfo = document.getElementById("roundInfo");
const challengeTitle = document.getElementById("challengeTitle");
const challengeDesc = document.getElementById("challengeDesc");
const syllablesBox = document.getElementById("syllables");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const finishBtn = document.getElementById("finishBtn");
const feedback = document.getElementById("feedback");
const historyList = document.getElementById("historyList");
const rankTitle = document.getElementById("rankTitle");
const finalScore = document.getElementById("finalScore");
const finalHistory = document.getElementById("finalHistory");
const restartBtn = document.getElementById("restartBtn");

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomChance(probability = 0.5) {
  return Math.random() < probability;
}

function maybeCapitalizeSuffix(part) {
  if (!part) return "";
  return part.charAt(0).toUpperCase() + part.slice(1);
}

function buildRandomName() {
  const base =
    `${randomItem(syllables.inicio)}${randomItem(syllables.medio)}${randomItem(syllables.final)}`;

  if (randomChance(0.35)) {
    const cursedPart = randomItem(syllables.cursed);

    if (["prime", "pro", "vip", "jr", "iii", "iv"].includes(cursedPart)) {
      return `${base} ${maybeCapitalizeSuffix(cursedPart)}`;
    }

    return `${base}${cursedPart}`;
  }

  return base;
}

function makeRoast(name) {
  return `${randomItem(roastParts.intro)} ${name}. ${randomItem(roastParts.body)} ${randomItem(roastParts.ending)}`;
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function refreshGenerator() {
  generatorName.textContent = buildRandomName();
}

function renderRound() {
  const current = challenges[round];
  roundInfo.textContent = `Ronda ${round + 1} / ${challenges.length}`;
  challengeTitle.textContent = current.title;
  challengeDesc.textContent = current.desc;
  scoreEl.textContent = score;
  timerEl.textContent = timer;

  selected = [];
  nameInput.value = "";
  feedback.classList.add("hidden");
  feedback.textContent = "";

  availablePool = shuffle([
    ...current.picks,
    randomItem(syllables.inicio),
    randomItem(syllables.medio),
    randomItem(syllables.final),
    ...(randomChance(0.4) ? [randomItem(syllables.cursed)] : [])
  ]);

  syllablesBox.innerHTML = "";

  availablePool.forEach((piece, idx) => {
    const btn = document.createElement("button");
    btn.className = "syllable";
    btn.textContent = piece;
    btn.dataset.index = idx;
    btn.addEventListener("click", () => toggleSyllable(piece, btn));
    syllablesBox.appendChild(btn);
  });
}

function toggleSyllable(piece, button) {
  const exists = selected.includes(piece);

  if (exists) {
    selected = selected.filter((p) => p !== piece);
    button.classList.remove("active");
  } else {
    if (selected.length >= 5) return;
    selected.push(piece);
    button.classList.add("active");
  }

  nameInput.value = selected.join("");
}

function renderHistory() {
  historyList.innerHTML = "";

  if (!history.length) {
    historyList.innerHTML = `<div class="entry">Aún no has bautizado a ninguna leyenda.</div>`;
    return;
  }

  history.forEach((item) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <div class="entry-top">
        <div class="entry-name">${item.name}</div>
        <div class="entry-points">+${item.points} pts</div>
      </div>
      <div class="small" style="margin-top:6px">${item.challenge}</div>
      <p>${item.roast}</p>
    `;
    historyList.appendChild(div);
  });
}

function getRank() {
  if (score >= 22) return "Arquitecto Supremo del Nombre Meme";
  if (score >= 15) return "Notario del Barrio Intergaláctico";
  if (score >= 8) return "Aprendiz de Registro Civil Creativo";
  return "Becario de la Sílaba Peligrosa";
}

function showResults() {
  clearInterval(interval);
  gameSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  rankTitle.textContent = getRank();
  finalScore.textContent = score;

  finalHistory.innerHTML = "";

  history.forEach((item) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <div class="entry-top">
        <div class="entry-name">${item.name}</div>
        <div class="entry-points">+${item.points} pts</div>
      </div>
      <p>${item.roast}</p>
    `;
    finalHistory.appendChild(div);
  });
}

function submitName() {
  const current = challenges[round];
  const finalName = nameInput.value.trim();

  if (!finalName) {
    feedback.textContent = "Ponle sabor: crea un nombre antes de enviarlo.";
    feedback.classList.remove("hidden");
    return;
  }

  const usedPieces = current.picks.filter((p) =>
    finalName.toLowerCase().includes(p.toLowerCase())
  ).length;

  let points = 0;

  if (usedPieces >= 2) points += 2;
  if (usedPieces === 3) points += 2;
  if (finalName.length >= 8) points += 1;
  if (/[ywkjh]/i.test(finalName)) points += 1;
  if (/[xyzjk]/i.test(finalName)) points += 1;
  if (finalName.length > 12) points += 1;

  const roast = makeRoast(finalName);

  score += points;
  history.unshift({
    challenge: current.title,
    name: finalName,
    points,
    roast
  });

  scoreEl.textContent = score;
  feedback.textContent = `${roast} +${points} puntos.`;
  feedback.classList.remove("hidden");
  renderHistory();

  round += 1;

  if (round >= challenges.length) {
    showResults();
    return;
  }

  setTimeout(renderRound, 500);
}

function startGame() {
  score = 0;
  round = 0;
  timer = 45;
  history = [];

  gameSection.classList.remove("hidden");
  historySection.classList.remove("hidden");
  resultsSection.classList.add("hidden");

  renderHistory();
  renderRound();

  clearInterval(interval);
  interval = setInterval(() => {
    timer -= 1;
    timerEl.textContent = timer;

    if (timer <= 0) {
      showResults();
    }
  }, 1000);
}

randomBtn.addEventListener("click", refreshGenerator);

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generatorName.textContent);
  } catch (error) {
    console.error("No se pudo copiar el nombre:", error);
  }
});

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submitName);

clearBtn.addEventListener("click", () => {
  selected = [];
  nameInput.value = "";
  document.querySelectorAll(".syllable").forEach((el) => el.classList.remove("active"));
});

finishBtn.addEventListener("click", showResults);
restartBtn.addEventListener("click", startGame);

generatorName.textContent = randomItem(starterNames);
