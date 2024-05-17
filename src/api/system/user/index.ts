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
  roleIds: number[];
}

export interface UserPageReqVO extends PageParam {
  username?: string;
  mobile?: string;
  status?: number;
  startTime?: Date;
  endTime?: Date;
}

export const getUser = (id: number) => defHttp.get({ url: `/system/user?id=${id}` });

export const createUser = (data: UserVO) => defHttp.post({ url: '/system/user', data });

export const updateUser = (data: UserVO) => defHttp.put({ url: '/system/user', data });

export const deleteUser = (id: number) => defHttp.delete({ url: `/system/user?id=${id}` });

export const getUserPage = (params: UserPageReqVO) =>
  defHttp.get({ url: '/system/user/page', params });

export const exportExcel = (params: UserPageReqVO) =>
  defHttp.download({ url: '/system/user/export', params }, '用户.xls');
