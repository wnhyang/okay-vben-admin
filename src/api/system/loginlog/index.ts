import { defHttp } from '/@/utils/http/axios';

export interface LoginLogPageReqVO extends PageParam {
  userIp?: string;
  username?: string;
  result?: boolean;
  createTime?: Date[];
}

export interface LoginLogVO {
  id: number;
  loginType: number;
  userId: number;
  userIp: string;
  userAgent: string;
  account: string;
  result: number;
  createTime: Date;
}

export type LoginLogPageRespVO = PageResult<LoginLogVO>;

export const getLoginLogPage = (params: LoginLogPageReqVO) =>
  defHttp.get<LoginLogPageRespVO>({ url: '/system/loginLog/page', params });
