/*
 * @Author: aehyok 455043818@qq.com
 * @Date: 2023-04-19 20:30:30
 * @LastEditors: aehyok 455043818@qq.com
 * @LastEditTime: 2023-04-29 20:09:22
 * @FilePath: /ak47-gpt/src/components/Icon/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

const map = {
  audio: require('./icons/audio.svg').default,
  video: require('./icons/video.svg').default,
  image: require('./icons/image.svg').default,
  chat: require('./icons/chat.svg').default,
  account: require('./icons/account.svg').default,
  model: require('./icons/model.svg').default,
  share: require('./icons/share.svg').default,
  home: require('./icons/home.svg').default,
  menu: require('./icons/menu.svg').default,
  pay: require('./icons/pay.svg').default,
  copy: require('./icons/copy.svg').default,
  chatSend: require('./icons/chatSend.svg').default,
  board: require('./icons/board.svg').default,
  develop: require('./icons/develop.svg').default,
  user: require('./icons/user.svg').default,
  chatting: require('./icons/chatting.svg').default
};

export type IconName = keyof typeof map;

const MyIcon = ({ name, w = 'auto', h = 'auto', ...props }: { name: IconName } & IconProps) => {
  return map[name] ? (
    <Icon as={map[name]} w={w} h={h} boxSizing={'content-box'} verticalAlign={'top'} {...props} />
  ) : null;
};

export default MyIcon;
