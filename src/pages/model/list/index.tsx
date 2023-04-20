/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-19 22:38:10
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-21 01:05:45
 * @FilePath: \AK47-GPT\src\pages\model\list\index.tsx
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
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React  from "react";
import { Box } from '@chakra-ui/react';

export default function list() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { colorMode, toggleColorMode } = useColorMode()
  
  const openClick = () => {
    // onOpen(true);
    //  = useColorMode()
    toggleColorMode
  }
  return (
    <>
    <Box margin={"25px"}>

    <Card px={6} py={3} bgColor={"#18181b"} >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={'bold'} fontSize={'xl'} color={"white"}>
            模型列表
          </Box>

          <Button variant={'outline'} colorScheme='teal'  onClick={onOpen}>
            新建模型
          </Button>
        </Flex>
      </Card>
      <TableContainer  bg={"#18181b.50"} marginTop={"10px"}  border={1}>
        <Table size="sm" variant={'simple'}  >
          <Thead>
            <Tr>
              <Th color={"#d6d6d6"}>To convert</Th>
              <Th color={"#d6d6d6"}>into</Th>
              <Th color={"#d6d6d6"} isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody color={"#c2c2c2"}>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
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
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      </Box>
    </>
  );
}
