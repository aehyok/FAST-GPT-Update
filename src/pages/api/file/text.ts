/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-05-06 07:07:50
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-10 21:23:59
 * @FilePath: \AK47-GPT\src\pages\api\file\text.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { loadQARefineChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter  } from "langchain/text_splitter";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Create the models and chain
  const embeddings = new OpenAIEmbeddings(
    { openAIApiKey: process.env.OPENAI_API_KEY },
    { basePath: process.env.OPENAI_API_PROXY, baseOptions: { adapter: null } }
  );
  const model = new OpenAI(
    { temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY },
    { basePath: process.env.OPENAI_API_PROXY, baseOptions: { adapter: null } }
  );
  const chain = loadQARefineChain(model);

  const txtPath = path.join(process.cwd(), "public", "document.txt");
  console.log(txtPath, "pdfPath");
  // Load the documents and create the vector store
  const loader = new TextLoader(txtPath);

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize:700,
    chunkOverlap: 100,
  });
  
  const docs = await loader.loadAndSplit(splitter);
  console.log(docs, "docs");

  // const text = "foo bar baz 123";

  // const output = await splitter.createDocuments([text]);

  res.status(200).json({ data: docs });
}
