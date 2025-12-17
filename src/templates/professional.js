export const renderProfessional = (data) => {
  const { personal, social, skills, projects, experience, education, theme } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - ${personal.role}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '${theme.primaryColor}',
              dark: '#1e293b',
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      body { font-family: 'Roboto', sans-serif; }
    </style>
</head>
<body class="bg-white text-gray-700">

    <!-- Navbar -->
    <nav class="bg-dark text-white shadow-lg sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold tracking-wider uppercase">${personal.name}</h1>
            <div class="space-x-6 text-sm font-medium hidden md:block">
                <a href="#about" class="hover:text-primary transition">About</a>
                <a href="#experience" class="hover:text-primary transition">Experience</a>
                <a href="#projects" class="hover:text-primary transition">Projects</a>
                <a href="#contact" class="hover:text-primary transition">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <header id="about" class="bg-gray-50 py-20 border-b border-gray-200">
        <div class="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
            <div class="md:col-span-2">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">${personal.name}</h2>
                <p class="text-xl text-primary font-medium mb-6">${personal.role}</p>
                <p class="text-gray-600 leading-loose mb-8">${personal.bio}</p>
                <div class="flex gap-4">
                    <a href="mailto:${social.email}" class="px-6 py-2 bg-primary text-white rounded shadow hover:bg-opacity-90 transition">Contact Me</a>
                    ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded shadow-sm hover:bg-gray-100 transition">LinkedIn</a>` : ''}
                </div>
            </div>
            <div class="hidden md:flex justify-center">
                <!-- Placeholder for profile image if we add that feature later -->
                <div class="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-4xl font-bold">
                    ${personal.name.charAt(0)}
                </div>
            </div>
        </div>
    </header>

    <!-- Experience -->
    <section id="experience" class="py-16">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-primary pl-4">Professional Experience</h2>
            <div class="space-y-12">
                ${experience.map(exp => `
                    <div class="grid md:grid-cols-4 gap-4">
                        <div class="text-sm font-medium text-gray-500 md:text-right mt-1">${exp.period}</div>
                        <div class="md:col-span-3">
                            <h3 class="text-xl font-bold text-gray-800">${exp.role}</h3>
                            <div class="text-primary font-medium mb-2">${exp.company}</div>
                            <p class="text-gray-600">${exp.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-primary pl-4">Key Projects</h2>
            <div class="grid md:grid-cols-2 gap-8">
                 ${projects.map(project => `
                    <div class="bg-white p-6 rounded shadow-sm border-t-4 border-primary">
                        <h3 class="text-lg font-bold text-gray-900 mb-2">${project.title}</h3>
                        <p class="text-gray-600 text-sm mb-4 h-20 overflow-hidden">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.technologies.map(tech => `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">${tech}</span>`).join('')}
                        </div>
                        <a href="${project.link}" target="_blank" class="text-primary text-sm font-bold hover:underline">VIEW DETAILS</a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Skills & Education -->
    <section class="py-16">
        <div class="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Technical Skills</h2>
                <div class="flex flex-wrap gap-2">
                    ${skills.map(skill => `
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium">${skill.name}</span>
                    `).join('')}
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Education</h2>
                ${education.map(edu => `
                    <div class="mb-4">
                        <h3 class="font-bold text-gray-800">${edu.degree}</h3>
                        <div class="text-gray-600 text-sm">${edu.school}</div>
                        <div class="text-gray-500 text-xs mt-1">${edu.period}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-4xl mx-auto px-6">
             <h2 class="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-primary pl-4">Get In Touch</h2>
             
             <div class="grid md:grid-cols-2 gap-12">
                 <div>
                     <p class="text-gray-600 leading-relaxed mb-6">
                         I'm currently interested in new opportunities. Please feel free to reach out using the form or via email directly.
                     </p>
                     <div class="space-y-4">
                        ${social.email ? `
                            <div class="flex items-center gap-3 text-gray-700">
                                <span class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-primary"><i class="fa-solid fa-envelope"></i></span>
                                <a href="mailto:${social.email}" class="hover:text-primary transition">${social.email}</a>
                            </div>` : ''}
                     </div>
                 </div>

                 <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-4">
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                             <label class="block text-sm font-bold text-gray-700 mb-1">Name</label>
                             <input type="text" name="name" required class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 text-gray-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition">
                         </div>
                         <div>
                             <label class="block text-sm font-bold text-gray-700 mb-1">Email</label>
                             <input type="email" name="email" required class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 text-gray-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition">
                         </div>
                     </div>
                     <div>
                         <label class="block text-sm font-bold text-gray-700 mb-1">Message</label>
                         <textarea name="message" rows="4" required class="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2 text-gray-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"></textarea>
                     </div>
                     <button type="submit" class="px-6 py-3 bg-primary text-white font-bold rounded shadow hover:bg-opacity-90 transition">
                         Send Message
                     </button>
                 </form>
             </div>
        </div>
    </section>

    <footer class="bg-dark text-white py-8 border-t border-gray-800">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <div class="flex justify-center gap-6 mb-4">
                 ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="text-gray-400 hover:text-white transition">LinkedIn</a>` : ''}
                 ${social.github ? `<a href="${social.github}" target="_blank" class="text-gray-400 hover:text-white transition">GitHub</a>` : ''}
            </div>
            <p class="text-gray-500 text-sm">&copy; ${new Date().getFullYear()} ${personal.name}. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>`;
};
