import Homewrapper from '../Homewrapper/Homewrapper';
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';


const blogCategories = [
    { name: "Technology", link: "/blog/technology" },
    { name: "Business", link: "/blog/business" },
    { name: "Health", link: "/blog/health" },
    { name: "Travel", link: "/blog/travel" },
    { name: "Education", link: "/blog/education" },
    { name: "Food", link: "/blog/food" },
];

const Blogcatcontenthome = () => {
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
                        Technology
                    </h2>
                </div>
            </section>

            <section className="xl:hidden">
                <div className="text-end mt-8 mr-5">
                    <DropdownMenu>
                        <DropdownMenuTrigger className=" cursor-pointer px-4 py-2 text-lg font-semibold text-gray-900">
                            <p className="flex flex-row justify-end items-center ">Blog Categories <ChevronDown size="20" /></p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md mt-2">
                            <Link href="blog/technology">
                                <DropdownMenuItem className="px-4 py-2 cursor-pointer">
                                    Technology
                                </DropdownMenuItem>
                            </Link>

                            <Link href="blog/business">
                                <DropdownMenuItem className="px-4 py-2 cursor-pointer">
                                    Business
                                </DropdownMenuItem>
                            </Link>

                            <Link href="blog/lifestyle">
                                <DropdownMenuItem className="px-4 py-2 cursor-pointer">
                                    Lifestyle
                                </DropdownMenuItem>
                            </Link>

                            <Link href="blog/travel">
                                <DropdownMenuItem className="px-4 py-2 cursor-pointer">
                                    Travel
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </section>
            <section className="text-gray-600 body-font flex flex-row">
                {/* Category Sidebar - Hidden on md and smaller */}
                <div className="hidden xl:flex flex-col gap-4 max-w-md mx-auto p-4 pt-10 w-[20%]">
                    <Card className="w-full max-w-lg mx-auto p-4 rounded-1xl shadow-md bg-white">
                        <CardContent className="p-4">
                            <p className="text-sm font-bold text-gray-900 text-center mb-6 pb-2">
                                Blog Categories
                            </p>
                            <ul className="space-y-3">
                                {blogCategories.map((category, index) => (
                                    <li key={index} className="group">
                                        <Link
                                            href={category.link}
                                            className="flex items-center gap-2 text-md font-medium text-gray-700"
                                        >

                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Blog Content - Full width on md and smaller */}
                <div className="xl:container  px-5 py-10 mx-auto  xl:w-[80%]">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-1.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-3.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-4.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-2.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-3.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <Link href="/blog/technology/the-catalyzer">
                                <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                    <img
                                        className="lg:h-100 md:h-100 w-full object-cover object-center"
                                        src="/images/blog-1.jpg"
                                        alt="blog"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-row items-center mb-5">
                                            <span>Mar 16, 2020</span>
                                            <Badge variant="secondary" className="ml-5">Category</Badge>
                                        </div>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            The Catalyzer
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


        </Homewrapper >
    )
}

export default Blogcatcontenthome;
