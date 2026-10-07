"use strict";

const ASSET = "assets/";
const SOURCES = {
  river: { label: "浙江省交通运输厅｜温州—丽水海河联运启航（2024）", url: "https://jtyst.zj.gov.cn/art/2024/12/27/art_1229304975_59039943.html" },
  port: { label: "浙江新闻｜朔门古港遗址考古发现（2023）", url: "https://zjnews.zjol.com.cn/202303/t20230328_25571788.shtml" },
  portCity: { label: "温州市国资委｜朔门古港遗址保护展示项目（2025）", url: "https://wzgzw.wenzhou.gov.cn/art/2025/5/14/art_1221492_58955059.html" },
  maritime: { label: "新华网｜千年古港与海上丝绸之路（2022）", url: "https://www.xinhuanet.com/2022-09/28/c_1129039940.htm" },
  towers: { label: "温州市文化广电旅游局｜江心屿双塔", url: "https://wl.wenzhou.gov.cn/art/2020/11/13/art_1229438201_58884370.html" },
  island: { label: "温州市文化广电旅游局｜江心屿", url: "https://wl.wenzhou.gov.cn/art/2018/5/25/art_1653509_34537278.html" },
  overview: { label: "温州市人民政府｜朔门古港遗址与千年商港（2025）", url: "https://www.wenzhou.gov.cn/art/2025/2/16/art_1217832_59262697.html" }
};

