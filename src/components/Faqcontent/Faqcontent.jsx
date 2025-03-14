import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FaqContent = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black bg-clip-text">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-700 mt-3 text-lg">
                    Find answers to common questions about our services. Need more help? Contact our support team.
                </p>
            </div>
            <div className="flex justify-center items-center mt-12">
                <div className="max-w-2xl w-full  rounded-2xl p-6 md:p-8">
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        <AccordionItem value="item-1" className="border-b">
                            <AccordionTrigger className="text-lg font-medium hover:text-[#ff5c00] hover:no-underline transition-all">
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b">
                            <AccordionTrigger className="text-lg font-medium hover:text-[#ff5c00] hover:no-underline transition-all">
                                Is it responsive?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                Yes. It adapts to all screen sizes seamlessly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-b">
                            <AccordionTrigger className="text-lg font-medium hover:text-[#ff5c00] hover:no-underline transition-all">
                                Can I customize it?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                Yes. You can tweak styles and functionality to fit your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-b">
                            <AccordionTrigger className="text-lg font-medium hover:text-[#ff5c00] hover:no-underline transition-all">
                                Is support available?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                Yes. We offer 24/7 customer support.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FaqContent;
