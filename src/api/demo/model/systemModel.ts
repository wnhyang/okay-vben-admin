import { PageParam, PageResult } from '/@/api/model/baseModel';

export type AccountParams = PageParam & {
  account?: string;
  nickname?: string;
  [key: string]: any;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = PageParam & RoleParams;

export type DeptParams = {
  deptName?: string;
  status?: string;
};

export interface AccountListItem {
  id: string;
  account: string;
  email: string;
  nickname: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface DeptListItem {
  id: string;
  orderNo: string;
  createTime: string;
  remark: string;
  status: number;
}

export interface RoleListItem {
  id: string;
  roleName: string;
  roleValue: string;
  status: number;
  orderNo: string;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = PageResult<AccountListItem>;

export type DeptListGetResultModel = PageResult<DeptListItem>;

export type RolePageListGetResultModel = PageResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