const SCENES = [
  {
    title: "循江而来", eyebrow: "第一幕 · 循江而来", lead: "沿着水路，山间的货物开始一程远行。", prompt: "点击启程，沿江向东", action: "启程",
    card: { title: "一条江，连起浙南山水与海港", text: "瓯江流经浙南，向东汇入海域，是连接温州与丽水的重要水系。浙江省交通运输厅介绍，瓯江自古是浙南连接山海的航运通道；今天，温州—丽水海河联运也沿瓯江开通了集装箱航线。", note: "画中的小舟是行旅叙事意象，并非已确认的历史船只。", sources: [SOURCES.river] },
    hotspots: [
      { x: 470, y: 555, label: "水路与生活", icon: "水", title: "从村道到埠头", text: "瓯江曾承担浙南地区的交通和货运联系。画中的村道、埠头与小舟用来表现货物由陆路转向水路的过程，未对应某个具体村落或年代。", note: "画面导览；村落和人物为艺术演绎。", sources: [SOURCES.river] },
      { x: 1430, y: 560, label: "江流向海", icon: "江", title: "水路至今仍在延伸", text: "2024年12月，温州—丽水首条瓯江集装箱航线启动。它是当代的海河联运案例，说明瓯江仍连接内陆与沿海运输。", note: "这是现代航运信息，与古代航路分开呈现。", sources: [SOURCES.river] }
    ],
    actionBox: { x: 450, y: 660, w: 420, h: 175 }
  },
  {
    title: "临江入城", eyebrow: "第二幕 · 临江入城", lead: "小舟靠岸，货物沿着江边道路进入街市。", prompt: "让小舟靠岸，再送货入城", action: "靠岸",
    card: { title: "从江面到城市，港与城彼此相接", text: "朔门古港遗址位于温州古城北侧、瓯江南岸。公开资料显示，考古发掘发现古城城门、瓮城、江岸和码头等遗存，为研究港口活动与城市空间的关系提供了线索。", note: "长卷中的挑担、茶棚和卸货动作是叙事演绎。", sources: [SOURCES.port, SOURCES.portCity] },
    hotspots: [
      { x: 1100, y: 545, label: "城与港", icon: "城", title: "临江的城市入口", text: "朔门古港遗址的考古研究把城门、瓮城、江岸和港口遗迹放在同一空间中观察。长卷借用“城—港相邻”的关系，但没有复原遗址平面。", note: "此处为关系示意，不是考古复原。", sources: [SOURCES.port, SOURCES.portCity] },
      { x: 1580, y: 615, label: "街市歇脚", icon: "茶", title: "街市里的片刻停留", text: "码头与街市共同构成港城生活的空间。画中的茶棚用于让观众停留和观察，并无证据表明它对应朔门古港的一家具体历史店铺。", note: "画面导览；茶棚是艺术演绎。", sources: [SOURCES.portCity] }
    ],
    actionBox: { x: 160, y: 620, w: 460, h: 170 }
  },
  {
    title: "朔门集舟", eyebrow: "第三幕 · 朔门集舟", lead: "清点、装载与离港，古港的线索在江岸汇集。", prompt: "点击货筐，查看装载线索", action: "查看装载",
    card: { title: "码头、沉船与瓷片，拼出古港线索", text: "朔门古港遗址的考古报道记载，发掘中发现宋代码头、两艘宋代沉船和大量瓷器遗存。这些遗迹与遗物，为研究宋元时期温州港口活动提供了重要实物线索。", note: "考古发现是史实；画中的竹筐包装和搬运动作属于叙事演绎。", sources: [SOURCES.port, SOURCES.maritime] },
    hotspots: [
      { x: 1600, y: 690, label: "船上装着什么", icon: "器", title: "瓷片留下的贸易线索", text: "朔门古港遗址出土的瓷器遗存包括龙泉窑等窑口产品。瓷片有助于研究生产、运输和港口贸易，但不能据此直接还原画中这艘船的完整货单。", note: "本卡未使用未经授权的出土器物照片；画中竹筐是艺术意象。", sources: [SOURCES.port] },
      { x: 1040, y: 555, label: "认识码头", icon: "港", title: "木与石组成的港口设施", text: "考古报道描述过朔门古港发现的木石混筑码头：以木桩筑底、铺设木板，再以石块包边和填土构筑。不同码头形制并不完全相同。", note: "长卷中的石埠头不是某号码头的精确复原。", sources: [SOURCES.port] }
    ],
    actionBox: { x: 590, y: 550, w: 550, h: 280 }
  },
  {
    title: "双塔引航", eyebrow: "第四幕 · 双塔引航", lead: "码头渐远，江心屿双塔在江上显现。", prompt: "扬帆驶向开阔水面", action: "扬帆",
    card: { title: "江心屿双塔，江面上的识别标志", text: "江心屿位于瓯江之中，岛上东西双塔遥相呼应。温州市文化广电旅游局介绍，过去往来船只可远望塔身辨认温州城方向；地方资料也将双塔与历史航标联系起来。", note: "“引航”在此指地标辨识方位，不表现现代灯光或主动导航设备。", sources: [SOURCES.towers, SOURCES.island] },
    hotspots: [
      { x: 940, y: 175, label: "看见双塔", icon: "塔", title: "江上的双塔", text: "双塔与江心屿共同形成辨认江面方位的视觉参照。长卷里的塔形是场景意象，具体年代和建筑尺寸仍须以文保资料为准。", note: "请从画面中的船与岛的距离，观察它们如何成为视觉参照。", sources: [SOURCES.towers] },
      { x: 830, y: 425, label: "船与岸", icon: "舟", title: "顺江远望", text: "江心屿横卧瓯江；船只接近或驶离时，岛岸和双塔的远近变化可以帮助观众理解江面的空间关系。", note: "这是画面导览，不模拟真实航行导航。", sources: [SOURCES.island] }
    ],
    actionBox: { x: 480, y: 500, w: 650, h: 350 }
  },
  {
    title: "一江通海", eyebrow: "第五幕 · 一江通海", lead: "器物随船远行，也带去一方生活的印记。", prompt: "让船继续向海而行", action: "向海而行",
    card: { title: "港口连接江河与海上交通", text: "朔门古港遗址的码头、沉船与瓷器，为认识宋元时期的温州港口活动提供了重要资料。今天，瓯江海河联运又呈现了新的运输联系。古代贸易与当代航运属于不同历史条件，但都提示我们关注这条江与海的连接。", note: "长卷是一条体验路径，不是对某次历史航行的复原。", sources: [SOURCES.overview, SOURCES.river, SOURCES.port] },
    hotspots: [
      { x: 1130, y: 395, label: "回看这一路", icon: "览", title: "从山水走向海", text: "这一程依次经过山水江道、临江街市、朔门古港和江心屿双塔。真实的地理与遗址线索被串成一条叙事路径，其中人物、货物和船只动作是艺术演绎。", note: "可使用上方章节导航回看已走过的场景。", sources: [SOURCES.port, SOURCES.island] },
      { x: 1510, y: 700, label: "今天的瓯江", icon: "今", title: "古今水路仍在延伸", text: "2024年12月，温州—丽水海河联运启动，首条瓯江集装箱航线由乐清七里港通往青田温溪码头。这是瓯江在当代区域运输中的新连接方式。", note: "现代案例与古代海丝贸易分开呈现。", sources: [SOURCES.river] }
    ],
    actionBox: { x: 490, y: 560, w: 600, h: 330 }
  }
];

