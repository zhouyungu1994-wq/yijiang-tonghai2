"use strict";

const ASSET = "";
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
    card: { title: "瓯江：山水之间的交流通道", text: "瓯江流经浙南，连接丽水、温州并向海延伸。长卷从山水中的小舟讲起，呈现人、货物沿水路汇向江岸、港口的交流想象。浙江省交通运输厅记录的温州—丽水海河联运，则是今天这条水路继续连接内陆与沿海的实例。", note: "古代行旅细节属于画面叙事；现代航线与古代航运分开说明。", sources: [SOURCES.river] },
    hotspots: [
      { x: 470, y: 555, label: "水路与生活", icon: "水", title: "水路把山地与江岸相连", text: "瓯江流经浙南，是连接内陆与温州的重要水系。画中的小舟和岸边生活把交流的起点放在江上：水路让人和物有机会汇集、转运，再继续向下游行进。", note: "村落、人物和具体货物为艺术演绎，不对应某个已考证的古代航次。", sources: [SOURCES.river] },
      { x: 1430, y: 560, label: "江流向海", icon: "江", title: "从瓯江走向更大的水域", text: "瓯江向东通海，让内陆水路与沿海交通发生联系。2024年12月，温州—丽水海河联运航线启动，展示了当代瓯江连接内陆与沿海运输的方式。", note: "这是当代航运信息，不据此推定古代船只走过相同航线。", sources: [SOURCES.river] }
    ],
    actionBox: { x: 450, y: 660, w: 420, h: 175 }
  },
  {
    title: "临江入城", eyebrow: "第二幕 · 临江入城", lead: "小舟靠岸，货物沿着江边道路进入街市。", prompt: "让小舟靠岸，再送货入城", action: "靠岸",
    card: { title: "从江岸入城：港口连接城市生活", text: "朔门古港遗址位于温州古城北侧、瓯江南岸。考古发现的城门、瓮城、江岸与码头遗存，呈现城市和水运空间相邻的线索。第二幕借船靠岸、货物上岸和沿路入城，讲述水上运输如何与陆上街市相接。", note: "挑担者、茶棚和取货过程是帮助理解港城交流的叙事场景，并非遗址复原。", sources: [SOURCES.port, SOURCES.portCity] },
    hotspots: [
      { x: 1100, y: 545, label: "城与港", icon: "城", title: "货物上岸，也走进城市", text: "朔门遗址位于古城北侧的瓯江南岸。城门、瓮城、江岸和码头等遗存，帮助研究者理解港口与城市的空间联系。画面中的道路把水边和城中生活连起来，表现货物上岸后的陆路接续。", note: "画面表达港城相邻的关系，不是朔门遗址的精确平面图。", sources: [SOURCES.port, SOURCES.portCity] },
      { x: 1580, y: 615, label: "街市歇脚", icon: "茶", title: "街市也是交流发生的地方", text: "货物沿江岸道路进入街市，人与人的相遇、停留和交谈也构成港城日常交流。画中茶棚是这一生活场景的艺术表达，没有资料证明它对应某家具体的古代店铺。", note: "从茶棚观察港口如何连到城市日常。", sources: [SOURCES.portCity] }
    ],
    actionBox: { x: 160, y: 620, w: 460, h: 170 }
  },
  {
    title: "朔门集舟", eyebrow: "第三幕 · 朔门集舟", lead: "清点、装载与离港，古港的线索在江岸汇集。", prompt: "点击货筐，查看装载线索", action: "查看装载",
    card: { title: "码头与货物：古港交流留下的证据", text: "朔门古港遗址发现宋代码头、两艘宋代沉船和大量瓷器遗存，为认识宋元时期温州港口活动提供了实物线索。第三幕把船、码头、搬运和装载放在一起，呈现货物在港口集散、继续水上旅程的过程。", note: "遗址证明当地港口活动与货物流通；画中的船、货筐和装载细节不对应某次具体贸易。", sources: [SOURCES.port, SOURCES.maritime] },
    hotspots: [
      { x: 1600, y: 690, label: "船上装着什么", icon: "器", title: "器物让交流留下线索", text: "朔门古港遗址出土的瓷器遗存包括龙泉窑等窑口产品。陶瓷遗物为研究生产、流通和港口活动提供线索，也提醒我们：器物可以说明交流曾经发生，却不能单凭一件遗物确定货物的完整去向。", note: "画中的货筐是叙事意象，不是已确认的古代船货清单。", sources: [SOURCES.port] },
      { x: 1040, y: 555, label: "认识码头", icon: "港", title: "码头让船与岸连接", text: "考古资料记录了朔门古港的木石混筑码头等遗存。码头既供船只停靠，也是水上运输接续岸上搬运的节点。画中木栈桥与石岸组合，用来呈现船、岸与货物流动之间的连接。", note: "长卷中的码头是综合示意，不是某一处遗迹的精确复原。", sources: [SOURCES.port] }
    ],
    actionBox: { x: 590, y: 550, w: 550, h: 280 }
  },
  {
    title: "双塔引航", eyebrow: "第四幕 · 双塔引航", lead: "码头渐远，江心屿双塔在江上显现。", prompt: "扬帆驶向开阔水面", action: "扬帆",
    card: { title: "江心屿双塔：航行中的方位参照", text: "船离开港口驶向开阔江面，岛屿与塔影成为画面中的远景标记。江心屿位于瓯江之中，官方介绍将双塔与过往船只辨认温州方向联系起来。长卷借双塔讲述航行者如何借助岸上地标辨方向、确认自己与港城的距离。", note: "这里呈现的是地标辨识的文化意象，不表示双塔具备现代导航设备。", sources: [SOURCES.towers, SOURCES.island] },
    hotspots: [
      { x: 940, y: 175, label: "看见双塔", icon: "塔", title: "远望地标，辨识方向", text: "江心屿东西双塔矗立于瓯江之中。相关官方介绍提到，过往船只可远望塔身辨认温州方向。画中的双塔提示观众：水上交流需要航道，也需要辨认方位的参照。", note: "画面中的塔形和船行路线为艺术呈现。", sources: [SOURCES.towers, SOURCES.island] },
      { x: 830, y: 425, label: "船与岸", icon: "舟", title: "船行江上，港城仍在视野中", text: "船与岛岸的距离变化，展现离港之后仍与城市保持联系的江上视野。江心屿把开阔水面、航行路线和温州城的方向联系起来。", note: "这是画面导览，不复原具体航道。", sources: [SOURCES.island] }
    ],
    actionBox: { x: 480, y: 500, w: 650, h: 350 }
  },
  {
    title: "一江通海", eyebrow: "第五幕 · 一江通海", lead: "器物随船远行，也带去一方生活的印记。", prompt: "让船继续向海而行", action: "向海而行",
    card: { title: "从瓯江港口走向海洋交流", text: "朔门古港的码头、沉船与瓷器遗存，为研究宋元时期温州港口活动提供了实物资料。港口是江河运输通向海上交通的节点，货物与生活经验由此有机会跨地域流动。今天的瓯江海河联运呈现了新的运输联系；古代海上贸易与现代航运各有历史背景。", note: "遗址与航运资料说明港口和水路的联系；长卷中的船只及其目的地属于艺术叙事，不指向某次已考证航程。", sources: [SOURCES.overview, SOURCES.river, SOURCES.port] },
    hotspots: [
      { x: 1130, y: 395, label: "回看这一路", icon: "览", title: "一条江串起交流的节点", text: "从上游水路、临江城门，到朔门古港、江心屿地标，五幕把山地、城市、港口和海洋连成一段旅程。遗址提供历史线索，人物与货物移动则帮助讲述它们之间如何发生联系。", note: "上方章节导航可回看每一处交流节点；人物和航行动作属于艺术演绎。", sources: [SOURCES.port, SOURCES.island] },
      { x: 1510, y: 700, label: "今天的瓯江", icon: "今", title: "古港记忆与当代航运", text: "2024年12月，温州—丽水海河联运启动，首条瓯江集装箱航线由乐清七里港通往青田温溪码头。它呈现了当代货运如何沿江连接内陆与沿海，也让这条水路的交流功能在今天有了新的表达。", note: "这是当代运输案例，不与古代航线或货物直接画等号。", sources: [SOURCES.river] }
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
    sprite("mist.png", "mist"), sprite("wake.png", "wake"),
    sprite("small-reflection.png", "reflection small-reflection"), sprite("small-cargo.png", "small-ship")
  ].join("");
  if (index === 1) return [
    sprite("wake.png", "wake"), sprite("small-reflection.png", "reflection small-reflection"),
    sprite("small-cargo.png", "small-ship"), sprite("receiver-empty.png", "receiver"),
    sprite("basket.png", "basket cargo-one"), sprite("basket.png", "basket cargo-two"),
    sprite("basket.png", "basket cargo-three"), sprite("receiver-loaded.png", "loaded-receiver"),
    sprite("porter.png", "porter"), sprite("porter.png", "porter porter-two")
  ].join("");
  if (index === 2) return [
    sprite("moored-reflection.png", "reflection moored-reflection"), sprite("main-moored.png", "main-ship"),
    sprite("rope.png", "rope"), sprite("gangplank.png", "gangplank"),
    '<div class="dock-worker" aria-hidden="true">' + sprite("loader-a.png", "loader-a") + sprite("loader-b.png", "loader-b") + '</div>'
  ].join("");
  if (index === 3) return [
    sprite("mist.png", "mist"), sprite("distant-sail.png", "distant-sail"),
    sprite("wake.png", "wake"), sprite("sailing-reflection.png", "reflection sailing-reflection"),
    sprite("main-sailing.png", "main-ship")
  ].join("");
  return [
    sprite("mist.png", "mist"), sprite("distant-sail.png", "distant-sail"),
    sprite("wake.png", "wake"), sprite("sailing-reflection.png", "reflection sailing-reflection"),
    sprite("main-away.png", "main-ship"),
    `<div class="ending"><strong>一江通海</strong><span>器物随船远行<br>也带去一方生活的印记</span></div>`
  ].join("");
}

