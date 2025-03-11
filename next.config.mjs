/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Your existing setting
    images: {
        domains: ['res.cloudinary.com'], // Add Cloudinary's domain
    },
};

export default nextConfig;
