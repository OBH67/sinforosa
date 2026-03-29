/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fqro1-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: '**.machospitalitygroup.com',
      },
      {
        protocol: 'https',
        hostname: '**.nestleprofessional-latam.com',
      },
      {
        protocol: 'https',
        hostname: 'eladelantado.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      }
    ],
  },
};

export default nextConfig;
