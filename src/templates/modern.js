export const renderModern = (data) => {
  const { personal, social, skills, projects, experience, theme } = data;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Developer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              accent: '${theme.primaryColor}',
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-slate-900 text-slate-300 antialiased selection:bg-accent selection:text-white">

    <div class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-accent to-pink-500 z-50"></div>

    <main class="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        <!-- Hero -->
        <section class="mb-24 fade-in">
            <p class="text-accent font-medium mb-4 tracking-wide">Hi, I'm</p>
            <h1 class="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">${personal.name}.</h1>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-400 mb-8">${personal.role} <span class="text-slate-600">${personal.tagline}</span></h2>
            <p class="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed">${personal.bio}</p>
            
            <div class="flex flex-wrap gap-4">
                ${social.github ? `<a href="${social.github}" target="_blank" class="px-8 py-3 rounded border border-accent text-accent hover:bg-accent/10 transition font-medium">Check out my GitHub</a>` : ''}
                ${social.email ? `<a href="mailto:${social.email}" class="px-8 py-3 rounded border border-slate-700 hover:border-slate-500 transition font-medium text-white">Contact Me</a>` : ''}
            </div>
        </section>

        <!-- Skills & Experience Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            
            <!-- Skills Section -->
            <div id="skills">
                <h3 class="flex items-center text-2xl font-bold text-white mb-8"><span class="text-accent text-lg mr-2">01.</span> Technical Skills</h3>
                <div class="flex flex-wrap gap-4">
                     ${skills.map(skill => `
                        <div class="group relative">
                            <span class="px-4 py-2 bg-slate-800 text-accent border border-slate-700/50 rounded-lg text-sm font-mono hover:border-accent transition cursor-default">${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Tagline Area (Moved from Hero/About) -->
                <div class="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <p class="text-slate-400 text-sm font-mono mb-2">// Current Focus</p>
                    <p class="text-white font-medium">"${personal.tagline}"</p>
                </div>
            </div>

            <!-- Experience Section -->
             <div id="experience">
                <h3 class="flex items-center text-2xl font-bold text-white mb-8"><span class="text-accent text-lg mr-2">02.</span> Professional Path</h3>
                <div class="space-y-8 pl-4 border-l-2 border-slate-800">
                    ${experience.map(exp => `
                        <div class="relative group">
                            <span class="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-accent transition"></span>
                            <h4 class="text-white font-bold text-lg group-hover:text-accent transition duration-300">${exp.role}</h4>
                            <p class="text-slate-400 text-sm mb-1">${exp.company}</p>
                            <p class="font-mono text-xs text-accent mb-3">${exp.period}</p>
                            <p class="text-slate-400 text-sm leading-relaxed">${exp.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Featured Projects -->
        <section class="mb-24">
            <h3 class="flex items-center text-2xl font-bold text-white mb-12"><span class="text-accent text-lg mr-2">03.</span> Featured Projects</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                 ${projects.map(project => `
                    <div class="group relative bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800 transition duration-300">
                        <div class="flex justify-between items-start mb-6">
                            <div class="text-accent">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div class="flex gap-4 text-slate-400">
                                ${project.github ? `<a href="${project.github}" target="_blank" class="hover:text-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>` : ''}
                                ${project.link ? `<a href="${project.link}" target="_blank" class="hover:text-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>` : ''}
                            </div>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition">${project.title}</h4>
                        <p class="text-slate-400 text-sm mb-6">${project.description}</p>
                        <ul class="flex flex-wrap gap-3 text-xs font-mono text-slate-500">
                           ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                 `).join('')}
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="mb-24 fade-in">
            <h3 class="flex items-center text-2xl font-bold text-white mb-12"><span class="text-accent text-lg mr-2">04.</span> What's Next?</h3>
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
                <p class="text-slate-400 text-lg leading-relaxed mb-8">
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div class="max-w-xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div class="space-y-2">
                            <label class="text-sm text-slate-400 font-mono">Name</label>
                            <input type="text" name="name" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition">
                         </div>
                         <div class="space-y-2">
                            <label class="text-sm text-slate-400 font-mono">Email</label>
                            <input type="email" name="email" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition">
                         </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm text-slate-400 font-mono">Message</label>
                        <textarea name="message" rows="4" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full py-4 rounded border border-accent text-accent hover:bg-accent/10 transition font-mono font-bold">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

        <footer class="text-center text-slate-600 text-sm">
            <p>Designed & Built by ${personal.name}</p>
        </footer>

    </main>
</body>
</html>`;
};
