/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-22 08:20:43
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-23 06:14:29
 * @FilePath: /ak47-gpt/src/pages/model/edit/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Slider,
  Tag,
  Tooltip,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Textarea
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from '@chakra-ui/icons';


export default function ModelEdit() {
const canTrain = true;
  return (
    <>
      <Box margin={"25px"}>
        <Card px={6} py={3} bgColor={"#051626"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box
              fontWeight={"bold"}
              fontSize={"xl"}
              color={"white"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              初中老师
              <Tag
                marginLeft={"5px"}
                colorScheme={"green"}
                variant="solid"
                px={3}
                size={"md"}
              >
                运行中
              </Tag>
            </Box>

            <Box>
              <Button
                marginRight={"8px"}
                size={"sm"}
                variant={"outline"}
                colorScheme="teal"
              >
                体验对话
              </Button>
              <Button variant={"outline"} size={"sm"} colorScheme="teal">
                保存模型
              </Button>
            </Box>
          </Flex>
        </Card>
        <Card marginTop={"20px"} bgColor={"#343540"}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%">
              <Card p={2}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Box fontWeight={"bold"}>基本信息</Box>
                </Flex>
                <FormControl mt={4}>
                  <Flex alignItems={"center"}>
                    <Box flex={"0 0 80px"} w={0}>
                      名称:
                    </Box>
                    <Input placeholder={"请输入名称"}></Input>
                  </Flex>
                  <Flex alignItems={"center"} mt={4}>
                    <Box flex={"0 0 80px"} w={0}>
                      modelId:
                    </Box>
                    <Box>xxxxxxxxxxxxxxxxxx</Box>
                  </Flex>
                </FormControl>
                <Flex alignItems={"center"} mt={4}>
                  <Box flex={"0 0 80px"} w={0}>
                    底层模型:
                  </Box>
                  <Box>xxxxxxxxxxxxxxxxxxxxxxx</Box>
                </Flex>
                <Flex alignItems={"center"} mt={4}>
                  <Box flex={"0 0 80px"} w={0}>
                    价格:
                  </Box>
                  <Box>0.03元/ 元/1K tokens(包括上下文和回答)</Box>
                </Flex>
                <Flex mt={5} alignItems={"center"}>
                  <Box flex={"0 0 80px"}>删除:</Box>
                  <Button colorScheme={"gray"} variant={"outline"} size={"sm"}>
                    删除模型
                  </Button>
                </Flex>
              </Card>
            </GridItem>
            <Card p={4}>
        <Box fontWeight={'bold'}>模型效果</Box>
        <FormControl mt={4}>
          <Flex alignItems={'center'}>
            <Box flex={'0 0 80px'} w={0}>
              <Box as={'span'} mr={2}>
                温度
              </Box>
              <Tooltip label={'温度越高，模型的发散能力越强；温度越低，内容越严谨。'}>
                <QuestionOutlineIcon />
              </Tooltip>
            </Box>

            <Slider
              aria-label="slider-ex-1"
              min={0}
              max={10}
              step={1}
              value={4}
              onChange={(e) => {
                // setValue('temperature', e);
                // setRefresh(!refresh);
              }}
            >
              <SliderMark
                value={4}
                textAlign="center"
                bg="blue.500"
                color="white"
                w={'18px'}
                h={'18px'}
                borderRadius={'100px'}
                fontSize={'xs'}
                transform={'translate(-50%, -200%)'}
              >
                4
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </FormControl>
        <Box mt={4}>
          <Box mb={1}>系统提示词</Box>
          <Textarea
            rows={6}
            maxLength={-1}
            placeholder={
              canTrain
                ? '训练的模型会根据知识库内容，生成一部分系统提示词，因此在对话时需要消耗更多的 tokens。你仍可以增加一些提示词，让其效果更精确。'
                : '模型默认的 prompt 词，通过调整该内容，可以生成一个限定范围的模型。\n\n注意，改功能会影响对话的整体朝向！'
            }
          />
        </Box>
      </Card>
            <GridItem w="100%"></GridItem>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