const $ = (id) => document.getElementById(id);
const ui = {
  visualArea: $("visualArea"), stageViewport: $("stageViewport"), sceneTrack: $("sceneTrack"), chapterNav: $("chapterNav"),
  count: $("sceneCount"), eyebrow: $("chapterEyebrow"), title: $("chapterTitle"), lead: $("chapterLead"), status: $("actionStatus"),
  primary: $("primaryButton"), previous: $("previousButton"), next: $("nextButton"), skip: $("skipButton"), replay: $("replayButton"),
  knowledge: $("knowledgeButton"), modal: $("modalBackdrop"), modalClose: $("modalClose"), modalArt: $("modalArt"),
  modalKicker: $("modalKicker"), modalTitle: $("modalTitle"), modalText: $("modalText"), modalNote: $("modalNote"), modalSources: $("modalSources"),
  sound: $("soundButton"), soundLabel: $("soundLabel"), soundIcon: $("soundIcon"), intro: $("intro"), start: $("startButton")
};

const state = { current: 0, unlocked: 0, phase: [0, 0, 0, 0, 0], completed: [false, false, false, false, false], busy: false, timer: null, finish: null, started: false, soundOn: false, lastFocus: null };
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function sprite(file, className) { return `<img class="sprite ${className}" src="${ASSET}${file}" alt="" draggable="false">`; }
function partMarkup(index) {
  if (index === 0) return [
    sprite("sprites/mist.png", "mist"), sprite("sprites/wake.png", "wake"),
    sprite("sprites/small-reflection.png", "reflection small-reflection"), sprite("ships/small-cargo.png", "small-ship")
  ].join("");
  if (index === 1) return [
    sprite("sprites/wake.png", "wake"), sprite("sprites/small-reflection.png", "reflection small-reflection"),
    sprite("ships/small-cargo.png", "small-ship"), sprite("sprites/receiver-empty.png", "receiver"),
    sprite("sprites/basket.png", "basket"), sprite("sprites/receiver-loaded.png", "loaded-receiver"),
    sprite("sprites/porter.png", "porter"), sprite("sprites/handcart.png", "handcart")
  ].join("");
  if (index === 2) return [
    sprite("sprites/moored-reflection.png", "reflection moored-reflection"), sprite("ships/main-moored.png", "main-ship"),
    '<div class="pier-cover" aria-hidden="true"></div>',
    sprite("sprites/rope.png", "rope"), sprite("sprites/gangplank.png", "gangplank"),
    sprite("sprites/loader-a.png", "loader-a"), sprite("sprites/loader-b.png", "loader-b")
  ].join("");
  if (index === 3) return [
    sprite("sprites/mist.png", "mist"), sprite("sprites/distant-sail.png", "distant-sail"),
    sprite("sprites/wake.png", "wake"), sprite("sprites/sailing-reflection.png", "reflection sailing-reflection"),
    sprite("ships/main-sailing.png", "main-ship")
  ].join("");
  return [
    sprite("sprites/mist.png", "mist"), sprite("sprites/distant-sail.png", "distant-sail"),
    sprite("sprites/wake.png", "wake"), sprite("sprites/sailing-reflection.png", "reflection sailing-reflection"),
    sprite("ships/main-away.png", "main-ship"),
    `<div class="ending"><strong>一江通海</strong><span>器物随船远行<br>也带去一方生活的印记</span></div>`
  ].join("");
}

