/*
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-04-21 20:35:58
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-05-02 18:03:04
 * @FilePath: \AK47-GPT\src\pages\chat\components\leftGroup.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import {
  Box,
  OrderedList,
  ListIcon,
  ListItem,
  Flex,
  Spacer,
  List,
} from "@chakra-ui/react";
import styles from "./../index.module.scss";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import MyIcon from "@/components/Icon";
import { useState } from "react";
export default function leftGroup() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      title: "Next.js部署",
      selected: false,
      edited: false,
    },
    {
      id: 2,
      title: "chkra-ui使用",
      selected: true,
      edited: false,
    },
    {
      id: 3,
      title: "Next.js部署",
      selected: false,
      edited: false,
    },
    {
      id: 4,
      title: "chkra-ui使用",
      selected: false,
      edited: false,
    },
    {
      id: 5,
      title: "Next.js部署",
      selected: false,
      edited: false,
    },
    {
      id: 6,
      title: "chkra-ui使用",
      selected: false,
      edited: false,
    },
  ]);

  return (
    <>
      <Box className={styles.chatLeft}>
        <div className={styles.chatLeftTop}>
          <AddIcon margin={"10px"} w={4} h={4} color="white" />
          <div>New chat</div>
        </div>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          width={"100%"}
          padding={"5px"}
        >
          {contentList.map((item) => (
            <Box
              width={"100%"}
              key={item.id}
              bgColor={item.selected ? "#343540" : ""}
              color={"white"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"5px 10px"}
              cursor={"pointer"}
              borderRadius={"5px"}
              onClick={() => {
                const updateList = contentList.map((current) => {
                  current.selected = false;
                  if (current.id == item.id) {
                    current.selected = true;
                  }
                  return current;
                });
                setContentList(updateList);
              }}
            >
              <MyIcon
                name={"message"}
                width={"15px"}
                height={"15px"}
                fill={"white"}
                paddingLeft={"10px"}
                paddingRight={"10px"}
              />
              <Box flex={1}>{item.title}</Box>
              {item.selected ? (
                !item.edited ? (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <MyIcon
                      onClick={() => {
                        console.log("edit");
                        const updateList = contentList.map((current) => {
                          current.edited = false;
                          if (current.id == item.id) {
                            current.edited = true;
                          }
                          return current;
                        });
                        setContentList(updateList);
                        console.log(contentList, "contenList");
                      }}
                      name={"edit"}
                      width={"15px"}
                      height={"15px"}
                      fill={"white"}
                      marginRight={"5px"}
                    />

                    <MyIcon
                      name={"delete"}
                      width={"15px"}
                      height={"15px"}
                      fill={"white"}
                    />
                  </Box>
                ) : (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <MyIcon
                      name={"yes"}
                      width={"15px"}
                      height={"15px"}
                      fill={"white"}
                      marginRight={"5px"}
                    />

                    <MyIcon
                      name={"no"}
                      width={"15px"}
                      height={"15px"}
                      fill={"white"}
                    />
                  </Box>
                )
              ) : (
                ""
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
