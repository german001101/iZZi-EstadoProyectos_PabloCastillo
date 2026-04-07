// =============================
// DATA
// =============================
const rawData = [
    { title: "Operación PyME sobre rOLTs.", status: "Completed", sol: "P.Castillo", crit: "Alta", resp: "Germán Burgos Burgoa", type: "PM-7438 [FTTH Nacional CR1]", notes: "Se inciarán pruebas UAT mañana 17-marzo con Harmonic y Technetix." },
    { title: "Correo: Intraway | Cotización Servicios QA & DEV", status: "In progress", sol: "A.Gonzalez", crit: "Alta", resp: "Laura Alonso", type: "Email", notes: "Revisar con Ariel si quiere que veamos la cotización en una llamada" },
    { title: "Dashboad de ONT Status en Sentinel", status: "Not started", sol: "A.Gonzalez", crit: "Alta", resp: "Laura Alonso", type: "Sentinel", notes: "Comentarle a Ariel que podemos hacerlo con el ME pero se le descuentan los días" },
    { title: "Pasar NE a Operativo y No Op - Traspaso", status: "Not started", sol: "A.Gonzalez", crit: "Alta", resp: "Laura Alonso", type: "KT", notes: "Revisar cómo podríamos hacer el traspaso de conocimiento a Operaciones/Ingenieria" },
    { title: "Pruebas de aprovisionamiento en Symphonica", status: "Not started", sol: "A.Gonzalez", crit: "Alta", resp: "Laura Alonso", type: "KT", notes: "Revisar con Ger si ya se inició con este traspaso de conocimiento" },
    { title: "Carga de OLTs/rOLTs en Sym", status: "Not started", sol: "A.Gonzalez", crit: "Media", resp: "Laura Alonso", type: "Provisioning", notes: "Revisar internamente requisitos y alinear próx pasos con Ariel" },
    { title: "Correo: Recorrido Symphonica", status: "Not started", sol: "A.Gonzalez", crit: "Media", resp: "Walter Strauss", type: "Training", notes: "Revisar correo de Ariel que solicitó algunos items para próxima reunión/sesión" },
    { title: "CR 4 intraway. Robustecimiento cOS Harmonic.", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "P.Castillo", type: "PM-7438", notes: "Organizar reunión conjunta con Ariel y Blandon de Harmonic" },
    { title: "Predescubrimiento sobre rOLTs.", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "Laura Alonso", type: "REQUERIMIENTO", notes: "Reconfirmar protocolos con proveedores Pablo y Fran" },
    { title: "IMS ZTE", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "Laura Alonso", type: "PM-7557 [B2C]", notes: "Revisar la definición de migración de servicios" },
    { title: "SUP-25601 - Symphonica Izzimxhfc", status: "Not started", sol: "C. Picaso", crit: "Media", resp: "Laura Alonso", type: "Jira", notes: "Reunión conjunta con Picaso, Ariel y Pablo para modificar alta de CM y MTA" },
    { title: "Nuevos modelos de ONT", status: "Completed", sol: "P.Castillo", crit: "Alta", resp: "P.Castillo", type: "PM-7564", notes: "Se realizó VM el día 6 de Marzo para residencial." },
    { title: "Mover instancias no-productivas AWS.", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "AWS Team", type: "COMPRAS", notes: "iZZi : Proceso Comercial" },
    { title: "Automatización telefonía pyme.", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "Laura Alonso", type: "SOW", notes: "Revisión conjunta para revalidar las cotizaciones" },
    { title: "Licenciamiento.", status: "In progress", sol: "P.Castillo", crit: "Alta", resp: "P.Castillo", type: "REQUERIMIENTO", notes: "Documento inicial Feb/2026. Update consumo 25/Marzo" },
    { title: "Migración de OLTs a un BNG local (AFTR)", status: "In progress", sol: "P.Castillo", crit: "Baja", resp: "Laura Alonso", type: "PM-7564", notes: "Coordinación con Ariel para recurso en caso de VM" },
    { title: "Nuevo perfil para community Wi-Fi.", status: "Not started", sol: "P.Castillo", crit: "Baja", resp: "pcastillob@izzi.mx", type: "Technical", notes: "Identificar quién lo lleva para entender requerimiento" },
    { title: "PyMEs en tenant IZZIMX.", status: "Not started", sol: "P.Castillo", crit: "Baja", resp: "P.Castillo", type: "IW", notes: "¿Qué se necesita de IW? Luego del pedido, priorización" },
    { title: "VLAN para STBs izzi.", status: "Not started", sol: "P.Castillo", crit: "Baja", resp: "P.Castillo", type: "Backlog", notes: "¿Proyecto o pedido para el backlog del ME?" },
    { title: "Retirar enmascaramiento Symphonica.", status: "Not started", sol: "P.Castillo", crit: "Baja", resp: "Security", type: "Mantenimiento", notes: "A la espera de novedades una vez avance iZZi" },
    { title: "Caso AWS: Flapeo rutas BGP", status: "Not started", sol: "P.Castillo", crit: "Media", resp: "Network", type: "Case 177258093600099", notes: "Revisar con Pablo si se sigue presentando y por qué sigue llegando correo" },
    { title: "Evolución GPON MTY.", status: "In progress", sol: "P.Castillo", crit: "Media", resp: "P.Castillo", type: "PROPOSAL", notes: "Reclamar feedback a Pablo" },
    { title: "Revisión datos para soporte.", status: "Completed", sol: "P.Castillo", crit: "Media", resp: "Support", type: "PM-7564", notes: "Cerrado, se realizó VM el jueves pasado. Sin pendientes en Sym" },
    { title: "Automatización IPv4 fija para pyme", status: "Not started", sol: "P.Castillo", crit: "Media", resp: "Laura Alonso", type: "PROPOSAL", notes: "Propuesta enviada, esperar feedback" },
    { title: "PM-7464. Homologación AAA Zequenze.", status: "In progress", sol: "P.Castillo", crit: "Media", resp: "Laura Alonso", type: "AAA", notes: "Acordar fecha de pruebas priorizando con otros proyectos" }
];