function buildScenes() {
  ui.sceneTrack.innerHTML = SCENES.map((scene, index) => {
    const hotspots = scene.hotspots.map((hotspot, hotspotIndex) =>
      `<button type="button" class="hotspot" data-scene="${index}" data-hotspot="${hotspotIndex}" style="left:${hotspot.x}px;top:${hotspot.y}px" aria-label="了解：${hotspot.label}"><span class="hotspot-icon" aria-hidden="true">${hotspot.icon}</span>${hotspot.label}</button>`
    ).join("");
    const box = scene.actionBox;
    return `<div class="scene scene-${index + 1}${index === 0 ? " active" : ""}" id="scene-${index}" style="background-image:url('${ASSET}backgrounds/scene-0${index + 1}.png')">${partMarkup(index)}${hotspots}<button type="button" class="action-surface" data-primary-scene="${index}" style="left:${box.x}px;top:${box.y}px;width:${box.w}px;height:${box.h}px" aria-label="${scene.action}"></button></div>`;
  }).join("");
  ui.sceneTrack.addEventListener("click", (event) => {
    const hot = event.target.closest("[data-hotspot]");
    if (hot && Number(hot.dataset.scene) === state.current) { openCard(SCENES[state.current].hotspots[Number(hot.dataset.hotspot)]); return; }
    const action = event.target.closest("[data-primary-scene]");
    if (action && Number(action.dataset.primaryScene) === state.current) performAction();
  });
}

function sceneEl(index = state.current) { return $("scene-" + index); }
function setScenePosition() { ui.sceneTrack.style.transform = `translate3d(${-state.current * 1920}px,0,0)`; }
function fitStage() {
  const scale = Math.min(ui.visualArea.clientWidth / 1920, ui.visualArea.clientHeight / 1080);
  ui.stageViewport.style.setProperty("--scale", Math.max(scale, .1));
}
function buildNav() {
  ui.chapterNav.innerHTML = SCENES.map((scene, index) => `<button type="button" class="chapter-link" data-chapter="${index}"><span class="chapter-dot" aria-hidden="true"></span><span>${scene.title}</span></button>`).join("");
  ui.chapterNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chapter]");
    if (button) navigate(Number(button.dataset.chapter));
  });
}

function updateUI() {
  const index = state.current;
  const scene = SCENES[index];
  ui.count.textContent = `${String(index + 1).padStart(2, "0")} / 05`;
  ui.eyebrow.textContent = scene.eyebrow;
  ui.title.textContent = scene.title;
  ui.lead.textContent = scene.lead;
  const finished = state.completed[index];
  const statuses = [
    scene.prompt,
    state.phase[1] === 1 ? "货物已靠岸，送往港口" : scene.prompt,
    state.phase[2] === 1 ? "看过装载线索，准备装船" : scene.prompt,
    scene.prompt,
    scene.prompt
  ];
  ui.status.textContent = state.busy ? "正在行舟…" : finished ? (index === 4 ? "旅程已抵达江海之间" : "本幕已完成，可以继续前行") : statuses[index];
  let label = scene.action;
  if (index === 1 && state.phase[1] === 1) label = "送往港口";
  if (index === 2 && state.phase[2] === 1) label = "装船";
  if (index === 4 && finished) label = "回看航程";
  ui.primary.innerHTML = `${label} <span aria-hidden="true">→</span>`;
  ui.primary.hidden = finished && index < 4;
  ui.primary.disabled = state.busy;
  ui.previous.disabled = index === 0 || state.busy;
  ui.next.hidden = !finished || index === 4;
  ui.next.disabled = state.busy;
  ui.next.textContent = index < 4 ? `进入${SCENES[Math.min(index + 1, 4)].title}` : "下一幕";
  ui.skip.hidden = !state.busy;
  ui.replay.disabled = state.busy;
  [...ui.chapterNav.children].forEach((button, chapter) => {
    button.disabled = chapter > state.unlocked || state.busy;
    button.classList.toggle("active", chapter === index);
    button.classList.toggle("visited", chapter <= state.unlocked);
    if (chapter === index) button.setAttribute("aria-current", "step"); else button.removeAttribute("aria-current");
  });
  [...ui.sceneTrack.children].forEach((element, chapter) => element.classList.toggle("active", chapter === index));
  setScenePosition();
}

