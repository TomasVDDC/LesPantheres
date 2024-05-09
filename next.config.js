/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: [
        {
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
