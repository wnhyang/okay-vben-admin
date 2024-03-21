import { defHttp } from '/@/utils/http/axios';

export interface DictDataVO {
  id: number;
  sort: number;
  label: string;
  value: string;
  dictType: string;
  color: string;
  status: number;
  remark: string;
  createTime: Date;
}

export interface DictDataPageReqVO extends PageParam {
  label?: string;
  dictType?: string;
  status?: number;
  startTime?: Date;
  endTime?: Date;
}

export const getDictData = (id: number) => defHttp.get({ url: `/system/dictData?id=${id}` });

export const createDictData = (data: DictDataVO) => defHttp.post({ url: '/system/dictData', data });

export const updateDictData = (data: DictDataVO) => defHttp.put({ url: '/system/dictData', data });

export const deleteDictData = (id: number) => defHttp.delete({ url: `/system/dictData?id=${id}` });

export const getDictDataPage = (params: DictDataPageReqVO) =>
  defHttp.get({ url: '/system/dictData/page', params });

export const simpleListDictData = () => defHttp.get({ url: '/system/dictData/simpleList' });

export const getDictDataListByDictType = (dictType: string) =>
  defHttp.get({ url: `/system/dictData/listType?dictType=${dictType}` });
