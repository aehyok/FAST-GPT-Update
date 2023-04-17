/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-17 15:58:32
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-17 19:42:29
 * @FilePath: \AK47-GPT\src\pages\api\embeddings.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    console.log('get', req.url)
    return GET(res)
  } else {
    res.status(200).json({ name: 'hello OpenAI' })
  }
}

async function GET(res: NextApiResponse) {
  const embeddings = new OpenAIEmbeddings(
    { openAIApiKey: process.env.OPENAI_API_KEY }, 
    { basePath: process.env.OPENAI_API_PROXY }
    );

    const response = await embeddings.embedQuery("Hello world");
  console.log(response);

  return res.status(200).json(response)
}
