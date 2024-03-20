import { defHttp } from '/@/utils/http/axios';

export interface DictTypeVO {
  id: number;
  type: string;
  name: string;
  status: number;
  remark: string;
  createTime: Date;
}

export interface DictTypePageReqVO extends PageParam {
  type?: string;
  name?: string;
  status?: number;
  startTime?: Date;
  endTime?: Date;
}

export const getDictType = (id: number) => defHttp.get({ url: `/system/dictType?id=${id}` });

export const createDictType = (data: DictTypeVO) => defHttp.post({ url: '/system/dictType', data });

export const updateDictType = (data: DictTypeVO) => defHttp.put({ url: '/system/dictType', data });

export const deleteDictType = (id: number) => defHttp.delete({ url: `/system/dictType?id=${id}` });

export const getDictTypePage = (params: DictTypePageReqVO) =>
  defHttp.get({ url: '/system/dictType/page', params });

export const getSimpleListDictType = () => defHttp.get({ url: '/system/dictType/simpleList' });
