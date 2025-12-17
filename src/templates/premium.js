export const renderPremium = (data) => {
  const { personal, social, skills, projects, experience, education, theme } = data;

  // Prepare chart data
  const chartSkills = skills.slice(0, 5);
  const chartCategories = chartSkills.map(s => s.name);
  const chartValues = chartSkills.map(() => Math.floor(Math.random() * (100 - 70) + 70)); // Random values 70-100 for visual

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Portfolio</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS Config -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            200: '#bfdbfe',
                            300: '#93c5fd',
                            400: '#60a5fa',
                            500: '${theme.primaryColor}', // Dynamic Primary Color
                            600: '${theme.primaryColor}', 
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a',
                            950: '#172554',
                        },
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        heading: ['"Outfit"', 'sans-serif'],
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: #f1f5f9;
        }
        .dark ::-webkit-scrollbar-track {
            background-color: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 9999px;
            border: 4px solid #f1f5f9;
        }
        .dark ::-webkit-scrollbar-thumb {
            background-color: #334155;
            border: 4px solid #0f172a;
        }
    </style>
</head>

<body
    class="antialiased bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors duration-300 font-sans">

    <!-- Fixed Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 backdrop-saturate-150 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight cursor-pointer flex items-center gap-2"
                onclick="window.scrollTo(0,0)">
                <div class="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-lg">
                    <i class="fa-solid fa-code"></i>
                </div>
                <span>${personal.name.split(' ')[0]}<span class="text-brand-500">Portfolio</span></span>
            </div>

            <div class="hidden md:flex items-center gap-10">
                <a href="#home" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Home</a>
                <a href="#education" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Path</a>
                <a href="#skills" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Skills</a>
                <a href="#projects" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Projects</a>
                <a href="#contact" class="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 px-6 !rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95 ml-2">Hire Me</a>

                <!-- Theme Toggle -->
                <button id="theme-toggle"
                    class="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label="Toggle Dark Mode">
                    <i class="fas fa-sun hidden dark:block"></i>
                    <i class="fas fa-moon block dark:hidden"></i>
                </button>
            </div>
             <!-- Mobile Menu Button -->
            <button class="md:hidden text-slate-900 dark:text-white text-2xl" id="mobile-menu-btn">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 absolute w-full"
            id="mobile-menu">
            <div class="flex flex-col p-6 gap-4">
                <a href="#home" class="block w-full text-slate-600 dark:text-slate-300 font-medium">Home</a>
                <a href="#education" class="block w-full text-slate-600 dark:text-slate-300 font-medium">Path</a>
                <a href="#skills" class="block w-full text-slate-600 dark:text-slate-300 font-medium">Skills</a>
                <a href="#projects" class="block w-full text-slate-600 dark:text-slate-300 font-medium">Projects</a>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto w-full relative">

        <!-- Hero Section -->
        <section id="home"
            class="min-h-screen pt-32 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden">
            <div class="md:w-1/2 space-y-8 z-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <h1 class="font-heading text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                    <span class="text-brand-500">${personal.role}</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                    I'm <strong class="text-slate-900 dark:text-white">${personal.name}</strong>. ${personal.bio}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#projects" class="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95 text-center justify-center">
                        View Projects <i class="fa-solid fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <div class="flex items-center gap-6 pt-6 text-slate-400 transition-all">
                    ${social.github ? `<a href="${social.github}" class="hover:text-brand-600 dark:hover:text-brand-400 text-2xl transition-colors transform hover:scale-110"><i class="fa-brands fa-github"></i></a>` : ''}
                    ${social.linkedin ? `<a href="${social.linkedin}" class="hover:text-brand-600 dark:hover:text-brand-400 text-2xl transition-colors transform hover:scale-110"><i class="fa-brands fa-linkedin"></i></a>` : ''}
                    ${social.email ? `<a href="mailto:${social.email}" class="hover:text-brand-600 dark:hover:text-brand-400 text-2xl transition-colors transform hover:scale-110"><i class="fa-solid fa-envelope"></i></a>` : ''}
                </div>
            </div>


        <!-- Education section -->
        <section id="education" class="py-24 px-6 md:px-16">
             <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:rounded-full before:bg-brand-500">Experience & Education</h2>
             <div class="grid md:grid-cols-2 gap-12">
                <div>
                     <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                        <span class="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400"><i class="fa-solid fa-graduation-cap"></i></span>
                        Education
                    </h3>
                    <div class="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        ${education.map(edu => `
                            <div class="relative pl-8 group">
                                <div class="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500"></div>
                                <span class="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide">${edu.period}</span>
                                <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">${edu.degree}</h4>
                                <p class="text-slate-500 dark:text-slate-400">${edu.school}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                     <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                        <span class="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400"><i class="fa-solid fa-briefcase"></i></span>
                        Work History
                    </h3>
                    <div class="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                         ${experience.map(exp => `
                            <div class="relative pl-8 group">
                                <div class="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-500"></div>
                                <span class="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wide">${exp.period}</span>
                                <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">${exp.role}</h4>
                                <p class="text-slate-500 dark:text-slate-400 mb-2">${exp.company}</p>
                                <p class="text-sm text-slate-500 dark:text-slate-400">${exp.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
             </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-24 px-6 md:px-16 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl mx-6 my-10">
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:rounded-full before:bg-brand-500">Technical Arsenal</h2>
            <div class="flex flex-wrap gap-2">
                ${skills.map(skill => `
                    <span class="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-medium shadow-sm">${skill.name}</span>
                `).join('')}
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-24 px-6 md:px-16">
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:rounded-full before:bg-brand-500">Featured Projects</h2>
            <div class="grid md:grid-cols-2 gap-8">
                 ${projects.map(project => `
                    <article class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-0 overflow-hidden flex flex-col h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-none hover:dark:shadow-glow">
                         <div class="p-8 flex-1 flex flex-col relative">
                             <div class="flex gap-2 mb-4">
                                 ${project.technologies.slice(0, 3).map(t => `<span class="bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold">${t}</span>`).join('')}
                             </div>
                             <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">${project.title}</h3>
                             <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">${project.description}</p>
                             <div class="mt-auto flex gap-3">
                                <a href="${project.link}" target="_blank" class="flex-1 text-center py-2.5 text-sm font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">View Project</a>
                            </div>
                         </div>
                    </article>
                 `).join('')}
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 px-6 md:px-16 mb-20">
             <div class="bg-brand-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                 <!-- Decor -->
                 <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div class="grid md:grid-cols-2 gap-12 relative z-10">
                     <div class="flex flex-col justify-center">
                        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-heading">Let's work together</h2>
                        <p class="text-blue-100 text-lg mb-8 leading-relaxed">
                            I'm currently opening for new freelance projects and open to full-time opportunities. If you have any questions or just want to say hi, I'll get back to you!
                        </p>
                        <div class="space-y-4">
                             ${social.email ? `
                                <a href="mailto:${social.email}" class="flex items-center gap-4 text-white/90 hover:text-white transition group">
                                    <span class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition"><i class="fa-solid fa-envelope"></i></span>
                                    <span>${social.email}</span>
                                </a>` : ''}
                             ${social.linkedin ? `
                                <a href="${social.linkedin}" target="_blank" class="flex items-center gap-4 text-white/90 hover:text-white transition group">
                                    <span class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition"><i class="fa-brands fa-linkedin"></i></span>
                                    <span>LinkedIn Profile</span>
                                </a>` : ''}
                        </div>
                     </div>
                     
                     <form action="mailto:${social.email}" method="POST" enctype="text/plain" class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                        <div class="space-y-5">
                            <div>
                                <label class="block text-sm font-medium text-blue-100 mb-2">Your Name</label>
                                <input type="text" name="name" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition" placeholder="John Doe">
                            </div>
                             <div>
                                <label class="block text-sm font-medium text-blue-100 mb-2">Email Address</label>
                                <input type="email" name="email" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition" placeholder="john@example.com">
                            </div>
                             <div>
                                <label class="block text-sm font-medium text-blue-100 mb-2">Message</label>
                                <textarea name="message" rows="4" required class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" class="w-full bg-white text-brand-600 font-bold py-4 rounded-lg hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                                Send Message
                            </button>
                        </div>
                     </form>
                 </div>
             </div>
        </section>


    </main>

    <footer class="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 w-full">      
        <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 dark:border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; ${new Date().getFullYear()} ${personal.name}. All rights reserved.</p>
            <p>Designed with Portfolio Maker</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script>
        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        // Initial Theme Check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
            initChart();
        }

        themeToggleBtn.addEventListener('click', toggleTheme);

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // ECharts
        let myChart = null;
        function initChart() {
            const chartDom = document.getElementById('skillsChart');
            if (!chartDom) return;
            if (myChart) myChart.dispose();
            myChart = echarts.init(chartDom);

            const isDark = document.documentElement.classList.contains('dark');
            const textColor = isDark ? '#fff' : '#1e293b';
            const categories = ${JSON.stringify(chartCategories)};
            const dataValues = ${JSON.stringify(chartValues)};

            const option = {
                backgroundColor: 'transparent',
                tooltip: { trigger: 'axis' },
                grid: { left: '0%', right: '0%', bottom: '0%', top: '5%', containLabel: true },
                xAxis: { type: 'value', show: false },
                yAxis: { 
                    type: 'category', 
                    data: categories, 
                    axisLabel: { color: textColor },
                    axisLine: { show: false },
                    axisTick: { show: false }
                },
                series: [{
                    type: 'bar',
                    data: dataValues,
                    itemStyle: { color: '${theme.primaryColor}', borderRadius: [0, 6, 6, 0] },
                    barWidth: '20px',
                    showBackground: true,
                    backgroundStyle: { color: isDark ? '#1e293b' : '#f1f5f9', borderRadius: [0, 6, 6, 0] }
                }]
            };
            myChart.setOption(option);
        }
        document.addEventListener('DOMContentLoaded', initChart);
        window.addEventListener('resize', () => { if (myChart) myChart.resize(); });
    </script>
</body>
</html>`;
};
