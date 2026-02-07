
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const GrievancePolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">GRIEVANCE / SUPPORT POLICY</h1>
                <div className="space-y-6 text-gray-300">
                    <p>For queries, concerns, or payment-related issues, customers can contact:</p>
                    <p className="flex items-center gap-2 mt-4">
                        <span className="text-xl">📧</span>
                        <a href="mailto:zenvogueproductions@gmail.com" className="text-yellow-500 hover:text-yellow-400 text-lg">zenvogueproductions@gmail.com</a>
                    </p>
                    <p className="mt-4">We aim to address all concerns within 7 working days.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};
