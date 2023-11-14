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
    title: '日志类型',
    dataIndex: 'logType',
    width: 120,
  },
  {
    title: '账号',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '登录IP',
    dataIndex: 'userIp',
    width: 120,
  },
  {
    title: 'userAgent',
    dataIndex: 'userAgent',
    width: 400,
  },
  {
    title: '登录结果',
    dataIndex: 'result',
    width: 100,
  },
  {
    title: '登录日期',
    dataIndex: 'createTime',
    width: 180,
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
    field: 'startTime',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
];
