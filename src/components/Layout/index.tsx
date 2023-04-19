/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-19 17:14:17
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-19 18:32:46
 * @FilePath: \AK47-GPT\src\components\Layout\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Box, Navbar } from "@chakra-ui/react";
import { useRouter } from "next/router";

const unShowLayoutRoute: { [key: string]: boolean } = {
  "/login": true,
};

const Layout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();

  return (
    <>
      <Box h={"100%"} backgroundColor={"gray.100"} overflow={"auto"}>
        {!unShowLayoutRoute[router.pathname] ? (
          <>
            <Box h={"100%"} position={"fixed"} left={0} top={0} w={"180px"}>
              11111111
            </Box>
            <Box h={"100%"} ml={"80px"}>
              <Box h={"100%"} py={7} px={"5vw"} m={"auto"} overflowY={"auto"}>
                {children}
              </Box>
            </Box>
          </>
        ) : (
          <> {children}</>
        )}
      </Box>
      {/* <Box h={'100%'} backgroundColor={'gray.100'} overflow={'auto'}>
      <Box h={'100%'} position={'fixed'} left={0} top={0} w={'180px'}>
                11111111
              </Box>
              <Box h={'100%'} ml={'80px'}>
                <Box h={'100%'} py={7} px={'5vw'} m={'auto'} overflowY={'auto'}>
                  {children}
                </Box>
              </Box>
      </Box> */}
    </>
  );
};

export default Layout;