function openCard(card) {
  state.lastFocus = document.activeElement;
  ui.modalKicker.textContent = `第${["一", "二", "三", "四", "五"][state.current]}幕 · 文化笔记`;
  ui.modalTitle.textContent = card.title;
  ui.modalText.textContent = card.text;
  ui.modalNote.textContent = card.note;
  ui.modalArt.style.backgroundImage = `url('${ASSET}backgrounds/scene-0${state.current + 1}.png')`;
  ui.modalSources.replaceChildren();
  (card.sources || []).forEach((source) => {
    const a = document.createElement("a");
    a.href = source.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = `资料来源：${source.label} ↗`;
    ui.modalSources.append(a);
  });
  ui.modal.hidden = false;
  ui.modalClose.focus();
}
function closeCard() {
  if (ui.modal.hidden) return;
  ui.modal.hidden = true;
  if (state.lastFocus && typeof state.lastFocus.focus === "function") state.lastFocus.focus();
}

function completeCurrent() {
  state.completed[state.current] = true;
  if (state.current < 4) state.unlocked = Math.max(state.unlocked, state.current + 1);
  if (state.current === 4) sceneEl().classList.add("finished");
  updateUI();
}
function runMotion(className, duration, onFinish) {
  const element = sceneEl();
  state.busy = true;
  element.classList.add(className);
  updateUI();
  let settled = false;
  state.finish = (skip = false) => {
    if (settled) return;
    settled = true;
    clearTimeout(state.timer);
    if (skip) {
      element.classList.add("instant");
      requestAnimationFrame(() => requestAnimationFrame(() => element.classList.remove("instant")));
    }
    state.busy = false;
    state.finish = null;
    onFinish();
    updateUI();
  };
  state.timer = window.setTimeout(() => state.finish && state.finish(false), reducedMotion.matches ? 500 : duration);
}

function performAction() {
  if (!state.started || state.busy || !ui.modal.hidden) return;
  const index = state.current;
  if (state.completed[index]) { if (index === 4) navigate(0); else navigate(index + 1); return; }
  if (index === 0) {
    runMotion("is-sailing", 7000, completeCurrent);
  } else if (index === 1) {
    if (state.phase[1] === 0) {
      runMotion("docked", 5000, () => { state.phase[1] = 1; playCue("wood.wav", .14); });
    } else {
      runMotion("is-delivering", 5000, () => { sceneEl().classList.add("delivered"); state.phase[1] = 2; completeCurrent(); });
    }
  } else if (index === 2) {
    if (state.phase[2] === 0) { state.phase[2] = 1; openCard(SCENES[2].hotspots[0]); updateUI(); }
    else runMotion("is-loading", 6000, () => { sceneEl().classList.add("loaded"); state.phase[2] = 2; playCue("rope.wav", .12); completeCurrent(); });
  } else if (index === 3) {
    runMotion("is-sailing", 8000, completeCurrent);
  } else {
    runMotion("is-sailing", 10000, completeCurrent);
  }
}

function navigate(index) {
  if (state.busy || index < 0 || index > state.unlocked || index > 4) return;
  closeCard();
  state.current = index;
  updateUI();
  if (window.innerWidth <= 760) window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
}
function replayCurrent() {
  if (state.busy) return;
  const element = sceneEl();
  element.classList.add("instant");
  element.classList.remove("is-sailing", "docked", "is-delivering", "delivered", "is-loading", "loaded", "finished");
  state.phase[state.current] = 0;
  state.completed[state.current] = false;
  requestAnimationFrame(() => requestAnimationFrame(() => element.classList.remove("instant")));
  updateUI();
}

