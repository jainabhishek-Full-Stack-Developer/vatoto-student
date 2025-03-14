
const Joinnowcontent = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
            style={{ backgroundImage: "url('/images/join-us.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative text-center text-white px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Join Our Learning Revolution
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Gain skills, connect with experts, and unlock new opportunities. Start your journey today!
                </p>

                {/* Join Now Button */}
                <button className="mt-6 px-6 py-3 cursor-pointer text-lg font-semibold bg-[#ff5c00]  transition rounded-lg shadow-lg">
                    Join Now
                </button>
            </div>
        </section>
    );
};

export default Joinnowcontent;
