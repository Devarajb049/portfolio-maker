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
    <div className="w-[450px] border-r border-gray-200 flex flex-col flex-shrink-0 bg-gray-50 h-full z-10 transition-all duration-300 shadow-xl">
      <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-20">
        <h2 className="text-xl font-bold text-gray-800">{getTitle()}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        {renderContent()}
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('templates');

  return (
    <PortfolioProvider>
      <div className="h-screen flex bg-slate-100 overflow-hidden font-sans">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <EditorContainer activeTab={activeTab} />
        <main className="flex-1 overflow-hidden relative flex flex-col">
          <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-10">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Preview
            </h3>
            <div className="text-xs text-gray-400">Updates automatically</div>
          </div>
          <div className="flex-1 bg-gray-100 relative p-8 flex items-center justify-center overflow-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-full h-full max-w-[1400px] shadow-2xl rounded-xl overflow-hidden bg-white ring-1 ring-gray-900/5">
              <PreviewFrame />
            </div>
          </div>
        </main>
      </div>
    </PortfolioProvider>
  );
}

export default App;
