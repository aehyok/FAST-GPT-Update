/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-17 15:39:47
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-17 15:41:24
 * @FilePath: \AK47-GPT\src\pages\api\openai.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from "langchain/llms/openai";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    console.log('get')
    return GET(res)
  } else {
    res.status(200).json({ name: 'hello OpenAI' })
  }
}
  

async function GET(res: NextApiResponse) {
  const model = new OpenAI(
    { openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9}, 
    { basePath: process.env.OPENAI_API_PR0XY});

  const response = await model.call(
    "请问你了解github上的react项目吗?"
  );
  console.log(response);

  return res.status(200).json(response)
}