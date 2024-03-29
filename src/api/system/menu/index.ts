import { defHttp } from '/@/utils/http/axios';

export type MenuParams = {
  title?: string;
  status?: string;
};

export interface MenuVO {
  id: number;
  type: number;
  name: string;
  path: string;
  component: string;
  redirect: string;
  orderNo: number;
  title: string;
  icon: string;
  hideBreadcrumb: boolean;
  currentActiveMenu: string;
  keepalive: boolean;
  permission: string;
  parentId: number;
  isExt: boolean;
  isShow: boolean;
  status: number;
}

export const getMenuList = (params?: MenuParams) =>
  defHttp.get({ url: '/system/menu/list', params });

export const getMenuSimpleList = () => defHttp.get({ url: '/system/menu/simpleList' });

export const getMenuSimpleListA = () => defHttp.get({ url: '/system/menu/simpleListA' });

export const updateMenu = (data: MenuVO) => defHttp.put({ url: '/system/menu', data });

export const createMenu = (data: MenuVO) => defHttp.post({ url: '/system/menu', data });

export const deleteMenu = (id: number) => defHttp.delete({ url: `/system/menu?id=${id}` });

export const getMenu = (id: number) => defHttp.get({ url: `/system/menu?id=${id}` });
