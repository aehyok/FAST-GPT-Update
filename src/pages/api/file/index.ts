// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { DocxLoader } from "langchain/document_loaders/fs/docx";
import { SRTLoader } from "langchain/document_loaders/fs/srt";
import path from 'path';

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pdfPath = path.join(process.cwd(), 'public', 'test.srt');
  console.log(pdfPath, 'pdfPath')
  const loader = new SRTLoader(pdfPath);
  
  const docs = await loader.load();
  console.log(docs, 'docs')
  res.status(200).json({data: docs})
}


const explainSrt = async() => {
  const pdfPath = path.join(process.cwd(), 'public', 'test.srt');
  console.log(pdfPath, 'pdfPath')
  const loader = new SRTLoader(pdfPath);
  
  const docs = await loader.load();
  console.log(docs, 'docs')
  // res.status(200).json({data: docs})
}

const explainDocx = async () => {
  const pdfPath = path.join(process.cwd(), 'public', 'document.docx');
  console.log(pdfPath, 'pdfPath')
  const loader = new DocxLoader(pdfPath);
  const docs = await loader.load();
  console.log(docs, 'docs')
  // res.status(200).json({data: docs})
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