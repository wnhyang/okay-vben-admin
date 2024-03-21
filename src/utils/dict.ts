import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { CommonStatus, MenuType } from '/@/enums/systemEnum';
import { useDictStoreWithOut } from '@/store/modules/dict';

const dictStore = useDictStoreWithOut();

export interface DictDataType {
  dictType: string;
  label: string;
  color: string;
  value: string | number | boolean;
  key?: any;
}

export function getDictDataList(dictType: string) {
  return dictStore.getDictMap[dictType] || [];
}
export function getDictData(dictType: string, value: string | number | boolean) {
  const dictList = getDictDataList(dictType);
  if (!dictList || dictList.length === 0) {
    return ''; // 处理边界条件：空数组或空值
  }
  // 判断value类型然后转为string
  value = typeof value === 'string' ? value : value.toString();
  for (const dict of dictList) {
    if (dict.value === value) {
      return dict;
    }
  }
  return '';
}

export const isDir = (type: number) => type === MenuType.DIR;
export const isMenu = (type: number) => type === MenuType.MENU;
export const isButton = (type: number) => type === MenuType.BUTTON;

export function renderMenuType(type) {
  const text = isDir(type) ? '目录' : isMenu(type) ? '菜单' : isButton(type) ? '按钮' : '';
  const color = isDir(type) ? 'blue' : isMenu(type) ? 'green' : isButton(type) ? 'red' : '';
  return h(Tag, { color: color }, () => text);
}
export function getDictOptions(dictType: string, valueType?: 'string' | 'number' | 'boolean') {
  const dictOption: DictDataType[] = [];
  const dictOptions: DictDataType[] = getDictDataList(dictType);
  if (dictOptions && dictOptions.length > 0) {
    dictOptions.forEach((dict: DictDataType) => {
      dictOption.push({
        ...dict,
        key: dict.value,
        value:
          valueType === 'string'
            ? `${dict.value}`
            : valueType === 'boolean'
            ? `${dict.value}` === 'true'
            : Number.parseInt(`${dict.value}`),
      });
    });
  }
  return dictOption;
}
export enum DICT_TYPE {
  USER_TYPE = 'user_type',
  COMMON_STATUS = 'common_status',
  COMMON_SEX = 'common_sex',
  SYSTEM_TENANT_PACKAGE_ID = 'system_tenant_package_id',

  // ========== SYSTEM 模块 ==========
  SYSTEM_USER_SEX = 'system_user_sex',
  SYSTEM_MENU_TYPE = 'system_menu_type',
  SYSTEM_ROLE_TYPE = 'system_role_type',
  SYSTEM_DATA_SCOPE = 'system_data_scope',
  SYSTEM_NOTICE_TYPE = 'system_notice_type',
  SYSTEM_OPERATE_TYPE = 'system_operate_type',
  SYSTEM_LOGIN_TYPE = 'system_login_type',
  SYSTEM_LOGIN_RESULT = 'system_login_result',
  SYSTEM_SMS_CHANNEL_CODE = 'system_sms_channel_code',
  SYSTEM_SMS_TEMPLATE_TYPE = 'system_sms_template_type',
  SYSTEM_SMS_SEND_STATUS = 'system_sms_send_status',
  SYSTEM_SMS_RECEIVE_STATUS = 'system_sms_receive_status',
  SYSTEM_ERROR_CODE_TYPE = 'system_error_code_type',
  SYSTEM_OAUTH2_GRANT_TYPE = 'system_oauth2_grant_type',
  SYSTEM_MAIL_SEND_STATUS = 'system_mail_send_status',
  SYSTEM_NOTIFY_TEMPLATE_TYPE = 'system_notify_template_type',
}
