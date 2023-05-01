/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-21 20:35:58
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-05-01 19:27:58
 * @FilePath: \AK47-GPT\src\pages\chat\components\leftGroup.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { Box, OrderedList, ListIcon, ListItem, Flex, Spacer } from "@chakra-ui/react"
import styles from './../index.module.scss'
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
export default function leftGroup () {

  const contentList = [
    {
      id: 1,
      title: "Next.js部署"
    }, 
    {
      id: 2,
      title: "chkra-ui使用",
      selected: true
    },
    {
      id: 3,
      title: "Next.js部署"
    }, 
    {
      id: 4,
      title: "chkra-ui使用"
    },
    {
      id: 5,
      title: "Next.js部署"
    }, 
    {
      id: 6,
      title: "chkra-ui使用"
    }
  ]

  return (
    <>
    <Box className={styles.chatLeft}>
      <div className={styles.chatLeftTop}>
      
      <AddIcon margin={"10px"}  w={4} h={4} color="white"/>
          <div>New chat</div>
        </div>
      <Box>
      <OrderedList spacing={1} marginTop={"10px"} >
        {
          contentList.map(item => (
            <ListItem key={item.id} color={"white"} margin={"10px"} bgColor={ item.selected ? "red": 'black'}>
              <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent={"center"}>
                <Box>{item.title}</Box>
                <Spacer />
                <Box gap='2'>
                  <EditIcon w={3} h={3} marginRight={"5px"} color="white"/>
                  <DeleteIcon w={3} h={3} color="white"/>
                </Box>
              </Flex>
          </ListItem>
          ))
        }
      </OrderedList>
      </Box>
    </Box>
    </>
  )
}