/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-24 06:18:11
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-25 05:32:17
 * @FilePath: \AK47-GPT\src\pages\chat\components\rightGroup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Box, Image, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./rightGroup.module.scss";
export default function leftGroup() {
  const questionAndAnswerData = [
    { question: "你好", answer: "你好" },
    { question: "你叫什么名字", answer: "我叫小明" },
    { question: "你今年多大了", answer: "我今年10岁了" },
    { question: "你是男孩还是女孩", answer: "我是男孩" },
    { question: "你喜欢什么运动", answer: "我喜欢足球" },
    { question: "你今年多大了", answer: "我今年10岁了" },
    { question: "你是男孩还是女孩", answer: "我是男孩" },
    { question: "你喜欢什么运动", answer: "我喜欢足球" },
    { question: "你今年多大了", answer: "我今年10岁了" },
    { question: "你是男孩还是女孩", answer: "我是男孩" },
    { question: "你喜欢什么运动", answer: "我喜欢足球" },
  ];


  const [loadingState, setLoadingState] = useState(false)

  const submitClick = () => {
    setLoadingState(true);
  }
  return (
    <>
      <Box width={"100%"} bg={"black"} height="100vh">
        <div className={styles.chatRight}>
          <div className={styles.rightScroll}>
            <div className={styles.rightContent}>
              {questionAndAnswerData.map((item, index) => (
                <div key={index}>
                  <div className={styles.questionRight} >
                    <div className={styles.questionRightContent}>
                      <div className={styles.questionRightContentTime}>
                        2023/3/9 11:29:19
                      </div>
                      <div className={styles.questionRightContentText}>
                        {item.question}
                      </div>
                    </div>
                    <Image
                      src={"/images/icon_avator.png"}
                      width={"30px"}
                      height={"30px"}
                      marginLeft={"10px"}
                      alt=""
                    ></Image>
                  </div>

                  <div className={styles.answerLeft}>
                    <Box width="40px">
                      <Image
                          src={"/images/openai.svg"}
                          width={"30px"}
                          height={"30px"}
                          marginLeft={"10px"}
                          alt=""
                        ></Image>
                      </Box>
          
                      <div className={styles.answerLeftContent}>
                        <div className={styles.answerLeftContentTime}
                        >
                          2023/3/9 11:29:19
                        </div>
                        <div
                          className={styles.answerLeftContentText}
                        >
                          {item.answer}
                        </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {
            loadingState?           
            <Box textAlign={"center"} margin={"20px 0"} >
              <Button size='sm' mr={2} variant='solid' colorScheme="teal" isLoading={loadingState}
                loadingText='正在请求数据，请稍后......'
                ></Button>
            </Box>
          : ""
          }

          <div className={styles.footContent}>
            <Button size='sm' mr={2} variant='solid' colorScheme="teal">生成会话截图</Button>
            <Textarea color={"white"} size="xs" placeholder='Send a message......' paddingTop={"10px"} margin={"8px"} />
            <Button size='sm' mr={2} variant='solid' colorScheme="teal" onClick={submitClick}>
              发送
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
