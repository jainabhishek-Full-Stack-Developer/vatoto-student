"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
// import Logo from "../Logo/Logo";
import Link from "next/link";


const Registercontent = () => {

    return (

        <>
            <section className="flex flex-row min-h-screen">
                <div className="w-1/2 hidden md:flex items-center justify-center h-screen bg-black/60 bg-cover bg-center animate-fadeIn"
                    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/login-page.jpg')" }}>
                    <div className="text-white max-w-lg text-center md:text-left">
                        <h2 className="text-5xl font-bold leading-snug animate-fadeIn">
                            The Influence of a Great Teacher <br className="hidden md:inline" /> Can Never Be Erased.
                        </h2>
                        <p className="text-lg mt-4 text-gray-300 animate-fadeInDelayed">
                            Your dedication shapes the future. Empower students, inspire minds, and create a lasting impact.
                            Log in to manage your classes, track progress, and continue making a difference—one lesson at a time.
                        </p>
                    </div>

                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center m-5">
                    <form className="w-full max-w-md">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-2">
                                {/* <Logo /> */}
                                <div className="flex items-center">
                                    <Link href="/" aria-label="CourseHive Home">
                                        <span className="text-[#ff5c00] text-2xl font-bold">Vatoto</span>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-2xl font-extrabold text-gray-900">
                                        Create your account
                                    </h1>
                                    <span className="text-sm text-gray-500 mt-1 block">
                                        Enter your details to create your account
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="grid gap-2">
                                    <Label>Name</Label>
                                    <Input type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Email</Label>
                                    <Input type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="********" required />
                                </div>
                                <Button type="submit" className="w-full py-5 bg-[#ff5c00] hover:bg-[#ff5c00]">Create Account</Button>
                                <div className="mt-0 text-center text-sm">   Already have an account?{" "}
                                    <Link href="/auth/login">Login</Link></div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
};

export default Registercontent;
