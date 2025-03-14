import Homewrapper from "../Homewrapper/Homewrapper";
import Blogrealtedslider from "./Blogrealtedslider";


const BlogContentDetails = () => {




    return (
        <Homewrapper>
            <header className="mb-6 flex flex-col justify-center items-center h-40 mt-20 px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                    The Future of Online Learning
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-2">
                    December 17, 2024
                </p>
            </header>

            <section className="mx-auto max-w-6xl px-4">
                <img
                    src="/images/about.jpg"
                    alt="The Future of Online Learning"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </section>

            <article className="mx-auto max-w-6xl px-4 py-10">
                {/* Header Section */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                        The Future of Online Learning
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        In the rapidly evolving world of digital education, online learning platforms have become essential tools for students and educators alike. Our education platform bridges the gap between learners and quality education, making learning accessible, interactive, and personalized.
                    </p>
                </section>

                {/* Why Online Learning Section */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                        Why Online Learning?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                        The digital transformation of education has revolutionized how students acquire knowledge. Here are some key benefits of online learning:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                        <li><strong>Flexibility:</strong> Learn at your own pace, anytime, anywhere.</li>
                        <li><strong>Personalized Learning:</strong> Tailored courses that adapt to individual needs.</li>
                        <li><strong>Global Access:</strong> Connect with educators and learners worldwide.</li>
                        <li><strong>Cost-Effective:</strong> Reduce expenses on travel, books, and classroom fees.</li>
                        <li><strong>Interactive Tools:</strong> Engage with quizzes, live classes, and discussion forums.</li>
                    </ul>
                </section>

                {/* Features of the Platform */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                        Features of Our Education Platform
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                        Our platform is built with cutting-edge technology to enhance the learning experience. Some of our standout features include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                        <li><strong>Live & Recorded Classes</strong> – Attend live sessions or watch recorded lectures at your convenience.</li>
                        <li><strong>AI-Powered Recommendations</strong> – Get personalized course suggestions.</li>
                        <li><strong>Interactive Whiteboard</strong> – Engage in real-time collaboration.</li>
                        <li><strong>Progress Tracking</strong> – Monitor your learning journey with analytics.</li>
                    </ul>
                </section>
            </article>

            {/* <section className="py-10 px-5 mx-auto w-full">
                <Carousel className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="flex gap-4">
                        {groupedPosts.map((group, index) => (
                            <CarouselItem key={index} className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {group.map((post, postIndex) => (
                                        <Link key={postIndex} href={post.link} className="block">
                                            <div className="h-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                     className="lg:h-100 md:h-100 w-full object-cover object-center"
                                                />
                                                <div className="p-6">
                                                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                                                        <span>{post.date}</span>
                                                        <Badge variant="secondary">{post.category}</Badge>
                                                    </div>
                                                    <h2 className="text-lg font-semibold text-gray-900">
                                                        {post.title}
                                                    </h2>
                                                    <p className="text-gray-600 text-sm mt-2">
                                                        {post.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section> */}
            <Blogrealtedslider />
        </Homewrapper>
    );
};

export default BlogContentDetails;
