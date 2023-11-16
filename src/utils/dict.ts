import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { CommonStatusEnum, MenuTypeEnum } from '/@/enums/systemEnum';

export function renderStatus(status) {
  const enable = ~~status === CommonStatusEnum.ENABLE;
  const color = enable ? 'green' : 'red';
  const text = enable ? '启用' : '停用';
  return h(Tag, { color: color }, () => text);
}

export const isDir = (type: number) => type === MenuTypeEnum.DIR;
export const isMenu = (type: number) => type === MenuTypeEnum.MENU;
export const isButton = (type: number) => type === MenuTypeEnum.BUTTON;

export function renderMenuType(type) {
  const text = isDir(type) ? '目录' : isMenu(type) ? '菜单' : isButton(type) ? '按钮' : '';
  const color = isDir(type) ? 'blue' : isMenu(type) ? 'green' : isButton(type) ? 'red' : '';
  return h(Tag, { color: color }, () => text);
}
