import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';

export const columns: BasicColumn[] = [
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
    title: '字典排序',
    dataIndex: 'sort',
    width: 120,
  },
  {
    title: '字典类型',
    dataIndex: 'dictType',
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '字典标签',
    field: 'label',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '字典类型',
    field: 'dictType',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: [
        { label: '成功', value: 'true', key: 'true' },
        { label: '失败', value: 'false', key: 'false' },
      ],
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
export const dictDataFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '用户编号',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    field: 'sex',
    label: '性别',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '男', value: 0, key: 0 },
        { label: '女', value: 1, key: 1 },
      ],
    },
  },
  {
    label: '手机号',
    field: 'mobile',
    component: 'Input',
    required: true,
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
