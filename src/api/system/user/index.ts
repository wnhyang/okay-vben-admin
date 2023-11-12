import { defHttp } from '/@/utils/http/axios';

export interface UserVO {
  id: number;
  username: string;
  nickname: string;
  type: number;
  email: string;
  mobile: string;
  sex: number;
  avatar: string;
  loginIp: string;
  status: number;
  remark: string;
  loginDate: Date;
  createTime: Date;
}

export const getUser = (id: number) => defHttp.get<UserVO>({ url: `/system/user/get?id=${id}` });

export const createUser = (data: UserVO) => defHttp.post({ url: '/system/user/create', data });

export const updateUser = (data: UserVO) => defHttp.put({ url: '/system/user/update', data });

export const deleteUser = (id: number) => defHttp.delete({ url: `/system/user/delete?id=${id}` });
