import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { templates } from '../../templates';
import clsx from 'clsx';
import { Check } from 'lucide-react';

const TemplateSelector = () => {
    const { portfolioData, setTemplate } = usePortfolio();

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Choose Template</h3>
            <div className="grid grid-cols-1 gap-6">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => setTemplate(template.id)}
                        className={clsx(
                            "relative group cursor-pointer rounded-lg border-2 transition-all overflow-hidden",
                            portfolioData.selectedTemplate === template.id
                                ? "border-blue-600 ring-4 ring-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                        )}
                    >
                        {portfolioData.selectedTemplate === template.id && (
                            <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full z-10 shadow-sm">
                                <Check size={16} />
                            </div>
                        )}
                        <div className="aspect-video w-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium text-lg relative">
                            <img
                                src={template.thumbnail}
                                alt={template.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        </div>
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-gray-900">{template.name}</h4>
                            <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;
