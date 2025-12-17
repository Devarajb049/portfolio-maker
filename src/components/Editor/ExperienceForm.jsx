import React, { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const ExperienceForm = () => {
    const { portfolioData, addItem, removeItem, updateItem } = usePortfolio();
    const { experience } = portfolioData;
    const [expandedId, setExpandedId] = useState(null);

    const handleUpdate = (id, field, value) => {
        updateItem('experience', id, { [field]: value });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Experience</h3>
                <button
                    onClick={() => addItem('experience', { role: 'Software Engineer', company: '', period: '2023 - Present', description: '' })}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    <Plus size={16} className="mr-1" /> Add Experience
                </button>
            </div>

            <div className="space-y-4">
                {experience.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div
                            className="px-4 py-3 bg-gray-50 flex justify-between items-center cursor-pointer select-none"
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                            <div className="font-medium text-gray-700">
                                {item.role} <span className="text-gray-400 font-normal">at</span> {item.company || 'Company'}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeItem('experience', item.id); }}
                                    className="p-1 text-gray-400 hover:text-red-500"
                                >
                                    <Trash2 size={16} />
                                </button>
                                {expandedId === item.id ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                            </div>
                        </div>

                        {expandedId === item.id && (
                            <div className="p-4 space-y-4 border-t border-gray-100">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Role / Position</label>
                                    <input
                                        type="text"
                                        value={item.role}
                                        onChange={(e) => handleUpdate(item.id, 'role', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                    <input
                                        type="text"
                                        value={item.company}
                                        onChange={(e) => handleUpdate(item.id, 'company', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Period (e.g. 2020 - 2022)</label>
                                    <input
                                        type="text"
                                        value={item.period}
                                        onChange={(e) => handleUpdate(item.id, 'period', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        rows={3}
                                        value={item.description}
                                        onChange={(e) => handleUpdate(item.id, 'description', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceForm;
