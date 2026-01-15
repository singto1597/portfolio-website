const data = {
    profile: {
        name: "Phatthanaphon",
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
            title: "Smart Home",
            desc: "ระบบควบคุมบ้านผ่าน Home Assistant",
            tags: ["IoT", "HomeAssistant", "ESP32"],
            links: { github: "https://ha.singto1597.xyz", demo: null },
            image: "https://connextsystem.com/wp-content/uploads/2024/08/home-assistant.jpg"
        },
        {
            title: "Private Home Storage",
            desc: "ระบบเก็บไฟล์ส่วนตัวด้วย FileBrowser",
            tags: ["IoT", "FileBrowser", "NAS"],
            links: { github: "https://files.singto1597.xyz", demo: null },
            image: "https://pengwin.ca/assets/file_browser.webp"
        }
    ],
    socials: [
        { name: "GitHub", url: "https://github.com/singto1597/", icon: "github" },
        { name: "LinkedIn", url: "https://www.instagram.com/xphat.z/", icon: "instagram" },
        { name: "Email", url: "singto1597@gmail.com", icon: "mail" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderStack();
    renderProjects();
    renderSocials();
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

function renderSocials() {
    const container = document.getElementById('socials-container');
    container.innerHTML = data.socials.map(social => `
        <a href="${social.url}" target="_blank" class="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-accent hover:text-bgDark transition-all duration-300 transform hover:-translate-y-1">
            <i data-lucide="${social.icon}" class="w-6 h-6"></i>
        </a>
    `).join('');
}
