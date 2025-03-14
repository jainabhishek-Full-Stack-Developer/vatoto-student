import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex items-center">
            <Link href="/" aria-label="CourseHive Home">
                <span className="text-white text-2xl font-bold">Vatoto</span>
            </Link>
        </div>
    );
};

export default Logo;
