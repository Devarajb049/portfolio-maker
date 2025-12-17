export const renderCreative = (data) => {
  const { personal, social, skills, projects, experience, theme } = data;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Creative Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
      
        theme: {
          extend: {
            colors: {
              accent: '${theme.primaryColor}',
            },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              }
            },
            animation: {
              marquee: 'marquee 25s linear infinite',
            },
            fontFamily: {
              display: ['Clash Display', 'sans-serif'],
              body: ['Satoshi', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Satoshi', sans-serif; }
      h1, h2, h3 { font-family: 'Clash Display', sans-serif; }
    </style>
</head>
<body class="bg-[#f0f0f0] text-gray-900 min-h-screen p-4 md:p-8">

    <main class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        
        <!-- Header / Hero Box -->
        <div id="home" class="md:col-span-8 bg-black text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between min-h-[400px]">
            <nav class="flex justify-between items-center mb-12 relative">
                <span class="text-xl font-bold tracking-tighter">${personal.name} Portfolio</span>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                    <a href="#home" class="hover:text-white transition">HOME</a>
                    <a href="#projects" class="hover:text-white transition">WORK</a>
                    <a href="#experience" class="hover:text-white transition">EXPERIENCE</a>
                    <a href="#contact" class="hover:text-white transition">CONTACT</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="creative-menu-btn" class="md:hidden text-white z-50 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <!-- Mobile Menu Overlay -->
                <div id="creative-mobile-menu" class="hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold">
                    <a href="#home" class="hover:text-accent transition mobile-link">HOME</a>
                    <a href="#projects" class="hover:text-accent transition mobile-link">WORK</a>
                    <a href="#experience" class="hover:text-accent transition mobile-link">EXPERIENCE</a>
                    <a href="#contact" class="hover:text-accent transition mobile-link">CONTACT</a>
                </div>
            </nav>
            <div>
                <h1 class="text-5xl md:text-7xl font-semibold leading-tight mb-4">${personal.name}</h1>
                <p class="text-2xl text-gray-400 font-light mb-2">${personal.role}</p>
                ${personal.tagline ? `<p class="text-xl text-accent font-medium">${personal.tagline}</p>` : ''}
            </div>
        </div>

        <!-- Bio Box -->
        <div class="md:col-span-4 bg-white p-8 rounded-3xl flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-4">About Me</h3>
            <p class="text-gray-600 leading-relaxed text-lg">${personal.bio}</p>
            <div class="mt-8 flex gap-3">
                 ${social.github ? `<a href="${social.github}" target="_blank" class="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black-800 transition">GITHUB</a>` : ''}
                 ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="p-3 bg-blue-700 text-white rounded-full hover:bg-white hover:text-blue-700 border border-blue-800 transition">LINKEDIN</a>` : ''}
            </div>
        </div>

        <!-- Skills Marquee (Simulated) -->
        <div id="skills" class="md:col-span-12 bg-accent text-white py-6 rounded-3xl overflow-hidden flex">
            <div class="animate-marquee whitespace-nowrap flex gap-8 items-center text-2xl font-bold tracking-wider px-4">
               ${skills.map(s => `<span>${s.name}</span>`).join('')}
            </div>
        </div>
        
        <!-- Section Title (Projects) -->
        <div id="projects" class="md:col-span-12 mt-8 mb-4">
            <h2 class="text-4xl font-bold uppercase tracking-tighter">Selected Works</h2>
        </div>

        <!-- Projects Grid -->
        ${projects.map((project, i) => `
            <div class="md:col-span-${i === 0 ? '6' : '6'} bg-white p-8 rounded-3xl hover:shadow-xl transition group border border-transparent hover:border-black/5">
                <div class="flex justify-between items-start mb-6">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider">Project 0${i+1}</span>
                    <a href="${project.link}" target="_blank" class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">→</a>
                </div>
                <h3 class="text-3xl font-bold mb-3">${project.title}</h3>
                <p class="text-gray-500 mb-6">${project.description}</p>
                <div class="flex flex-wrap gap-2 text-sm font-medium text-gray-400">
                    ${project.technologies.join(' / ')}
                </div>
            </div>
        `).join('')}

        <!-- Experience Box -->
        <div id="experience" class="md:col-span-12 bg-[#e5e5e5] p-8 md:p-12 rounded-3xl mt-4">
            <h2 class="text-4xl font-bold mb-12 uppercase tracking-tighter">Experience</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                ${experience.map(exp => `
                    <div class="border-t border-gray-400 pt-6">
                        <span class="block text-sm font-bold text-gray-500 mb-2">${exp.period}</span>
                        <h3 class="text-2xl font-bold mb-1">${exp.role}</h3>
                        <p class="text-lg text-gray-600 mb-2">${exp.company}</p>
                        <p class="text-gray-500">${exp.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Contact Box -->
        <div id="contact" class="md:col-span-12 bg-black text-white p-8 md:p-12 rounded-3xl mt-4">
             <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 class="text-4xl md:text-6xl font-bold mb-6 leading-none">LET'S BUILD<br>SOMETHING.</h2>
                     <p class="text-gray-400 mb-8 max-w-md">I'm currently looking for new opportunities. Send me an email and let's discuss how I can help you.</p>
                     
                     <div class="flex flex-col gap-4 text-sm font-medium tracking-widest uppercase text-gray-500">
                        ${social.email ? `<a href="mailto:${social.email}" class="hover:text-white transition">→ ${social.email}</a>` : ''}
                        ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="hover:text-white transition">→ LINKEDIN</a>` : ''}
                     </div>
                 </div>
                 
                 <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="NAME" required 
                            class="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-500 focus:border-white outline-none transition uppercase font-bold text-sm">
                        <input type="email" name="email" placeholder="EMAIL" required 
                            class="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-500 focus:border-white outline-none transition uppercase font-bold text-sm">
                    </div>
                    <textarea name="message" rows="4" placeholder="MESSAGE" required 
                        class="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-500 focus:border-white outline-none transition uppercase font-bold text-sm resize-none"></textarea>
                    
                    <button type="submit" class="w-full py-4 bg-accent text-white font-bold rounded-full text-lg hover:scale-[1.02] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] mt-4 uppercase tracking-wider">
                        Send Message
                    </button>
                 </form>
             </div>
             
             <div class="mt-12 text-center text-sm text-gray-600 uppercase tracking-widest">
                © ${new Date().getFullYear()} ${personal.name}
             </div>
        </div>

    </main>
    <script>
        const btn = document.getElementById('creative-menu-btn');
        const menu = document.getElementById('creative-mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    </script>
</body>
</html>`;
};
