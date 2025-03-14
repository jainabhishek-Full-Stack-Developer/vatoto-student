import Homewrapper from "../Homewrapper/Homewrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


const Contactuscontent = () => {
    return (
        <Homewrapper>
            <section
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative text-center text-white px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Contact Us
                    </h2>
                </div>
            </section>
            <section className="py-20 px-4 md:px-12 lg:px-16">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-black bg-clip-text">
                        For Any Questions
                    </h1>
                    <p className="text-gray-700 mt-3 text-base md:text-lg max-w-lg mx-auto">
                        Effortless collaboration starts here. Connect with us for seamless communication and tailored solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-10">
                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Contact Directly</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">contact@vatoto.live</span>
                            <span className="block text-gray-700 font-medium mt-1">(+004) 912-3548-07</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Head Quater</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">17 Queen St, Southbank, Melbourne</span>
                            <span className="block text-gray-700 font-medium mt-1">10560, Australia</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Work With Us</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">Send your CV to our email:</span>
                            <span className="block text-gray-700 font-medium mt-1">career@vatoto.live</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Customer Service</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">customercare@vatoto.live</span>
                            <span className="block text-gray-700 font-medium mt-1">(800) 843-2446</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Media Relations</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">media@vatoto.live</span>
                            <span className="block text-gray-700 font-medium mt-1">(801) 947-3564</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-gray-900">Faculty Support</h2>
                        <div className="mt-3">
                            <span className="text-gray-600 mt-5">facultysupport@vatoto.live</span>
                            <span className="block text-gray-700 font-medium mt-1">(801) 947-3100</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto py-16 px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
                        <p className="text-gray-600 mt-3 text-lg">
                            Have questions? Reach out to us and we’ll be happy to assist you.
                        </p>
                    </div>

                    <form className="space-y-6 bg-white p-8">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" type="text" placeholder="Enter your name" className="w-full" />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea id="message" placeholder="Write your message here..." className="w-full" />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-[#ff5c00] hover:bg-[#ff5c00] py-6 cursor-pointer text-white">
                            Send Message
                        </Button>
                    </form>
                </div>

            </section>

        </Homewrapper>

    );
};

export default Contactuscontent;
