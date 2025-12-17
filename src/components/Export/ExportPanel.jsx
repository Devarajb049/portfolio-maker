import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { getTemplateFn } from '../../templates';

const ExportPanel = () => {
    const { portfolioData } = usePortfolio();
    const [copied, setCopied] = useState(false);

    const getHTML = () => {
        const renderFn = getTemplateFn(portfolioData.selectedTemplate);
        return renderFn(portfolioData);
    };

    const downloadHTML = () => {
        const html = getHTML();
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-${portfolioData.personal.name.toLowerCase().replace(/\s+/g, '-')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(getHTML());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Export Portfolio</h3>
            <p className="text-sm text-gray-500">
                Your portfolio is ready! Download the HTML file to host it anywhere (Netlify, Vercel, GitHub Pages) or copy the code directly.
            </p>

            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1">Production Ready</h4>
                <p className="text-sm text-green-700">The exported code includes all styles and scripts in a single file. No build steps required.</p>
            </div>

            <div className="space-y-3">
                <button
                    onClick={downloadHTML}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <Download size={18} />
                    Download HTML File
                </button>

                <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                    {copied ? 'Copied to Clipboard' : 'Copy Source Code'}
                </button>
            </div>
        </div>
    );
};

export default ExportPanel;
