import Link from "next/link";
import Image from "next/image";

function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">

            {/* Header */}
            <header className="h-16 flex items-center justify-start pl-15 border-b border-gray-100">
                <Link href="/">
                    <Image
                        src="/tesla-contents/images/Tesla.jpg"
                        alt="Tesla"
                        width={120}
                        height={20}
                        priority
                    />
                </Link>
            </header>

            {/* Center Section */}
            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">

                    <h1 className="text-8xl font-semibold tracking-tight text-black">
                        404
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        This page could not be found.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-8 text-sm font-medium text-black border-b border-black hover:opacity-70 transition"
                    >
                        Return Home
                    </Link>

                </div>
            </main>
        </div>
    );
};

export default NotFound;