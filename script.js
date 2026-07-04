// ================= Boot sequence =================
const bootLines = [
  "vighc-os v5.0.1 booting...",
  "[ ok ] mounting /dev/data-pipelines",
  "[ ok ] starting bigquery.service",
  "[ ok ] starting airflow-scheduler.service",
  "[ ok ] loading gcp credentials (3x certified)",
  "[ ok ] spark cluster online — 10+ TB/day",
  "[ ok ] all systems nominal. availability 99.9%",
  "launching portfolio..."
];
const bootEl = document.getElementById('boot-lines');
let bi = 0;
function boot(){
  if(bi < bootLines.length){
    const d = document.createElement('div');
    d.textContent = bootLines[bi++];
    bootEl.appendChild(d);
    setTimeout(boot, 160 + Math.random()*140);
  } else {
    setTimeout(()=>{ document.getElementById('boot').classList.add('done'); init(); }, 450);
  }
}
if(sessionStorage.getItem('booted')){
  document.getElementById('boot').style.display = 'none';
  window.addEventListener('DOMContentLoaded', init);
} else {
  sessionStorage.setItem('booted','1');
  window.addEventListener('DOMContentLoaded', boot);
}

let initialized = false;
function init(){
  if(initialized) return;
  initialized = true;
  avatarFallback();
  typeRoles();
  buildSkills();
  buildProjects();
  revealOnScroll();
  clock();
  setupConsole();
  matrixRain();
  scrollProgress();
  tiltCards();
  glitchName();
  konami();
}

// ================= Avatar fallback =================
function avatarFallback(){
  const av = document.getElementById('avatar');
  av.addEventListener('error', ()=>{
    const fb = document.createElement('div');
    fb.className = 'avatar-fallback';
    fb.textContent = 'VC';
    av.replaceWith(fb);
  });
}

// ================= Typed roles =================
function typeRoles(){
  const roles = ["Data Engineer","GCP 3x Certified","Pipeline builder","5+ years experience"];
  const el = document.getElementById('typed');
  let r=0, c=0, deleting=false;
  (function tick(){
    const word = roles[r];
    if(!deleting){
      el.textContent = word.slice(0, ++c);
      if(c===word.length){ deleting=true; return setTimeout(tick, 1600); }
    } else {
      el.textContent = word.slice(0, --c);
      if(c===0){ deleting=false; r=(r+1)%roles.length; }
    }
    setTimeout(tick, deleting?45:80);
  })();
}

// ================= Skills (clickable) =================
const SKILLS = {
  "Python":"primary language — ETL, Airflow DAGs, automation, Cloud Functions",
  "SQL":"heavy daily use — analytics, transformations, optimization",
  "BigQuery":"petabyte-scale warehousing, cost + query optimization",
  "Apache Spark":"10+ TB/day ETL on Dataproc, PySpark",
  "Airflow":"500+ scheduled workflows, custom operators, CI/CD integrated",
  "Kafka / Pub/Sub":"real-time ingestion + event-driven pipelines",
  "Dataproc":"managed Hadoop/Spark clusters on GCP",
  "Snowflake":"cloud warehousing, secure data sharing",
  "Bigtable":"HBase-style wide-column store for low-latency lookups",
  "GCP":"3x certified — Professional Data Engineer, DB Engineer, ACE",
  "AWS":"S3, Athena, Glue — multi-cloud pipelines",
  "PL/SQL":"legacy Oracle systems + GCP migration experience"
};
function buildSkills(){
  const wrap = document.getElementById('skills');
  Object.keys(SKILLS).forEach(name=>{
    const s = document.createElement('span');
    s.className = 'tag';
    s.textContent = name;
    s.title = 'click for details';
    s.addEventListener('click', ()=>{
      consolePrint(`vighc@portfolio:~$ man ${name.toLowerCase()}`, 'green');
      consolePrint(SKILLS[name], 'muted');
      document.getElementById('console').scrollIntoView({behavior:'smooth', block:'center'});
    });
    wrap.appendChild(s);
  });
}

