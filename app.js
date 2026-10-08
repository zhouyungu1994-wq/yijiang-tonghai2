"use strict";

const ASSET = "";
const SOURCES = {
  river: { label: "浙江省交通运输厅｜温州—丽水海河联运启航（2024）", url: "https://jtyst.zj.gov.cn/art/2024/12/27/art_1229304975_59039943.html" },
  port: { label: "浙江新闻｜朔门古港遗址考古发现（2023）", url: "https://zjnews.zjol.com.cn/202303/t20230328_25571788.shtml" },
  portCity: { label: "温州市国资委｜朔门古港遗址保护展示项目（2025）", url: "https://wzgzw.wenzhou.gov.cn/art/2025/5/14/art_1221492_58955059.html" },
  maritime: { label: "新华网｜千年古港与海上丝绸之路（2022）", url: "https://www.xinhuanet.com/2022-09/28/c_1129039940.htm" },
  towers: { label: "温州市文化广电旅游局｜江心屿双塔", url: "https://wl.wenzhou.gov.cn/art/2020/11/13/art_1229438201_58884370.html" },
  island: { label: "温州市文化广电旅游局｜江心屿", url: "https://wl.wenzhou.gov.cn/art/2018/5/25/art_1653509_34537278.html" },
  towerAnnals: { label: "鹿城区年鉴（2021）｜江心屿东西塔", url: "https://dfz.zj.gov.cn/zlyz/ossfs/h5/NJ-Z-330302-2021-017-01-01/files/basic-html/page129.html" },
  shippingOffice: { label: "鹿城区志｜温州市舶务", url: "https://dfz.zj.gov.cn/zlyz/ossfs/h5/ZS-K-330302-2003-001-0101/files/basic-html/page1186.html" },
  overview: { label: "温州市人民政府｜朔门古港遗址与千年商港（2025）", url: "https://www.wenzhou.gov.cn/art/2025/2/16/art_1217832_59262697.html" }
};