// =============================
// HELPERS
// =============================
const statusClass = s => s === 'Completed' ? 'completed' : s === 'In progress' ? 'in-progress' : 'not-started';
const critClass   = c => c === 'Alta' ? 'crit-alta' : c === 'Media' ? 'crit-media' : 'crit-baja';

function getInitials(name) {
    return name.split(' ').slice(0,2).map(n => n[0]?.toUpperCase() || '').join('');
}

const COLORS = ['#4f46e5','#06b6d4','#8b5cf6','#f59e0b','#10b981','#ef4444','#ec4899','#14b8a6'];

// =============================
// CHARTS
// =============================
let charts = {};

function buildCharts() {
    const comp = rawData.filter(d => d.status === 'Completed').length;
    const prog = rawData.filter(d => d.status === 'In progress').length;
    const not  = rawData.filter(d => d.status === 'Not started').length;
    const alta = rawData.filter(d => d.crit === 'Alta').length;
    const media = rawData.filter(d => d.crit === 'Media').length;
    const baja = rawData.filter(d => d.crit === 'Baja').length;

    // --- Donut Status ---
    if (charts.status) charts.status.destroy();
    charts.status = new Chart(document.getElementById('chartStatus'), {
        type: 'doughnut',
        data: {
            labels: ['Completado', 'En Progreso', 'Pendiente'],
            datasets: [{ data: [comp, prog, not], backgroundColor: ['#10b981','#f59e0b','#ef4444'], borderWidth: 0, hoverOffset: 8 }]
        },
        options: {
            cutout: '72%',
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11, family: 'DM Sans', weight: '600' }, padding: 14 } } }
        }
    });

    // --- Bar Criticidad ---
    if (charts.crit) charts.crit.destroy();
    charts.crit = new Chart(document.getElementById('chartCrit'), {
        type: 'bar',
        data: {
            labels: ['Alta', 'Media', 'Baja'],
            datasets: [{
                label: 'Iniciativas',
                data: [alta, media, baja],
                backgroundColor: ['#fecaca','#bfdbfe','#e2e8f0'],
                borderColor: ['#ef4444','#3b82f6','#94a3b8'],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } },
                x: { grid: { display: false }, ticks: { font: { size: 12, weight: '600' } } }
            }
        }
    });

    // --- Stacked Bar: status por prioridad ---
    if (charts.stacked) charts.stacked.destroy();
    const prioridades = ['Alta', 'Media', 'Baja'];
    const compByP  = prioridades.map(p => rawData.filter(d => d.crit === p && d.status === 'Completed').length);
    const progByP  = prioridades.map(p => rawData.filter(d => d.crit === p && d.status === 'In progress').length);
    const notByP   = prioridades.map(p => rawData.filter(d => d.crit === p && d.status === 'Not started').length);
    charts.stacked = new Chart(document.getElementById('chartStackedBar'), {
        type: 'bar',
        data: {
            labels: prioridades,
            datasets: [
                { label: 'Completado', data: compByP, backgroundColor: '#10b981', borderRadius: 4 },
                { label: 'En Progreso', data: progByP, backgroundColor: '#f59e0b', borderRadius: 4 },
                { label: 'Pendiente', data: notByP, backgroundColor: '#ef4444', borderRadius: 4 }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 }, padding: 10 } } },
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { font: { size: 12, weight: '600' } } },
                y: { stacked: true, beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } }
            }
        }
    });

    // --- Pie: Alta prioridad breakdown ---
    if (charts.alta) charts.alta.destroy();
    const altaComp  = rawData.filter(d => d.crit === 'Alta' && d.status === 'Completed').length;
    const altaProg  = rawData.filter(d => d.crit === 'Alta' && d.status === 'In progress').length;
    const altaNot   = rawData.filter(d => d.crit === 'Alta' && d.status === 'Not started').length;
    charts.alta = new Chart(document.getElementById('chartAltaPie'), {
        type: 'pie',
        data: {
            labels: ['Completado', 'En Progreso', 'Pendiente'],
            datasets: [{ data: [altaComp, altaProg, altaNot], backgroundColor: ['#10b981','#f59e0b','#ef4444'], borderWidth: 0, hoverOffset: 8 }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11, family: 'DM Sans', weight: '600' }, padding: 12 } } }
        }
    });
}

