import React from 'react';
import { FileCode2, Layout, User, BookOpen, Briefcase, Share2, Download, Moon, PenTool } from 'lucide-react';
import clsx from 'clsx';
import { usePortfolio } from '../../context/PortfolioContext';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={clsx(
            "flex items-center gap-3 px-4 py-3 w-full text-left transition-colors rounded-lg mb-1",
            active
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        )}
    >
        <Icon size={18} />
        <span>{label}</span>
    </button>
);

const MainLayout = ({ activeTab, setActiveTab, children }) => {
    const { setTemplate } = usePortfolio();

    const tabs = [
        { id: 'templates', label: 'Templates', icon: Layout },
        { id: 'personal', label: 'Personal Info', icon: User },
        { id: 'skills', label: 'Skills', icon: BookOpen },
        { id: 'projects', label: 'Projects', icon: FileCode2 },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'theme', label: 'Appearance', icon: Moon },
        { id: 'export', label: 'Export', icon: Download },
    ];

    return (
        <div className="h-screen flex bg-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-200 flex-shrink-0 flex flex-col bg-white">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <FileCode2 className="text-blue-600" />
                        Portfolio-Maker
                    </h1>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                    {tabs.map(tab => (
                        <NavItem
                            key={tab.id}
                            icon={tab.icon}
                            label={tab.label}
                            active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200 text-xs text-center text-gray-400">
                    v1.0.0
                </div>
            </aside>

            {/* Editor Panel */}
            <div className="w-[450px] border-r border-gray-200 flex flex-col flex-shrink-0 bg-gray-50">
                <div className="p-6 border-b border-gray-200 bg-white">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {tabs.find(t => t.id === activeTab)?.label}
                    </h2>
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </div>

            {/* Preview Area */}
            <main className="flex-1 bg-gray-100 flex flex-col relative">
                {/* Children passed to Layout shouldn't be here, wait. The structure is fixed. Editor AND Preview. */}
                {/* We will render PreviewFrame directly here or via App. */}
            </main>
        </div>
    );
};
// Re-architecting Layout to separate Editor and Preview better
/* 
Revised Plan:
App.jsx holds State for "activeTab".
App.jsx renders:
  <div className="flex h-screen">
    <Sidebar activeTab={...} setActiveTab={...} />
    <EditorContainer>
       <CurrentEditorForm tab={activeTab} />
    </EditorContainer>
    <PreviewContainer>
       <PreviewFrame />
    </PreviewContainer>
  </div>
*/

export const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }) => {
    const tabs = [
        { id: 'templates', label: 'Templates', icon: Layout },
        { id: 'personal', label: 'Personal Info', icon: User },
        { id: 'skills', label: 'Skills', icon: BookOpen },
        { id: 'projects', label: 'Projects', icon: FileCode2 },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'theme', label: 'Appearance', icon: Moon },
        { id: 'export', label: 'Export', icon: Download },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={clsx(
                "fixed lg:static inset-y-0 left-0 z-50 w-64 flex-col bg-slate-900 shadow-xl border-r border-slate-800 text-white transition-transform duration-300 ease-in-out lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full",
                // Reset to flex on desktop, but 'flex' is already in the class string below if we structure it right.
                // Actually the original had flex-col. Let's merge carefully.
                "flex"
            )}>
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
                        <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/50">
                            <PenTool size={20} className="text-white" />
                        </div>
                        <span className="lg:inline">Portfolio-Maker</span>
                    </h1>
                    {/* Close button for mobile */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-1 hover:bg-slate-800 rounded-md transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                onClose?.(); // Close sidebar on mobile when item clicked
                            }}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-200 rounded-xl group relative overflow-hidden",
                                activeTab === tab.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-medium"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            {activeTab === tab.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                            )}
                            <tab.icon size={18} className={clsx("transition-transform group-hover:scale-110", activeTab === tab.id ? "text-blue-100" : "text-slate-500 group-hover:text-white")} />
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <p className="text-xs text-slate-500 font-medium">Portfolio Maker v1.0</p>
                        <p className="text-xs text-slate-500 font-medium">Developed by : Deva Raj Bhojanapu</p>
                    </div>
                </div>
            </aside>
        </>
    );
};
