const data = {
    profile: {
        name: "พัฒนพล สุธรรม",
        avatar: "./images/profiles/profile.jpg"
    },
    stack: [
        { 
            title: "Languages", 
            icon: "code-2", 
            skills: ["C | C++", "Python", "Html", "CSS", "JavaScript", "SQL"] 
        },
        { 
            title: "Backend Frameworks", 
            icon: "server", 
            skills: ["Flask"] 
        },
        { 
            title: "DevOps & Tools", 
            icon: "container", 
            skills: ["Docker", "Linux", "Git", "Nginx"] 
        }
    ],
    journey: [
        {
            question: "จุดเริ่มต้น? ทำไมถึงมาเขียนโค้ด",
            answer: "ผมเริ่มจาก <span class='text-accent font-bold'>ภาษา C</span> เลยครับ ตอนนั้นเห็นว่า ม.2 จะได้เรียนก็เลยไปศึกษาดูก่อน เริ่มจากการถาม <b class='text-white'>AI และ Youtube (อาจารย์ KongRaksiam)</b> ไม่มีครู ไม่มีใครสอน <b class='text-white'>ทำไปเรื่อยๆ เพราะชอบครับ</b> พอทำโปรแกรมเล็กๆ ได้ มันเริ่มรู้สึกว่าแค่อย่างเดียวไม่อาจจะไม่พอ ก็เลยเริ่มขยับไป <span class='text-accent'>C++</span> พอไป C++ แล้วก็รู้สึกอยากทำระบบที่ใช้ได้จริงๆ แต่ถ้าใช้ C++ เขียนน่าจะตายแน่ๆ เลยไปต่อที่ <span class='text-accent'>Python</span> และ <span class='text-accent'>SQL</span> จนถึงทุกวันนี้ครับ",
            icon: "lightbulb"
        },
        {
            question: "แบ่งเวลาเรียนกับเขียนโค้ดยังไง?",
            answer: "ผมยึดหลัก <b class='text-white'>'เรียนคือหน้าที่ โค้ดคือความชอบ'</b> ช่วงสอบจะโฟกัสเรียนเต็มที่ครับ แต่พอเข้าใจบทเรียนแล้วก็จะหาอะไรทำครับ ส่วนช่วงว่างหรือวันหยุดผมจะชอบหาอะไรเล็กๆน้อยๆทำ เพราะไอเดียมันชอบมาเรื่อยๆเลยครับ ไม่ว่าจะระบบ หรืออะไรที่ทำแล้วช่วยให้ชีวิตสบายขึ้นก็ลองทำๆไป <b class='text-white'>การเขียนโค้ดช่วยฝึก Logic ซึ่งส่งผลดีต่อวิชาคำนวณด้วยครับ</b>",
            icon: "clock"
        },
        {
            question: "คำแนะนำสำหรับคนอยากเริ่ม?",
            answer: "อย่ากลัว Error เพราะ <b class='text-white'>Error คือครูที่ดีที่สุด</b> อย่ากลัวว่าจะทำไม่ได้ อย่ากลัวว่าจะยาก แค่ลองทำดู จะรู้ว่ายากจริง เอ้ย ก็ถูก พอมันยากเราก็ยิ่งอยากเรียนรู้ครับ แนะนำเริ่มจากภาษาที่อ่านง่ายอย่าง <span class='text-accent'>Python</span> แล้วลองทำ <b class='text-white'>โปรเจกต์เล็กๆ ที่ใช้งานได้จริง</b> เช่น โปรแกรมคำนวณเงิน หรือ To-do list แล้วจะสนุกครับ <b class='text-white'>ยิ่งเจอบัค ยิ่งปวดหัว ยิ่งสนุกครับ</b>",
            icon: "rocket"
        },
        {
            question: "เป้าหมายในอนาคต",
            answer: "จริงๆ ผมถนัดคอมนะครับ แต่รู้สึกว่าถ้าไปสายคอมเลย โอกาสไปเรียนรู้สายอื่นจะยาก ผมเลยเลือกไปทาง <span class='text-accent font-bold'>ไฟฟ้า</span> เป็นสายหลักครับ เพราะ ก็อยากให้มันมีความรู้พื้นก่อน แล้วเราจะไปเก็บอะไรต่อ มันก็จะง่ายแล้วครับเพราะเรามีพื้นฐานต่างๆมาเยอะมากๆแล้ว ในความคิดผมคือ <b class='text-white'>คอมและโค้ดเราศึกษาเมื่อไหร่ก็ได้ แต่ไฟฟ้าเราสามารถเอาความรู้ไปต่อยอดร่วมกับคอมพิวเตอร์ได้กว้างกว่าครับ</b>",
            icon: "target"
        }
    ],
    projects: [
        {
            title: "Money Management Program",
            desc: "โปรแกรมจัดการเงินสำหรับบุคคลธรรมดา",
            tags: ["Money", "Python", "Program"],
            links: { github: "https://github.com/singto1597/Money-Management", demo: null },
            image: "https://www.accconsultingservice.com/wp-content/uploads/2021/02/image2-1536x864.jpg"
        },
        {
            title: "SyncLight Robobloq Linux Driver 🐧",
            desc: "โปรแกรมสั่งการไฟของ Synclight บน Linux",
            tags: ["Light", "Python", "Driver"],
            links: { github: "https://github.com/singto1597/syncLight-Robobloq-Linux", demo: null },
            image: "https://quiklight.robobloq.com/images/download/main_img.png"
        },
        {
            title: "School Public Relations",
            desc: "ระบบแจ้งเตือนตารางเรียน และการประกาศของโรงเรียน",
            tags: ["System", "Python", "School"],
            links: { github: "https://github.com/singto1597/school-public-relations", demo: null },
            image: "https://wearecsg.com/wp-content/uploads/2022/11/CSG_Blog_PR_for_School_Districts_Opt1.jpg"
        },
        {
            title: "ระบบเลี้ยงกุ้งฝอย IoT",
            desc: "ระบบเลี้ยงกุ้งฝอยอัตโนมัติด้วย ESP32",
            tags: ["Shrimp farming", "C++", "School Project", "IoT", "Arduino"],
            links: { github: "https://github.com/singto1597/Shrimp-farming-system_IOT", demo: null },
            image: "https://raw.githubusercontent.com/singto1597/Shrimp-farming-system_IOT/refs/heads/main/IMG_20250130_135806.jpg"
        },
        {
            title: "Robot",
            desc: "โค้ดหุ่นยนต์แต่ละประเภทสำหรับแข่ง",
            tags: ["Robot", "C++", "School Project", "INEX", "Arduino"],
            links: { github: "https://github.com/singto1597/piriyalai-robot", demo: null },
            image: "./images/projects/robot.jpg"
        }
    ],
    certificates: [
        // --- หมวด: โอลิมปิกวิชาการและวิศวกรรมซอฟต์แวร์ (ตัวตึงสุด เอาไว้บนๆ) ---
        {
            title: "ผ่านการคัดเลือกเข้าค่าย 2 สอวน. วิชาคอมพิวเตอร์",
            issuer: "มหาวิทยาลัยเชียงใหม่",
            date: "พ.ศ. 2568", // ปรับวันที่ให้ตรงกับใบประกาศจริง
            image: "./images/certificates/POSN_2_CMU.png",
            link: "#" // ใส่ลิงก์ PDF หรือภาพ
        },
        {
            title: "โครงการศูนย์โอลิมปิกวิชาการ ค่าย 1 สอวน. วิชาคอมพิวเตอร์",
            issuer: "ยุพราชวิทยาลัย",
            date: "วันเสาร์ที่ 18 ตุลาคม พ.ศ. 2568",
            image: "./images/certificates/POSN_1.png",
            link: "https://drive.google.com/file/d/1s_Tx0DbpmSMfzl4Ilu6_s5QOp8TCPlsS/view?usp=drive_link"
        },
        
        // --- หมวด: หุ่นยนต์และนวัตกรรม IoT (โชว์ความสามารถด้านฮาร์ดแวร์และการแก้ปัญหา) ---
        {
            title: "รางวัลเหรียญทอง การแข่งขันหุ่นยนต์วิ่งเร็ว ม.1-ม.3 ระดับประเทศ",
            issuer: "รายการ 46ict ณ โรงเรียนสตรีภูเก็ตวิทยาลัย",
            date: "พ.ศ. 2568", // ปรับวันที่ให้ตรงกับใบประกาศจริง
            image: "./images/certificates/46ict_Robot.png",
            link: "#"
        },
        {
            title: "รางวัลเหรียญทอง ชนะเลิศ การแข่งขันหุ่นยนต์ระดับสูง ม.1-ม.3",
            issuer: "โครงการแข่งขันศิลปหัตถกรรมนักเรียน",
            date: "วันอังคารที่ 26 สิงหาคม พ.ศ. 2568",
            image: "./images/certificates/Robot_Craft.png",
            link: "#"
        },
        {
            title: "นำเสนอโครงงานนวัตกรรม: ระบบเลี้ยงกุ้งฝอย IoT",
            issuer: "งานเปิดบ้านวิชาการ โรงเรียนพิริยาลัยจังหวัดแพร่",
            date: "พ.ศ. 2567",
            image: "./images/certificates/IoT_Shrimp.png",
            link: "#"
        },
        {
            title: "รางวัลรองชนะเลิศอันดับที่ 2 การแข่งขันหุ่นยนต์ Maejo Phare Robot Challenge",
            issuer: "มหาวิทยาลัยแม่โจ้-แพร่ เฉลิมพระเกียรติ",
            date: "วันพุธที่ 13 สิงหาคม พ.ศ. 2568",
            image: "./images/certificates/Maejo_Robot.png",
            link: "#"
        },

        // --- หมวด: โครงงานและวิชาการระดับประเทศ (โชว์กระบวนการคิดแบบ STEM) ---
        {
            title: "รางวัลความคิดสร้างสรรค์ดีเด่น โครงงาน Thailand STEM Project Competition 2025",
            issuer: "โรงเรียนชลประทานวิทยา",
            date: "วันเสาร์ที่ 6 กันยายน พ.ศ. 2568",
            image: "./images/certificates/STEM_Project.png",
            link: "#"
        },
        {
            title: "รางวัลเหรียญทองแดง การแข่งขันคณิตศาสตร์ประเทศไทย ครั้งที่ 13 (TMC)",
            issuer: "Thailand Mathematics Contest",
            date: "ปีการศึกษา 2567",
            image: "./images/certificates/TMC_13.png",
            link: "#"
        },

        // --- หมวด: ผลการเรียนและวิชาการในโรงเรียน (ยืนยันความรู้พื้นฐานที่แน่นปึ้ก) ---
        {
            title: "การสอบวัดความสามารถทางวิทยาศาสตร์ (เหรียญทองอันดับ 4)",
            issuer: "พิริยาลัยจังหวัดแพร่",
            date: "วันอาทิตย์ที่ 18 มกราคม พ.ศ. 2569", // ปรับเป็น 18 มกราคม ตามปฏิทินจริงของปี 2569 หรือใช้วันที่ตามเกียรติบัตร
            image: "./images/certificates/Science_Piriyalai_69.png",
            link: "https://kruchitchai.com/cert/export.php?module=certificate-export&type=pdf&id=94944"
        },
        {
            title: "ผู้ทำคะแนนสูงสุดรายวิชา การโปรแกรม 3 และ วิทยาการคำนวณ 2",
            issuer: "พิริยาลัยจังหวัดแพร่",
            date: "วันศุกร์ที่ 29 พฤศจิกายน พ.ศ. 2567",
            image: "./images/certificates/Top_Score_CS.png",
            link: "#"
        }
    ],

    youtube: {
        channelName: "พัฒนพล สุธรรม",
        subscribers: "562",
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
        { name: "Email", url: "singto1597@gmail.com", icon: "mail" }
    ],

    services: [
        {
            name: "Smart Home",
            desc: "ระบบควบคุมบ้านผ่าน Home Assistant",
            icon: "home",
            url: "https://ha.singto1597.xyz",
            status: "online" 
        },
        {
            name: "Private Home Storage",
            desc: "ระบบเก็บไฟล์ส่วนตัวด้วย FileBrowser",
            icon: "hard-drive",
            url: "https://files.singto1597.xyz",
            status: "online" 
        },
        {
            name: "Contest Management System",
            desc: "ระบบแข่งเขียนโปรแกรมที่นำมารันบนเครื่อง",
            icon: "bulb",
            url: "https://cms.singto1597.xyz",
            status: "online" 
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderStack();
    renderJourney();
    renderProjects();
    renderServices();
    renderCertificates(); 
    renderYoutube();
    document.getElementById('year').innerText = new Date().getFullYear();
    renderSocials();

    lucide.createIcons();
});

function renderProfile() {
    document.getElementById('my-name').innerText = data.profile.name;
    document.getElementById('profile-img').src = data.profile.avatar;
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

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = data.projects.map(project => `
        <div class="group bg-cardDark rounded-xl overflow-hidden border border-slate-700/50 hover:border-accent/50 transition-all duration-300 flex flex-col">
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
                <img src="${project.image}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                <div class="absolute inset-0 bg-gradient-to-t from-cardDark via-transparent to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">${project.title}</h3>
                <p class="text-textMuted text-sm mb-4 leading-relaxed flex-1">${project.desc}</p>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `<span class="text-xs text-accent bg-cyan-900/20 px-2 py-1 rounded">${tag}</span>`).join('')}
                </div>
                
                <!-- Links -->
                <div class="flex items-center gap-4 mt-auto border-t border-slate-700/50 pt-4">
                    <a href="${project.links.github}" class="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                        <i data-lucide="github" class="w-4 h-4"></i> Code
                    </a>
                    ${project.links.demo ? `
                        <a href="${project.links.demo}" class="flex items-center gap-2 text-sm text-accent hover:text-accentHover transition ml-auto">
                            Live Demo <i data-lucide="external-link" class="w-4 h-4"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}
function renderServices() {
    const container = document.getElementById('services-container');
    
    // เช็คก่อนว่ามี element นี้ไหม (กัน error)
    if (!container) return;

    container.innerHTML = data.services.map(service => `
        <a href="${service.url}" target="_blank" class="group relative bg-cardDark hover:bg-slate-700 border border-slate-700 p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 flex flex-col items-center text-center gap-3">
            
            <!-- Status Dot -->
            <div class="absolute top-3 right-3 w-2 h-2 rounded-full ${service.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}"></div>
            
            <!-- Icon -->
            <div class="p-3 rounded-full bg-slate-800 group-hover:bg-accent group-hover:text-bgDark text-accent transition-colors duration-300">
                <i data-lucide="${service.icon}" class="w-6 h-6"></i>
            </div>
            
            <!-- Text -->
            <div>
                <h3 class="font-bold text-white text-sm group-hover:text-accent transition-colors">${service.name}</h3>
                <p class="text-xs text-textMuted mt-1">${service.desc}</p>
            </div>
        </a>
    `).join('');
}
function renderSocials() {
    const container = document.getElementById('socials-container');
    container.innerHTML = data.socials.map(social => `
        <a href="${social.url}" target="_blank" class="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-accent hover:text-bgDark transition-all duration-300 transform hover:-translate-y-1">
            <i data-lucide="${social.icon}" class="w-6 h-6"></i>
        </a>
    `).join('');
}
function renderCertificates() {
    const container = document.getElementById('certs-container');
    if(!container) return;

    container.innerHTML = data.certificates.map(cert => `
        <div onclick="openImage('${cert.image}')" class="cursor-pointer group relative bg-cardDark rounded-xl overflow-hidden border border-slate-700/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div class="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100">
                
                <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[2px]">
                    <div class="flex items-center gap-2 text-white font-medium bg-black/50 px-4 py-2 rounded-full border border-white/20">
                        <i data-lucide="eye" class="w-5 h-5 text-accent"></i> ดูรูปใหญ่
                    </div>
                </div>
            </div>
            
            <div class="p-4 border-t border-slate-700 bg-slate-900/50">
                <h3 class="font-bold text-white text-sm truncate" title="${cert.title}">${cert.title}</h3>
                <div class="flex justify-between items-center mt-2 text-xs text-textMuted">
                    <span class="flex items-center gap-1"><i data-lucide="award" class="w-3 h-3"></i> ${cert.issuer}</span>
                    <span class="bg-slate-800 px-2 py-0.5 rounded text-slate-400 border border-slate-700">${cert.date}</span>
                </div>
            </div>
        </div>
    `).join('');
    if (window.lucide) {
        lucide.createIcons();
    } else {
        console.warn("หา Lucide ไม่เจอ ไอคอนอาจจะไม่ขึ้น");
    }
}

function openImage(src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    
    img.src = src;
    
    modal.classList.remove('hidden');
    
    lucide.createIcons();
}

function closeImage() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    
    document.getElementById('modal-img').src = "";
}

function renderYoutube() {
    const container = document.getElementById('youtube-container');
    if(!container) return;
    
    const yt = data.youtube;

    container.innerHTML = `
        <div class="bg-[#0f0f0f] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <!-- ฝั่งซ้าย: ข้อมูลช่อง -->
            <div class="p-8 md:w-1/3 flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-[#0f0f0f] border-b md:border-b-0 md:border-r border-slate-800">
                <div class="relative mb-4">
                    <div class="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20"></div>
                    <img src="${yt.avatar}" class="w-24 h-24 rounded-full border-2 border-red-600 relative z-10 object-cover">
                </div>
                <h3 class="text-xl font-bold text-white mb-1">${yt.channelName}</h3>
                <p class="text-red-500 text-sm font-medium mb-4">${yt.subscribers} Subscribers</p>
                <p class="text-textMuted text-sm mb-6 leading-relaxed px-4">
                    ${yt.desc}
                </p>
                <a href="${yt.channelUrl}" target="_blank" class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-red-900/20">
                    <i data-lucide="youtube" class="w-5 h-5"></i>
                    Subscribe
                </a>
            </div>

            <!-- ฝั่งขวา: คลิปแนะนำ -->
            <div class="p-6 md:w-2/3 flex flex-col justify-center relative group">
                <h4 class="text-slate-400 text-sm mb-4 uppercase tracking-wider font-mono">Latest Video</h4>
                <a href="${yt.featuredVideo.url}" target="_blank" class="block relative rounded-xl overflow-hidden aspect-video border border-slate-700 shadow-xl group-hover:shadow-red-900/10 transition-all">
                    <img src="${yt.featuredVideo.thumbnail}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
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
    if(!container) return;

    container.innerHTML = data.journey.map(item => `
        <div class="bg-cardDark p-6 rounded-xl border border-slate-700/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col gap-4 group">
            <div class="flex items-center gap-4">
                <div class="p-3 bg-slate-800 rounded-lg text-accent group-hover:bg-accent group-hover:text-bgDark transition-colors">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="font-bold text-white text-lg group-hover:text-accent transition-colors">
                    ${item.question}
                </h3>
            </div>
            <p class="text-textMuted text-sm leading-relaxed pl-[3.25rem]">
                "${item.answer}"
            </p>
        </div>
    `).join('');
}