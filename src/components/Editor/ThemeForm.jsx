import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const ThemeForm = () => {
    const { portfolioData, updateSection } = usePortfolio();
    const { theme } = portfolioData;

    const colors = [
        { name: 'Blue', value: '#2563eb' },
        { name: 'Purple', value: '#7c3aed' },
        { name: 'Indigo', value: '#4f46e5' },
        { name: 'Green', value: '#16a34a' },
        { name: 'Red', value: '#db2777' },
        { name: 'Orange', value: '#ea580c' },
        { name: 'Teal', value: '#0d9488' },
        { name: 'Black', value: '#111827' },
    ];

    const handleColorChange = (color) => {
        updateSection('theme', { primaryColor: color });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Appearance</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Primary Accent Color</label>
                <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => handleColorChange(color.value)}
                            className={`w-10 h-10 rounded-full border-2 focus:outline-none transition-transform hover:scale-110 ${theme.primaryColor === color.value
                                    ? 'border-gray-900 scale-110 ring-2 ring-offset-2 ring-gray-300'
                                    : 'border-transparent'
                                }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom Hex Code</label>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded shadow-sm border border-gray-200" style={{ backgroundColor: theme.primaryColor }}></div>
                    <input
                        type="text"
                        value={theme.primaryColor}
                        onChange={(e) => handleColorChange(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="#000000"
                    />
                </div>
            </div>
        </div>
    );
};

export default ThemeForm;
