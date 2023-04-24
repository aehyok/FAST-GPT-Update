/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-19 17:14:17
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-25 05:04:59
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
      label: '聊天',
      icon: 'board',
      link: '/chat',
      activeLink: ['/chat']
    },
    {
      label: '模型',
      icon: 'model',
      link: '/model/list',
      activeLink: ['/model/list', '/model/edit']
    },
    {
      label: '账号',
      icon: 'user',
      link: '/account',
      activeLink: ['/account']
    },
    {
      label: '开发',
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
            <Box h={"100%"}  w={"80px"} bgColor={"#18181c"}>
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
