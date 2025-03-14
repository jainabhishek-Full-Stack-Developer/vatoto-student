import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



const Pricecontent = () => {
    return (
        <section className="py-16  text-start">
            <div className="max-w-3xl mx-auto mb-10 px-4 text-center ">
                <h2 className="text-3xl font-bold text-gray-900">Choose Your Plan</h2>
                <p className="text-gray-600 mt-2">
                    Flexible pricing plans tailored to your needs. Select the best option and get started today.
                </p>
            </div>
            <div>
                <Tabs defaultValue="account" className="w-100% ">
                    <div className="flex flex-row justify-center items-center mb-20">
                        <TabsList className="w-[300px] h-[50px] bg-transparent rounded-lg border-2 border-[#ff5c00] p-1 ">
                            <TabsTrigger
                                value="account"
                                className="flex-1 py-2 text-lg font-medium rounded-l-lg transition-all duration-300 
                                data-[state=active]:bg-[#ff5c00] data-[state=active]:text-white 
                                data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 
                                hover:bg-gray-200 focus:ring-2 focus:ring-[#ff5c00] mr-10"
                               
                            >
                                1 : 1
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className="flex-1 py-2 text-lg font-medium rounded-r-lg transition-all duration-300 
                                    data-[state=active]:bg-[#ff5c00] data-[state=active]:text-white 
                                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 
                                    hover:bg-gray-200 focus:ring-2 focus:ring-gray-400"
                            >
                                1 : 4
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="account">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                            <Card className="p-6 bg-white shadow-lg rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Freelancer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900 ">$19<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 my-5">The essentials to provide your best work for clients.</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full border-[#ff5c00] text-[#ff5c00] hover:bg-[#ff5c00] hover:text-white" variant="outline">Get Started</Button>
                                </CardContent>
                            </Card>
                            <Card className="p-6 bg-white shadow-xl border-2 border-[#ff5c00] rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-[#ff5c00]">Pro</CardTitle>

                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900">$49<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 mt-2">Advanced features for professionals. professionals professionals</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full cursor-pointer bg-[#ff5c00] hover:bg-[#ff5c00]">Get Started</Button>

                                </CardContent>
                            </Card>
                            <Card className="p-6 bg-white shadow-lg rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Enterprise</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900">$99<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 mt-2">Comprehensive features for businesses.</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full border-[#ff5c00] text-[#ff5c00] hover:bg-[#ff5c00] hover:text-white" variant="outline">Get Started</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                            <Card className="p-6 bg-white shadow-lg rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Freelancer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900 ">$19<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 my-5">The essentials to provide your best work for clients.</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full border-[#ff5c00] text-[#ff5c00] hover:bg-[#ff5c00] hover:text-white" variant="outline">Get Started</Button>
                                </CardContent>
                            </Card>
                            <Card className="p-6 bg-white shadow-xl border-2 border-[#ff5c00] rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-[#ff5c00]">Pro</CardTitle>

                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900">$49<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 mt-2">Advanced features for professionals. professionals professionals</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full cursor-pointer bg-[#ff5c00] hover:bg-[#ff5c00]">Get Started</Button>

                                </CardContent>
                            </Card>
                            <Card className="p-6 bg-white shadow-lg rounded-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Enterprise</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold text-gray-900">$99<span className="text-lg font-normal">/mo</span></p>
                                    <p className="text-gray-600 mt-2">Comprehensive features for businesses.</p>
                                    <ul className="mt-4 space-y-2 text-left">
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> 5 products
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Up to 1,000 subscribers
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <Check className="text-green-500" size={20} /> Basic analytics
                                        </li>
                                        <li className="flex items-center gap-2 my-5 text-gray-700">
                                            <X className="text-red-500" size={20} /> 48-hour support response time
                                        </li>
                                    </ul>
                                    <Button className="mt-4 w-full border-[#ff5c00] text-[#ff5c00] hover:bg-[#ff5c00] hover:text-white" variant="outline">Get Started</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </section>
    )
}

export default Pricecontent;
