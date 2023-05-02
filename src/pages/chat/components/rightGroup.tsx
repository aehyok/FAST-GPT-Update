/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-24 06:18:11
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-05-03 06:07:11
 * @FilePath: \AK47-GPT\src\pages\chat\components\rightGroup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Box, Image, Button, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./rightGroup.module.scss";
import Markdown from "@/components/Markdown";

export default function leftGroup() {
  const questionAndAnswerData = [
    { question: "你好", answer: "你好" },
    { question: "你叫什么名字", answer: "我叫小明" },
    {
      question:
        "你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动你喜欢什么运动",
      answer:
        '\n\n用GO语言实现Hello World，代码如下：\n\n```go\npackage main\n\nimport "fmt"\n\nfunc main() {\n fmt.Println("Hello, World!")\n}\n```\n\n输出结果：\n\n```\nHello, World!\n```\n\n以上代码使用 `fmt` 包中的 `Println` 函数输出了一条字符串。注意代码的组织形式：`main` 函数是程序的入口，必须包含在主包内。在此例中，我们定义了一个名为 `main` 的包，其中包含一个 `main` 函数。当执行程序时，将首先运行 `main` 函数，并输出一条 `Hello, World!` 的信息。',
    },
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

  const [loadingState, setLoadingState] = useState(false);

  const submitClick = () => {
    setLoadingState(true);
  };
  return (
    <>
      <Box width={"100%"} bg={"black"} height="100vh">
        <div className={styles.chatRight}>
          <div className={styles.rightScroll}>
            <div className={styles.rightContent}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                paddingBottom={"10px"}
                paddingTop={"10px"}
              >
                <Select
                  defaultValue="GPT-3.5"
                  width={"150px"}
                  color={"white"}
                  height={"30px"}
                >
                  <option value="option1">GPT-3.5</option>
                  <option value="option1">GPT-4</option>
                </Select>
              </Box>
              {questionAndAnswerData.map((item, index) => (
                <Box key={index}>
                  <div className={styles.questionRight}>
                    <div className={styles.questionRightContent}>
                      <div className={styles.questionRightContentTime}>
                        2023/3/9 11:29:19
                      </div>
                      <div className={styles.questionRightContentText}>
                        <Box display={"flex"} alignItems={"center"}  bgColor={"#a1dc95"} borderRadius={"8px"} lineHeight={"28px"} padding={"0px 10px"}>
                        {item.question}
                        </Box>
                      </div>
                    </div>
                    <Box width="40px">
                      <Image
                        src={"/images/icon_avator.png"}
                        width={"24px"}
                        height={"24px"}
                        marginLeft={"10px"}
                        marginTop={"20px"}
                        alt=""
                      ></Image>
                    </Box>
                  </div>

                  <div className={styles.answerLeft}>
                    <Box width={"24px"}>
                      <Image
                        src={"/images/openai.svg"}
                        width={"24px"}
                        height={"24px"}
                        alt=""
                      ></Image>
                    </Box>

                    <div className={styles.answerLeftContent}>
                      <div className={styles.answerLeftContentTime}>
                        2023/3/9 11:29:19
                      </div>
                      <div className={styles.answerLeftContentText}>
                        {/* {item.answer} */}
                        <Markdown source={item.answer} isChatting={false} />
                      </div>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
          </div>

          {loadingState ? (
            <Box textAlign={"center"} margin={"20px 0"}>
              <Button
                size="sm"
                mr={2}
                variant="solid"
                colorScheme="teal"
                isLoading={loadingState}
                loadingText="正在请求数据，请稍后......"
              ></Button>
            </Box>
          ) : (
            ""
          )}

          <div className={styles.footContent}>
            <Button size="sm" mr={2} variant="solid" colorScheme="teal">
              生成会话截图
            </Button>
            <Textarea
              color={"white"}
              size="xs"
              placeholder="Send a message......"
              paddingTop={"10px"}
              margin={"8px"}
            />
            <Button
              size="sm"
              mr={2}
              variant="solid"
              colorScheme="teal"
              onClick={submitClick}
            >
              发送
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
