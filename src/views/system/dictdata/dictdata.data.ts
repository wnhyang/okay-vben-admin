import { BasicColumn, FormSchema } from '/@/components/Table';
import { getSimpleListDictType } from '/@/api/system/dictType';
import { useRender } from '/@/hooks/web/useRender';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

export const columns: BasicColumn[] = [
  {
    title: '字典类型',
    dataIndex: 'dictType',
    width: 100,
  },
  {
    title: '字典标签',
    dataIndex: 'label',
    width: 100,
  },
  {
    title: '字典键值',
    dataIndex: 'value',
    width: 100,
  },
  {
    title: '字典颜色',
    dataIndex: 'color',
    width: 100,
  },
  {
    title: '字典排序',
    dataIndex: 'sort',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'dictType',
    component: 'ApiSelect',
    componentProps: {
      placeholder: '字典类型',
      api: () => getSimpleListDictType(),
      labelField: 'name',
      valueField: 'type',
    },
    colProps: { span: 3 },
  },
  {
    field: 'label',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '字典标签',
    },
  },
  {
    field: 'status',
    component: 'RadioButtonGroup',
    defaultValue: false,
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
export const dictDataFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '字典数据编号',
    component: 'Input',
    show: false,
  },
  {
    field: 'label',
    label: '字典标签',
    component: 'Input',
    required: true,
  },
  {
    field: 'value',
    label: '字典键值',
    component: 'Input',
    required: true,
  },
  {
    field: 'dictType',
    label: '字典类型',
    component: 'ApiSelect',
    componentProps: {
      api: () => getSimpleListDictType(),
      labelField: 'name',
      valueField: 'type',
    },
    required: true,
  },
  {
    field: 'color',
    label: '颜色',
    component: 'Input',
    defaultValue: 0,
    required: true,
  },
  {
    field: 'sort',
    label: '排序',
    component: 'Input',
    defaultValue: 0,
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
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];
