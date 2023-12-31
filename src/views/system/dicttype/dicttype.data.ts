import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';

export const columns: BasicColumn[] = [
  {
    title: '字典类型编号',
    dataIndex: 'id',
    width: 100,
  },
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
    title: '状态',
    dataIndex: 'status',
    width: 120,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 400,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '字典类型',
    field: 'type',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '字典名称',
    field: 'name',
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
