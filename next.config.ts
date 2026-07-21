import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite que o preview do navegador (127.0.0.1) acesse recursos de dev/HMR
  allowedDevOrigins: ['127.0.0.1'],
  // Otimizações para performance e SEO
  images: {
    // Permitir SVG e outros formatos
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Habilitar compressão
  compress: true,
};

export default nextConfig;
