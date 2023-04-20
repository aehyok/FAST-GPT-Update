/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-19 17:38:33
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-21 01:07:20
 * @FilePath: \AK47-GPT\src\components\Layout\navbar.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MyIcon from '../Icon';
export enum NavbarTypeEnum {
  normal = 'normal',
  small = 'small'
}

const Navbar = ({
  navbarList
}: {
  navbarList: {
    label: string;
    icon: string;
    link: string;
    activeLink: string[];
  }[];
}) => {
  const router = useRouter();

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      py={3}
      h={'100%'}
      w={'100%'}
      boxShadow={'4px 0px 4px 0px rgba(43, 45, 55, 0.01)'}
    >
      {/* logo */}
      <Box pb={4}>
        <Image src={'/images/logo.png'} width={'35'} height={'35'} alt=""></Image>
      </Box>
      {/* 导航列表 */}
      <Box flex={1}>
        {navbarList.map((item) => (
          <Flex
            key={item.label}
            mb={4}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            onClick={() => {
              if (item.link === router.pathname) return;
              router.push(item.link, undefined, {
                shallow: true
              });
            }}
            cursor={'pointer'}
            fontSize={'sm'}
            w={'65px'}
            h={'70px'}
            borderRadius={'md'}
            {...(item.activeLink.includes(router.pathname)
              ? {
                  color: '#2B6CB0',
                  backgroundColor: '#222e46'
                }
              : {
                  color: '#4A5568',
                  backgroundColor: 'transparent'
                })}
          >
            <MyIcon
              name={item.icon as any}
              width={'24px'}
              height={'24px'}
              fill={item.activeLink.includes(router.pathname) ? 'white' : '#41787a'}
            />
            <Box mt={1} color={item.activeLink.includes(router.pathname) ? 'white' : '#41787a' }>{item.label}</Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Navbar;
