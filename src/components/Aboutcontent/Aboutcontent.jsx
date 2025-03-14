import Homewrapper from "../Homewrapper/Homewrapper";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";


const AboutContent = () => {
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
                        About Us
                    </h2>
                </div>
            </section>
            <section className="text-gray-700 body-font bg-gray-50">
                <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">
                    {/* Left Content Section */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight">
                            We’re changing the way people connect
                        </h1>
                        <p className="mb-8 leading-relaxed text-lg text-gray-600 text-justify max-w-xl">
                            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
                        </p>
                        <p className="mb-8 leading-relaxed text-lg text-gray-600 text-justify max-w-xl">
                            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit
                            aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
                        </p>
                    </div>

                    {/* Right Image Section (Hidden on Small Screens) */}
                    <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-full mx-auto mb-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-6">
                                <img
                                    className="object-cover mt-10 md:mt-20 w-full h-64 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                    alt="Online Learning"
                                    src="/images/about-hero-1.jpg"
                                />
                                <img
                                    className="object-cover w-full h-64 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                    alt="Online Learning"
                                    src="/images/about-hero-3.jpg"
                                />
                            </div>
                            <div className="flex flex-col space-y-6">
                                <img
                                    className="object-cover w-full h-64 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                    alt="Online Learning"
                                    src="/images/about-hero-2.jpg"
                                />
                                <img
                                    className="object-cover w-full h-64 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                    alt="Online Learning"
                                    src="/images/about-hero-4.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 md:px-12 lg:px-16 ">
                <h2 className="text-4xl text-center mb-15 font-bold text-black bg-clip-text">
                    Our Mission
                </h2>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Left Side - Text */}
                    <div className="md:w-1/2 text-center md:text-left">

                        <div className="mt-6 text-gray-700 text-lg leading-relaxed space-y-6">
                            <p className="text-justify">
                                Our mission is to revolutionize education by making learning more accessible,
                                engaging, and effective. We leverage cutting-edge technology to provide high-quality
                                educational experiences that cater to diverse learning needs. We believe in fostering
                                a global learning community where students, educators, and professionals can thrive.
                            </p>
                            <p className="text-justify">
                                Through innovation, collaboration, and a student-centered approach, we aim to create
                                an environment that nurtures curiosity, encourages growth, and unlocks potential for
                                lifelong success. Our platform bridges the gap between technology and education,
                                offering interactive and immersive experiences that inspire learners worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 hidden md:flex justify-center mt-10">
                        <img
                            src="/images/mission.jpg"
                            alt="Education"
                            className="w-full h-auto max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        />
                    </div>
                </div>
            </section>
            <section className="py-10 px-6">
                <div className="mx-auto">
                    <img
                        src="/images/about.jpg"
                        alt="About Us"
                        className="w-full  rounded-lg"
                    />
                </div>
            </section>
            <section className="py-20 px-3 md:px-12 lg:px-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-black bg-clip-text">
                        Our values
                    </h2>
                    <p className="text-gray-700 mt-3 text-lg">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam
                    </p>
                </div>
                <div className="grid  mt-20 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full">
                    {[
                        {
                            title: "Be world-class",
                            description:
                                "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero",
                        },
                        {
                            title: "Share everything you know",
                            description:
                                "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
                        },
                        {
                            title: "Learn at Your Own Pace",
                            description:
                                "With flexible schedules to fit your lifestyle and lifetime access to course materials, you can learn at your own pace and revisit content anytime.",
                        },
                        {
                            title: "Flexible Learning Options",
                            description:
                                "Enjoy the flexibility of learning at your own pace with schedules that fit your lifestyle and lifetime access to course materials for continuous growth.",
                        },
                        {
                            title: "Learn at Your Own Pace",
                            description:
                                "With flexible schedules to fit your lifestyle and lifetime access to course materials, you can learn at your own pace and revisit content anytime.",
                        },
                        {
                            title: "Flexible Learning Options",
                            description:
                                "Enjoy the flexibility of learning at your own pace with schedules that fit your lifestyle and lifetime access to course materials for continuous growth.",
                        },
                    ].map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg bg-white">
                            <div className="flex items-start gap-4">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm text-justify">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <Joinnowcontent />
        </Homewrapper>
    );
};

export default AboutContent;