// ================= Projects =================
const PROJECTS = [
  {
    name: "kafka-stream — real-time finance pipeline",
    commit: "a3f9c2d",
    url: "https://github.com/vighc/kafka-stream",
    teaser: "Real-time financial data pipeline: scrapes Google Finance on EC2, streams through Kafka, lands in Databricks Delta tables with S3 backup via Lambda.",
    pipeline: ["EC2 + Python", "Kafka", "PySpark (Databricks)", "Delta tables", "Warehouse", "S3 backup"],
    steps: [
      "<b>Extraction:</b> Python scraper on AWS EC2 pulls financial data from Google Finance, cleans and transforms it, and pushes to Kafka topics via a producer.",
      "<b>Streaming:</b> Kafka on EC2 with defined topics lets multiple consumers — including PySpark in Databricks — access live data.",
      "<b>Delta lake:</b> a PySpark Streaming app consumes topics and loads Delta tables — low write latency, ACID transactions, schema enforcement.",
      "<b>Warehouse:</b> staged Delta data is moved to a warehouse for complex queries and advanced analytics.",
      "<b>Backup:</b> a Lambda function triggered by Kafka events backs up topic data as CSV to S3 for integrity."
    ],
    tech: ["Python","Kafka","AWS EC2","Databricks","PySpark","Delta Lake","Lambda","S3"]
  },
  {
    name: "gcp-dataflow-pipline — COVID-19 analytics",
    commit: "7be41f0",
    url: "https://github.com/vighc/gcp-dataflow-pipline",
    teaser: "Captures, processes, and visualizes COVID-19 data in both real-time and batch modes on GCP Dataflow, tracking the evolving pandemic landscape.",
    pipeline: ["Data sources", "Dataflow (stream + batch)", "Processing", "Visualization"],
    steps: [
      "<b>Dual mode:</b> handles both real-time streaming and batch ingestion of COVID-19 data.",
      "<b>Dataflow:</b> GCP-managed Apache Beam pipelines do the heavy lifting for transformation at scale.",
      "<b>Insight:</b> processed output feeds visualizations tracking the evolving pandemic landscape."
    ],
    tech: ["GCP","Dataflow","Apache Beam","Python","BigQuery"]
  },
  {
    name: "aws-glueToAthena — streaming analytics pipeline",
    commit: "c15d88e",
    url: "https://github.com/vighc/aws-glueToAthena",
    teaser: "End-to-end AWS streaming pipeline: EC2 extraction → Kinesis → Glue + Spark processing → partitioned S3 data lake → SQL analytics in Athena.",
    pipeline: ["EC2 + Python", "Kinesis", "Glue + Spark", "S3 data lake", "Athena"],
    steps: [
      "<b>Extraction:</b> EC2 instance runs Python for real-time data capture.",
      "<b>Flow:</b> a Kinesis producer optimizes capture and transfer, configured for the data volume.",
      "<b>Processing:</b> AWS Glue + Apache Spark handle extraction, cleansing, transformation, and storage end to end.",
      "<b>Data lake:</b> processed data lands in S3 with partitioning for fast retrieval, fine-grained access controls, and monitoring.",
      "<b>Analytics:</b> Athena external tables enable SQL analytics in place — optimized with partitioning and efficient formats."
    ],
    tech: ["AWS","EC2","Kinesis","Glue","Spark","S3","Athena","Python"]
  }
];
function buildProjects(){
  const wrap = document.getElementById('projects');
  PROJECTS.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'proj';
    const arrows = p.pipeline.join('<span class="arrow">──▶</span>');
    card.innerHTML = `
      <div class="proj-head">
        <span class="commit">${p.commit}</span>
        <span class="pname">${p.name}</span>
        <a class="gh" href="${p.url}" target="_blank" rel="noopener" title="view on GitHub" aria-label="view on GitHub"><i class="ti ti-brand-github"></i></a>
        <i class="ti ti-chevron-down chev"></i>
      </div>
      <div class="proj-teaser">${p.teaser}</div>
      <div class="proj-body"><div class="proj-body-inner">
        <div class="pipeline">${arrows}</div>
        <ul class="proj-steps">${p.steps.map(s=>`<li>${s}</li>`).join('')}</ul>
        <div class="proj-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
      </div></div>`;
    card.querySelector('.proj-head').addEventListener('click', e=>{
      if(e.target.closest('.gh')) return;
      card.classList.toggle('open');
    });
    wrap.appendChild(card);
  });
}

