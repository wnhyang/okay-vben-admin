import { BasicColumn, FormSchema } from '/@/components/Table';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { useRender } from '/@/hooks/web/useRender';

export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '角色标识',
    dataIndex: 'value',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '角色名称',
    },
  },
  {
    field: 'value',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '角色标识',
    },
  },
  {
    field: 'status',
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: getDictOptions(DICT_TYPE.COMMON_STATUS, 'boolean'),
    },
    colProps: { span: 3 },
  },
  {
    label: '创建时间',
    field: 'dateTime',
    component: 'RangePicker',
    colProps: { span: 8 },
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      // 传给后端的时间格式--
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '角色编号',
    field: 'id',
    show: false,
    component: 'Input',
  },
  {
    field: 'name',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'value',
    label: '角色值',
    required: true,
    component: 'Input',
  },
  {
    field: 'sort',
    label: '排序',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: getDictOptions(DICT_TYPE.COMMON_STATUS, 'boolean'),
    },
  },
  {
    label: '菜单',
    field: 'menuIds',
    slot: 'menuIds',
    component: 'Input',
  },
];
