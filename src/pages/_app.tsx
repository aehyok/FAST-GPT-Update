/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-19 09:17:51
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-19 20:25:08
 * @FilePath: \AK47-GPT\src\pages\_app.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import '@/styles/globals.css'
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }: AppProps) {
    return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}


  // 2. Wrap ChakraProvider at the root of your app
