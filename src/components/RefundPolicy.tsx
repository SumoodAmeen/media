
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const RefundPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">REFUND POLICY</h1>
                <div className="space-y-6 text-gray-300">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Refunds are applicable only in cases where services have not commenced or where a payment error has occurred.</li>
                        <li>Approved refunds will be processed within 7–10 working days.</li>
                        <li>Refunds will be credited to the original payment method.</li>
                        <li>No refunds will be issued for completed or ongoing services unless legally required.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};
