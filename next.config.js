/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-18 22:12:49
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-19 22:34:04
 * @FilePath: /ak47-gpt/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  webpack(config) {
    config.module.rules = config.module.rules.concat([
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]);

    return config;
  }
}

module.exports = nextConfig
