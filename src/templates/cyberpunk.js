export const renderCyberpunk = (data) => {
  const { personal, social, skills, projects, experience, education, theme } = data;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Cyberpunk Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              neon: '${theme.primaryColor}',
              dark: '#050505',
              panel: '#0a0a0a',
            },
            fontFamily: {
              display: ['Orbitron', 'sans-serif'],
              body: ['Rajdhani', 'sans-serif'],
            },
            boxShadow: {
              'neon': '0 0 5px theme("colors.neon"), 0 0 20px theme("colors.neon")',
            }
          }
        }
      }
    </script>
    <style>
        body {
            background-color: #050505;
            background-image: 
                linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
        }
        .clip-corner {
            clip-path: polygon(
                20px 0, 100% 0, 
                100% calc(100% - 20px), calc(100% - 20px) 100%, 
                0 100%, 0 20px
            );
        }
        .glitch-text {
            position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .glitch-text::before {
            left: 2px;
            text-shadow: -1px 0 #ff00c1;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
            left: -2px;
            text-shadow: -1px 0 #00fff9;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
            0% { clip: rect(12px, 9999px, 5px, 0); }
            5% { clip: rect(45px, 9999px, 86px, 0); }
            10% { clip: rect(6px, 9999px, 83px, 0); }
            15% { clip: rect(2px, 9999px, 92px, 0); }
            20% { clip: rect(58px, 9999px, 5px, 0); }
            100% { clip: rect(22px, 9999px, 81px, 0); }
        }
        @keyframes glitch-anim2 {
            0% { clip: rect(45px, 9999px, 60px, 0); }
            5% { clip: rect(12px, 9999px, 4px, 0); }
            100% { clip: rect(3px, 9999px, 96px, 0); }
        }
    </style>
</head>
<body class="text-gray-300 min-h-screen selection:bg-neon selection:text-black">

    <div class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent z-50"></div>

    <main class="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        <!-- Hero -->
        <header class="mb-32 relative">
            <div class="absolute top-0 right-0 p-4 border border-neon/30 text-neon font-mono text-xs tracking-widest uppercase">
                System..Online_
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-8xl font-black font-display text-white mb-6 uppercase leading-none tracking-tight glitch-text break-words" data-text="${personal.name}">
                ${personal.name}
            </h1>
            <p class="text-xl md:text-2xl text-neon font-body tracking-wider mb-8 max-w-2xl border-l-4 border-neon pl-6">
                ${personal.role} // ${personal.tagline || 'Netrunner'}
            </p>
            <p class="text-gray-400 font-body max-w-xl leading-relaxed text-lg mb-10">
                <span class="text-neon/50">>></span> ${personal.bio}
            </p>

            <div class="flex flex-wrap gap-4">
                ${social.github ? '<a href="' + social.github + '" class="clip-corner bg-neon text-black font-bold font-display px-8 py-4 hover:bg-white transition-colors uppercase tracking-widest text-sm flex items-center gap-2">:: GitHub ::</a>' : ''}
                ${social.linkedin ? '<a href="' + social.linkedin + '" class="clip-corner bg-transparent border border-neon text-neon font-bold font-display px-8 py-4 hover:bg-neon/10 transition-colors uppercase tracking-widest text-sm flex items-center gap-2">:: LinkedIn ::</a>' : ''}
            </div>
        </header>

        <!-- Stats / Skills Grid -->
        <section class="mb-32">
            <div class="flex items-center gap-4 mb-12">
                <h2 class="text-2xl md:text-3xl font-bold font-display text-white uppercase tracking-widest">Skills_Database</h2>
                <div class="h-px bg-gray-800 flex-1 relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full w-20 bg-neon animate-[marquee_2s_linear_infinite]"></div>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${skills.map(skill => 
                    '<div class="bg-panel border border-gray-800 p-4 relative group hover:border-neon transition-colors">' +
                        '<div class="absolute top-0 left-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>' +
                        '<div class="absolute top-0 right-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>' +
                        '<div class="absolute bottom-0 left-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>' +
                        '<div class="absolute bottom-0 right-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>' +
                        '<h3 class="font-display text-lg text-gray-200 group-hover:text-neon transition-colors">' + skill.name + '</h3>' +
                        '<div class="w-full h-1 bg-gray-800 mt-2">' +
                            '<div class="h-full bg-neon/50" style="width: ' + Math.floor(Math.random() * 40 + 60) + '%"></div>' +
                        '</div>' +
                    '</div>'
                ).join('')}
            </div>
        </section>

        <!-- Projects -->
        <section class="mb-32">
            <div class="flex items-center gap-4 mb-12">
                <h2 class="text-2xl md:text-3xl font-bold font-display text-white uppercase tracking-widest">Project_Logs</h2>
                <div class="h-px bg-gray-800 flex-1"></div>
            </div>

            <div class="grid gap-12">
                ${projects.map((project, i) => 
                    '<article class="grid md:grid-cols-12 gap-8 group">' +
                        '<div class="md:col-span-1 text-neon font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">' +
                            '0' + (i + 1) +
                        '</div>' +
                        '<div class="md:col-span-11 bg-panel border-l-2 border-gray-800 p-8 hover:border-neon hover:bg-panel/80 transition-all clip-corner relative overflow-hidden">' +
                            '<div class="absolute top-0 right-0 p-2 opacity-10 font-mono text-xs">ID: ' + Math.random().toString(36).substr(2, 9).toUpperCase() + '</div>' +
                            '<h3 class="text-2xl font-display font-bold text-white mb-2">' + project.title + '</h3>' +
                            '<div class="flex flex-wrap gap-2 mb-6">' +
                                project.technologies.map(t => '<span class="text-xs font-mono text-neon border border-neon/30 px-2 py-0.5">' + t + '</span>').join('') +
                            '</div>' +
                            '<p class="text-gray-400 leading-relaxed font-body mb-6">' + project.description + '</p>' +
                            '<a href="' + project.link + '" target="_blank" class="inline-block font-display text-sm font-bold text-white hover:text-neon tracking-widest uppercase border-b border-transparent hover:border-neon transition-colors">>> Execute</a>' +
                        '</div>' +
                    '</article>'
                ).join('')}
            </div>
        </section>

        <!-- Contact -->
        <footer class="border-t border-gray-800 pt-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 class="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter mb-6 break-words">Initialize_Comms</h2>
                   <p class="text-gray-400 mb-8 max-w-sm">Ready to jack in? Send a secured transmission.</p>
                   
                    <div class="space-y-4 font-mono text-sm text-neon">
                         ${social.email ? '<div>>_ ' + social.email + '</div>' : ''}
                         ${personal.location ? '<div>>_ LOC: ' + personal.location + '</div>' : ''}
                    </div>
                </div>

                <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-4">
                    <input type="text" name="name" placeholder="IDENTIFIER" class="w-full bg-gray-900 border border-gray-800 p-4 text-white font-mono focus:border-neon focus:outline-none transition-colors placeholder-gray-700">
                    <input type="email" name="email" placeholder="SIGNAL_ADDRESS" class="w-full bg-gray-900 border border-gray-800 p-4 text-white font-mono focus:border-neon focus:outline-none transition-colors placeholder-gray-700">
                    <textarea name="message" rows="4" placeholder="TRANSMISSION DATA..." class="w-full bg-gray-900 border border-gray-800 p-4 text-white font-mono focus:border-neon focus:outline-none transition-colors placeholder-gray-700 resize-none"></textarea>
                    <button type="submit" class="w-full bg-neon text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-white hover:shadow-neon transition-all clip-corner">
                        Transmit Data
                    </button>
                </form>
            </div>
            <div class="mt-16 text-center text-gray-700 font-mono text-xs uppercase">
                Systems Nominal // © ${new Date().getFullYear()} ${personal.name}
            </div>
        </footer>

    </main>
</body>
</html>`;
};