class CrossfadeLoop {
  constructor(url, volume) {
    this.players = [new Audio(url), new Audio(url)];
    this.players.forEach((player) => { player.preload = "auto"; player.volume = 0; });
    this.volume = volume; this.active = 0; this.running = false; this.crossing = false; this.timer = null;
  }
  start() {
    if (this.running) return;
    this.running = true; this.crossing = false;
    const player = this.players[this.active];
    player.currentTime = 0; player.volume = this.volume;
    player.play().catch(() => {});
    this.timer = window.setInterval(() => this.tick(), 120);
  }
  tick() {
    const current = this.players[this.active];
    if (!this.running || this.crossing || !Number.isFinite(current.duration)) return;
    if (current.currentTime < current.duration - 1.4) return;
    this.crossing = true;
    const nextIndex = 1 - this.active;
    const next = this.players[nextIndex];
    next.currentTime = 0; next.volume = 0; next.play().catch(() => {});
    const start = performance.now();
    const fade = (now) => {
      if (!this.running) return;
      const t = Math.min(1, (now - start) / 1350);
      current.volume = this.volume * (1 - t);
      next.volume = this.volume * t;
      if (t < 1) requestAnimationFrame(fade);
      else { current.pause(); current.currentTime = 0; this.active = nextIndex; this.crossing = false; }
    };
    requestAnimationFrame(fade);
  }
  stop() {
    this.running = false; this.crossing = false; clearInterval(this.timer);
    this.players.forEach((player) => { player.pause(); player.currentTime = 0; });
  }
}
const ambience = [new CrossfadeLoop(`${ASSET}audio/water.wav`, .12), new CrossfadeLoop(`${ASSET}audio/wind.wav`, .045)];
function updateSoundButton() {
  ui.soundLabel.textContent = state.soundOn ? "关闭声音" : "开启声音";
  ui.soundIcon.textContent = state.soundOn ? "♫" : "♪";
  ui.sound.setAttribute("aria-label", state.soundOn ? "关闭声音" : "开启声音");
  ui.sound.title = state.soundOn ? "关闭声音" : "开启声音";
}
function toggleSound(force) {
  state.soundOn = typeof force === "boolean" ? force : !state.soundOn;
  if (state.soundOn) ambience.forEach((track) => track.start());
  else ambience.forEach((track) => track.stop());
  updateSoundButton();
}
function playCue(file, volume) {
  if (!state.soundOn) return;
  const cue = new Audio(`${ASSET}audio/${file}`);
  cue.volume = volume; cue.play().catch(() => {});
}

function bindUI() {
  ui.start.addEventListener("click", () => {
    state.started = true; ui.intro.classList.add("closed");
    toggleSound(true); ui.primary.focus();
  });
  ui.sound.addEventListener("click", () => toggleSound());
  ui.primary.addEventListener("click", performAction);
  ui.previous.addEventListener("click", () => navigate(state.current - 1));
  ui.next.addEventListener("click", () => navigate(state.current + 1));
  ui.skip.addEventListener("click", () => state.finish && state.finish(true));
  ui.replay.addEventListener("click", replayCurrent);
  ui.knowledge.addEventListener("click", () => openCard(SCENES[state.current].card));
  ui.modalClose.addEventListener("click", closeCard);
  ui.modal.addEventListener("click", (event) => { if (event.target === ui.modal) closeCard(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeCard(); return; }
    if (!state.started || !ui.modal.hidden || state.busy) return;
    if (event.key === "ArrowLeft") navigate(state.current - 1);
    if (event.key === "ArrowRight") navigate(state.current + 1);
  });
  let pointerStart = null;
  ui.visualArea.addEventListener("pointerdown", (event) => { if (event.target.closest("button")) return; pointerStart = { x: event.clientX, y: event.clientY }; });
  ui.visualArea.addEventListener("pointerup", (event) => {
    if (!pointerStart || !state.started || state.busy) return;
    const dx = event.clientX - pointerStart.x; const dy = event.clientY - pointerStart.y; pointerStart = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) navigate(state.current + (dx < 0 ? 1 : -1));
  });
  window.addEventListener("resize", fitStage, { passive: true });
  document.addEventListener("visibilitychange", () => { if (document.hidden && state.soundOn) toggleSound(false); });
}

buildScenes();
buildNav();
bindUI();
fitStage();
updateSoundButton();
updateUI();
