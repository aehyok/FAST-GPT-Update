/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-21 00:28:01
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-21 00:34:14
 * @FilePath: /ak47-gpt/theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme