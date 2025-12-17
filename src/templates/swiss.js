export const renderSwiss = (data) => {
  const { personal, social, skills, projects, experience, education, theme } = data;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Swiss Style</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: '${theme.primaryColor}',
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    </script>
</head>
<body class="bg-[#f2f2f2] text-black font-sans min-h-screen p-4 md:p-12">

    <div class="max-w-[1600px] mx-auto bg-white min-h-screen shadow-2xl overflow-hidden border-t-8 border-brand">
        
        <!-- Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-4 min-h-screen divide-y md:divide-y-0 md:divide-x divide-black/10">

            <!-- Sidebar / Header -->
            <header class="md:col-span-1 p-8 md:p-12 md:sticky md:top-0 md:h-screen flex flex-col justify-between">
                <div>
                    <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 -ml-1">
                        ${personal.name.split(' ').map(n => '<span class="block">' + n + '</span>').join('')}
                    </h1>
                    <p class="text-xl md:text-2xl font-bold leading-tight mb-8">
                        ${personal.role}
                    </p>
                    <p class="text-gray-500 max-w-xs leading-relaxed mb-12">
                        ${personal.bio}
                    </p>
                </div>

                <div class="space-y-2 font-bold text-sm tracking-widest uppercase">
                     ${social.email ? '<a href="mailto:' + social.email + '" class="block hover:text-brand hover:underline">' + social.email + '</a>' : ''}
                     ${social.linkedin ? '<a href="' + social.linkedin + '" class="block hover:text-brand hover:underline">LinkedIn</a>' : ''}
                     ${social.github ? '<a href="' + social.github + '" class="block hover:text-brand hover:underline">GitHub</a>' : ''}
                </div>
            </header>

            <!-- Main Content -->
            <main class="md:col-span-3">
                
                <!-- Skills -->
                <section class="border-b border-black/10">
                    <div class="p-8 md:p-12 bg-black text-white">
                        <h2 class="text-4xl font-bold mb-12 flex items-center gap-4">
                            <span class="w-4 h-4 bg-brand inline-block"></span> 
                            Competencies
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                             ${skills.map(skill => 
                                '<div class="border-l border-white/20 pl-4 flex items-center gap-2">' +
                                    '<span class="text-brand text-xl font-bold">»</span>' +
                                    '<span class="text-xl font-bold tracking-tight">' + skill.name + '</span>' +
                                '</div>'
                             ).join('')}
                        </div>
                    </div>
                </section>

                <!-- Projects -->
                <section>
                    <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">
                        ${projects.map((project, i) => 
                            '<article class="p-8 md:p-12 hover:bg-gray-50 transition-colors group h-full flex flex-col">' +
                                '<div class="text-8xl font-black text-gray-100 mb-8 absolute pointer-events-none group-hover:text-brand/10 transition-colors">' +
                                    '0' + (i+1) +
                                '</div>' +
                                '<div class="relative z-10 flex-1 flex flex-col">' +
                                    '<h3 class="text-3xl font-bold mb-4 leading-tight group-hover:underline decoration-brand underline-offset-4">' + project.title + '</h3>' +
                                    '<p class="text-gray-600 mb-8 leading-relaxed">' + project.description + '</p>' +
                                    '<div class="mt-auto">' +
                                        '<div class="flex flex-wrap gap-2 mb-6">' +
                                            project.technologies.slice(0,3).map(t => '<span class="bg-gray-100 text-xs font-bold px-2 py-1 uppercase tracking-wide">' + t + '</span>').join('') +
                                        '</div>' +
                                        '<a href="' + project.link + '" target="_blank" class="inline-flex items-center gap-2 font-bold hover:text-brand transition-colors">' +
                                            'View Case Study <span class="text-xl leading-none">→</span>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>' +
                            '</article>'
                        ).join('')}
                    </div>
                </section>

                <!-- Experience -->
                <section class="border-t border-black/10 p-8 md:p-12 bg-[#fafafa]">
                     <h2 class="text-4xl font-bold mb-12 flex items-center gap-4">
                        <span class="w-4 h-4 bg-black inline-block"></span> 
                        Experience
                    </h2>
                    <div class="space-y-12">
                         ${experience.map(exp => 
                            '<div class="grid grid-cols-1 md:grid-cols-4 gap-4">' +
                                '<div class="md:col-span-1 font-bold text-gray-400">' + exp.period + '</div>' +
                                '<div class="md:col-span-3 border-l-2 border-black/10 pl-8">' +
                                    '<h3 class="text-xl font-bold">' + exp.role + '</h3>' +
                                    '<div class="font-medium text-brand mb-2">' + exp.company + '</div>' +
                                    '<p class="text-gray-600 max-w-2xl">' + exp.description + '</p>' +
                                '</div>' +
                            '</div>'
                         ).join('')}
                    </div>
                </section>

                 <!-- Contact -->
                <section class="border-t border-black/10 p-8 md:p-12 bg-brand text-white">
                     <div class="max-w-xl">
                        <h2 class="text-6xl font-black mb-8 leading-none">Let's Talk.</h2>
                        <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-6">
                            <input type="email" name="email" placeholder="Your Email" class="w-full bg-transparent border-b-2 border-white/30 py-4 text-2xl placeholder-white/50 focus:border-white focus:outline-none transition-colors">
                            <textarea name="message" rows="3" placeholder="Message" class="w-full bg-transparent border-b-2 border-white/30 py-4 text-2xl placeholder-white/50 focus:border-white focus:outline-none transition-colors resize-none"></textarea>
                            <button type="submit" class="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors uppercase tracking-widest mt-4">
                                Send Inquiry
                            </button>
                        </form>
                     </div>
                </section>

            </main>

        </div>
    </div>

</body>
</html>`;
};
