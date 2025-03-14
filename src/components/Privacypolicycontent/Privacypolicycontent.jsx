import Homewrapper from '../Homewrapper/Homewrapper';

const Privacypolicycontent = () => {
    return (
        <Homewrapper>
            <section
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{ backgroundImage: "url('/images/contact.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative text-center text-white px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Privacy Policy
                    </h2>
                </div>
            </section>
            <section>
                <div className="mx-auto p-8 space-y-6">
                    <h1 className="text-2xl font-bold text-gray-800"> Privacy Policy Use</h1>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to [Your Website/App Name]. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We reserve the right to modify or update these terms at any time without prior notice. Your continued use of our services after any changes constitutes your acceptance of the new terms.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">1. Use of Services</h2>
                    <p className="text-gray-600 mt-2">
                        You agree to use our services only for lawful purposes and in accordance with these terms. You may not engage in any activity that disrupts or interferes with our services, servers, or networks. Unauthorized use, including attempting to access restricted areas of our platform, is strictly prohibited.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">2. User Accounts</h2>
                    <p className="text-gray-600 mt-2">
                        To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">3. Content and Intellectual Property</h2>
                    <p className="text-gray-600 mt-2">
                        All content provided on our platform, including text, graphics, logos, and software, is owned by or licensed to us and is protected by intellectual property laws. You may not copy, modify, distribute, or use any content without our explicit permission.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">4. Limitation of Liability</h2>
                    <p className="text-gray-600 mt-2">
                        We do not guarantee that our services will be uninterrupted, error-free, or completely secure. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">5. Privacy Policy</h2>
                    <p className="text-gray-600 mt-2">
                        Your privacy is important to us. By using our services, you consent to our collection and use of personal information as outlined in our Privacy Policy.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">6. Termination</h2>
                    <p className="text-gray-600 mt-2">
                        We reserve the right to suspend or terminate your access to our services at any time, with or without notice, if we believe you have violated these terms.
                    </p>


                    <h2 className="font-semibold text-xl text-gray-800">7. Governing Law</h2>
                    <p className="text-gray-600 mt-2">
                        These terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Location].
                    </p>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                    </p>

                    <p className="mt-6 text-sm text-gray-500">Last updated: March 2025</p>
                </div>
            </section>

        </Homewrapper>

    )
}

export default Privacypolicycontent;
