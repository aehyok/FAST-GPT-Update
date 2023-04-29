/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-18 22:12:49
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-28 22:25:58
 * @FilePath: \AK47-GPT\src\pages\login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback, useState } from "react";
import { Button, Box, Center, Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import styles from "./index.module.scss";
import { postLogin } from "@/api/user";

export default function Login() {
  interface LoginFormType {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const [requesting, setRequesting] = useState(false);

  const onclickLogin = useCallback(
    async ({ email, password }: LoginFormType) => {
      console.log("onclickLogin", email, password);
      setRequesting(true);
      const response = await postLogin({ email,password });
      console.log(response, "后端返回给前端的代码");
      // try {
      //   loginSuccess(
      //     await postLogin({
      //       email,
      //       password
      //     })
      //   );
      //   toast({
      //     title: '登录成功',
      //     status: 'success'
      //   });
      // } catch (error: any) {
      //   toast({
      //     title: error.message || '登录异常',
      //     status: 'error'
      //   });
      // }
      // setRequesting(false);
    },
    // [loginSuccess, toast]
    []
  );

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.leftLogin}></div>

        <div className={styles.contentWrapper}>
          <div className={styles.projectName}>登录&nbsp;&nbsp;AK47-GPT</div>
          <form
            className={styles.formName}
            onSubmit={handleSubmit(onclickLogin)}
          >
            <FormControl mt={8} isInvalid={!!errors.email}>
              <Input
                type="email"
                color="white"
                placeholder="邮箱和手机号"
                {...register("email", {
                  required: "邮箱不能为空",
                  pattern: {
                    value:
                      /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
                    message: "请输入正确的邮箱格式",
                  },
                })}
              />
              <FormErrorMessage position={"absolute"} fontSize="xs">
                {!!errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={8} isInvalid={!!errors.password}>
              <Input
                type="password"
                placeholder="密码"
                color="white"
                {...register("password", {
                  required: "密码不能为空",
                  minLength: {
                    value: 4,
                    message: "密码最少4位最多12位",
                  },
                  maxLength: {
                    value: 12,
                    message: "密码最少4位最多12位",
                  },
                })}
              />
              <FormErrorMessage position={"absolute"} fontSize="xs">
                {!!errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Flex
              align={"center"}
              justifyContent={"space-between"}
              mt={6}
              color={"blue.100"}
            >
              <Box
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                fontSize="sm"
              >
                忘记密码?
              </Box>
              <Box
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                fontSize="sm"
              >
                注册账号
              </Box>
            </Flex>
            <Button
              type="submit"
              mt={8}
              w={"100%"}
              colorScheme="messenger"
              isLoading={requesting}
            >
              登录
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
