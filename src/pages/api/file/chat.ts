/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-05-07 23:38:56
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-05-08 00:22:11
 * @FilePath: /AK47-GPT/src/pages/api/file/chat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const model = new ChatOpenAI(
    { temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY },
    { basePath: process.env.OPENAI_API_PROXY, baseOptions: { adapter: null } }
  );

  const tools = [new SerpAPI(process.env.SERPAPI_API_KEY), new Calculator()];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "chat-conversational-react-description",
    verbose: true,
  });
  console.log("Loaded agent.");

  const input0 = "Hi，my name is xiaoming";

  const result0 = await executor.call({ input: input0 });

  console.log(`Got output ${result0.output}`);

  const input1 = "what's my name?";

  const result1 = await executor.call({ input: input1 });

  console.log(`Got output ${result1.output}`);

  const input2 = "南昌的天气怎么样了？";

  const result2 = await executor.call({ input: input2 });

  console.log(`Got output ${result2.output}`);

  res.status(200).json({ data: 'ok'});
}