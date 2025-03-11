
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link"; // Import Link from next/link

export const metadata = {
    title: 'Page Not Found - 404',
    description: 'Sorry, the page you are looking for does not exist.',
};

const Circles = () => (
    <svg className="absolute left-0 top-0 w-full h-full -z-10 opacity-50" viewBox="0 0 200 200">
        <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-blue-100" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
    </svg>
);

const WavyLine = () => (
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
            fill="#E2E8F0"
            fillOpacity="0.8"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
    </svg>
);

const Asterisk = () => (
    <svg className="absolute w-24 h-24 text-red-100 transform rotate-12" viewBox="0 0 100 100">
        <path
            fill="currentColor"
            d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15"
            strokeWidth="8"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden">
            <Circles />
            <WavyLine />

            <div className="absolute right-[20%] top-[20%]">
                <Asterisk />
            </div>
            <div className="absolute left-[15%] bottom-[30%]">
                <Asterisk />
            </div>

            <div className="text-center space-y-8 z-10">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        404
                    </h1>
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 text-gray-100"
                        viewBox="0 0 100 100"
                    >
                        <path
                            d="M10 10 L90 90 M90 10 L10 90"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="space-y-2 relative">
                    <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="javascript:history.back()" passHref>
                        <div className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition duration-300 cursor-pointer">
                            <ArrowLeft size={16} />
                            Go Back
                        </div>
                    </Link>

                    <Link href="/" passHref>
                        <div className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 cursor-pointer">
                            <Home size={16} />
                            Home Page
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