const SCENES = [
  {
    title: "循江而来", eyebrow: "第一幕 · 循江而来", lead: "沿着水路，山间的货物开始一程远行。", prompt: "点击启程，沿江向东", action: "启程",
    card: { title: "瓯江：山水之间的交流通道", text: "瓯江流经浙南，连接丽水、温州并向海延伸。长卷从山水中的小舟讲起，呈现人、货物沿水路汇向江岸、港口的交流想象。浙江省交通运输厅记录的温州—丽水海河联运，则是今天这条水路继续连接内陆与沿海的实例。", note: "古代行旅细节属于画面叙事；现代航线与古代航运分开说明。", sources: [SOURCES.river] },
    hotspots: [
      { x: 470, y: 555, label: "浙南航运", icon: "水", title: "瓯江：连接山地与海岸的水路", text: "瓯江贯穿浙南山地与温州沿海。浙江省交通运输厅将它称为浙南连接山海的航运动脉和对外贸易通道。上游河谷、沿江城镇与河口港口因此处在同一条水路网络中。", note: "这说明水系与区域交通的关系；画中的村落、人物和具体货物是艺术演绎。", sources: [SOURCES.river] },
      { x: 1430, y: 560, label: "当代航线", icon: "江", title: "七里港—温溪：33海里的联运航线", text: "2024年12月25日，温州七里港至青田温溪港的集装箱海河联运航线启航，航程约33海里，首航装载36个集装箱。这是瓯江水路连接内陆与沿海运输的当代实例。", note: "此处数据为2024年首航信息，不代表古代航线里程或船货。", sources: [SOURCES.river] }
    ],
    actionBox: { x: 450, y: 660, w: 420, h: 175 }
  },
  {
    title: "临江入城", eyebrow: "第二幕 · 临江入城", lead: "小舟靠岸，货物沿着江边道路进入街市。", prompt: "让小舟靠岸，再送货入城", action: "靠岸",
    card: { title: "从江岸入城：港口连接城市生活", text: "朔门古港遗址位于温州古城北侧、瓯江南岸。考古发现的城门、瓮城、江岸与码头遗存，呈现城市和水运空间相邻的线索。第二幕借船靠岸、货物上岸和沿路入城，讲述水上运输如何与陆上街市相接。", note: "挑担者、茶棚和取货过程是帮助理解港城交流的叙事场景，并非遗址复原。", sources: [SOURCES.port, SOURCES.portCity] },
    hotspots: [
      { x: 1100, y: 545, label: "朔门古港", icon: "城", title: "宋元港区就在温州古城北侧", text: "朔门古港遗址位于温州古城北门外、瓯江南岸。考古发现了宋元至明清时期的城门、瓮城、江岸和码头等遗迹，显示港区与城防、城市出入口相邻。瓮城是设在城门外的围合防御空间。", note: "遗址信息来自考古成果；插画中的街道布局并非遗址平面复原。", sources: [SOURCES.maritime, SOURCES.port] },
      { x: 1580, y: 615, label: "市舶管理", icon: "贸", title: "南宋温州设有市舶务", text: "《鹿城区志》记载，南宋绍兴二年（1132）温州设市舶务，管理对外贸易，至庆元元年（1195）废。市舶机构是宋代港口贸易管理制度的一部分，说明港口交流也需要官方管理。", note: "茶棚是画面中的生活场景；本卡介绍的是温州港的制度史，不将茶棚认作历史遗址。", sources: [SOURCES.shippingOffice] }
    ],
    actionBox: { x: 160, y: 620, w: 460, h: 170 }
  },
  {
    title: "朔门集舟", eyebrow: "第三幕 · 朔门集舟", lead: "清点、装载与离港，古港的线索在江岸汇集。", prompt: "点击货筐，查看装载线索", action: "查看装载",
    card: { title: "码头与货物：古港交流留下的证据", text: "朔门古港遗址发现宋代码头、两艘宋代沉船和大量瓷器遗存，为认识宋元时期温州港口活动提供了实物线索。第三幕把船、码头、搬运和装载放在一起，呈现货物在港口集散、继续水上旅程的过程。", note: "遗址证明当地港口活动与货物流通；画中的船、货筐和装载细节不对应某次具体贸易。", sources: [SOURCES.port, SOURCES.maritime] },
    hotspots: [
      { x: 1600, y: 690, label: "龙泉青瓷", icon: "瓷", title: "瓷片记录区域产品的流通", text: "朔门古港考古出土的陶瓷遗存中有龙泉窑产品。龙泉窑青瓷是浙南重要的外销陶瓷之一；港址中的瓷器遗存可与窑业生产、运输和港口贸易联系起来研究，但不能据此断定画中某一只货筐装载的货物。", note: "考古遗物证明港址存在相关陶瓷，不等于复原某艘船的完整货单。", sources: [SOURCES.maritime, SOURCES.port] },
      { x: 1040, y: 555, label: "宋代码头", icon: "港", title: "朔门港区发现成组古码头", text: "2022年公布的朔门古港阶段性考古成果记录了宋代码头、江岸设施及宋代沉船等遗存。成组码头说明港口具有持续装卸和停靠活动；水岸工程与沉船、陶瓷遗存共同构成研究港口运作的证据。", note: "考古成果为分阶段公布；画中的栈桥是示意画法，并非某座遗迹的精确复原。", sources: [SOURCES.maritime] }
    ],
    actionBox: { x: 590, y: 550, w: 550, h: 280 }
  },
  {
    title: "双塔引航", eyebrow: "第四幕 · 双塔引航", lead: "码头渐远，江心屿双塔在江上显现。", prompt: "扬帆驶向开阔水面", action: "扬帆",
    card: { title: "江心屿双塔：航行中的方位参照", text: "船离开港口驶向开阔江面，岛屿与塔影成为画面中的远景标记。江心屿位于瓯江之中，官方介绍将双塔与过往船只辨认温州方向联系起来。长卷借双塔讲述航行者如何借助岸上地标辨方向、确认自己与港城的距离。", note: "这里呈现的是地标辨识的文化意象，不表示双塔具备现代导航设备。", sources: [SOURCES.towers, SOURCES.island] },
    hotspots: [
      { x: 940, y: 175, label: "双塔形制", icon: "塔", title: "东西双塔均为六面七层砖塔", text: "《鹿城区年鉴》记载，江心屿东塔高约28米，西塔高约32米，均为六面七层砖塔。两塔始建年代在地方文献中有不同说法，因此不宜把某一个年份当作定论。", note: "尺寸与形制据地方年鉴；长卷中的塔形为艺术表现。", sources: [SOURCES.towerAnnals, SOURCES.towers] },
      { x: 830, y: 425, label: "历史灯塔", icon: "航", title: "江心屿双塔入选历史文物灯塔", text: "温州市文旅部门资料记载，江心屿双塔于1997年入选国际航标组织评选的“世界百座历史文物灯塔”。这一称号强调其历史航标价值；它并不表示砖塔曾配备现代灯光导航设备。", note: "称号与年份据温州文旅部门资料。", sources: [SOURCES.towers, SOURCES.island] }
    ],
    actionBox: { x: 480, y: 500, w: 650, h: 350 }
  },
  {
    title: "一江通海", eyebrow: "第五幕 · 一江通海", lead: "器物随船远行，也带去一方生活的印记。", prompt: "让船继续向海而行", action: "向海而行",
    card: { title: "从瓯江港口走向海洋交流", text: "朔门古港的码头、沉船与瓷器遗存，为研究宋元时期温州港口活动提供了实物资料。港口是江河运输通向海上交通的节点，货物与生活经验由此有机会跨地域流动。今天的瓯江海河联运呈现了新的运输联系；古代海上贸易与现代航运各有历史背景。", note: "遗址与航运资料说明港口和水路的联系；长卷中的船只及其目的地属于艺术叙事，不指向某次已考证航程。", sources: [SOURCES.overview, SOURCES.river, SOURCES.port] },
    hotspots: [
      { x: 1130, y: 395, label: "海上丝路", icon: "海", title: "考古将温州港与海上丝绸之路相连", text: "国家文物局“考古中国”发布的朔门古港考古成果指出，遗址呈现宋元时期温州港作为重要港口及海上丝绸之路节点的历史。港址中的码头、沉船和贸易陶瓷，为理解港口如何接入更大范围的海上交流提供了实物证据。", note: "这是对考古成果的概述；长卷所画船只不对应已确认的具体航次或目的地。", sources: [SOURCES.maritime, SOURCES.overview] },
      { x: 1510, y: 700, label: "古今联运", icon: "今", title: "瓯江水路仍连接内陆与沿海", text: "2024年开通的温州七里港—青田温溪港集装箱海河联运航线，全程约33海里，首航装载36个集装箱。它展示了今天利用瓯江水路衔接内河与沿海运输的方式，与宋元海贸属于不同历史阶段。", note: "数据来自2024年首航报道，不与古代航线或货物直接画等号。", sources: [SOURCES.river] }
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

