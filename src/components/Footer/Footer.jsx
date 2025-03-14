import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    
                    {/* Brand & Description */}
                    <div className="max-w-md">
                        <Link href="/" className="text-white text-2xl font-bold">
                            Vatoto
                        </Link>
                        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                            Vatoto is an innovative education platform providing high-quality online courses, 
                            resources, and tools to help learners achieve their goals.
                        </p>
                        
                    </div>

                    {/* Links Section */}
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-3">Links</h2>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/course" className="hover:text-white transition">Course</Link></li>
                            <li><Link href="/about-us" className="hover:text-white transition">About</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="/contact-us" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-3">Legal</h2>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="/refund-cancellation" className="hover:text-white transition">Refund & Cancellation</Link></li>
                            <li><Link href="/term-condition" className="hover:text-white transition">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-3">Social Media</h2>
                        <div className="flex gap-5 mt-5">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <img src="/images/x.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Copyright */}
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} <Link href="/" className="text-white font-semibold hover:underline">Vatoto</Link>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
