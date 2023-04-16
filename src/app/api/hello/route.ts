/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-15 10:17:01
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-17 00:49:11
 * @FilePath: /ak47-gpt/src/app/api/hello/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }


export async function GET(request: Request) {
  // const model = new OpenAI(
  //   { openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9}, 
  //   { basePath: process.env.OPENAI_API_PR0XY});

  // const res = await model.call(
  //   "请问你了解github上的react项目吗?"
  // );
  // console.log(res);

  // return new Response(res)

  const model = new ChatOpenAI(
    { openAIApiKey: process.env.OPENAI_API_KEY, modelName: "gpt-3.5-turbo" , temperature: 0.9}, 
    { basePath: process.env.OPENAI_API_PR0XY});


  const res = await model.call([
    new HumanChatMessage(
      "请问你了解github上的react项目吗?"
    ),
  ]);
  console.log(res);

  return new Response("res")
}