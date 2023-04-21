/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-19 22:38:10
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-21 20:07:11
 * @FilePath: \github\AK47-GPT\src\pages\model\list\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Card,
  Flex,
  Select,
  Modal,
  Tag,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { modelList } from '@/constants/model';
import { useRouter } from "next/router";

export default function list() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const router = useRouter();
  // const { colorMode, toggleColorMode } = useColorMode();

  const [refresh, setRefresh] = useState(false);

  interface ModelFormType {
    name: string
    type: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelFormType>();
  

  const onChatPlay = () => {
    console.log('onChatPlay');
    const chatId = 1000
    router.push(`/chat?chatId=${chatId}`, undefined, {
      shallow: true
    });
  }
  const openClick = () => {
    // onOpen(true);
    //  = useColorMode()
  };
  return (
    <>
      <Box margin={"25px"}>
        <Card px={6} py={3} bgColor={"#18181b"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box fontWeight={"bold"} fontSize={"xl"} color={"white"}>
              模型列表
            </Box>

            <Button variant={"outline"} colorScheme="teal" onClick={onOpen}>
              新建模型
            </Button>
          </Flex>
        </Card>
        <TableContainer bg={"#18181b.50"} marginTop={"10px"} border={1} display={"flex"} justifyItems={"center"}>
          <Table size="sm" variant={"simple"} >
            <Thead >
              <Tr>
                <Th color={"#d6d6d6"}>模型名称</Th>
                <Th color={"#d6d6d6"}>模型类型</Th>
                <Th color={"#d6d6d6"}>最后操作时间</Th>
                <Th color={"#d6d6d6"}>状态</Th>
                <Th color={"#d6d6d6"}>操作</Th>
              </Tr>
            </Thead>
            <Tbody color={"#c2c2c2"}>
              <Tr>
                <Td>AK知识库</Td>
                <Td>知识库</Td>
                <Td>2023-04-12 00:52</Td>
                <Td>
                  <Tag colorScheme={"green"} variant="solid" px={3} size={"md"}>
                    运行中
                  </Tag>
                </Td>
                <Td>
                  {" "}
                  <Button size='sm' mr={2} variant='solid' colorScheme="teal">对话</Button>
                  <Button size='sm' variant={"outline"} colorScheme="teal">
                    编辑
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>初中老师</Td>
                <Td>GPT-3.5</Td>
                <Td>2023-04-12 00:52</Td>
                <Td>
                  <Tag colorScheme={"green"} variant="solid" px={3} size={"md"}>
                    运行中
                  </Tag>
                </Td>
                <Td>
                  {" "}
                  <Button size='sm' mr={2} variant='solid' colorScheme="teal">对话</Button>
                  <Button size='sm' variant={"outline"} colorScheme="teal">
                    编辑
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>大学老师</Td>
                <Td>GPT-4.0</Td>
                <Td>2023-04-12 00:51</Td>
                <Td>
                  <Tag colorScheme={"green"} variant="solid" px={3} size={"md"}>
                    运行中
                  </Tag>
                </Td>
                <Td>
                  {" "}
                  <Button size='sm' mr={2} variant='solid' colorScheme="teal" onClick={onChatPlay}>对话</Button>
                  <Button size='sm' variant={"outline"} colorScheme="teal">
                    编辑
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {isOpen && (
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>创建模型</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <Input ref={initialRef} placeholder="模型名称" />
                </FormControl>

                <FormControl mt={4}>
                <Select
                placeholder="选择基础模型类型"
                {...register('type', {
                  required: '底层模型不能为空',
                  onChange() {
                    setRefresh(!refresh);
                  }
                })}
              >
                {modelList.map((item) => (
                  <option key={item.model} value={item.model}>
                    {item.name}
                  </option>
                ))}
              </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  保存
                </Button>
                <Button onClick={onClose}>取消</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
}
