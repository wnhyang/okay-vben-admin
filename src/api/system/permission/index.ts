import { defHttp } from '/@/utils/http/axios';

export interface UserRoleReqVO {
  userId: number;
  roleIds: number[];
}

export interface RoleMenuReqVO {
  roleId: number;
  menuIds: number[];
}

export const getUserRoleList = (userId: number) =>
  defHttp.get({ url: `/system/permission/getUserRoleList?userId=${userId}` });

export const userRole = (data: UserRoleReqVO) =>
  defHttp.post({ url: `/system/permission/userRole`, data });

export const getRoleMenuList = (roleId: number) =>
  defHttp.get({ url: `/system/permission/getRoleMenuList?roleId=${roleId}` });

export const roleMenu = (data: RoleMenuReqVO) =>
  defHttp.post({ url: `/system/permission/roleMenu`, data });
