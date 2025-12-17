import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { getTemplateFn } from '../../templates';

const PreviewFrame = () => {
    const { portfolioData } = usePortfolio();
    const iframeRef = useRef(null);

    useEffect(() => {
        const updatePreview = () => {
            if (iframeRef.current) {
                const renderFn = getTemplateFn(portfolioData.selectedTemplate);
                const htmlContent = renderFn(portfolioData);

                const doc = iframeRef.current.contentWindow.document;
                doc.open();
                doc.write(htmlContent);
                doc.close();
            }
        };

        updatePreview();
    }, [portfolioData]);

    return (
        <div className="h-full w-full bg-gray-100 p-4 lg:p-8 overflow-hidden flex flex-col items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full max-w-[1400px] border border-gray-200">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 flex-1 text-center mx-16 shadow-sm">
                        localhost:3000
                    </div>
                </div>
                <iframe
                    ref={iframeRef}
                    title="Portfolio Preview"
                    className="w-full h-[calc(100%-40px)] bg-white"
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
        </div>
    );
};

export default PreviewFrame;
