"use client";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { X, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"; // ShadCN UI Button

const Homewrapper = ({ children }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />

            {/* Live Chat Floating Button */}

            <Button
                variant="default"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed bottom-20 right-6 bg-transparent hover:bg-transparent  cursor-pointer
                    transition-all duration-300 flex items-center justify-center rounded-full p-3 
                    hover:scale-105 animate-float"
            >
                <img src="/images/chat-bot.png" alt="Chat bot" className="w-20 h-25" />
            </Button>

            {/* Live Chat Box */}
            {isChatOpen && (
                <div
                    className="fixed z-100 bottom-16 right-6 w-80 bg-white border border-gray-300 shadow-xl 
                    rounded-lg overflow-hidden animate-fade-in"
                >
                    {/* Chat Header */}
                    <div className="flex justify-between items-center p-4 bg-[#ff5c00] text-white">
                        <div className="flex items-center space-x-3">
                            <img src="/images/user1.jpg" alt="Agent" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm font-medium">Sofia</p>
                                <p className="text-xs text-gray-200">Online</p>
                            </div>
                        </div>
                        <Button type="button" className="bg-transparent hover:bg-transparent cursor-pointer" onClick={() => setIsChatOpen(false)}>
                            <X size={20} />
                        </Button >
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-lg w-max max-w-[75%]">
                            Hi, how can I help you today?
                        </div>
                        <div className="bg-[#ff5c00] text-white p-3 rounded-lg w-max max-w-[75%] ml-auto">
                            Hey, I'm having trouble with my account.
                        </div>
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-lg w-max max-w-[75%]">
                            What seems to be the problem?
                        </div>
                        <div className="bg-[#ff5c00] text-white p-3 rounded-lg w-max max-w-[75%] ml-auto">
                            I can't log in.
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 border-t flex items-center bg-gray-50">
                        <input
                            className="flex-1 p-2 border rounded-md focus:outline-none text-sm"
                            placeholder="Type your message..."
                        />
                        <Button className="ml-2 bg-[#ff5c00] text-white p-2 cursor-pointer rounded-md hover:bg-[#ff5c00]">
                            <SendHorizontal size={20} />
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Homewrapper;
