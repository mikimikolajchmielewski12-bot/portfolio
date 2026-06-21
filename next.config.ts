const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/mikolaj-chmielewski-portfolio" : undefined,
  assetPrefix: isProd ? "/mikolaj-chmielewski-portfolio/" : undefined,
};

export default nextConfig;
