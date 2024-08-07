import { BasicColumn, FormSchema } from '/@/components/Table';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { useRender } from '/@/hooks/web/useRender';

export const columns: BasicColumn[] = [
  {
    title: '字典类型',
    dataIndex: 'type',
    width: 120,
  },
  {
    title: '字典名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '标准',
    dataIndex: 'standard',
    width: 30,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STANDARD);
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 50,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 150,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'type',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '字典类型',
    },
  },
  {
    field: 'name',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '字典名称',
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
export const dictTypeFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '字典类型编号',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: '字典类型名',
    component: 'Input',
    required: true,
  },
  {
    field: 'type',
    label: '字典类型',
    component: 'Input',
    required: true,
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
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
