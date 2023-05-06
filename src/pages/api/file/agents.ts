/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-05-05 06:43:58
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-06 19:57:49
 * @FilePath: \AK47-GPT\src\pages\api\file\agents.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

type Data = {
  data: any
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const model = new OpenAI({ temperature: 0 });
  // const tools = [
  //   new SerpAPI(process.env.SerpAPI),
  //   new Calculator(),
  // ];
  
  // const executor = await initializeAgentExecutorWithOptions(tools, model, {
  //   agentType: "zero-shot-react-description",
  //   verbose: true,
  // });
  
  // const input = `Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?`;
  
  // const result = await executor.call({ input });

  
const model = new OpenAI(
  { temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY },
  { basePath: process.env.OPENAI_API_PROXY, baseOptions:{ adapter: null } 
});

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY),
  new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
  verbose: true,
});

const input = `马云的老婆是谁？以及他老婆的爸妈现在多少岁了？ 最后回复请用中文回答`;

const result = await executor.call({ input });

res.status(200).json({data: result})
}


