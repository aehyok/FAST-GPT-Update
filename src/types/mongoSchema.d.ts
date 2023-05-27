export interface UserModelSchema {
  _id: string;
  username: string;
  password: string;
  avatar: string;
  balance: number;
  inviterId?: string;
  promotionAmount: number;
  openaiKey: string;
  createTime: number;
  promotion: {
    rate: number;
  };
}