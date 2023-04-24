/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-25 04:02:48
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-25 06:47:48
 * @FilePath: /ak47-gpt/src/pages/api/file/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { DocxLoader } from "langchain/document_loaders/fs/docx";
import { SRTLoader } from "langchain/document_loaders/fs/srt";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

import path from 'path';

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('jinlaile')
  const vectorStore = await MemoryVectorStore.fromTexts(
    ["Hello world", "Bye bye", "hello nice world"],
    [{ id: 2, text: "aehyok" }, { id: 1, text: "Leo" }, { id: 3, text: "fuck" }],
    new OpenAIEmbeddings(
      { openAIApiKey: process.env.OPENAI_API_KEY }, 
      { basePath: process.env.OPENAI_API_PROXY }
      )
  );
  console.log("embedding ok")
  const resultOne = await vectorStore.similaritySearch("hello world", 1);
  console.log(resultOne);
  console.log("search ok")
  res.status(200).json({data: resultOne});

}


const explainHtml = async() => {
  const loader = new CheerioWebBaseLoader(
    "https://news.ycombinator.com/item?id=34817881",
    {
      selector: "p.athing",
    }
  );

  const docs = await loader.load();
  
  console.log(docs, 'docs')
  // res.status(200).json({data: docs})
}

const explainSrt = async() => {
  const pdfPath = path.join(process.cwd(), 'public', 'test.srt');
  console.log(pdfPath, 'pdfPath')
  const loader = new SRTLoader(pdfPath);
  
  const docs = await loader.load();
  console.log(docs, 'docs')
  // res.status(200).json({data: docs})
}

const explainDocx = async (res: any) => {
  const pdfPath = path.join(process.cwd(), 'public', 'document.docx');
  console.log(pdfPath, 'pdfPath')
  const loader = new DocxLoader(pdfPath);
  const docs = await loader.load();
  console.log(docs, 'docs')
  res.status(200).json({data: docs})
}
//解析pdf文件
const explainPdf = async() => {
  const pdfPath = path.join(process.cwd(), 'public', 'ChatGPT.pdf');
  console.log(pdfPath, 'pdfPath')
  const loader = new PDFLoader(pdfPath, {
    pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js"),
  });
  const docs = await loader.load();
  console.log(docs, 'docs')
  // res.status(200).json({data: docs})
}