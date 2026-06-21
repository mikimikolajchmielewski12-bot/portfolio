const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/portfolio" : undefined,
  assetPrefix: isProd ? "/portfolio/" : undefined,
};

export default nextConfig;
