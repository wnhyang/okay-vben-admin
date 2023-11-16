import { defHttp } from '/@/utils/http/axios';

export interface DictDataVO {
  id: number;
  sort: number;
  label: string;
  value: string;
  dictType: string;
  status: number;
  remark: string;
  createTime: Date;
}

export interface DictDataPageReqVO extends PageParam {
  label?: string;
  dictType?: string;
  status?: number;
  createTime?: Date[];
}

export const getDictData = (id: number) => defHttp.get({ url: `/system/dictData/get?id=${id}` });

export const createDictData = (data: DictDataVO) =>
  defHttp.post({ url: '/system/dictData/create', data });

export const updateDictData = (data: DictDataVO) =>
  defHttp.put({ url: '/system/dictData/update', data });

export const deleteDictData = (id: number) =>
  defHttp.delete({ url: `/system/dictData/delete?id=${id}` });

export const getDictDataPage = (params: DictDataPageReqVO) =>
  defHttp.get({ url: '/system/dictData/page', params });
