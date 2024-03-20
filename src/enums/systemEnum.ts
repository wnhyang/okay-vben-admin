export interface Option {
  value: string;
  label: string;
}

/**
 * 全局通用状态枚举
 */
export const CommonStatus = {
  ON: 0, // 开启
  OFF: 1, // 禁用
};

/**
 * 全局成功失败枚举
 */
export const CommonSuccessEnum = {
  SUCCESS: 0, // 成功
  FAIL: 1, // 失败
};

/**
 * 菜单的类型枚举
 */
export const MenuType = {
  DIR: 0, // 目录
  MENU: 1, // 菜单
  BUTTON: 2, // 按钮
};

/**
 * 登录类型枚举
 */
export const LoginTypeEnum = {
  /**
   * 账号密码登录
   */
  LOGIN_USERNAME: 100,

  /**
   * 手机号密码登录
   */
  LOGIN_MOBILE: 101,

  /**
   * 邮箱密码登录
   */
  LOGIN_EMAIL: 102,

  /**
   * 手机号验证码登录
   */
  LOGIN_MOBILE_CODE: 103,

  /**
   * 邮箱验证码登录
   */
  LOGIN_EMAIL_CODE: 104,

  /**
   * 自己退出
   */
  LOGOUT_SELF: 120,
};
