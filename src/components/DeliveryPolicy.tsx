
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const DeliveryPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">DELIVERY / SERVICE FULFILLMENT POLICY</h1>
                <div className="space-y-6 text-gray-300">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>We do not ship physical products.</li>
                        <li>All deliverables are digital services or files.</li>
                        <li>Delivery timelines depend on project scope and agreed milestones.</li>
                        <li>Deliverables are shared via secure digital platforms or direct communication.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};
