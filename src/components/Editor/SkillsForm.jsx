import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const SkillsForm = () => {
    const { portfolioData, setPortfolioData } = usePortfolio();
    const { skills } = portfolioData;
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (!newSkill.trim()) return;

        setPortfolioData(prev => ({
            ...prev,
            skills: [...prev.skills, { name: newSkill.trim(), level: 'Intermediate' }]
        }));
        setNewSkill('');
    };

    const removeSkill = (index) => {
        setPortfolioData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Skills</h3>

            <form onSubmit={handleAddSkill} className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill (e.g. React)"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
                <button
                    type="submit"
                    disabled={!newSkill.trim()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                    <Plus size={16} />
                </button>
            </form>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                        {skill.name}
                        <button
                            onClick={() => removeSkill(index)}
                            className="ml-2 inline-flex items-center p-0.5 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsForm;
