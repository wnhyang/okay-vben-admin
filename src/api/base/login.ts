import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import type { RouteMeta } from 'vue-router';

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  name: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  roles: RoleInfo[];
}

export interface userModel {
  id: string | number;
  avatar: string;
  nickname: string;
  remark: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  user: userModel;
  roles: string[];
  permissions: string[];
  menus: RouteItem[];
}

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: '/auth/login',
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: '/system/user/info' }, { errorMessageMode: 'none' });
}

/**
 * @description: Get user menu based on id
 */
export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({ url: '/getMenuList' });
};

export function doLogout() {
  return defHttp.delete({ url: '/auth/logout' });
}

export function testRetry() {
  return defHttp.get(
    { url: '/testRetry' },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
