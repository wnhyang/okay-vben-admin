import { defHttp } from '/@/utils/http/axios';

export interface LoginLogPageReqVO extends PageParam {
  userIp?: string;
  username?: string;
  result?: boolean;
  createTime?: Date[];
}

export const getLoginLogPage = (params: LoginLogPageReqVO) =>
  defHttp.get({ url: '/system/loginLog/page', params });
