/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-17 15:58:32
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-10 13:56:23
 * @FilePath: \AK47-GPT\src\pages\api\robot\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import type { NextApiRequest, NextApiResponse } from "next";
import {QdrantClient} from '@qdrant/js-client-rest';

// TO connect to Qdrant running locally

// or connect to Qdrant Cloud
const client = new QdrantClient({
    url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_API_KEY,
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("get", req.url);
  const result = await client.getCollections();
  console.log('List of collections:', result.collections);
  res.status(200).json({ name: result });
}
