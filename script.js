const data = {
    profile: {
        name: "พัฒนพล (สิงโต) สุธรรม",
        avatar: "./images/profiles/profile.jpg"
    },

    stack: [
        {
            title: "Frontend",
            icon: "layout",
            skills: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Pinia", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Backend & Databases",
            icon: "server",
            skills: ["FastAPI", "Python", "Flask", "PostgreSQL", "Redis", "SQL", "PHP"]
        },
        {
            title: "DevOps & Infrastructure",
            icon: "container",
            skills: ["Docker Swarm", "Traefik", "Nginx", "Linux", "Proxmox", "Git", "Cloudflare Tunnels"]
        },
        {
            title: "Hardware & IoT",
            icon: "cpu",
            skills: ["C/C++", "ESP32", "Arduino", "Raspberry Pi", "Electronics", "Networks"]
        }
    ],

    journey: [
        {
            question: "จุดเริ่มต้น? ทำไมถึงมาเขียนโค้ด",
            answer: "ผมเริ่มจาก <span class='text-accent font-bold'>ภาษา C</span> ตอน ม.2 เพราะเห็นว่าจะได้เรียนเลยไปศึกษาล่วงหน้า เริ่มจากการถาม <b class='text-white'>AI กับ YouTube (อาจารย์ KongRaksiam)</b> ไม่มีครู ไม่มีใครสอน ทำไปเรื่อยๆ เพราะชอบครับ พอทำโปรแกรมเล็กๆ ได้ก็ขยับไป <span class='text-accent'>C++</span> แล้วรู้สึกอยากทำระบบที่ใช้ได้จริง แต่ถ้าเขียน C++ คงตายแน่ๆ เลยมาต่อที่ <span class='text-accent'>Python</span> และ <span class='text-accent'>SQL</span> จนถึงทุกวันนี้ครับ",
            icon: "lightbulb"
        },
        {
            question: "แบ่งเวลาเรียนกับเขียนโค้ดยังไง?",
            answer: "ผมยึดหลัก <b class='text-white'>'เรียนคือหน้าที่ โค้ดคือความชอบ'</b> ช่วงสอบจะโฟกัสเรียนเต็มที่ พอเข้าใจบทเรียนแล้วก็หาอะไรทำ ช่วงว่างหรือวันหยุดชอบหาอะไรเล็กๆ น้อยๆ ทำ เพราะไอเดียมันมาเรื่อยๆ ครับ <b class='text-white'>การเขียนโค้ดช่วยฝึก Logic ซึ่งส่งผลดีต่อวิชาคำนวณด้วย</b>",
            icon: "clock"
        },
        {
            question: "คำแนะนำสำหรับคนอยากเริ่ม?",
            answer: "อย่ากลัว Error เพราะ <b class='text-white'>Error คือครูที่ดีที่สุด</b> แนะนำเริ่มจากภาษาที่อ่านง่ายอย่าง <span class='text-accent'>Python</span> แล้วลองทำ <b class='text-white'>โปรเจกต์เล็กๆ ที่ใช้งานได้จริง</b> อย่างโปรแกรมคำนวณเงินหรือ To-do list <b class='text-white'>ยิ่งเจอบัค ยิ่งปวดหัว ยิ่งสนุกครับ</b>",
            icon: "rocket"
        },
        {
            question: "เป้าหมายในอนาคต",
            answer: "จริงๆ ผมถนัดคอมครับ แต่รู้สึกว่าถ้าไปสายคอมเลย โอกาสไปเรียนรู้สายอื่นจะยาก ผมเลยเลือกไปทาง <span class='text-accent font-bold'>ไฟฟ้า</span> เป็นสายหลัก เพราะอยากมีพื้นฐานให้แน่นก่อน แล้วค่อยไปเก็บอย่างอื่น <b class='text-white'>คอมและโค้ดเราศึกษาเมื่อไหร่ก็ได้ แต่ไฟฟ้าเอาไปต่อยอดร่วมกับคอมพิวเตอร์ได้กว้างกว่าครับ</b>",
            icon: "target"
        }
    ],

    projects: [
        // ---------- ผลงานหลัก: ระบบที่ใช้งานจริง ----------
        {
            id: "syncroom",
            name: "SYNCROOM",
            subtitle: "ระบบบริหารจัดการห้องเรียน (Classroom Management System)",
            year: "2569",
            role: "Full-Stack — ออกแบบฐานข้อมูล, API, หน้าเว็บ และวางระบบ Deploy ทั้งหมด",
            status: "live",
            featured: true,
            desc: "ระบบบริหารจัดการห้องเรียนที่ใช้งานจริงในโรงเรียน ครอบคลุมทะเบียนนักเรียน ตารางเรียน งานกิจกรรม และงานการเงินของห้อง แยกเป็นหน้าเว็บด้วย Vue 3 + TypeScript และ API ด้วย FastAPI + PostgreSQL โดย Deploy บน Docker Swarm + Traefik ที่อัปเดตระบบได้โดยไม่ต้องปิดให้บริการ",
            highlights: [
                "ระบบการเงินห้องแบบ Double-entry Ledger — ออกใบเสร็จและใบแจ้งหนี้เป็น PDF อัตโนมัติ พร้อมลูกหนี้ เครดิตนักเรียน งบประมาณ และรายงานการเงิน",
                "ระบบสิทธิ์ละเอียดถึง 8 สิทธิ์ × 16 บทบาท (Granular RBAC) เข้าสู่ระบบได้ด้วย JWT, Google OAuth และ Discord OAuth",
                "Discord Bot แจ้งเตือนเรียลไทม์ — ใช้ Redis ส่งต่อเหตุการณ์จากเว็บเข้ากลุ่ม Discord ทันที พร้อม Audit Log ตรวจสอบย้อนหลัง",
                "นำเข้าข้อมูลนักเรียนจาก Excel และ Deploy แบบ Zero-downtime บน Docker Swarm"
            ],
            tags: ["Vue 3", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "Redis", "Docker Swarm", "Traefik"],
            live: "https://class.singto1597.xyz",
            github: "https://github.com/singto1597/classroom-management",
            image: "./images/projects/syncroom-dashboard.png",
            imageAlt: "หน้าจอ Dashboard ของระบบ SYNCROOM แสดงภาพรวมข้อมูลห้องเรียน"
        },
        {
            id: "pirivoice",
            name: "PIRIvoice",
            subtitle: "ระบบรับแจ้งเรื่องและติดตามผล สำหรับสภานักเรียน",
            year: "2569",
            role: "Full-Stack — ออกแบบ UX/UI, API, ฐานข้อมูล และวางระบบ Deploy",
            status: "live",
            featured: true,
            desc: "ระบบรับแจ้งเรื่องของนักเรียนสำหรับสภานักเรียนโรงเรียนพิริยาลัยจังหวัดแพร่ เปิดใช้งานจริงที่ pirivoice.com หน้าเว็บสาธารณะดึงสถิติจากฐานข้อมูลจริง ทั้งจำนวนเรื่อง สถานะ และแนวโน้ม 30 วัน พร้อมระบบเลื่อนเรื่องตามลำดับขั้นที่นับเวลาและส่งต่ออัตโนมัติ",
            highlights: [
                "ระบบเลื่อนเรื่องแบบพีระมิด (ห้อง → ระดับชั้น → สภานักเรียน) พร้อมตัวนับเวลา และส่งต่อขึ้นขั้นถัดไปอัตโนมัติเมื่อครบกำหนด",
                "หน้าเว็บสาธารณะดึงสถิติสดจากฐานข้อมูลจริง — จำนวนเรื่องแยกตามสถานะ, กราฟแนวโน้ม 30 วัน, ประกาศล่าสุด และแกลเลอรีเรื่องที่แก้ไขแล้ว",
                "PIRI Boards — ระบบโหวตสาธารณะ (หนึ่งเสียงต่อคน) และกระทู้สนทนาตอบกลับซ้อน พร้อมรีแอกชันและคิวตรวจสอบเนื้อหา รวมถึง P.R. Playbooks หนังสือการ์ตูนในระบบ 6 เล่ม",
                "นำเข้าข้อมูล Excel แบบ Async ด้วย arq worker และทำ SEO ครบ (sitemap, robots, canonical, Open Graph, JSON-LD)"
            ],
            tags: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker Swarm", "SEO"],
            live: "https://www.pirivoice.com",
            github: "https://github.com/singto1597/prsc_portal",
            image: "./images/projects/pirivoice-home.png",
            imageAlt: "หน้าแรกของ PIRIvoice แสดงสถิติการแจ้งเรื่องจากฐานข้อมูลจริง"
        },

        // ---------- โปรเจกต์ช่วงเริ่มต้น ----------
        {
            id: "robot",
            name: "หุ่นยนต์แข่งขัน",
            subtitle: "Robot",
            year: "2568",
            role: "เขียนโค้ดควบคุมและประกอบตัวหุ่น",
            status: "archived",
            featured: false,
            desc: "โค้ดหุ่นยนต์สำหรับการแข่งขัน 3 ประเภท ได้แก่ หุ่นยนต์วิ่งเร็ว หุ่นยนต์ระดับสูง และ Maejo Phrae Robot Challenge",
            tags: ["C++", "Arduino", "Robotics", "INEX"],
            live: null,
            github: "https://github.com/singto1597/piriyalai-robot",
            image: "./images/projects/robot.jpg",
            imageAlt: "หุ่นยนต์ที่ใช้ในการแข่งขัน"
        },
        {
            id: "school-pr",
            name: "School Public Relations",
            subtitle: "ระบบประชาสัมพันธ์โรงเรียน",
            year: "2568",
            role: "พัฒนาโปรแกรมและตั้งระบบแจ้งเตือน",
            status: "archived",
            featured: false,
            desc: "ระบบแจ้งเตือนตารางเรียนและประกาศของโรงเรียน ให้ข้อมูลถึงนักเรียนได้ทันทีโดยไม่ต้องรอประกาศเสียงตามสาย",
            tags: ["Python", "System", "School"],
            live: null,
            github: "https://github.com/singto1597/school-public-relations",
            image: null,
            imageAlt: ""
        },
        {
            id: "shrimp-iot",
            name: "ระบบเลี้ยงกุ้งฝอย IoT",
            subtitle: "Shrimp Farming System",
            year: "2568",
            role: "ออกแบบวงจร เขียนเฟิร์มแวร์ และทำหน้าเว็บควบคุม",
            status: "archived",
            featured: false,
            desc: "ระบบเลี้ยงกุ้งฝอยอัตโนมัติด้วย ESP32 ควบคุมการให้อาหารและวัดค่าสภาพน้ำผ่านหน้าเว็บ — โครงงาน STEM",
            tags: ["ESP32", "C++", "IoT", "Arduino"],
            live: null,
            github: "https://github.com/singto1597/Shrimp-farming-system_IOT",
            image: "./images/projects/shrimp-iot.jpg",
            imageAlt: "ตู้เลี้ยงกุ้งฝอยที่ต่อกับอุปกรณ์ ESP32"
        },
        {
            id: "money-management",
            name: "Money Management",
            subtitle: "โปรแกรมจัดการเงินส่วนตัว",
            year: "2568",
            role: "พัฒนาโปรแกรมทั้งหมด",
            status: "archived",
            featured: false,
            desc: "โปรแกรมบันทึกรายรับ–รายจ่ายสำหรับใช้งานส่วนตัว ใช้ฝึกเรื่องโครงสร้างข้อมูลและการจัดการไฟล์",
            tags: ["Python", "CLI"],
            live: null,
            github: "https://github.com/singto1597/Money-Management",
            image: null,
            imageAlt: ""
        },
        {
            id: "synclight",
            name: "SyncLight Linux Driver",
            subtitle: "ไดรเวอร์ไฟ SyncLight บน Linux",
            year: "2568",
            role: "ศึกษาวิธีสื่อสารกับอุปกรณ์แล้วเขียนไดรเวอร์เอง",
            status: "archived",
            featured: false,
            desc: "โปรแกรมสั่งการไฟ SyncLight ของ Robobloq บน Linux ซึ่งไม่มีซอฟต์แวร์รองรับอย่างเป็นทางการ",
            tags: ["Python", "Linux", "Driver"],
            live: null,
            github: "https://github.com/singto1597/syncLight-Robobloq-Linux",
            image: null,
            imageAlt: ""
        }
    ],

    certificates: [
        {
            title: "ผ่านการคัดเลือกเข้าค่าย 2 สอวน. วิชาคอมพิวเตอร์",
            issuer: "มหาวิทยาลัยเชียงใหม่",
            date: "พ.ศ. 2568",
            image: "./images/certificates/POSN_2_CMU.png",
            thumb: "./images/certificates/thumbs/POSN_2_CMU.jpg",
            link: null
        },
        {
            title: "โครงการศูนย์โอลิมปิกวิชาการ ค่าย 1 สอวน. วิชาคอมพิวเตอร์",
            issuer: "ยุพราชวิทยาลัย",
            date: "18 ตุลาคม 2568",
            image: "./images/certificates/POSN_1.png",
            thumb: "./images/certificates/thumbs/POSN_1.jpg",
            link: "https://drive.google.com/file/d/1s_Tx0DbpmSMfzl4Ilu6_s5QOp8TCPlsS/view?usp=drive_link"
        },
        {
            title: "รางวัลเหรียญทอง การแข่งขันหุ่นยนต์วิ่งเร็ว ม.1-ม.3 ระดับประเทศ",
            issuer: "รายการ 46ict ณ โรงเรียนสตรีภูเก็ตวิทยาลัย",
            date: "พ.ศ. 2568",
            image: "./images/certificates/46ict_Robot.png",
            thumb: "./images/certificates/thumbs/46ict_Robot.jpg",
            link: null
        },
        {
            title: "รางวัลเหรียญทอง ชนะเลิศ การแข่งขันหุ่นยนต์ระดับสูง ม.1-ม.3",
            issuer: "โครงการแข่งขันศิลปหัตถกรรมนักเรียน",
            date: "26 สิงหาคม 2568",
            image: "./images/certificates/Robot_Craft.png",
            thumb: "./images/certificates/thumbs/Robot_Craft.jpg",
            link: null
        },
        {
            title: "รางวัลรองชนะเลิศอันดับที่ 2 การแข่งขันหุ่นยนต์ Maejo Phrae Robot Challenge",
            issuer: "มหาวิทยาลัยแม่โจ้-แพร่ เฉลิมพระเกียรติ",
            date: "13 สิงหาคม 2568",
            image: "./images/certificates/Maejo_Robot.png",
            thumb: "./images/certificates/thumbs/Maejo_Robot.jpg",
            link: null
        },
        {
            title: "รางวัลความคิดสร้างสรรค์ดีเด่น โครงงาน Thailand STEM Project Competition 2025",
            issuer: "โรงเรียนชลประทานวิทยา",
            date: "6 กันยายน 2568",
            image: "./images/certificates/STEM_Project.png",
            thumb: "./images/certificates/thumbs/STEM_Project.jpg",
            link: null
        },
        {
            title: "รางวัลเหรียญทองแดง การแข่งขันคณิตศาสตร์ประเทศไทย ครั้งที่ 13 (TMC)",
            issuer: "Thailand Mathematics Contest",
            date: "ปีการศึกษา 2567",
            image: "./images/certificates/TMC_13.png",
            thumb: "./images/certificates/thumbs/TMC_13.jpg",
            link: null
        },
        {
            title: "การสอบวัดความสามารถทางวิทยาศาสตร์ (เหรียญทองอันดับ 4)",
            issuer: "พิริยาลัยจังหวัดแพร่",
            date: "18 มกราคม 2569",
            image: "./images/certificates/Science_Piriyalai_69.png",
            thumb: "./images/certificates/thumbs/Science_Piriyalai_69.jpg",
            link: "https://kruchitchai.com/cert/export.php?module=certificate-export&type=pdf&id=94944"
        },
        {
            title: "ผู้ทำคะแนนสูงสุดรายวิชา การโปรแกรม 3 และวิทยาการคำนวณ 2",
            issuer: "พิริยาลัยจังหวัดแพร่",
            date: "29 พฤศจิกายน 2567",
            image: "./images/certificates/Top_Score_CS.png",
            thumb: "./images/certificates/thumbs/Top_Score_CS.jpg",
            link: null
        }
    ],

    youtube: {
        channelName: "พัฒนพล สุธรรม",
        subscribers: "562+",
        desc: "แชร์ความรู้เรื่องการเขียน Program และเรื่องอุปกรณ์ไฟฟ้าต่างๆ",
        avatar: "./images/profiles/profile.jpg",
        channelUrl: "https://www.youtube.com/@PhatthanaphonSutham",
        featuredVideo: {
            title: "อัปเกรด CPU โน้ตบุ๊กเก่า 11 ปี!! ด้วยเงินแค่ 400 บาท! ตัดต่อลื่นเฉย!!",
            thumbnail: "https://img.youtube.com/vi/CuVgnzvDXmE/maxresdefault.jpg",
            url: "https://youtu.be/CuVgnzvDXmE?si=QIHSHdoSEGU0Mdd8"
        }
    },

    socials: [
        { name: "GitHub", url: "https://github.com/singto1597/", icon: "github" },
        { name: "Instagram", url: "https://www.instagram.com/xphat.z/", icon: "instagram" },
        { name: "Email", url: "mailto:singto1597@gmail.com", icon: "mail" }
    ]
};

