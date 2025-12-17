export const renderGlass = (data) => {
  const { personal, social, skills, projects, experience, theme } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Glass Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              accent: '${theme.primaryColor}',
            },
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
      body { 
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(45deg, ${theme.primaryColor}22, #ebf8ff, ${theme.primaryColor}11);
        min-height: 100vh;
      }
      .glass {
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        position: relative;
        z-index: 10;
      }
      .project-card {
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
      }
    </style>
</head>
<body class="p-6 md:p-12">

    <!-- Background Orbs -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400 opacity-20 blur-[120px]"></div>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        
        <!-- Sidebar Profile -->
        <aside class="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col items-center text-center h-fit md:sticky md:top-8">
            <div class="w-32 h-32 rounded-full bg-gradient-to-tr from-accent to-blue-300 mb-6 border-4 border-white shadow-lg flex items-center justify-center text-5xl font-bold text-white">
                ${personal.name.charAt(0)}
            </div>
            
            <h1 class="text-3xl font-bold text-gray-800 mb-2">${personal.name}</h1>
            <p class="text-accent font-medium mb-6 bg-white/50 px-4 py-1 rounded-full">${personal.role}</p>
            <p class="text-gray-600 mb-8 leading-relaxed text-sm">${personal.bio}</p>
            
            <div class="flex gap-4 mb-8">
                 ${social.github ? `<a href="${social.github}" target="_blank" class="p-3 glass rounded-full hover:bg-white text-gray-700 transition shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>` : ''}
                 ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="p-3 glass rounded-full hover:bg-white text-gray-700 transition shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>` : ''}
                 ${social.email ? `<a href="mailto:${social.email}" class="p-3 glass rounded-full hover:bg-white text-gray-700 transition shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>` : ''}
            </div>

            <div class="w-full mt-auto">
                 <p class="text-xs text-gray-400">© ${new Date().getFullYear()} ${personal.name}</p>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="md:col-span-8 flex flex-col gap-8">
            
            <!-- Skills Section -->
            <section id="skills" class="glass-card rounded-3xl p-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200/50 pb-4">Technical Proficiency</h2>
                <div class="flex flex-wrap gap-3">
                    ${skills.map(skill => `
                        <span class="px-4 py-2 bg-white/60 text-gray-800 rounded-xl text-sm font-bold shadow-sm border border-white/50 hover:scale-105 transition">${skill.name}</span>
                    `).join('')}
                </div>
            </section>

            <!-- Projects -->
            <section id="projects">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 drop-shadow-sm">Featured Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${projects.map(project => `
                        <div class="project-card p-6 rounded-2xl hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">${project.title}</h3>
                            <p class="text-gray-600 text-sm mb-4 h-16 overflow-hidden">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.technologies.slice(0, 3).map(t => `<span class="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded font-bold uppercase">${t}</span>`).join('')}
                            </div>
                            <a href="${project.link}" target="_blank" class="inline-block text-sm font-bold text-accent hover:opacity-80">View Project →</a>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Experience -->
            <section id="experience" class="glass-card rounded-3xl p-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200/50 pb-4">Work Experience</h2>
                <div class="space-y-8">
                    ${experience.map(exp => `
                        <div class="relative pl-6 border-l-2 border-accent/30">
                            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm"></div>
                            <h3 class="text-lg font-bold text-gray-800">${exp.role}</h3>
                            <div class="text-accent font-semibold text-sm mb-2">${exp.company} • ${exp.period}</div>
                            <p class="text-gray-600 text-sm leading-relaxed">${exp.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

        </main>
        
        <!-- Contact (Full Width or part of grid? Let's make it full width below main) -->
        <div id="contact" class="md:col-span-12 glass-card rounded-3xl p-8 md:p-12 mt-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>
                    <p class="text-gray-600 leading-relaxed mb-8">
                        I'm currently available for freelance work or full-time roles.
                        If you have a project that needs some creative touch, feel free to contact me.
                    </p>
                    <div class="flex flex-col gap-4">
                         ${social.email ? `
                            <a href="mailto:${social.email}" class="flex items-center gap-3 text-gray-700 hover:text-accent transition group p-3 rounded-lg hover:bg-white/50">
                                <span class="p-2 bg-white rounded-full shadow-sm text-accent group-hover:scale-110 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                                <span class="font-medium">${social.email}</span>
                            </a>
                         ` : ''}
                    </div>
                </div>

                <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-5">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                             <label class="text-sm font-semibold text-gray-600 ml-1">Name</label>
                             <input type="text" name="name" required class="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white/80 focus:ring-2 focus:ring-accent/20 outline-none transition shadow-sm" placeholder="Name">
                        </div>
                        <div class="space-y-2">
                             <label class="text-sm font-semibold text-gray-600 ml-1">Email</label>
                             <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white/80 focus:ring-2 focus:ring-accent/20 outline-none transition shadow-sm" placeholder="Email">
                        </div>
                    </div>
                    <div class="space-y-2">
                         <label class="text-sm font-semibold text-gray-600 ml-1">Message</label>
                         <textarea name="message" rows="4" required class="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white/80 focus:ring-2 focus:ring-accent/20 outline-none transition shadow-sm resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" class="w-full py-3.5 bg-accent text-white font-bold rounded-xl shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        
    </div>
</body>
</html>`;
};
