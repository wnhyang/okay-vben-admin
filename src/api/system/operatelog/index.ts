import { defHttp } from '/@/utils/http/axios';

export interface OperateLogPageReqVO extends PageParam {
  module?: string;
  userNickname?: string;
  type?: number;
  resultCode?: boolean;
  startTime?: Date;
  endTime?: Date;
}

export const getOperateLogPage = (params: OperateLogPageReqVO) =>
  defHttp.get({ url: '/system/operateLog/page', params });
