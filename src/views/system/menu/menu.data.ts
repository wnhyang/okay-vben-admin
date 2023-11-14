import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';
import { SystemMenuTypeEnum } from '/@/enums/menuEnum';

export const columns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'title',
    width: 200,
    align: 'left',
  },
  {
    title: '菜单类型',
    dataIndex: 'type',
    width: 80,
    customRender: ({ record }) => {
      const type = record.type;
      const text = isDir(type) ? '目录' : isMenu(type) ? '菜单' : isButton(type) ? '按钮' : '';
      const color = isDir(type) ? 'blue' : isMenu(type) ? 'green' : isButton(type) ? 'red' : '';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: '权限标识',
    dataIndex: 'permission',
    width: 180,
  },
  {
    title: '组件路径',
    dataIndex: 'component',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

const isDir = (type: number) => type === SystemMenuTypeEnum.DIR;
const isMenu = (type: number) => type === SystemMenuTypeEnum.MENU;
const isButton = (type: number) => type === SystemMenuTypeEnum.BUTTON;

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 0, key: 0 },
        { label: '停用', value: 1, key: 1 },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input',
  },
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '目录', value: 0, key: 0 },
        { label: '菜单', value: 1, key: 1 },
        { label: '按钮', value: 2, key: 2 },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'title',
    label: '菜单名称',
    component: 'Input',
    required: true,
  },

  {
    field: 'parentId',
    label: '上级菜单',
    component: 'TreeSelect',
    defaultValue: 0,
    componentProps: {
      fieldNames: {
        label: 'title',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },

  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    defaultValue: 0,
    required: true,
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'path',
    label: '路由地址',
    component: 'Input',
    required: true,
    helpMessage: '访问的路由地址，如：`user`。如需外网地址时，则以 `http(s)://` 开头',
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'name',
    label: '路由名称',
    component: 'Input',
    required: true,
    helpMessage: '例如：SystemUser',
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
    required: true,
    helpMessage: '例如：system/user/index',
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'permission',
    label: '权限标识',
    component: 'Input',
    helpMessage: 'Controller 方法上的权限字符，如：system:user:list',
    ifShow: ({ values }) => !isDir(values.type),
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '启用', value: 0, key: 0 },
        { label: '禁用', value: 1, key: 1 },
      ],
    },
  },
  {
    field: 'isExt',
    label: '是否外链',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '否', value: false, key: false },
        { label: '是', value: true, key: true },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'keepalive',
    label: '是否缓存',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '否', value: false, key: false },
        { label: '是', value: true, key: true },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },

  {
    field: 'isShow',
    label: '是否显示',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '是', value: false, key: false },
        { label: '否', value: true, key: true },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
];
