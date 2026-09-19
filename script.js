const data = {
    profile: {
        name: "พัฒนพล (สิงโต) สุธรรม",
        avatar: "./images/profiles/profile.jpg"
    },

    stack: [
        { cat: "หน้าเว็บ",   items: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Pinia", "JavaScript", "HTML", "CSS"] },
        { cat: "หลังบ้าน",    items: ["FastAPI", "Python", "Flask", "PostgreSQL", "Redis", "SQL", "PHP"] },
        { cat: "เซิร์ฟเวอร์", items: ["Docker Swarm", "Traefik", "Nginx", "Linux", "Proxmox", "Git", "Cloudflare Tunnels"] },
        { cat: "ฮาร์ดแวร์",   items: ["C/C++", "ESP32", "Arduino", "Raspberry Pi", "Electronics", "Networks"] }
    ],

    journey: [
        {
            question: "จุดเริ่มต้น? ทำไมถึงมาเขียนโค้ด",
            answer: "ผมเริ่มจาก <span class='hl'>ภาษา C</span> ตอน ม.2 เพราะเห็นว่าจะได้เรียน เลยไปศึกษาล่วงหน้า เริ่มจากการถาม <b>AI กับ YouTube (อาจารย์ KongRaksiam)</b> ไม่มีครู ไม่มีใครสอน ทำไปเรื่อย ๆ เพราะชอบครับ พอทำโปรแกรมเล็ก ๆ ได้ ก็ขยับไป <span class='hl'>C++</span> แล้วรู้สึกอยากทำระบบที่ใช้ได้จริง แต่ถ้าเขียน C++ คงตายแน่ ๆ เลยมาต่อที่ <span class='hl'>Python</span> และ <span class='hl'>SQL</span> จนถึงทุกวันนี้ครับ"
        },
        {
            question: "แบ่งเวลาเรียนกับเขียนโค้ดยังไง?",
            answer: "ผมยึดหลัก <b>“เรียนคือหน้าที่ โค้ดคือความชอบ”</b> ช่วงสอบจะโฟกัสเรียนเต็มที่ พอเข้าใจบทเรียนแล้วก็หาอะไรทำ ช่วงว่างหรือวันหยุดชอบหาอะไรเล็ก ๆ น้อย ๆ ทำ เพราะไอเดียมันมาเรื่อย ๆ ครับ <b>การเขียนโค้ดช่วยฝึก Logic ซึ่งส่งผลดีต่อวิชาคำนวณด้วย</b>"
        },
        {
            question: "คำแนะนำสำหรับคนอยากเริ่ม?",
            answer: "อย่ากลัว Error เพราะ <b>Error คือครูที่ดีที่สุด</b> แนะนำเริ่มจากภาษาที่อ่านง่ายอย่าง <span class='hl'>Python</span> แล้วลองทำ <b>โปรเจกต์เล็ก ๆ ที่ใช้งานได้จริง</b> อย่างโปรแกรมคำนวณเงินหรือ To-do list <b>ยิ่งเจอบัค ยิ่งปวดหัว ยิ่งสนุกครับ</b>"
        },
        {
            question: "เป้าหมายในอนาคต",
            answer: "จริง ๆ ผมถนัดคอมครับ แต่รู้สึกว่าถ้าไปสายคอมเลย โอกาสไปเรียนรู้สายอื่นจะยาก ผมเลยเลือกไปทาง <span class='hl'>ไฟฟ้า</span> เป็นสายหลัก เพราะอยากมีพื้นฐานให้แน่นก่อน แล้วค่อยไปเก็บอย่างอื่น <b>คอมและโค้ดเราศึกษาเมื่อไหร่ก็ได้ แต่ไฟฟ้าเอาไปต่อยอดร่วมกับคอมพิวเตอร์ได้กว้างกว่าครับ</b>"
        }
    ],

    projects: [
        // ---------- ระบบที่ใช้งานจริง (โพสต์เต็ม) ----------
        {
            id: "syncroom",
            name: "SYNCROOM",
            subtitle: "ระบบบริหารจัดการห้องเรียน",
            year: "2569",
            status: "live",
            scale: "lead",
            story: [
                "ห้อง ม.4/1 เก็บเงินกันทุกเดือน แต่ไม่เคยมีใครรู้ชัดว่าเหลือเท่าไหร่ ใครยังไม่จ่าย และเอาไปใช้อะไรไปบ้าง — ทุกอย่างอยู่ในสมุดเล่มเดียวที่ผลัดกันถือ",
                "ผมเริ่มจากบอทดิสคอร์ดตัวเล็ก ๆ ที่คอยเตือนการบ้านในห้อง พอใช้ไปสักพักก็เห็นว่ามีอีกหลายอย่างที่ควรถูกเก็บเป็นระบบ ทั้งข้อมูลเพื่อน ตารางเรียน งานกิจกรรม และที่หนักที่สุดคือเรื่องเงินของห้อง ก็เลยค่อย ๆ ย้ายมาเป็นเว็บเป็นหลัก ใช้ดิสคอร์ดเป็นตัวช่วยแจ้งเตือนแทน",
                "ส่วนที่ผมภูมิใจที่สุดคือระบบการเงิน เขียนฟังก์ชันไว้เยอะมากจนมันเสถียรพอจะตอบได้เสมอว่าใครจ่ายแล้ว ใครค้าง และเหลือจริงเท่าไหร่ — เรื่องที่เคยวุ่นวายที่สุดของห้อง ตอนนี้กลายเป็นเรื่องที่เรียบร้อยที่สุด"
            ],
            live: "https://class.singto1597.xyz",
            github: "https://github.com/singto1597/classroom-management",
            image: "./images/projects/syncroom-dashboard.png",
            imageAlt: "หน้าจอภาพรวมข้อมูลของระบบ SYNCROOM"
        },
        {
            id: "pirivoice",
            name: "PIRIvoice",
            subtitle: "ระบบรับแจ้งเรื่องสำหรับสภานักเรียน",
            year: "2569",
            status: "live",
            scale: "lead",
            story: [
                "สภานักเรียนอยากรับฟังความคิดเห็นจากนักเรียนให้เป็นระบบ ไม่ใช่รับเรื่องแล้วหายไป ครูที่ปรึกษาสภาเลยติดต่อมาถามว่าทำให้ได้ไหม",
                "โจทย์ที่ยากไม่ใช่การรับเรื่อง แต่คือการทำให้เรื่องหนึ่ง ๆ ถูกส่งต่อไปถึงคนที่แก้ได้จริง และมีร่องรอยว่าตอนนี้อยู่ขั้นไหนแล้ว ผมออกแบบให้เรื่องไต่จากหัวหน้าห้อง ขึ้นไปประธานระดับ แล้วไปถึงสภานักเรียน พร้อมตัวนับเวลาว่าขั้นไหนต้องตอบภายในกี่วัน ถ้าเงียบเกินกำหนด ระบบจะดันขึ้นขั้นถัดไปให้เอง",
                "ตอนนี้มันเปิดใช้งานจริงอยู่ที่ pirivoice.com และมีนักเรียนใช้แจ้งเรื่องเข้ามาเรื่อย ๆ"
            ],
            live: "https://www.pirivoice.com",
            github: "https://github.com/singto1597/prsc_portal",
            image: "./images/projects/pirivoice-home.png",
            imageAlt: "หน้าแรกของ PIRIvoice แสดงสถิติการแจ้งเรื่อง"
        },

        // ---------- ช่วงเริ่มต้น (โพสต์ย่อ) ----------
        {
            id: "robot",
            name: "หุ่นยนต์แข่งขัน",
            subtitle: "หุ่นยนต์ 3 ประเภท",
            year: "2568",
            status: "archived",
            scale: "minor",
            story: [
                "ผมเขียนโค้ดควบคุมและประกอบตัวหุ่นเอง ลงแข่ง 3 ประเภท — หุ่นวิ่งเร็ว หุ่นไต่ระดับ และ Maejo Phrae Robot Challenge เป็นโปรเจกต์แรก ๆ ที่ได้จับฮาร์ดแวร์จริง และได้เห็นว่าโค้ดที่เขียนไปขยับของจริงได้"
            ],
            live: null,
            github: "https://github.com/singto1597/piriyalai-robot",
            image: "./images/projects/robot.jpg",
            imageAlt: "หุ่นยนต์ที่ใช้ในการแข่งขัน"
        },
        {
            id: "shrimp-iot",
            name: "ระบบเลี้ยงกุ้งฝอย",
            subtitle: "โครงงาน STEM",
            year: "2568",
            status: "archived",
            scale: "minor",
            story: [
                "โครงงาน STEM ตอน ม.3 — ทำระบบเลี้ยงกุ้งฝอยอัตโนมัติ ให้อาหารตามเวลาและวัดค่าสภาพน้ำผ่านหน้าเว็บ เป็นครั้งแรกที่ได้ต่อเซนเซอร์จริง แล้วเห็นข้อมูลไหลเข้ามาสด ๆ"
            ],
            live: null,
            github: "https://github.com/singto1597/Shrimp-farming-system_IOT",
            image: "./images/projects/shrimp-iot.jpg",
            imageAlt: "ตู้เลี้ยงกุ้งฝอยที่ต่อกับอุปกรณ์อิเล็กทรอนิกส์"
        },
        {
            id: "school-pr",
            name: "ระบบประชาสัมพันธ์โรงเรียน",
            subtitle: "แจ้งข่าวถึงนักเรียนโดยตรง",
            year: "2568",
            status: "archived",
            scale: "minor",
            story: [
                "อาจารย์อยากให้ประกาศของโรงเรียนถึงนักเรียนเร็วขึ้น ปกตินักเรียนต้องรอเสียงตามสาย ซึ่งพลาดง่ายถ้าเผลอ ผมเลยทำระบบที่ส่งตารางเรียนกับประกาศตรงไปถึงมือถือ"
            ],
            live: null,
            github: "https://github.com/singto1597/school-public-relations",
            image: null,
            imageAlt: ""
        },
        {
            id: "money-management",
            name: "Money Management",
            subtitle: "โปรแกรมบันทึกรายรับรายจ่าย",
            year: "2568",
            status: "archived",
            scale: "minor",
            story: [
                "โปรแกรมบันทึกรายรับรายจ่ายที่เขียนไว้ใช้เอง ไม่ได้ตั้งใจให้ใครใช้ แต่มันเป็นตัวที่ทำให้ผมเข้าใจเรื่องการเก็บข้อมูลและการเรียกกลับมาใช้จริง ๆ"
            ],
            live: null,
            github: "https://github.com/singto1597/Money-Management",
            image: null,
            imageAlt: ""
        },
        {
            id: "synclight",
            name: "SyncLight บน Linux",
            subtitle: "ตัวสั่งการไฟที่เขียนเอง",
            year: "2568",
            status: "archived",
            scale: "minor",
            story: [
                "ไฟ SyncLight ของ Robobloq ไม่มีซอฟต์แวร์รองรับบน Linux เลย ผมเลยลองแกะดูว่ามันคุยกันยังไง แล้วเขียนตัวสั่งการขึ้นมาเอง"
            ],
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
        desc: "แชร์ความรู้เรื่องการเขียนโปรแกรมและเรื่องอุปกรณ์ไฟฟ้าต่าง ๆ",
        avatar: "./images/profiles/profile.jpg",
        channelUrl: "https://www.youtube.com/@PhatthanaphonSutham",
        featuredVideo: {
            title: "อัปเกรด CPU โน้ตบุ๊กเก่า 11 ปี!! ด้วยเงินแค่ 400 บาท! ตัดต่อลื่นเฉย!!",
            videoId: "CuVgnzvDXmE",
            url: "https://youtu.be/CuVgnzvDXmE?si=QIHSHdoSEGU0Mdd8"
        }
    },

    socials: [
        { name: "GitHub",    url: "https://github.com/singto1597/", external: true },
        { name: "Instagram", url: "https://www.instagram.com/xphat.z/", external: true },
        { name: "อีเมล",      url: "mailto:singto1597@gmail.com", external: false }
    ]
};

// สถานะของโปรเจกต์ — "โปรเจกต์เก่า" ไม่ต้องมี cls เพราะใช้จุดสีเทาเป็นค่าตั้งต้นอยู่แล้ว
const STATUS_META = {
    live: { text: "ใช้งานจริง", cls: "status-live" },
    wip:  { text: "กำลังพัฒนา", cls: "status-wip" }
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
});

function renderProfile() {
    document.getElementById('my-name').innerText = data.profile.name;
    const img = document.getElementById('profile-img');
    img.src = data.profile.avatar;
    img.alt = data.profile.name;
}

/* ---------- ผลงาน: ฟีดแบบโพสต์ ---------- */

function renderProjects() {
    const lead = data.projects.filter(p => p.scale === 'lead');
    const minor = data.projects.filter(p => p.scale === 'minor');

    document.getElementById('projects-feed').innerHTML = [
        ...lead.map(leadPost),
        `<p class="feed-label">ช่วงเริ่มต้น</p>`,
        ...minor.map(minorPost)
    ].join('');
}

function storyHtml(story) {
    return (Array.isArray(story) ? story : [story]).map(p => `<p>${p}</p>`).join('');
}

// โพสต์เต็ม — เรื่องเล่า + รูปใหญ่ + แถวลิงก์
function leadPost(p) {
    const status = STATUS_META[p.status];

    return `
        <article class="post">
            <div class="post-head">
                <h3 class="post-name">${p.name}</h3>
                <span class="post-year">${p.year}</span>
            </div>

            <p class="post-sub">
                <span>${p.subtitle}</span>
                ${status ? `<span class="status ${status.cls}">${status.text}</span>` : ''}
            </p>

            <div class="post-story">${storyHtml(p.story)}</div>

            ${p.image ? `
                <a class="post-media" href="${p.live || p.github}" target="_blank" rel="noopener">
                    <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" decoding="async">
                </a>
            ` : ''}

            <div class="post-actions">
                ${p.live ? `<a class="primary" href="${p.live}" target="_blank" rel="noopener">เปิดใช้งานจริง ↗</a>` : ''}
                ${p.github ? `<a class="quiet" href="${p.github}" target="_blank" rel="noopener">ดูโค้ด ↗</a>` : ''}
            </div>
        </article>
    `;
}

// โพสต์ย่อ — รูปเล็กซ้าย ข้อความขวา (ไม่มีรูปก็ปล่อยข้อความเต็มความกว้าง)
function minorPost(p) {
    const status = STATUS_META[p.status];

    return `
        <article class="post post-minor${p.image ? '' : ' no-thumb'}">
            ${p.image ? `
                <div class="post-thumb">
                    <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" decoding="async">
                </div>
            ` : ''}

            <div>
                <div class="post-head">
                    <h3 class="post-name">${p.name}</h3>
                    <span class="post-year">${p.year}</span>
                </div>

                <p class="post-sub">
                    <span>${p.subtitle}</span>
                    ${status ? `<span class="status ${status.cls}">${status.text}</span>` : ''}
                </p>

                <div class="post-story">${storyHtml(p.story)}</div>

                <div class="post-actions">
                    ${p.github ? `<a class="quiet" href="${p.github}" target="_blank" rel="noopener">ดูโค้ด ↗</a>` : ''}
                    ${p.live ? `<a class="quiet" href="${p.live}" target="_blank" rel="noopener">เปิดใช้งานจริง ↗</a>` : ''}
                </div>
            </div>
        </article>
    `;
}

/* ---------- ส่วนอื่น ๆ ---------- */

function renderStack() {
    document.getElementById('stack-container').innerHTML = data.stack.map(group => `
        <div class="skill-row">
            <span class="skill-cat">${group.cat}</span>
            <span class="skill-items">${group.items.join(' · ')}</span>
        </div>
    `).join('');
}

function renderJourney() {
    document.getElementById('journey-container').innerHTML = data.journey.map(item => `
        <div class="journey-item">
            <h3 class="journey-q">${item.question}</h3>
            <p class="journey-a">${item.answer}</p>
        </div>
    `).join('');
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

// การ์ดโชว์ thumb (ไฟล์เล็ก) แต่กดแล้วเปิด "รูปต้นฉบับ" เสมอ
function renderCertificates() {
    const container = document.getElementById('certs-container');
    if (!container) return;

    container.innerHTML = data.certificates.map(cert => `
        <div class="cert">
            <button type="button" class="cert-img" onclick="openImage('${cert.image}')"
                    aria-label="ดูรูปใหญ่: ${cert.title}">
                <img src="${cert.thumb || cert.image}" alt="${cert.title}" loading="lazy" decoding="async"
                     onerror="imageFallback(this, '${cert.image}')">
            </button>

            <span class="cert-title">${cert.title}</span>
            <span class="cert-meta">${cert.issuer} · ${cert.date}</span>

            ${cert.link && cert.link !== '#' ? `
                <a class="cert-link" href="${cert.link}" target="_blank" rel="noopener">ดูต้นฉบับ ↗</a>
            ` : ''}
        </div>
    `).join('');
}

function renderYoutube() {
    const container = document.getElementById('youtube-container');
    if (!container) return;

    const yt = data.youtube;
    const id = yt.featuredVideo.videoId;

    container.innerHTML = `
        <div class="yt">
            <img class="yt-avatar" src="${yt.avatar}" alt="${yt.channelName}" loading="lazy" decoding="async">
            <div>
                <p class="yt-name">${yt.channelName}</p>
                <p class="yt-sub">${yt.subscribers} ผู้ติดตาม · ${yt.desc}</p>
            </div>
        </div>

        <a class="yt-video" href="${yt.featuredVideo.url}" target="_blank" rel="noopener">
            <img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg"
                 alt="${yt.featuredVideo.title}" loading="lazy" decoding="async"
                 onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${id}/hqdefault.jpg'">
        </a>

        <p class="yt-caption">
            <a href="${yt.featuredVideo.url}" target="_blank" rel="noopener">${yt.featuredVideo.title}</a>
             · <a href="${yt.channelUrl}" target="_blank" rel="noopener">ดูช่องทั้งหมด ↗</a>
        </p>
    `;
}

function renderSocials() {
    document.getElementById('socials-container').innerHTML = data.socials.map(s => `
        <a href="${s.url}" ${s.external ? 'target="_blank" rel="noopener"' : ''}>${s.name}${s.external ? ' ↗' : ''}</a>
    `).join('');
}

/* ---------- lightbox ---------- */

function openImage(src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');

    img.src = src;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('button');
    if (closeBtn) closeBtn.focus();
}

function closeImage() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('is-open');

    // คืนการเลื่อนหน้า (เฉพาะเมื่อไม่มี modal อื่นเปิดอยู่)
    document.body.style.overflow = '';

    // removeAttribute ไม่ใช่ src = "" — ค่าว่างทำให้เบราว์เซอร์ยิง request ไปที่ตัวหน้าเว็บเอง
    document.getElementById('modal-img').removeAttribute('src');
}

function initModal() {
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const modal = document.getElementById('image-modal');
        if (modal && modal.classList.contains('is-open')) closeImage();
    });
}

