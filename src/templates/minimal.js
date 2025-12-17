export const renderMinimal = (data) => {
  const { personal, social, skills, projects, experience, theme } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${personal.name} – Portfolio</title>

<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '${theme.primaryColor}',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
      }
    }
  }
}
</script>

<style>
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
}
::selection {
  background: ${theme.primaryColor};
  color: white;
}
</style>
</head>

<body class="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 antialiased selection:bg-gray-900 selection:text-white">

<!-- Navigation -->
<nav class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
    <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a href="#home" class="font-bold text-xl tracking-tight text-gray-900">${personal.name}</a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#home" class="hover:text-gray-900 transition">Home</a>
             <a href="#skills" class="hover:text-gray-900 transition">Skills</a>
            <a href="#projects" class="hover:text-gray-900 transition">Projects</a>
            <a href="#experience" class="hover:text-gray-900 transition">Experience</a>
            <a href="#contact" class="hover:text-gray-900 transition">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="minimal-menu-btn" class="md:hidden text-gray-900 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <!-- Mobile Menu Dropdown -->
        <div id="minimal-mobile-menu" class="hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-soft p-6 flex flex-col gap-4 text-center text-gray-600 font-medium md:hidden">
            <a href="#home" class="hover:text-primary transition mobile-link">Home</a>
            <a href="#skills" class="hover:text-primary transition mobile-link">Skills</a>
            <a href="#projects" class="hover:text-primary transition mobile-link">Projects</a>
            <a href="#experience" class="hover:text-primary transition mobile-link">Experience</a>
            <a href="#contact" class="hover:text-primary transition mobile-link">Contact</a>
        </div>
    </div>
</nav>

<!-- Hero -->
<header id="home" class="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-20 text-center">
  <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
    ${personal.name}
  </h1>

  <p class="text-xl md:text-2xl font-medium text-primary mb-8 px-4">
    ${personal.role}
  </p>

  <p class="text-gray-600 max-w-xl mx-auto leading-relaxed text-lg mb-10">
    ${personal.bio}
  </p>

  <div class="flex flex-wrap justify-center gap-4">
    ${social.github ? `
      <a href="${social.github}" target="_blank"
        class="px-6 py-2.5 rounded-lg bg-gray-900 text-white font-medium
        hover:bg-gray-800 hover:scale-[1.03] transition flex items-center gap-2">
        GitHub
      </a>` : ''}

    ${social.linkedin ? `
      <a href="${social.linkedin}" target="_blank"
        class="px-6 py-2.5 rounded-lg bg-blue-700 text-white font-medium
        hover:bg-blue-800 hover:scale-[1.03] transition flex items-center gap-2">
        LinkedIn
      </a>` : ''}

    <a href="#contact" class="px-6 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition">
        Contact Me
    </a>
  </div>
</header>

<!-- Skills -->
<section id="skills" class="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100">
  <div class="flex flex-col md:flex-row gap-12">
      <div class="md:w-1/3">
          <h2 class="text-3xl font-bold text-gray-900 sticky top-24">Expertise</h2>
          <p class="text-gray-500 mt-2">Tools & Technologies I use to build.</p>
      </div>
      <div class="md:w-2/3">
          <div class="flex flex-wrap gap-3">
            ${skills.map(skill => `
              <span class="px-5 py-2.5 rounded-lg bg-white border border-gray-200
              text-sm font-semibold text-gray-700 shadow-sm hover:border-gray-300 transition cursor-default">
                ${skill.name}
              </span>
            `).join('')}
          </div>
      </div>
  </div>
</section>

<!-- Projects -->
<section id="projects" class="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100">
    <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/3">
             <h2 class="text-3xl font-bold text-gray-900 sticky top-24">Selected Work</h2>
             <p class="text-gray-500 mt-2">Highlights from my recent projects.</p>
        </div>
        <div class="md:w-2/3 grid gap-10">
            ${projects.map(project => `
              <div class="group">
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  <a href="${project.link}" target="_blank">${project.title} ↗</a>
                </h3>

                <p class="text-gray-600 leading-relaxed mb-4">
                  ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 text-sm text-gray-500 font-mono">
                  ${project.technologies.slice(0, 4).map(tech => `<span>${tech}</span>`).join(' • ')}
                </div>
              </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- Experience -->
<section id="experience" class="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100">
    <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/3">
             <h2 class="text-3xl font-bold text-gray-900 sticky top-24">Experience</h2>
             <p class="text-gray-500 mt-2">My professional background.</p>
        </div>
        <div class="md:w-2/3 space-y-12">
            ${experience.map(exp => `
              <div class="relative pl-8 border-l border-gray-200">
                <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                
                <h3 class="text-lg font-bold text-gray-900">${exp.role}</h3>
                <div class="text-primary font-medium mb-1">${exp.company}</div>
                <div class="text-sm text-gray-400 mb-4 font-mono">${exp.period}</div>

                <p class="text-gray-600 leading-relaxed">
                  ${exp.description}
                </p>
              </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- Contact -->
<section id="contact" class="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100 mb-10">
    <div class="grid md:grid-cols-2 gap-12">
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Let's work together.</h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
                I'm currently available for new projects and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div class="flex flex-col gap-4">
                 ${social.email ? `
                    <a href="mailto:${social.email}" class="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        ${social.email}
                    </a>
                 ` : ''}
                 ${social.linkedin ? `
                    <a href="${social.linkedin}" target="_blank" class="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
                 ` : ''}
            </div>
        </div>

        <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" name="name" id="name" required 
                        class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                        placeholder="John Doe">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" id="email" required 
                        class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                        placeholder="john@example.com">
                </div>
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" required 
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                    placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition transform active:scale-95">
                Send Message
            </button>
        </form>
    </div>
</section>

<footer class="text-center py-12 text-sm text-gray-400 border-t border-gray-200">
  <div class="mb-4">
    ${social.linkedin ? `<a href="${social.linkedin}" class="mx-2 hover:text-gray-600">LinkedIn</a>` : ''}
    ${social.github ? `<a href="${social.github}" class="mx-2 hover:text-gray-600">GitHub</a>` : ''}
  </div>
    © ${new Date().getFullYear()} ${personal.name}. All rights reserved.
</footer>

<script>
    const minBtn = document.getElementById('minimal-menu-btn');
    const minMenu = document.getElementById('minimal-mobile-menu');
    const minLinks = document.querySelectorAll('#minimal-mobile-menu .mobile-link');

    minBtn.addEventListener('click', () => {
        minMenu.classList.toggle('hidden');
    });

    minLinks.forEach(link => {
        link.addEventListener('click', () => {
            minMenu.classList.add('hidden');
        });
    });
</script>

</body>
</html>`;
};
