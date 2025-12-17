import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const PersonalForm = () => {
    const { portfolioData, updateSection } = usePortfolio();
    const { personal, social } = portfolioData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateSection('personal', { [name]: value });
    };

    const handleSocialChange = (e) => {
        const { name, value } = e.target;
        updateSection('social', { [name]: value });
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Personal Details</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={personal.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role / Title</label>
                        <input
                            type="text"
                            name="role"
                            value={personal.role}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tagline / Headline</label>
                        <input
                            type="text"
                            name="tagline"
                            value={personal.tagline || ''}
                            onChange={handleChange}
                            placeholder="e.g. building things for the web."
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                            name="bio"
                            rows={4}
                            value={personal.bio}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={personal.location}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Social Links</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                        <input
                            type="url"
                            name="github"
                            value={social.github}
                            onChange={handleSocialChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                        <input
                            type="url"
                            name="linkedin"
                            value={social.linkedin}
                            onChange={handleSocialChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={social.email}
                            onChange={handleSocialChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalForm;
