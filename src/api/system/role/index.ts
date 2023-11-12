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

export const getRole = (id: number) => defHttp.get({ url: `/system/role/get?id=${id}` });

export const createRole = (data: RoleVO) => defHttp.post({ url: '/system/role/create', data });

export const updateRole = (data: RoleVO) => defHttp.put({ url: '/system/role/update', data });

export const deleteRole = (id: number) => defHttp.delete({ url: `/system/role/delete?id=${id}` });
