export const renderResume = (data) => {
  const { personal, social, skills, projects, experience, education, theme } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              accent: '${theme.primaryColor}',
            }
          }
        }
      }
    </script>
    <style>
      @media print {
        body { -webkit-print-color-adjust: exact; }
      }
    </style>
</head>
<body class="bg-gray-200 min-h-screen p-0 md:p-8 font-serif">

    <div class="w-full md:max-w-[210mm] mx-auto bg-white shadow-2xl overflow-hidden min-h-[297mm]">
        <!-- Header -->
        <header class="bg-slate-900 text-white p-8 md:p-12">
            <h1 class="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">${personal.name}</h1>
            <p class="text-base md:text-lg text-gray-400 tracking-wide uppercase">${personal.role}</p>
        </header>

        <div class="flex flex-col md:grid md:grid-cols-3">
            <!-- Sidebar -->
            <aside class="col-span-1 bg-gray-50 p-8 border-r border-gray-100 md:min-h-screen">
                
                <div class="mb-10">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-accent pb-2 mb-4">Contact</h2>
                    <ul class="space-y-4 text-sm text-gray-600">
                         ${social.email ? `<li class="break-words"><strong>✉</strong><br>${social.email}</li>` : ''}
                         ${personal.location ? `<li><strong>📍</strong><br>${personal.location}</li>` : ''}
                         ${social.linkedin ? `<li class="break-all"><strong>Linkedin</strong><br><a href="${social.linkedin}" class="hover:underline">${social.linkedin.replace(/^https?:\/\//, '')}</a></li>` : ''}
                         ${social.github ? `<li class="break-all"><strong>Github</strong><br><a href="${social.github}" class="hover:underline">${social.github.replace(/^https?:\/\//, '')}</a></li>` : ''}
                    </ul>
                </div>

                <div class="mb-10">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-accent pb-2 mb-4">Core Skills</h2>
                    <ul class="space-y-2 text-sm text-gray-700">
                        ${skills.map(skill => `<li>${skill.name}</li>`).join('')}
                    </ul>
                </div>



            </aside>

            <!-- Main Content -->
            <main class="col-span-2 p-10">
                
                <div class="mb-12">
                    <h2 class="text-lg font-bold uppercase tracking-widest text-gray-900 border-b-2 border-accent pb-2 mb-6">Profile</h2>
                    <p class="text-gray-700 leading-relaxed text-sm">${personal.bio}</p>
                </div>

                <div class="mb-12">
                    <h2 class="text-lg font-bold uppercase tracking-widest text-gray-900 border-b-2 border-accent pb-2 mb-6">Work Experience</h2>
                    <div class="space-y-8">
                        ${experience.map(exp => `
                            <div>
                                <div class="flex justify-between items-baseline mb-1">
                                    <h3 class="font-bold text-gray-800">${exp.role}</h3>
                                    <span class="text-xs font-bold text-white bg-accent px-2 py-0.5 rounded-sm">${exp.period}</span>
                                </div>
                                <div class="text-sm text-gray-600 italic mb-2">${exp.company}</div>
                                <p class="text-sm text-gray-700 leading-relaxed">${exp.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                 <div class="mb-12">
                    <h2 class="text-lg font-bold uppercase tracking-widest text-gray-900 border-b-2 border-accent pb-2 mb-6">Key Projects</h2>
                    <div class="space-y-6">
                        ${projects.map(project => `
                            <div>
                                <h3 class="font-bold text-gray-800 text-sm mb-1">${project.title}</h3>
                                <p class="text-xs text-gray-600 mb-2">${project.technologies.join(' · ')}</p>
                                <p class="text-sm text-gray-700 leading-relaxed">${project.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

            </main>
        </div>
    </div>
</body>
</html>`;
};