/* ---------- เมนู ---------- */

function initNav() {
    const btn = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('nav-icon-open');
    const iconClose = document.getElementById('nav-icon-close');
    if (!btn || !menu) return;

    // ต้องใช้ setAttribute/removeAttribute ห้ามใช้ el.hidden = true
    // เพราะ "hidden" เป็น property ของ HTMLElement แต่ไอคอนเป็น <svg> ซึ่งเป็น SVGElement
    // การเขียน svg.hidden = true จึงไม่ได้แก้ attribute จริง แค่สร้าง property ลับบนอ็อบเจ็กต์
    // แล้วอ่านค่ากลับมาได้ตรงกันเองทั้งที่ CSS ไม่เห็น — บั๊กที่หาสาเหตุยากมาก
    const show = (el, visible) => {
        if (!el) return;
        if (visible) el.removeAttribute('hidden');
        else el.setAttribute('hidden', '');
    };

    const setOpen = (isOpen) => {
        show(menu, isOpen);
        show(iconOpen, !isOpen);
        show(iconClose, isOpen);

        btn.setAttribute('aria-expanded', String(isOpen));
        btn.setAttribute('aria-label', isOpen ? 'ปิดเมนู' : 'เปิดเมนู');
    };

    // อ่านด้วย hasAttribute ไม่ใช่ .hidden เพื่อให้ใช้ได้กับทุกชนิด element
    btn.addEventListener('click', () => setOpen(menu.hasAttribute('hidden')));

    // ปิดเมนูเมื่อคลิกลิงก์ ไม่งั้นหน้าเลื่อนแต่เมนูยังบังอยู่
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });

    // ปิดเมนูถ้าขยายหน้าต่างกลับไปเดสก์ท็อป
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) setOpen(false);
    });
}
