import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';
import { SystemMenuTypeEnum } from '/@/enums/menuEnum';

export const columns: BasicColumn[] = [
  {
    title: '操作编号',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '操作模块',
    dataIndex: 'module',
    width: 200,
  },
  {
    title: '操作名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '操作类型',
    dataIndex: 'type',
    width: 120,
  },
  {
    title: '操作人',
    dataIndex: 'userNickname',
    width: 120,
  },
  {
    title: '请求路径',
    dataIndex: 'requestUrl',
  },
  {
    title: '操作结果',
    dataIndex: 'resultCode',
    width: 180,
  },
  {
    title: '执行时长',
    dataIndex: 'duration',
    width: 180,
  },
  {
    title: '操作日期',
    dataIndex: 'startTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '系统模块',
    field: 'module',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作人员',
    field: 'userNickName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '类型',
    field: 'type',
    component: 'Select',
    colProps: { span: 8 },
  },
  {
    label: '状态',
    field: 'success',
    component: 'Select',
    componentProps: {
      options: [
        { value: true, key: true, label: '成功' },
        { value: false, key: false, label: '失败' },
      ],
    },
    colProps: { span: 8 },
  },
  {
    label: '操作时间',
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
