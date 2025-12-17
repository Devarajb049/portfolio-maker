export const renderTerminal = (data) => {
  const { personal, social, skills, projects, experience } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} @ dev-terminal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap');
      body { font-family: 'Fira Code', monospace; }
      .cursor-blink { animation: blink 1s step-end infinite; }
      @keyframes blink { 50% { opacity: 0; } }
    </style>
</head>
<body class="bg-black text-green-400 min-h-screen p-4 md:p-8 selection:bg-green-900 selection:text-white">

    <div class="max-w-4xl mx-auto border border-green-800 rounded p-4 bg-black/90 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
        <!-- Terminal Header -->
        <div class="flex items-center gap-2 mb-6 border-b border-green-900 pb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div class="ml-4 text-xs text-green-700">user@${personal.name.toLowerCase().replace(/\s+/g, '')}:~</div>
        </div>

        <!-- CLI Content -->
        <div class="space-y-8">
            
            <!-- Command: whoami -->
            <div>
                <div class="flex gap-2">
                    <span class="text-green-600">➜</span>
                    <span class="text-blue-400">~</span>
                    <span>whoami</span>
                </div>
                <div class="mt-2 pl-4 text-white">
                    <h1 class="text-2xl md:text-4xl font-bold mb-2">${personal.name}</h1>
                    <p class="text-green-300 opacity-90">${personal.role}</p>
                    ${personal.tagline ? `<p class="text-green-500 font-mono mt-1">> ${personal.tagline}</p>` : ''}
                    <p class="opacity-70 mt-2 max-w-xl">${personal.bio}</p>
                </div>
            </div>

            <!-- Command: list-skills -->
            <div>
                 <div class="flex gap-2">
                    <span class="text-green-600">➜</span>
                    <span class="text-blue-400">~</span>
                    <span>skills</span>
                </div>
                <div class="mt-2 pl-4">
                    <div class="text-yellow-300">[</div>
                    ${skills.map(skill => `
                        <div class="pl-4 text-green-200">"${skill.name}",</div>
                    `).join('')}
                    <div class="text-yellow-300">]</div>
                </div>
            </div>

            <!-- Command: show-projects -->
            <div>
                <div class="flex gap-2">
                    <span class="text-green-600">➜</span>
                    <span class="text-blue-400">~</span>
                    <span>projects</span>
                </div>
                <div class="mt-2 pl-4 grid gap-4">
                    ${projects.map(project => `
                        <div class="border-l-2 border-green-800 pl-4 py-1 hover:border-green-400 transition-colors">
                            <div class="flex flex-wrap items-baseline gap-2">
                                <span class="font-bold text-white">${project.title}</span>
                            </div>
                            <p class="text-sm opacity-80 mb-2">${project.description}</p>
                            <div class="text-xs text-gray-400 mb-2">[ ${project.technologies.join(', ')} ]</div>
                            <a href="${project.link}" target="_blank" class="text-blue-400 hover:underline text-sm">< ./view-project ></a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Command: history -->
            <div>
                <div class="flex gap-2">
                    <span class="text-green-600">➜</span>
                    <span class="text-blue-400">~</span>
                    <span>history | grep "work"</span>
                </div>
                <div class="mt-2 pl-4 space-y-4">
                    ${experience.map((exp, i) => `
                        <div>
                            <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                <span class="text-gray-500">${i+1}</span>
                                <span class="font-bold">${exp.role}</span>
                                <span class="text-green-700">@</span>
                                <span>${exp.company}</span>
                            </div>
                            <div class="text-xs opacity-50 ml-6">${exp.period}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

             <!-- Command: contact -->
            <div id="contact">
                <div class="flex gap-2">
                    <span class="text-green-600">➜</span>
                    <span class="text-blue-400">~</span>
                    <span>contact <br>--send-message</span>
                </div>
                
                <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="mt-4 pl-4 border-l-2 border-green-900">
                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-green-600">?</span>
                            <span class="font-bold text-white">What is your name?</span>
                        </div>
                        <div class="flex gap-2 text-green-300">
                            <span>></span>
                            <input type="text" name="name" required class="bg-transparent border-none outline-none text-green-300 w-full placeholder-green-900 font-mono" placeholder="Input name...">
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-green-600">?</span>
                            <span class="font-bold text-white">Your email address?</span>
                        </div>
                        <div class="flex gap-2 text-green-300">
                            <span>></span>
                            <input type="email" name="email" required class="bg-transparent border-none outline-none text-green-300 w-full placeholder-green-900 font-mono" placeholder="Input email...">
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-green-600">?</span>
                            <span class="font-bold text-white">Message payload?</span>
                        </div>
                        <div class="flex gap-2 text-green-300">
                            <span>></span>
                            <textarea name="message" rows="2" required class="bg-transparent border-none outline-none text-green-300 w-full placeholder-green-900 font-mono resize-none" placeholder="Input message..."></textarea>
                        </div>
                    </div>

                    <button type="submit" class="mt-2 px-4 py-1 bg-green-900/30 text-green-400 border border-green-700 hover:bg-green-800/50 hover:text-white transition font-mono text-sm">
                        [ EXECUTE SEND ]
                    </button>
                    
                    <div class="mt-6 flex flex-wrap gap-4 text-sm opacity-60">
                         ${social.email ? `<a href="mailto:${social.email}" class="hover:text-white underline">Email</a>` : ''}
                         ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="hover:text-white underline">LinkedIn</a>` : ''}
                         ${social.github ? `<a href="${social.github}" target="_blank" class="hover:text-white underline">GitHub</a>` : ''}
                    </div>
                </form>
            </div>

            <!-- Cursor -->
            <div class="flex gap-2">
                <span class="text-green-600">➜</span>
                <span class="text-blue-400">~</span>
                <span class="flex items-center gap-1">
                    <span class="w-2 h-5 bg-green-400 cursor-blink"></span>
                </span>
            </div>

        </div>
    </div>
</body>
</html>`;
};
