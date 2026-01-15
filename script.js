const data = {
    profile: {
        name: "พัฒนพล สุธรรม",
        avatar: "./images/profile.jpg"
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
            image: "./images/robot.jpg"
        }
    ],
    socials: [
        { name: "GitHub", url: "https://github.com/singto1597/", icon: "github" },
        { name: "LinkedIn", url: "https://www.instagram.com/xphat.z/", icon: "instagram" },
        { name: "Email", url: "singto1597@gmail.com", icon: "mail" }
    ],
    services: [
        {
            name: "Smart Home",
            desc: "ระบบควบคุมบ้านผ่าน Home Assistant",
            icon: "",
            url: "https://ha.singto1597.xyz",
            status: "online" 
        },
        {
            name: "Private Home Storage",
            desc: "ระบบเก็บไฟล์ส่วนตัวด้วย FileBrowser",
            icon: "",
            url: "https://files.singto1597.xyz",
            status: "online" 
        }
        
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderStack();
    renderProjects();
    renderSocials();
    renderServices();
    document.getElementById('year').innerText = new Date().getFullYear();

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
