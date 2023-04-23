/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-21 19:59:03
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-23 09:12:13
 * @FilePath: \AK47-GPT\src\pages\chat\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { Box } from "@chakra-ui/react";
import styles from './index.module.scss'
import LeftGroup from './components/leftGroup'
import RightGroup from './components/rightGroup'

export default function Chat() {

  const setGrouping = () => {

  }

  return (
    <>
      <Box className={styles.chatContent} >
        <LeftGroup />
        <RightGroup />
      </Box>
    </>
  )
} 