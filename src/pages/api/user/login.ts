// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/service/models/user";
import { connectToDatabase } from "@/service/mongo";
import { jsonRes } from "@/service/response";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "../../../service/utils/tools";

type Data = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { email, password } = req.body;
    console.log("后端 api", email, password);
    if (!email || !password) {
      throw new Error("缺少参数");
    }
  
    await connectToDatabase();
  
    // 检测用户是否存在
    const authUser = await User.findOne({
      user: email,
    });
    if (!authUser) {
      throw new Error("用户未注册");
    }
    const user = await User.findOne({
      username: email,
      password
    });
  
    if (!user) {
      throw new Error('密码错误');
    }
  
    setCookie(res, user._id);
    jsonRes(res, {
      data: {
        user
      }
    });
  } catch (err) {
    jsonRes(res, {
      code: 500,
      error: err
    });
  }

  // res.status(200).json({ email: email, password: password });
}
