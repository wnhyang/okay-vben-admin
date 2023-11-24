import { defHttp } from '/@/utils/http/axios';

export interface UserProfileUpdateReqVO {
  nickname?: string;
  email?: string;
  mobile?: string;
  sex?: number;
  remark?: string;
}

export interface UserProfileUpdatePasswordReqVO {
  oldPassword?: string;
  newPassword?: string;
}

export const getUserProfile = () => defHttp.get({ url: `/system/user/profile/get` });

export const updateUserProfile = (data: UserProfileUpdateReqVO) =>
  defHttp.put({ url: '/system/user/profile/update', data });

export const updateUserPassword = (data: UserProfileUpdatePasswordReqVO) =>
  defHttp.put({ url: '/system/user/profile/updatePassword', data });
