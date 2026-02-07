
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const TermsAndConditions: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">TERMS & CONDITIONS</h1>
                <div className="space-y-6 text-gray-300">
                    <p>By accessing this website and making payments, you agree to the following terms:</p>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">1. Eligibility:</h2>
                        <p>Users must be 18 years or older to use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">2. Nature of Services:</h2>
                        <p>We provide professional media and post-production services. Service scope, timelines, and deliverables are defined through written communication or agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">3. Payments:</h2>
                        <p>Payments made through this website are for booking, advance, or service fulfillment purposes. Prices are subject to change based on project requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">4. Intellectual Property:</h2>
                        <p>All creative materials, edits, and outputs remain the intellectual property of GOGIL ZENVOGUE OPC PRIVATE LIMITED until full payment is completed, unless otherwise agreed in writing.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">5. Project Timelines:</h2>
                        <p>Timelines may vary based on project complexity, client feedback, and technical requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">6. Limitation of Liability:</h2>
                        <p>We shall not be liable for indirect or consequential losses arising from service delays or technical issues beyond reasonable control.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">7. Governing Law:</h2>
                        <p>These terms are governed by the laws of India. Courts in Ernakulam, Kerala shall have jurisdiction.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};
