/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-18 22:12:49
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-19 00:18:36
 * @FilePath: /ak47-gpt/src/pages/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Box , Center, Flex, Text } from '@chakra-ui/react'
import {
  Input,
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import styles from './index.module.scss';

const inter = Inter({ subsets: ['latin'] })


export default function Login() {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.leftLogin}></div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.projectName}>登录&nbsp;&nbsp;AK47-GPT</div>
              <form className={styles.formName}>
                <FormControl mt={8}>
                  <Input type='email' placeholder='邮箱和手机号'  />
                </FormControl>
                <FormControl mt={8}>
                  <Input type='password' placeholder='密码'  />
                </FormControl>
                <Flex align={'center'} justifyContent={'space-between'} mt={6} color={'blue.600'}>
                  <Box
                    cursor={'pointer'}
                    _hover={{ textDecoration: 'underline' }}
                    fontSize="sm"
                  >
                    忘记密码?
                  </Box>
                  <Box
                    cursor={'pointer'}
                    _hover={{ textDecoration: 'underline' }}
                    fontSize="sm"
                  >
                    注册账号
                  </Box>
                </Flex>
                <Button
                  type="submit"
                  mt={8}
                  w={'100%'}
                  colorScheme='messenger'
                >
                  登录
                </Button>
              </form>   
        </div>
      </div>
    </>
  )
}
