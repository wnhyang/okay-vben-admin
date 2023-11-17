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

export type MenuList = PageResult<MenuVO>;

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuList>({ url: '/system/menu/list', params });

export const getMenuSimpleList = () => defHttp.get<MenuList>({ url: '/system/menu/simpleList' });

export const getMenuSimpleListA = () => defHttp.get<MenuList>({ url: '/system/menu/simpleListA' });

export const updateMenu = (data: MenuVO) => defHttp.put({ url: '/system/menu/update', data });

export const createMenu = (data: MenuVO) => defHttp.post({ url: '/system/menu/create', data });

export const deleteMenu = (id: number) => defHttp.delete({ url: `/system/menu/delete?id=${id}` });

export const getMenu = (id: number) => defHttp.get<MenuVO>({ url: `/system/menu/get?id=${id}` });