function buildProgressList() {
    const total = rawData.length;
    const comp  = rawData.filter(d => d.status === 'Completed').length;
    const prog  = rawData.filter(d => d.status === 'In progress').length;

    const items = [
        { label: 'Completado', count: comp, pct: Math.round(comp/total*100), color: '#10b981' },
        { label: 'En Progreso', count: prog, pct: Math.round(prog/total*100), color: '#f59e0b' },
        { label: 'Pendiente', count: total-comp-prog, pct: Math.round((total-comp-prog)/total*100), color: '#ef4444' },
        { label: 'Alta Prioridad', count: rawData.filter(d=>d.crit==='Alta').length, pct: Math.round(rawData.filter(d=>d.crit==='Alta').length/total*100), color: '#4f46e5' },
        { label: 'Media Prioridad', count: rawData.filter(d=>d.crit==='Media').length, pct: Math.round(rawData.filter(d=>d.crit==='Media').length/total*100), color: '#06b6d4' },
    ];

    document.getElementById('progressList').innerHTML = items.map(i => `
        <div>
            <div class="progress-item-label">
                <span>${i.label}</span>
                <span>${i.count} &nbsp;·&nbsp; ${i.pct}%</span>
            </div>
            <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width:${i.pct}%;background:${i.color};"></div>
            </div>
        </div>
    `).join('');
}

