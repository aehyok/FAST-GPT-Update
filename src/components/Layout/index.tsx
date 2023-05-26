/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-19 17:14:17
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-25 19:41:34
 * @FilePath: \AK47-GPT\src\components\Layout\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
const unShowLayoutRoute: { [key: string]: boolean } = {
  "/login": true,
  "/": true,
};

const Layout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();

  const navbarList = [
    {
      label: '邮件列表',
      icon: 'chat',
      link: '/chat',
      activeLink: ['/chat']
    },
    {
      label: '客服资料',
      icon: 'model',
      link: '/model/list',
      activeLink: ['/model/list', '/model/edit']
    },
    {
      label: '企业管理',
      icon: 'image',
      link: '/image',
      activeLink: ['/image']
    },
    {
      label: '企业用户',
      icon: 'audio',
      link: '/audio',
      activeLink: ['/audio']
    },
    {
      label: '企业账单',
      icon: 'video',
      link: '/video',
      activeLink: ['/video']
    },
    {
      label: '我的',
      icon: 'develop',
      link: '/develop',
      activeLink: ['/develop']
    }
  ];

  return (
    <>
      <Box h={"100vh"} w={"100vw"} display={"flex"}>
        {!unShowLayoutRoute[router.pathname] ? (
          <>
            <Box h={"100%"}  w={"80px"} bgColor={"#18181c"} minWidth={"80px"}>
              <Navbar navbarList={navbarList} />
            </Box>
            <Box flexGrow={1}  bg={"#343541"} >
              {children}
            </Box>
          </>
        ) : (
          <> {children}</>
        )}
      </Box>
    </>
  );
};

export default Layout;
