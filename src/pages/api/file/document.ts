/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-05-06 07:07:50
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-06 19:54:59
 * @FilePath: \AK47-GPT\src\pages\api\file\document.ts
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

type Data = {
  data: any
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
// Create the models and chain
const embeddings = new OpenAIEmbeddings(
  { openAIApiKey: process.env.OPENAI_API_KEY }, 
  { basePath: process.env.OPENAI_API_PROXY, baseOptions:{ adapter: null } }
  );
const model = new OpenAI({ temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY },  { basePath: process.env.OPENAI_API_PROXY, baseOptions:{ adapter: null } });
const chain = loadQARefineChain(model);

const txtPath = path.join(process.cwd(), 'public', 'document.txt');
console.log(txtPath, 'pdfPath')
// Load the documents and create the vector store
const loader = new TextLoader(txtPath);
const docs = await loader.loadAndSplit();
console.log(docs, 'docs')
const store = await MemoryVectorStore.fromDocuments(docs, embeddings);
console.log(store, 'store')
// Select the relevant documents
const question = "What did the president say about Justice Breyer";
const relevantDocs = await store.similaritySearch(question);
console.log(relevantDocs, 'relevantDocs');

// Call the chain
const result = await chain.call({
  input_documents: relevantDocs,
  question,
});

console.log(result);

  res.status(200).json({data: result})
}