function buildResponsibles() {
    const counts = {};
    rawData.forEach(d => { counts[d.resp] = (counts[d.resp] || 0) + 1; });
    const sorted = Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,6);

    document.getElementById('respList').innerHTML = sorted.map(([name, count], i) => `
        <div class="resp-item">
            <div class="resp-avatar" style="background:${COLORS[i % COLORS.length]}">${getInitials(name)}</div>
            <span class="resp-name">${name}</span>
            <span class="resp-count">${count} iniciativa${count !== 1 ? 's' : ''}</span>
        </div>
    `).join('');
}

// =============================
// KPIs
// =============================
function updateKPIs() {
    const total = rawData.length;
    const comp  = rawData.filter(d => d.status === 'Completed').length;
    const prog  = rawData.filter(d => d.status === 'In progress').length;
    const not   = total - comp - prog;
    const alta  = rawData.filter(d => d.crit === 'Alta').length;
    const uniqueResp = new Set(rawData.map(d => d.resp)).size;

    document.getElementById('kpi-comp').textContent = comp;
    document.getElementById('kpi-prog').textContent = prog;
    document.getElementById('kpi-not').textContent  = not;
    document.getElementById('kpi-total').textContent = total;
    document.getElementById('kpi-alta').textContent = alta;
    document.getElementById('kpi-resp').textContent = uniqueResp;

    document.getElementById('kpi-comp-pct').textContent = Math.round(comp/total*100) + '%';
    document.getElementById('kpi-prog-pct').textContent = Math.round(prog/total*100) + '%';
    document.getElementById('kpi-not-pct').textContent  = Math.round(not/total*100) + '%';
    document.getElementById('kpi-alta-pct').textContent = Math.round(alta/total*100) + '%';
}

// =============================
// TASK LIST
// =============================
function renderTasks() {
    const search  = document.getElementById('searchInput').value.toLowerCase();
    const statusF = document.getElementById('filterStatus').value;
    const critF   = document.getElementById('filterCrit').value;

    const filtered = rawData.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(search) || item.resp.toLowerCase().includes(search) || item.notes.toLowerCase().includes(search);
        const matchStatus = statusF === 'All' || item.status === statusF;
        const matchCrit   = critF === 'All' || item.crit === critF;
        return matchSearch && matchStatus && matchCrit;
    });

    const list = document.getElementById('taskList');

    if (filtered.length === 0) {
        list.innerHTML = `<div class="empty-state"><span>🔍</span><p>No se encontraron iniciativas con los filtros actuales.</p></div>`;
        return;
    }

    list.innerHTML = filtered.map(item => `
        <div class="task-item">
            <div>
                <div class="task-title">${item.title}</div>
                <div class="task-meta">
                    <span class="status-pill ${statusClass(item.status)}">
                        <span class="status-dot ${statusClass(item.status)}"></span>
                        ${item.status === 'Completed' ? 'Completado' : item.status === 'In progress' ? 'En Progreso' : 'Pendiente'}
                    </span>
                    <span class="type-chip">${item.type}</span>
                    <span class="meta-tag">👤 ${item.resp}</span>
                </div>
                <div class="task-notes">${item.notes}</div>
            </div>
            <span class="crit-badge ${critClass(item.crit)}">${item.crit}</span>
        </div>
    `).join('');
}

// =============================
// DATE
// =============================
function setDate() {
    const now = new Date();
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('es-MX', opts);
    document.getElementById('footerYear').textContent = now.getFullYear();
}

