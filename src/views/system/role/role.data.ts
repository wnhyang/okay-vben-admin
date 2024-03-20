import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { renderStatus } from '/@/utils/dict';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

type CheckedType = boolean | string | number;
export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '角色值',
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
    customRender: ({ record }) => renderStatus(record.status),
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '角色名称',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '角色标识',
    field: 'code',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.COMMON_STATUS, 'boolean'),
    },
    colProps: { span: 8 },
  },
  {
    label: '创建时间',
    field: 'dateTime',
    component: 'RangePicker',
    colProps: { span: 12 },
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
    required: true,
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
    defaultValue: false,
    componentProps: {
      options: getDictOptions(DICT_TYPE.COMMON_STATUS, 'boolean'),
    },
  },
  {
    label: ' ',
    field: 'menuIds',
    slot: 'menuIds',
    component: 'ApiTree',
  },
];
