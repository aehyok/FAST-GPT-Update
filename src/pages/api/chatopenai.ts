/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-17 15:39:53
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-17 15:45:32
 * @FilePath: \AK47-GPT\src\pages\api\chatopenai.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatOpenAI } from "langchain/chat_models/openai"
import { HumanChatMessage, SystemChatMessage } from "langchain/schema"

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
  const model = new ChatOpenAI(
    { 
      openAIApiKey: process.env.OPENAI_API_KEY, 
      modelName: "gpt-3.5-turbo" , 
      temperature: 0.9
    }, 
    { basePath: process.env.OPENAI_API_PROXY}
  );

  console.log(model, 'model')
  const response = await model.call([
    new HumanChatMessage(
      "请问你了解github上的react项目吗?"
    ),
  ]);
  console.log(res);

  return res.status(200).json(response)
}