// =============================
// PPT EXPORT
// =============================
async function downloadPPT() {
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';

    const total = rawData.length;
    const comp  = rawData.filter(d => d.status === 'Completed').length;
    const prog  = rawData.filter(d => d.status === 'In progress').length;
    const not   = total - comp - prog;
    const alta  = rawData.filter(d => d.crit === 'Alta').length;
    const today = new Date().toLocaleDateString('es-MX', { year:'numeric', month:'long', day:'numeric' });

    // ──────────────────────────────────────────────
    // SLIDE 1 — PORTADA
    // ──────────────────────────────────────────────
    const s1 = pptx.addSlide();
    s1.background = { color: '0f172a' };

    // Accent bar
    s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.5, h: 7.5, fill: { color: '4f46e5' } });

    s1.addText('REPORTE DE ESTATUS', {
        x: 0.9, y: 1.2, w: 11, h: 0.8,
        fontSize: 38, bold: true, color: 'ffffff',
        fontFace: 'Calibri'
    });
    s1.addText('PROYECTOS SYMPHONICA', {
        x: 0.9, y: 1.9, w: 11, h: 0.8,
        fontSize: 38, bold: true, color: '818cf8',
        fontFace: 'Calibri'
    });
    s1.addText('Ingeniería e Infraestructura', {
        x: 0.9, y: 2.9, w: 10, h: 0.5,
        fontSize: 18, color: 'cbd5e1', fontFace: 'Calibri'
    });

    // Divider line
    s1.addShape(pptx.ShapeType.rect, { x: 0.9, y: 3.5, w: 5, h: 0.04, fill: { color: '4f46e5' } });

    s1.addText(`Fecha: ${today}`, {
        x: 0.9, y: 3.7, w: 6, h: 0.4,
        fontSize: 13, color: '64748b', fontFace: 'Calibri'
    });

    // KPI boxes at bottom
    const kpiBoxes = [
        { label: 'Total', val: total, color: '1e293b', accent: '4f46e5' },
        { label: 'Completados', val: comp, color: '064e3b', accent: '10b981' },
        { label: 'En Progreso', val: prog, color: '78350f', accent: 'f59e0b' },
        { label: 'Pendientes', val: not, color: '7f1d1d', accent: 'ef4444' },
    ];
    kpiBoxes.forEach((box, i) => {
        const x = 0.9 + i * 3.1;
        s1.addShape(pptx.ShapeType.rect, { x, y: 4.8, w: 2.8, h: 1.6, fill: { color: box.color }, line: { color: box.accent, pt: 1.5 } });
        s1.addText(String(box.val), { x, y: 5.0, w: 2.8, h: 0.8, align: 'center', fontSize: 32, bold: true, color: 'ffffff', fontFace: 'Calibri' });
        s1.addText(box.label, { x, y: 5.75, w: 2.8, h: 0.4, align: 'center', fontSize: 12, color: '94a3b8', fontFace: 'Calibri' });
    });

    // ──────────────────────────────────────────────
    // SLIDE 2 — RESUMEN EJECUTIVO (Dashboard)
    // ──────────────────────────────────────────────
    const s2 = pptx.addSlide();
    s2.background = { color: 'f8fafc' };

    s2.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.7, fill: { color: '1e293b' } });
    s2.addText('RESUMEN EJECUTIVO', {
        x: 0.4, y: 0.1, w: 12, h: 0.5,
        fontSize: 18, bold: true, color: 'ffffff', fontFace: 'Calibri'
    });

    // ─ KPI Cards row ─
    const kpiData = [
        { label: 'Total', val: total, fill: '1e293b', text: 'ffffff', sub: '100%' },
        { label: 'Completados', val: comp, fill: '065f46', text: 'ffffff', sub: Math.round(comp/total*100)+'%' },
        { label: 'En Progreso', val: prog, fill: '92400e', text: 'ffffff', sub: Math.round(prog/total*100)+'%' },
        { label: 'Pendientes', val: not, fill: '991b1b', text: 'ffffff', sub: Math.round(not/total*100)+'%' },
        { label: 'Alta Prior.', val: alta, fill: '312e81', text: 'ffffff', sub: Math.round(alta/total*100)+'%' },
    ];
    kpiData.forEach((k, i) => {
        const x = 0.3 + i * 2.5;
        s2.addShape(pptx.ShapeType.roundRect, { x, y: 0.9, w: 2.3, h: 1.4, fill: { color: k.fill }, rectRadius: 0.1 });
        s2.addText(String(k.val), { x, y: 1.0, w: 2.3, h: 0.7, align: 'center', fontSize: 28, bold: true, color: k.text, fontFace: 'Calibri' });
        s2.addText(k.label, { x, y: 1.65, w: 2.3, h: 0.35, align: 'center', fontSize: 10, color: 'cbd5e1', fontFace: 'Calibri' });
        s2.addText(k.sub, { x, y: 1.95, w: 2.3, h: 0.25, align: 'center', fontSize: 9, color: 'a0aec0', fontFace: 'Calibri' });
    });

    // ─ Status distribution visual ─
    s2.addText('DISTRIBUCIÓN DE ESTADO', {
        x: 0.3, y: 2.55, w: 6, h: 0.35,
        fontSize: 10, bold: true, color: '64748b', fontFace: 'Calibri'
    });

    const statusItems = [
        { label: 'Completado', count: comp, color: '10b981' },
        { label: 'En Progreso', count: prog, color: 'f59e0b' },
        { label: 'Pendiente', count: not, color: 'ef4444' },
    ];
    const barW = 12.5;
    let curX = 0.3;
    statusItems.forEach(si => {
        const w = (si.count / total) * barW;
        if (w > 0) {
            s2.addShape(pptx.ShapeType.rect, { x: curX, y: 2.95, w, h: 0.3, fill: { color: si.color } });
            curX += w;
        }
    });

    // legend
    statusItems.forEach((si, i) => {
        const lx = 0.3 + i * 4.2;
        s2.addShape(pptx.ShapeType.rect, { x: lx, y: 3.4, w: 0.18, h: 0.18, fill: { color: si.color } });
        s2.addText(`${si.label}: ${si.count} (${Math.round(si.count/total*100)}%)`, {
            x: lx + 0.25, y: 3.38, w: 3.5, h: 0.22,
            fontSize: 10, color: '334155', fontFace: 'Calibri'
        });
    });

    // ─ Priority table ─
    s2.addText('DISTRIBUCIÓN POR PRIORIDAD', {
        x: 0.3, y: 3.8, w: 6, h: 0.35,
        fontSize: 10, bold: true, color: '64748b', fontFace: 'Calibri'
    });

    const prioridades = ['Alta', 'Media', 'Baja'];
    const priorColors = ['ef4444','3b82f6','94a3b8'];
    prioridades.forEach((p, i) => {
        const cnt = rawData.filter(d => d.crit === p).length;
        const pct = Math.round(cnt/total*100);
        const bw = (cnt/total) * 12.5;
        s2.addText(`${p}: ${cnt}`, { x: 0.3, y: 4.2 + i*0.55, w: 1.5, h: 0.4, fontSize: 10, bold: true, color: '1e293b', fontFace: 'Calibri' });
        s2.addShape(pptx.ShapeType.rect, { x: 1.9, y: 4.3 + i*0.55, w: bw > 0 ? bw*0.85 : 0.1, h: 0.22, fill: { color: priorColors[i] } });
        s2.addText(`${pct}%`, { x: 12.0, y: 4.2 + i*0.55, w: 0.8, h: 0.4, fontSize: 10, color: '64748b', fontFace: 'Calibri' });
    });

    s2.addText(`Reporte generado el ${today}  ·  Symphonica Management`, {
        x: 0, y: 7.2, w: 13.33, h: 0.3,
        align: 'center', fontSize: 9, color: '94a3b8', fontFace: 'Calibri'
    });

    // ──────────────────────────────────────────────
    // SLIDES 3..N — TABLAS DE INICIATIVAS
    // ──────────────────────────────────────────────
    const itemsPerSlide = 8;
    const totalSlides = Math.ceil(rawData.length / itemsPerSlide);

    for (let i = 0; i < rawData.length; i += itemsPerSlide) {
        const sn = Math.floor(i / itemsPerSlide) + 1;
        const slide = pptx.addSlide();
        slide.background = { color: 'ffffff' };

        // Header bar
        slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.65, fill: { color: '1e293b' } });
        slide.addText(`DETALLE DE INICIATIVAS  —  Parte ${sn} de ${totalSlides}`, {
            x: 0.4, y: 0.1, w: 10, h: 0.45,
            fontSize: 16, bold: true, color: 'ffffff', fontFace: 'Calibri'
        });
        slide.addText(`${today}`, { x: 10, y: 0.1, w: 3, h: 0.45, align: 'right', fontSize: 10, color: '94a3b8', fontFace: 'Calibri' });

        const chunk = rawData.slice(i, i + itemsPerSlide);

        const tableRows = [
            [
                { text: '#',           options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9, align: 'center' } },
                { text: 'Iniciativa',  options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
                { text: 'Estado',      options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
                { text: 'Prioridad',   options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
                { text: 'Responsable', options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
                { text: 'Tipo',        options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
                { text: 'Notas',       options: { fill: '334155', color: 'ffffff', bold: true, fontSize: 9 } },
            ]
        ];

        chunk.forEach((item, idx) => {
            const rowFill = idx % 2 === 0 ? 'f8fafc' : 'ffffff';
            const statusColor = item.status === 'Completed' ? '10b981' : item.status === 'In progress' ? 'f59e0b' : 'ef4444';
            const critColor   = item.crit === 'Alta' ? 'ef4444' : item.crit === 'Media' ? '3b82f6' : '94a3b8';

            tableRows.push([
                { text: String(i + idx + 1), options: { fill: rowFill, fontSize: 9, align: 'center', color: '64748b' } },
                { text: item.title,          options: { fill: rowFill, fontSize: 9, bold: true, color: '0f172a' } },
                { text: item.status,         options: { fill: rowFill, fontSize: 9, color: statusColor, bold: true } },
                { text: item.crit,           options: { fill: rowFill, fontSize: 9, color: critColor, bold: true } },
                { text: item.resp,           options: { fill: rowFill, fontSize: 9, color: '334155' } },
                { text: item.type,           options: { fill: rowFill, fontSize: 8, color: '64748b', italic: true } },
                { text: item.notes,          options: { fill: rowFill, fontSize: 8, color: '475569' } },
            ]);
        });

        slide.addTable(tableRows, {
            x: 0.3, y: 0.8, w: 12.7,
            colW: [0.4, 2.8, 1.2, 0.9, 1.6, 1.5, 4.3],
            border: { type: 'solid', color: 'e2e8f0', pt: 0.5 },
            rowH: 0.65
        });
    }

    // ──────────────────────────────────────────────
    // SLIDE PENÚLTIMA — PRÓXIMOS PASOS
    // ──────────────────────────────────────────────
    const sPP = pptx.addSlide();
    sPP.background = { color: '0f172a' };

    sPP.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.5, h: 7.5, fill: { color: '06b6d4' } });

    sPP.addText('PRÓXIMOS PASOS', {
        x: 0.9, y: 0.8, w: 11, h: 0.7,
        fontSize: 32, bold: true, color: '06b6d4', fontFace: 'Calibri'
    });
    sPP.addText('Iniciativas prioritarias y acciones recomendadas', {
        x: 0.9, y: 1.5, w: 11, h: 0.4,
        fontSize: 15, color: '94a3b8', fontFace: 'Calibri'
    });
    sPP.addShape(pptx.ShapeType.rect, { x: 0.9, y: 2.0, w: 5, h: 0.04, fill: { color: '06b6d4' } });

    const highPriPending = rawData.filter(d => d.crit === 'Alta' && d.status !== 'Completed').slice(0, 5);
    highPriPending.forEach((item, i) => {
        const dotColor = item.status === 'In progress' ? 'f59e0b' : 'ef4444';
        sPP.addShape(pptx.ShapeType.ellipse, { x: 0.9, y: 2.4 + i*0.75, w: 0.18, h: 0.18, fill: { color: dotColor } });
        sPP.addText(item.title, {
            x: 1.2, y: 2.35 + i*0.75, w: 8, h: 0.3,
            fontSize: 13, bold: true, color: 'e2e8f0', fontFace: 'Calibri'
        });
        sPP.addText(`${item.status}  ·  Resp: ${item.resp}`, {
            x: 1.2, y: 2.62 + i*0.75, w: 8, h: 0.22,
            fontSize: 10, color: '64748b', fontFace: 'Calibri'
        });
    });

    // Summary box
    sPP.addShape(pptx.ShapeType.roundRect, {
        x: 10.0, y: 2.2, w: 3.0, h: 3.5,
        fill: { color: '1e293b' }, line: { color: '06b6d4', pt: 1.5 }, rectRadius: 0.1
    });
    sPP.addText('RESUMEN', { x: 10.0, y: 2.4, w: 3.0, h: 0.4, align: 'center', fontSize: 11, bold: true, color: '06b6d4', fontFace: 'Calibri' });
    [
        [`Completados`, `${comp} / ${total}`],
        [`En Proceso`, `${prog}`],
        [`Pendientes`, `${not}`],
        [`Alta Prior.`, `${alta}`],
    ].forEach(([l, v], i) => {
        sPP.addText(l, { x: 10.1, y: 2.9 + i*0.55, w: 1.6, h: 0.35, fontSize: 10, color: '94a3b8', fontFace: 'Calibri' });
        sPP.addText(v, { x: 11.7, y: 2.9 + i*0.55, w: 1.2, h: 0.35, align: 'right', fontSize: 12, bold: true, color: 'ffffff', fontFace: 'Calibri' });
    });

    // ──────────────────────────────────────────────
    // SLIDE FINAL — CIERRE
    // ──────────────────────────────────────────────
    const sf = pptx.addSlide();
    sf.background = { color: '0f172a' };

    // Gradient-like overlay shape
    sf.addShape(pptx.ShapeType.rect, { x: 0, y: 5.5, w: 13.33, h: 2, fill: { color: '4f46e5', transparency: 80 } });
    sf.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.5, fill: { color: '4f46e5' } });

    sf.addText('GRACIAS', {
        x: 0, y: 1.8, w: 13.33, h: 1.2,
        align: 'center', fontSize: 72, bold: true, color: 'ffffff', fontFace: 'Calibri'
    });
    sf.addText('Symphonica Management  —  Ingeniería e Infraestructura', {
        x: 0, y: 3.1, w: 13.33, h: 0.5,
        align: 'center', fontSize: 18, color: '818cf8', fontFace: 'Calibri'
    });
    sf.addShape(pptx.ShapeType.rect, { x: 4.5, y: 3.75, w: 4.33, h: 0.05, fill: { color: '4f46e5' } });
    sf.addText(`${today}`, {
        x: 0, y: 4.0, w: 13.33, h: 0.4,
        align: 'center', fontSize: 14, color: '475569', fontFace: 'Calibri'
    });
    sf.addText('Cualquier consulta: contactar al equipo de Ingeniería', {
        x: 0, y: 4.5, w: 13.33, h: 0.35,
        align: 'center', fontSize: 12, color: '334155', fontFace: 'Calibri'
    });

    // ──────────────────────────────────────────────
    // EXPORT
    // ──────────────────────────────────────────────
    await pptx.writeFile({ fileName: 'Symphonica_Estatus_Completo.pptx' });
}

// =============================
// EVENTS & INIT
// =============================
document.getElementById('searchInput').addEventListener('input', renderTasks);
document.getElementById('filterStatus').addEventListener('change', renderTasks);
document.getElementById('filterCrit').addEventListener('change', renderTasks);

window.onload = () => {
    setDate();
    updateKPIs();
    buildCharts();
    buildProgressList();
    buildResponsibles();
    renderTasks();
};
document.addEventListener("DOMContentLoaded", () => {
    setDate();
    updateKPIs();
    buildCharts();
    buildProgressList();
    buildResponsibles();
    renderTasks();

    document.getElementById('searchInput')?.addEventListener('input', renderTasks);
    document.getElementById('filterStatus')?.addEventListener('change', renderTasks);
    document.getElementById('filterCrit')?.addEventListener('change', renderTasks);
});