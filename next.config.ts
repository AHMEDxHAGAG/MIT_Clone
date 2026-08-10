import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The sandbox cannot capture the detached `tsc --showConfig` child process
    // used by Next 16.3's default CLI checker. The compiler API checks the same
    // TypeScript 5.9 project without that process boundary.
    useTypeScriptCli: false,
  },
  output: "standalone",
};

export default nextConfig;
