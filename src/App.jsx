import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Sidebar } from './components/Layout/Sidebar';
import PreviewFrame from './components/Preview/PreviewFrame';

// Editors
import TemplateSelector from './components/TemplateSelector/TemplateSelector';
import PersonalForm from './components/Editor/PersonalForm';
import SkillsForm from './components/Editor/SkillsForm';
import ProjectsForm from './components/Editor/ProjectsForm';
import ExperienceForm from './components/Editor/ExperienceForm';
import ThemeForm from './components/Editor/ThemeForm';
import ExportPanel from './components/Export/ExportPanel';

const EditorContainer = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'templates': return <TemplateSelector />;
      case 'personal': return <PersonalForm />;
      case 'skills': return <SkillsForm />;
      case 'projects': return <ProjectsForm />;
      case 'experience': return <ExperienceForm />;
      case 'theme': return <ThemeForm />;
      case 'export': return <ExportPanel />;
      default: return <PersonalForm />;
    }
  };

  const getTitle = () => {
    const titles = {
      templates: 'Choose Template',
      personal: 'Personal Details',
      skills: 'Skills & Expertise',
      projects: 'Featured Projects',
      experience: 'Work Experience',
      theme: 'Customize Appearance',
      export: 'Export Portfolio',
    };
    return titles[activeTab] || 'Editor';
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-20">
        <h2 className="text-xl font-bold text-gray-800">{getTitle()}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        {renderContent()}
      </div>
    </div>
  );
};

import { Menu, Eye, EyeOff, FileCode2 } from 'lucide-react';
import clsx from 'clsx';

function App() {
  const [activeTab, setActiveTab] = useState('templates');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <PortfolioProvider>
      <div className="h-screen flex flex-col lg:flex-row bg-slate-100 overflow-hidden font-sans">

        {/* Mobile Header */}
        <div className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between z-30 shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-800 rounded-lg">
            <Menu size={24} />
          </button>
          <div className="font-bold text-lg flex items-center gap-2">
            <FileCode2 size={20} className="text-blue-500" />
            Portfolio-Maker
          </div>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={clsx(
              "p-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors",
              showPreview ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300"
            )}
          >
            {showPreview ? <EyeOff size={20} /> : <Eye size={20} />}
            {showPreview ? 'Edit' : 'Preview'}
          </button>
        </div>

        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className={clsx(
          "flex-col flex-shrink-0 bg-gray-50 h-full z-10 transition-all duration-300 shadow-xl border-r border-gray-200",
          "w-full lg:w-[450px]", // Full width on mobile, fixed on desktop
          showPreview ? "hidden lg:flex" : "flex" // Hidden on mobile if previewing, always flex on desktop
        )}>
          <EditorContainer activeTab={activeTab} />
        </div>

        <main className={clsx(
          "flex-1 overflow-hidden relative flex-col",
          showPreview ? "flex" : "hidden lg:flex" // Visible on mobile if previewing, always flex on desktop
        )}>
          <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-10">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Preview
            </h3>
            <div className="text-xs text-gray-400">Updates automatically</div>
          </div>
          <div className="flex-1 bg-gray-100 relative p-4 lg:p-8 flex items-center justify-center overflow-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-full h-full max-w-[1400px] shadow-2xl rounded-xl overflow-hidden bg-white ring-1 ring-gray-900/5 origin-top scale-95 lg:scale-100 transition-transform">
              <PreviewFrame />
            </div>
          </div>
        </main>
      </div>
    </PortfolioProvider>
  );
}

export default App;