// ================= Scroll reveal + count-up =================
function revealOnScroll(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('shown');
        if(e.target.classList.contains('stats')) countUp(e.target);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
function countUp(container){
  container.querySelectorAll('.num').forEach(num=>{
    const target = parseFloat(num.dataset.target);
    const suffix = num.dataset.suffix || '';
    const decimals = (target % 1 !== 0) ? 1 : 0;
    let cur = 0;
    const inc = target / 40;
    (function step(){
      cur = Math.min(cur + inc, target);
      num.textContent = cur.toFixed(decimals) + suffix;
      if(cur < target) requestAnimationFrame(step);
    })();
  });
}

// ================= Live clock =================
function clock(){
  const el = document.getElementById('clock');
  setInterval(()=>{ el.textContent = new Date().toLocaleTimeString('en-GB'); }, 1000);
}

// ================= Console =================
const HISTORY = [];
let histIdx = -1;
const CMDS = {
  help: ()=> "commands: whoami · skills · projects · experience · contact · resume · social · matrix · party · history · clear\nextras: click skill pills or project cards · tab = autocomplete · ↑ = history",
  whoami: ()=> "Vighneshwara C — Data Engineer, GCP 3x Certified, 5+ years.",
  skills: ()=> Object.keys(SKILLS).join(' · '),
  projects: ()=> PROJECTS.map(p=>`${p.commit}  ${p.name}\n         ${p.url}`).join('\n'),
  experience: ()=> "Albertsons (2025-) · Riskonnect (2023-25) · TCS (2021-23) — scroll up for details",
  contact: ()=> "email: vighneshbhatchanila@gmail.com · phone: 9483020518",
  social: ()=> "linkedin.com/in/vighc · vighc.github.io",
  resume: ()=>{ window.location.href='assets/resume.pdf'; return "downloading resume..."; },
  matrix: ()=>{ toggleMatrix(); return "matrix rain toggled."; },
  party: ()=>{ document.body.classList.toggle('party'); return "party mode toggled. your eyes, your responsibility."; },
  history: ()=> HISTORY.length ? HISTORY.join('\n') : "(empty)",
  sudo: ()=> "nice try. permission denied — this résumé is read-only.",
  ls: ()=> "experience.log  skills/  projects/  certs.txt  achievements.txt  console.sh  hire.sh",
  pwd: ()=> "/home/vighc/portfolio",
  date: ()=> new Date().toString(),
  echo: (args)=> args.join(' ') || "",
  "./hire.sh": ()=> "opening mail client... let's talk!",
  hire: ()=>{ window.location.href='mailto:vighneshbhatchanila@gmail.com'; return "opening mail client..."; }
};
function consolePrint(text, cls){
  const out = document.getElementById('console-out');
  const d = document.createElement('div');
  if(cls) d.style.color = `var(--${cls})`;
  d.textContent = text;
  out.appendChild(d);
  while(out.children.length > 60) out.removeChild(out.firstChild);
}
function setupConsole(){
  const input = document.getElementById('console-in');
  document.getElementById('console').addEventListener('click', ()=>input.focus());
  consolePrint("welcome. type 'help' to get started.", 'dim');

  input.addEventListener('keydown', e=>{
    if(e.key === 'ArrowUp'){
      e.preventDefault();
      if(HISTORY.length){ histIdx = Math.max(0, (histIdx===-1?HISTORY.length:histIdx)-1); input.value = HISTORY[histIdx]; }
      return;
    }
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      if(histIdx !== -1){ histIdx = Math.min(HISTORY.length, histIdx+1); input.value = HISTORY[histIdx] || ''; if(histIdx===HISTORY.length) histIdx=-1; }
      return;
    }
    if(e.key === 'Tab'){
      e.preventDefault();
      const v = input.value.trim().toLowerCase();
      if(!v) return;
      const match = Object.keys(CMDS).find(c=>c.startsWith(v));
      if(match) input.value = match;
      return;
    }
    if(e.key !== 'Enter') return;

    const raw = input.value.trim();
    input.value = '';
    histIdx = -1;
    if(!raw) return;
    HISTORY.push(raw);
    consolePrint('vighc@portfolio:~$ ' + raw, 'green');

    const [cmd, ...args] = raw.toLowerCase().split(/\s+/);
    if(cmd === 'clear'){ document.getElementById('console-out').innerHTML=''; return; }
    const fn = CMDS[cmd] || CMDS[raw.toLowerCase()];
    if(fn){ const res = fn(args); if(res) res.split('\n').forEach(l=>consolePrint(l,'muted')); }
    else consolePrint(`command not found: ${cmd} — type 'help'`, 'red');
  });
}

// ================= Matrix rain =================
let matrixOn = true, matrixRAF = null;
function matrixRain(){
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  const chars = "01アイウエオカキクケコサシスセソ$#@%&";
  let cols, drops;
  function size(){
    canvas.width = innerWidth; canvas.height = innerHeight;
    cols = Math.floor(canvas.width / 16);
    drops = Array(cols).fill(1);
  }
  size();
  addEventListener('resize', size);
  let last = 0;
  function draw(t){
    matrixRAF = requestAnimationFrame(draw);
    if(t - last < 66) return;
    last = t;
    ctx.fillStyle = 'rgba(13,17,23,0.12)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#3fb950';
    ctx.font = '14px monospace';
    drops.forEach((y,i)=>{
      const ch = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(ch, i*16, y*16);
      drops[i] = (y*16 > canvas.height && Math.random() > 0.975) ? 0 : y+1;
    });
  }
  matrixRAF = requestAnimationFrame(draw);
  document.getElementById('matrix-toggle').addEventListener('click', toggleMatrix);
}
function toggleMatrix(){
  const canvas = document.getElementById('matrix');
  matrixOn = !matrixOn;
  canvas.style.display = matrixOn ? 'block' : 'none';
}

// ================= Scroll progress =================
function scrollProgress(){
  const bar = document.getElementById('progress');
  addEventListener('scroll', ()=>{
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = pct + '%';
  }, {passive:true});
}

// ================= 3D tilt on stat cards =================
function tiltCards(){
  document.querySelectorAll('.tilt').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(500px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });
}

// ================= Glitch on name hover =================
function glitchName(){
  const h1 = document.getElementById('name-glitch');
  h1.addEventListener('mouseenter', ()=>{
    h1.classList.add('glitching');
    setTimeout(()=>h1.classList.remove('glitching'), 800);
  });
}

// ================= Konami code =================
function konami(){
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  addEventListener('keydown', e=>{
    if(document.activeElement && document.activeElement.id === 'console-in') return;
    pos = (e.key === seq[pos]) ? pos + 1 : 0;
    if(pos === seq.length){
      pos = 0;
      document.body.classList.toggle('party');
      consolePrint('konami code accepted. party mode engaged.', 'green');
    }
  });
}
