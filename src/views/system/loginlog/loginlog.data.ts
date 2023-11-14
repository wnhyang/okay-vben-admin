import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';
import { SystemMenuTypeEnum } from '/@/enums/menuEnum';

export const columns: BasicColumn[] = [
  {
    title: '登录编号',
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
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '登录IP',
    field: 'userIp',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '用户名称',
    field: 'username',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '结果',
    field: 'result',
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
    label: '登录时间',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
];
