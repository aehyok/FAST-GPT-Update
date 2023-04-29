/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-18 22:12:49
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-28 20:24:55
 * @FilePath: /ak47-gpt/src/pages/_document.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from './theme'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
