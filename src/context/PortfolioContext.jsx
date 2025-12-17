import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialPortfolioData } from '../utils/initialData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState(() => {
        const saved = localStorage.getItem('portfolioData');
        return saved ? JSON.parse(saved) : initialPortfolioData;
    });

    useEffect(() => {
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    }, [portfolioData]);

    const updateSection = (section, data) => {
        setPortfolioData((prev) => ({
            ...prev,
            [section]: { ...prev[section], ...data },
        }));
    };

    const updateItem = (section, itemId, data) => {
        setPortfolioData((prev) => ({
            ...prev,
            [section]: prev[section].map((item) =>
                item.id === itemId ? { ...item, ...data } : item
            ),
        }));
    };

    const addItem = (section, item) => {
        setPortfolioData((prev) => ({
            ...prev,
            [section]: [...prev[section], { ...item, id: Date.now() }],
        }));
    };

    const removeItem = (section, itemId) => {
        setPortfolioData((prev) => ({
            ...prev,
            [section]: prev[section].filter((item) => item.id !== itemId),
        }));
    };

    const setTemplate = (templateId) => {
        setPortfolioData((prev) => ({ ...prev, selectedTemplate: templateId }));
    };

    return (
        <PortfolioContext.Provider
            value={{
                portfolioData,
                setPortfolioData,
                updateSection,
                updateItem,
                addItem,
                removeItem,
                setTemplate,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
