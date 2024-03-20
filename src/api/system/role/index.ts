import { defHttp } from '/@/utils/http/axios';

export interface RoleVO {
  id: number;
  name: string;
  value: string;
  sort: number;
  status: number;
  remark: string;
  createTime: Date;
}

export interface RolePageReqVO extends PageParam {
  name?: string;
  value?: string;
  status?: number;
  startTime?: Date;
  endTime?: Date;
}

export const getRole = (id: number) => defHttp.get({ url: `/system/role?id=${id}` });

export const createRole = (data: RoleVO) => defHttp.post({ url: '/system/role', data });

export const updateRole = (data: RoleVO) => defHttp.put({ url: '/system/role', data });

export const deleteRole = (id: number) => defHttp.delete({ url: `/system/role?id=${id}` });

export const getRolePage = (params: RolePageReqVO) =>
  defHttp.get({ url: '/system/role/page', params });

export const getSimpleRoleList = () => defHttp.get({ url: '/system/role/simpleList' });