function buildScenes() {
  ui.sceneTrack.innerHTML = SCENES.map((scene, index) => {
    const hotspots = scene.hotspots.map((hotspot, hotspotIndex) =>
      `<button type="button" class="hotspot" data-scene="${index}" data-hotspot="${hotspotIndex}" style="left:${hotspot.x}px;top:${hotspot.y}px" aria-label="了解：${hotspot.label}"><span class="hotspot-icon" aria-hidden="true">${hotspot.icon}</span>${hotspot.label}</button>`
    ).join("");
    const box = scene.actionBox;
    return `<div class="scene scene-${index + 1}${index === 0 ? " active" : ""}" id="scene-${index}" style="background-image:url('${ASSET}scene-0${index + 1}.png')">${partMarkup(index)}${hotspots}<button type="button" class="action-surface" data-primary-scene="${index}" style="left:${box.x}px;top:${box.y}px;width:${box.w}px;height:${box.h}px" aria-label="${scene.action}"></button></div>`;
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
  ui.modalArt.style.backgroundImage = `url('${ASSET}scene-0${state.current + 1}.png')`;
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
      // Set finite animations to their final frame when skipping.
      element.getAnimations({ subtree: true }).forEach((animation) => {
        if (Number.isFinite(animation.effect.getComputedTiming().endTime)) animation.finish();
      });
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
      runMotion("docked", 11100, () => { state.phase[1] = 1; playCue("wood.wav", .14); });
    } else {
      runMotion("is-delivering", 8000, () => { sceneEl().classList.add("delivered"); state.phase[1] = 2; completeCurrent(); });
    }
  } else if (index === 2) {
    if (state.phase[2] === 0) { state.phase[2] = 1; openCard(SCENES[2].hotspots[0]); updateUI(); }
    else runMotion("is-loading", 6000, () => { sceneEl().classList.add("loaded"); state.phase[2] = 2; playCue("rope.wav", .12); completeCurrent(); });
  } else if (index === 3) {
    runMotion("is-sailing", 8000, completeCurrent);
  } else {
    runMotion("is-sailing", 16000, completeCurrent);
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
const ambience = [new CrossfadeLoop(`${ASSET}water.wav`, .12), new CrossfadeLoop(`${ASSET}wind.wav`, .045)];
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
  const cue = new Audio(`${ASSET}${file}`);
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
