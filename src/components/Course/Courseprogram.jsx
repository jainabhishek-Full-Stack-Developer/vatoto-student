import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig } from 'lucide-react';


const Courseprogram = () => {
    return (
        <section className="py-16  text-start">
            <div className="max-w-3xl mx-auto mb-10 px-4 text-center ">
                <h2 className="text-3xl font-bold text-gray-900">About the Program</h2>
                <p className="text-gray-600 mt-2">
                    Our Unique Curriculum is Immersive, Engaging, and Captures the Imagination of Children
                </p>
            </div>
            <div>
                <Tabs defaultValue="preschoolers" className="w-100% ">
                    <div className="flex flex-row justify-center items-center mb-20">
                        <TabsList className="w-auto h-[50px] bg-transparent rounded-lg border-2 border-[#ff5c00] p-1 ">
                            <TabsTrigger
                                value="preschoolers"
                                className="flex-1 py-2 text-lg font-medium rounded-l-lg transition-all duration-300 
                                data-[state=active]:bg-[#ff5c00] data-[state=active]:text-white 
                                data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 
                                hover:bg-gray-200 focus:ring-2 focus:ring-[#ff5c00] mr-10 cursor-pointer">
                                Preschoolers
                            </TabsTrigger>
                            <TabsTrigger
                                value="juniors"
                                className="flex-1 py-2 text-lg font-medium rounded-r-lg transition-all duration-300 
                                    data-[state=active]:bg-[#ff5c00] data-[state=active]:text-white 
                                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 
                                    hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 mr-10 cursor-pointer">
                                Juniors
                            </TabsTrigger>
                            <TabsTrigger
                                value="seniors"
                                className="flex-1 py-2 text-lg font-medium rounded-r-lg transition-all duration-300 
                                    data-[state=active]:bg-[#ff5c00] data-[state=active]:text-white 
                                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 
                                    hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 cursor-pointer">
                                Seniors
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="preschoolers" className="m-3">
                        {/* <div className=" mb-10 px-4 flex flex-col justify-center items-center  ">
                            <div className="w-[700px] text-center">
                                <h4 className="text-3xl font-bold text-gray-900">Preschoolers</h4>
                                <p className="text-gray-600 mt-2 text-justify">
                                    The Bhagavad Gita program for kids is a beautiful way to introduce them to this sacred text's ancient wisdom and teachings. With its profound philosophical insights and practical life lessons, the program offers valuable guidance to children as they navigate their journey through life.
                                </p>
                            </div>
                        </div> */}
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-1.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    What will the child learn in the program?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">

                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the course help the child?
                                </h4>
                                <div className="ml-6">
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">It will help the child make well-informed decisions based on their independent understanding of morality.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Along with inculcating good values, the lessons will also help children learn the importance of hard work, integrity, kindness, equality, & care.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Build moral intelligence.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-2.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-3.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the program be covered?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="juniors"className="m-3">
                        {/* <div className=" mb-10 px-4 flex flex-col justify-center items-center  ">
                            <div className="w-[700px] text-center">
                                <h4 className="text-3xl font-bold text-gray-900">Juniors</h4>
                                <p className="text-gray-600 mt-2 text-justify">
                                    The Bhagavad Gita program for kids is a beautiful way to introduce them to this sacred text's ancient wisdom and teachings. With its profound philosophical insights and practical life lessons, the program offers valuable guidance to children as they navigate their journey through life.
                                </p>
                            </div>
                        </div> */}
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-1.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    What will the child learn in the program?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">

                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the course help the child?
                                </h4>
                                <div className="ml-6">
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">It will help the child make well-informed decisions based on their independent understanding of morality.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Along with inculcating good values, the lessons will also help children learn the importance of hard work, integrity, kindness, equality, & care.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Build moral intelligence.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-2.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-3.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the program be covered?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="seniors" className="m-3">
                        {/* <div className=" mb-10 px-4 flex flex-col justify-center items-center  ">
                            <div className="w-[700px] text-center">
                                <h4 className="text-3xl font-bold text-gray-900">Seniors</h4>
                                <p className="text-gray-600 mt-2 text-justify">
                                    The Bhagavad Gita program for kids is a beautiful way to introduce them to this sacred text's ancient wisdom and teachings. With its profound philosophical insights and practical life lessons, the program offers valuable guidance to children as they navigate their journey through life.
                                </p>
                            </div>
                        </div> */}
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-1.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    What will the child learn in the program?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">

                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the course help the child?
                                </h4>
                                <div className="ml-6">
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">It will help the child make well-informed decisions based on their independent understanding of morality.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Along with inculcating good values, the lessons will also help children learn the importance of hard work, integrity, kindness, equality, & care.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Build moral intelligence.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-2.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
                            <div className="hidden lg:block lg:w-1/2 p-5">
                                <img src="/images/cd-3.jpg" alt="Preschoolers" className="rounded w-full h-auto object-cover" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 px-4 lg:px-0">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-7">
                                    How will the program be covered?
                                </h4>
                                <ul className="ml-6 list-disc">
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to all 18 chapters of Bhagavad Gita, +200 shlokas</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Life skills and values with their implementation in everyday life.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Introduction to the learnings like Dharma Karma and their meaning and practical application.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Learn important shlokas and their meanings and manifestations in an age-appropriate manner.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center my-5">
                                        <div>
                                            <CircleCheckBig color="#ff5c00" size={25} />
                                        </div>
                                        <div>
                                            <p className="ml-5">Many stories/sagas from Indian scriptures connect children to their roots/culture.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </section>
    )
}

export default Courseprogram;
