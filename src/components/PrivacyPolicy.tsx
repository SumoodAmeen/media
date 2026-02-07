
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-yellow-500">PRIVACY POLICY</h1>
                <div className="space-y-6 text-gray-300">
                    <p>We value your privacy and are committed to protecting your personal data.</p>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">Information Collected:</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Billing information</li>
                            <li>Project-related communication data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">Use of Information:</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To provide services</li>
                            <li>To process payments</li>
                            <li>To communicate project updates</li>
                            <li>For legal and compliance purposes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">Payment Security:</h2>
                        <p>We use Razorpay as a secure payment gateway. We do not store or process your card, UPI, or banking details on our servers.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2 text-white">Data Protection:</h2>
                        <p>Your personal data is not sold, rented, or shared with third parties except as required by law or for service fulfillment.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};
