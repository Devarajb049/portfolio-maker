import React, { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const ProjectsForm = () => {
    const { portfolioData, addItem, removeItem, updateItem } = usePortfolio();
    const { projects } = portfolioData;
    const [expandedId, setExpandedId] = useState(null);

    const handleUpdate = (id, field, value) => {
        updateItem('projects', id, { [field]: value });
    };

    const handleTechStringChange = (id, value) => {
        // Split by comma and clean up
        const techArray = value.split(',').map(t => t.trim()).filter(Boolean);
        handleUpdate(id, 'technologies', techArray);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Projects</h3>
                <button
                    onClick={() => addItem('projects', { title: 'New Project', description: '', technologies: [], link: '', github: '' })}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    <Plus size={16} className="mr-1" /> Add Project
                </button>
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div
                            className="px-4 py-3 bg-gray-50 flex justify-between items-center cursor-pointer select-none"
                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        >
                            <span className="font-medium text-gray-700">{project.title || 'Untitled Project'}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeItem('projects', project.id); }}
                                    className="p-1 text-gray-400 hover:text-red-500"
                                >
                                    <Trash2 size={16} />
                                </button>
                                {expandedId === project.id ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                            </div>
                        </div>

                        {expandedId === project.id && (
                            <div className="p-4 space-y-4 border-t border-gray-100">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Project Title</label>
                                    <input
                                        type="text"
                                        value={project.title}
                                        onChange={(e) => handleUpdate(project.id, 'title', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        rows={3}
                                        value={project.description}
                                        onChange={(e) => handleUpdate(project.id, 'description', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Technologies (comma separated)</label>
                                    <input
                                        type="text"
                                        value={project.technologies.join(', ')}
                                        onChange={(e) => handleTechStringChange(project.id, e.target.value)}
                                        placeholder="React, Node.js, MongoDB"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Project Link</label>
                                        <input
                                            type="url"
                                            value={project.link}
                                            onChange={(e) => handleUpdate(project.id, 'link', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                                        <input
                                            type="url"
                                            value={project.github}
                                            onChange={(e) => handleUpdate(project.id, 'github', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsForm;
