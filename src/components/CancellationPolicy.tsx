
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const CancellationPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">CANCELLATION POLICY</h1>
                <div className="space-y-6 text-gray-300">
                    <p>Cancellation requests must be submitted via email to <a href="mailto:zenvogueproductions@gmail.com" className="text-yellow-500 hover:text-yellow-400">zenvogueproductions@gmail.com</a></p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Cancellations are considered only if the service has not been initiated.</li>
                        <li>Once project work, editing, or post-production processes have started, cancellations may not be accepted.</li>
                        <li>Approval of cancellations is at the sole discretion of the company based on project status.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};
