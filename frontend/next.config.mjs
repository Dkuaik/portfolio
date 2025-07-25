/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization settings for Docker
    images: {
        unoptimized: true,
    },
    
    // API configuration
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/:path*`,
            },
        ];
    },
    
    // Environment variables
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    },
};

export default nextConfig;