// ป้ายสถานะของการ์ดโปรเจค
const STATUS_META = {
    live:     { text: "ใช้งานจริง",    dot: "bg-emerald-400", text_cls: "text-emerald-400" },
    wip:      { text: "กำลังพัฒนา",    dot: "bg-amber-400",   text_cls: "text-amber-400" },
    archived: { text: "โปรเจกต์เก่า",  dot: "bg-slate-400",   text_cls: "text-slate-400" }
};

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderProjects();
    renderStack();
    renderJourney();
    renderCertificates();
    renderYoutube();
    renderSocials();
    document.getElementById('year').innerText = new Date().getFullYear() + 543;

    initNav();
    initModal();

    lucide.createIcons();
});

function renderProfile() {
    document.getElementById('my-name').innerText = data.profile.name;
    document.getElementById('profile-img').src = data.profile.avatar;
    document.getElementById('profile-img').alt = data.profile.name;
}

function renderStack() {
    const container = document.getElementById('stack-container');
    container.innerHTML = data.stack.map(item => `
        <div class="bg-cardDark p-6 rounded-xl border border-slate-700/50 hover:border-accent transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4 text-accent">
                <i data-lucide="${item.icon}"></i>
                <h3 class="font-bold text-white text-lg">${item.title}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
                ${item.skills.map(skill => `
                    <span class="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded border border-slate-700 font-mono">
                        ${skill}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// เติมช่องสุดท้ายของ grid "โปรเจกต์ช่วงเริ่มต้น" (5 ใบใน grid 3 คอลัมน์เหลือรู 1 ช่อง)
// นี่คือที่เดียวที่ลิงก์ไป GitHub ควรอยู่ — เป็นทางออก ไม่ใช่ CTA หลักของการ์ดทุกใบ
const GITHUB_TILE = `
    <a href="https://github.com/singto1597" target="_blank" rel="noopener"
       class="group rounded-xl border border-dashed border-slate-700 hover:border-accent/60 hover:bg-cardDark/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[220px] p-6 text-center">
        <i data-lucide="boxes" class="w-8 h-8 text-slate-600 group-hover:text-accent transition-colors duration-300"></i>
        <div>
            <p class="text-slate-300 group-hover:text-white font-medium transition-colors">ดูโปรเจกต์ทั้งหมด</p>
            <p class="text-textMuted text-xs font-mono mt-1">github.com/singto1597</p>
        </div>
    </a>
`;

function renderProjects() {
    const featured = data.projects.filter(p => p.featured);
    const others = data.projects.filter(p => !p.featured);

    document.getElementById('projects-featured').innerHTML = featured.map(projectCard).join('');
    document.getElementById('projects-other').innerHTML =
        others.map(projectCardSmall).join('') + GITHUB_TILE;
}

// การ์ดผลงานหลัก — แนวนอน รูปใหญ่ทางซ้าย ปุ่มหลักคือ "เปิดใช้งานจริง"
function projectCard(p) {
    const status = STATUS_META[p.status] || STATUS_META.archived;
    const imageAction = p.live || p.github;

    return `
        <article class="group bg-cardDark rounded-2xl overflow-hidden border border-slate-700/50 hover:border-accent/50 transition-all duration-300 grid md:grid-cols-5">

            <!-- รูป: พื้นที่คลิกใหญ่สุด ชี้ไปที่ตัวระบบจริง -->
            <a href="${imageAction}" target="_blank" rel="noopener"
               class="relative md:col-span-3 block aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden bg-slate-800">
                <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" decoding="async"
                     onerror="imageFallback(this, '${p.imageFallback || ''}')"
                     class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100">
                <span class="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-bgDark/85 backdrop-blur border border-slate-700 ${status.text_cls}">
                    <span class="w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse"></span>
                    ${status.text}
                </span>
            </a>

            <!-- เนื้อหา -->
            <div class="md:col-span-2 p-6 flex flex-col">
                <div class="flex items-baseline justify-between gap-3 mb-1">
                    <h3 class="text-2xl font-bold text-white">${p.name}</h3>
                    <span class="font-mono text-xs text-slate-500 shrink-0">${p.year}</span>
                </div>
                <p class="text-accent text-sm font-medium mb-3">${p.subtitle}</p>
                <p class="text-textMuted text-sm leading-relaxed mb-4">${p.desc}</p>

                <ul class="space-y-2 mb-5">
                    ${p.highlights.map(h => `
                        <li class="flex gap-2 text-sm text-slate-300 leading-relaxed">
                            <i data-lucide="check" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                            <span>${h}</span>
                        </li>
                    `).join('')}
                </ul>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.tags.map(tag => `<span class="text-xs text-accent bg-cyan-900/20 px-2 py-1 rounded font-mono">${tag}</span>`).join('')}
                </div>

                <p class="text-xs text-slate-500 mb-5">${p.role}</p>

                <div class="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-slate-700/50">
                    ${p.live ? `
                        <a href="${p.live}" target="_blank" rel="noopener"
                           class="px-4 py-2 bg-accent text-bgDark text-sm font-bold rounded-lg hover:bg-accentHover transition inline-flex items-center gap-2">
                            <i data-lucide="external-link" class="w-4 h-4"></i> เปิดใช้งานจริง
                        </a>
                    ` : ''}
                    <a href="${p.github}" target="_blank" rel="noopener"
                       class="text-sm text-textMuted hover:text-white transition inline-flex items-center gap-2">
                        <i data-lucide="code" class="w-4 h-4"></i> ดูโค้ด
                    </a>
                    ${p.diagram ? `
                        <button type="button" onclick="openImage('${p.diagram}')"
                                class="text-sm text-textMuted hover:text-accent transition inline-flex items-center gap-1.5">
                            <i data-lucide="workflow" class="w-4 h-4"></i> แผนผังระบบ
                        </button>
                    ` : ''}
                </div>
            </div>
        </article>
    `;
}

// การ์ดโปรเจกต์ช่วงเริ่มต้น — แนวตั้งกะทัดรัด ไม่มีรูปก็ใช้แถบไอคอนแทน
function projectCardSmall(p) {
    const status = STATUS_META[p.status] || STATUS_META.archived;

    return `
        <article class="group bg-cardDark rounded-xl overflow-hidden border border-slate-700/50 hover:border-accent/40 transition-all duration-300 flex flex-col">
            ${p.image ? `
                <div class="h-32 overflow-hidden bg-slate-800">
                    <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" decoding="async"
                         class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                </div>
            ` : `
                <div class="h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50">
                    <i data-lucide="${status === STATUS_META.live ? 'globe' : 'folder'}" class="w-10 h-10 text-slate-600 group-hover:text-accent transition-colors duration-300"></i>
                </div>
            `}

            <div class="p-4 flex-1 flex flex-col">
                <div class="flex items-baseline justify-between gap-2 mb-1">
                    <h3 class="font-bold text-white group-hover:text-accent transition-colors">${p.name}</h3>
                    <span class="font-mono text-[11px] text-slate-500 shrink-0">${p.year}</span>
                </div>
                <p class="text-textMuted text-xs leading-relaxed flex-1 mb-3">${p.desc}</p>
                <div class="flex flex-wrap gap-1.5 mb-3">
                    ${p.tags.map(tag => `<span class="text-[11px] text-accent bg-cyan-900/20 px-1.5 py-0.5 rounded">${tag}</span>`).join('')}
                </div>
                <div class="mt-auto pt-3 border-t border-slate-700/50 flex items-center gap-4">
                    <a href="${p.github}" target="_blank" rel="noopener"
                       class="text-xs text-textMuted hover:text-accent transition inline-flex items-center gap-1.5">
                        <i data-lucide="code" class="w-3.5 h-3.5"></i> ดูโค้ด
                    </a>
                    ${p.live ? `
                        <a href="${p.live}" target="_blank" rel="noopener"
                           class="text-xs text-accent hover:text-accentHover transition inline-flex items-center gap-1.5 ml-auto">
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i> เข้าใช้งาน
                        </a>
                    ` : ''}
                </div>
            </div>
        </article>
    `;
}

// ลำดับ fallback ของรูป: thumb → รูปเต็ม → placeholder (กันการ์ดรูปพัง)
function imageFallback(el, fallback) {
    const step = el.dataset.fbStep;

    if (!step && fallback) {
        el.dataset.fbStep = "1";
        el.src = fallback;
        return;
    }
    if (step === "1" && el.src.indexOf('placeholder.png') === -1) {
        el.dataset.fbStep = "2";
        el.src = "./images/certificates/placeholder.png";
        el.classList.add('opacity-30');
        return;
    }
    // หมดทางแล้ว — ซ่อนรูปไปเลยดีกว่าโชว์ไอคอนรูปแตก
    el.style.visibility = 'hidden';
}

function renderCertificates() {
    const container = document.getElementById('certs-container');
    if (!container) return;

    container.innerHTML = data.certificates.map((cert, i) => `
        <div class="group relative bg-cardDark rounded-xl overflow-hidden border border-slate-700/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">

            <button type="button" onclick="openImage('${cert.image}')"
                    class="block w-full aspect-[4/3] overflow-hidden bg-slate-800 relative cursor-zoom-in text-left">
                <img src="${cert.thumb || cert.image}" alt="${cert.title}" loading="lazy" decoding="async"
                     onerror="imageFallback(this, '${cert.image}')"
                     class="w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100">

                <span class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[2px]">
                    <span class="flex items-center gap-2 text-white font-medium bg-black/50 px-4 py-2 rounded-full border border-white/20">
                        <i data-lucide="eye" class="w-5 h-5 text-accent"></i> ดูรูปใหญ่
                    </span>
                </span>
            </button>

            <div class="p-4 border-t border-slate-700 bg-slate-900/50 flex-1 flex flex-col">
                <h3 class="font-bold text-white text-sm mb-2 leading-snug">${cert.title}</h3>
                <div class="flex justify-between items-start gap-2 mt-auto text-xs text-textMuted">
                    <span class="flex items-center gap-1"><i data-lucide="award" class="w-3 h-3 shrink-0"></i> ${cert.issuer}</span>
                    <span class="bg-slate-800 px-2 py-0.5 rounded text-slate-400 border border-slate-700 shrink-0">${cert.date}</span>
                </div>
                ${cert.link && cert.link !== '#' ? `
                    <a href="${cert.link}" target="_blank" rel="noopener"
                       class="mt-3 text-xs text-accent hover:text-accentHover transition inline-flex items-center gap-1.5">
                        <i data-lucide="external-link" class="w-3 h-3"></i> ดูต้นฉบับ
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// lucide ตัด brand icon (github, instagram) ออกตั้งแต่เวอร์ชัน 1.x
// จึงต้องฝัง SVG ของแบรนด์เอง — path จาก Simple Icons (CC0 1.0)
// ใช้ currentColor เพื่อให้เปลี่ยนสีตอน hover ได้เหมือนไอคอน lucide
const SOCIAL_SVG = {
    github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
};

function renderSocials() {
    const container = document.getElementById('socials-container');
    container.innerHTML = data.socials.map(social => {
        const isMail = social.url.startsWith('mailto:');
        return `
            <a href="${social.url}" ${isMail ? '' : 'target="_blank" rel="noopener"'}
               title="${social.name}" aria-label="${social.name}"
               class="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-accent hover:text-bgDark transition-all duration-300 transform hover:-translate-y-1">
                ${SOCIAL_SVG[social.icon]
                    ? `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true"><path d="${SOCIAL_SVG[social.icon]}"/></svg>`
                    : `<i data-lucide="${social.icon}" class="w-6 h-6"></i>`}
            </a>
        `;
    }).join('');
}

function renderYoutube() {
    const container = document.getElementById('youtube-container');
    if (!container) return;

    const yt = data.youtube;

    container.innerHTML = `
        <div class="bg-[#0f0f0f] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <!-- ฝั่งซ้าย: ข้อมูลช่อง -->
            <div class="p-8 md:w-1/3 flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-[#0f0f0f] border-b md:border-b-0 md:border-r border-slate-800">
                <div class="relative mb-4">
                    <div class="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20"></div>
                    <img src="${yt.avatar}" alt="${yt.channelName}" loading="lazy" decoding="async" class="w-24 h-24 rounded-full border-2 border-red-600 relative z-10 object-cover">
                </div>
                <h3 class="text-xl font-bold text-white mb-1">${yt.channelName}</h3>
                <p class="text-red-500 text-sm font-medium mb-4">${yt.subscribers} Subscribers</p>
                <p class="text-textMuted text-sm mb-6 leading-relaxed px-4">
                    ${yt.desc}
                </p>
                <a href="${yt.channelUrl}" target="_blank" rel="noopener" class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-red-900/20">
                    <i data-lucide="play" class="w-5 h-5"></i>
                    Subscribe
                </a>
            </div>

            <!-- ฝั่งขวา: คลิปแนะนำ -->
            <div class="p-6 md:w-2/3 flex flex-col justify-center relative group">
                <h4 class="text-slate-400 text-sm mb-4 uppercase tracking-wider font-mono">Latest Video</h4>
                <a href="${yt.featuredVideo.url}" target="_blank" rel="noopener" class="block relative rounded-xl overflow-hidden aspect-video border border-slate-700 shadow-xl group-hover:shadow-red-900/10 transition-all">
                    <img src="${yt.featuredVideo.thumbnail}" alt="${yt.featuredVideo.title}" loading="lazy" decoding="async" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                    <!-- ปุ่ม Play ตรงกลาง -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition duration-300 shadow-xl">
                            <i data-lucide="play" class="w-8 h-8 text-white fill-current ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <p class="text-white font-bold text-lg truncate">${yt.featuredVideo.title}</p>
                    </div>
                </a>
            </div>
        </div>
    `;
}

function renderJourney() {
    const container = document.getElementById('journey-container');
    if (!container) return;

    container.innerHTML = data.journey.map(item => `
        <div class="bg-cardDark p-6 rounded-xl border border-slate-700/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col gap-4 group">
            <div class="flex items-center gap-4">
                <div class="p-3 bg-slate-800 rounded-lg text-accent group-hover:bg-accent group-hover:text-bgDark transition-colors shrink-0">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="font-bold text-white text-lg group-hover:text-accent transition-colors">
                    ${item.question}
                </h3>
            </div>
            <p class="text-textMuted text-sm leading-relaxed md:pl-[3.25rem]">
                "${item.answer}"
            </p>
        </div>
    `).join('');
}

function openImage(src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');

    img.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('button');
    if (closeBtn) closeBtn.focus();

    lucide.createIcons();
}

function closeImage() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // คืนการเลื่อนหน้า (เฉพาะเมื่อไม่มี modal อื่นเปิดอยู่)
    document.body.style.overflow = '';

    document.getElementById('modal-img').src = "";
}

function initModal() {
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const modal = document.getElementById('image-modal');
        if (modal && !modal.classList.contains('hidden')) closeImage();
    });
}

function initNav() {
    const btn = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const setOpen = (isOpen) => {
        menu.classList.toggle('hidden', !isOpen);

        // ต้อง query ใหม่ทุกครั้ง ห้าม cache ไว้ตอน init: lucide.createIcons()
        // "แทนที่" <i data-lucide> ด้วย <svg> ตัวใหม่ ดังนั้น reference ที่จำไว้
        // จะกลายเป็น node ที่หลุดออกจาก DOM ไปแล้ว — toggle class แล้วไม่มีผล
        const iconOpen = document.getElementById('nav-icon-open');
        const iconClose = document.getElementById('nav-icon-close');
        if (iconOpen) iconOpen.classList.toggle('hidden', isOpen);
        if (iconClose) iconClose.classList.toggle('hidden', !isOpen);

        btn.setAttribute('aria-expanded', String(isOpen));
        btn.setAttribute('aria-label', isOpen ? 'ปิดเมนู' : 'เปิดเมนู');
    };

    btn.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));

    // ปิดเมนูเมื่อคลิก link ไม่งั้นหน้าเลื่อนแต่เมนูยังบังอยู่
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });

    // ปิดเมนูถ้าขยายหน้าต่างกลับไปเดสก์ท็อป
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) setOpen(false);
    });
}
