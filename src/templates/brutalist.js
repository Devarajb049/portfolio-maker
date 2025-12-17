export const renderBrutalist = (data) => {
  const { personal, social, skills, projects, experience, theme } = data;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} | BRUTAL</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              main: '${theme.primaryColor}',
            },
            fontFamily: {
              mono: ['Courier Prime', 'monospace'],
              sans: ['Archivo Black', 'sans-serif'],
            },
            boxShadow: {
              'hard': '8px 8px 0px 0px rgba(0,0,0,1)',
              'hard-hov': '4px 4px 0px 0px rgba(0,0,0,1)',
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Courier Prime', monospace; }
      h1, h2, h3, .btn { font-family: 'Archivo Black', sans-serif; }
    </style>
</head>
<body class="bg-[#FFE5D9] text-black">

    <!-- Nav -->
    <nav class="bg-black text-white p-4 sticky top-0 z-50 border-b-4 border-black">
        <div class="max-w-5xl mx-auto flex justify-between items-center">
            <div class="font-bold text-xl uppercase tracking-widest hover:text-main cursor-pointer" onclick="window.scrollTo(0,0)">${personal.name}</div>
            <div class="flex gap-6 font-bold uppercase text-sm md:text-base">
                <a href="#home" class="hover:text-main hover:underline decoration-2 underline-offset-4">Home</a>
                <a href="#projects" class="hover:text-main hover:underline decoration-2 underline-offset-4">Work</a>
                <a href="#skills" class="hover:text-main hover:underline decoration-2 underline-offset-4">Skills</a>
                <a href="#contact" class="hover:text-main hover:underline decoration-2 underline-offset-4">Contact</a>
            </div>
        </div>
    </nav>

    <div class="max-w-5xl mx-auto p-6 md:p-12">
        
        <!-- Header -->
        <header id="home" class="bg-white border-4 border-black p-8 shadow-hard mb-16 relative mt-10">
            <div class="absolute -top-6 -right-6 bg-main border-4 border-black px-4 py-2 text-white font-bold rotate-6 shadow-hard text-xl">
                HIRE ME NOW
            </div>
            
            <h1 class="text-6xl md:text-8xl uppercase leading-none mb-4">${personal.name}</h1>
            <p class="text-2xl font-bold bg-black text-white inline-block px-4 py-2">${personal.role}</p>
            <p class="mt-6 text-lg max-w-2xl font-bold">${personal.bio}</p>

            <div class="mt-8 flex gap-4">
                 <a href="#contact" class="btn px-6 py-3 bg-white border-4 border-black hover:shadow-hard shadow-hard-hov transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer">EMAIL ME</a>
                 ${social.github ? `<a href="${social.github}" target="_blank" class="btn px-6 py-3 bg-main text-white border-4 border-black hover:shadow-hard shadow-hard-hov transition-all hover:translate-x-1 hover:translate-y-1">GITHUB</a>` : ''}
            </div>
        </header>

        <div class="grid md:grid-cols-2 gap-12">
            
            <!-- Projects -->
            <section id="projects">
                <h2 class="text-4xl border-b-8 border-black mb-8 inline-block">PROJECTS</h2>
                <div class="space-y-8">
                    ${projects.map(project => `
                        <div class="bg-[#D8F3DC] border-4 border-black p-6 shadow-hard hover:shadow-hard-hov transition-all">
                            <h3 class="text-2xl mb-2">${project.title}</h3>
                            <p class="font-bold mb-4 opacity-70">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.technologies.slice(0,3).map(t => `<span class="bg-white border-2 border-black px-2 py-1 text-xs font-bold">${t}</span>`).join('')}
                            </div>
                            <a href="${project.link}" class="inline-block bg-black text-white px-4 py-2 font-bold hover:bg-main transition-colors">check it out -></a>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Skills & XP -->
            <section class="space-y-12">
                
                <div id="skills">
                     <h2 class="text-4xl border-b-8 border-black mb-8 inline-block">TECH STACK</h2>
                     <div class="flex flex-wrap gap-3">
                        ${skills.map(skill => `
                            <div class="bg-white border-4 border-black px-4 py-2 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                                ${skill.name}
                            </div>
                        `).join('')}
                     </div>
                </div>

                <div id="experience">
                    <h2 class="text-4xl border-b-8 border-black mb-8 inline-block">HISTORY</h2>
                    <div class="bg-white border-4 border-black p-6 shadow-hard">
                        ${experience.map((exp, i) => `
                            <div class="${i !== 0 ? 'mt-8 pt-8 border-t-4 border-black border-dashed' : ''}">
                                <h3 class="text-xl">${exp.role}</h3>
                                <div class="font-bold text-main uppercase mb-2">${exp.company}</div>
                                <div class="text-sm font-bold bg-black text-white inline-block px-2 mb-2">${exp.period}</div>
                                <p>${exp.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

            </section>

        </div>
        
        <!-- Contact Section -->
        <section id="contact" class="mt-20 border-t-8 border-black pt-16 pb-16">
            <div class="grid md:grid-cols-2 gap-12">
                <div class="bg-main border-4 border-black p-8 shadow-hard">
                    <h2 class="text-5xl md:text-6xl text-white mb-6 uppercase leading-none">LET'S BUILD<br>SOMETHING<br>DOPE</h2>
                    <p class="font-bold text-white text-xl mb-8">Got a proposal? Queries? Or just want to say hello? Drop a line.</p>
                    <div class="flex gap-4 flex-wrap">
                        ${social.email ? `<a href="mailto:${social.email}" class="text-white font-bold text-lg underline decoration-4 underline-offset-4 hover:text-black">Email Me</a>` : ''}
                        ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="text-white font-bold text-lg underline decoration-4 underline-offset-4 hover:text-black">LinkedIn</a>` : ''}
                    </div>
                </div>

                <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="bg-white border-4 border-black p-8 shadow-hard relative">
                     <div class="absolute -top-4 -right-4 bg-black text-white px-2 py-1 font-bold rotate-2 text-sm">NO SPAM PLS</div>
                    <div class="space-y-6">
                        <div>
                            <label class="font-bold block mb-2 uppercase border-b-4 border-black inline-block">WHO ARE YOU?</label>
                            <input type="text" name="name" required class="w-full bg-[#f0f0f0] border-4 border-black p-4 font-bold focus:shadow-hard-hov focus:bg-white outline-none transition-all placeholder-gray-400" placeholder="YOUR NAME">
                        </div>
                        <div>
                            <label class="font-bold block mb-2 uppercase border-b-4 border-black inline-block">YOUR EMAIL?</label>
                            <input type="email" name="email" required class="w-full bg-[#f0f0f0] border-4 border-black p-4 font-bold focus:shadow-hard-hov focus:bg-white outline-none transition-all placeholder-gray-400" placeholder="EMAIL ADDRESS">
                        </div>
                        <div>
                            <label class="font-bold block mb-2 uppercase border-b-4 border-black inline-block">WHAT'S THE PLAN?</label>
                            <textarea name="message" rows="4" required class="w-full bg-[#f0f0f0] border-4 border-black p-4 font-bold focus:shadow-hard-hov focus:bg-white outline-none transition-all placeholder-gray-400" placeholder="TELL ME EVERYTHING"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-black text-white font-bold text-xl py-4 border-4 border-black hover:bg-white hover:text-black hover:shadow-hard transition-all">SEND IT -></button>
                    </div>
                </form>
            </div>
        </section>

        <footer class="mt-12 text-center font-bold text-xl uppercase">
            © ${new Date().getFullYear()} ${personal.name} // BUILT DIFFERENT
        </footer>

    </div>
</body>
</html>`;
};
