import { BasicColumn, FormSchema } from '/@/components/Table';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { useRender } from '/@/hooks/web/useRender';

export const columns: BasicColumn[] = [
  {
    title: '登录类型',
    dataIndex: 'loginType',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_LOGIN_TYPE);
    },
  },
  {
    title: '用户名',
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
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_LOGIN_RESULT);
    },
  },
  {
    title: '登录时间',
    dataIndex: 'createTime',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'loginType',
    component: 'Select',
    componentProps: {
      placeholder: '登录类型',
      options: getDictOptions(DICT_TYPE.SYSTEM_LOGIN_TYPE, 'number'),
    },
    colProps: { span: 3 },
  },
  {
    field: 'username',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '用户名',
    },
  },
  {
    field: 'userIp',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '登录IP',
    },
  },
  {
    field: 'result',
    component: 'Select',
    componentProps: {
      placeholder: '登录结果',
      options: getDictOptions(DICT_TYPE.SYSTEM_LOGIN_RESULT, 'number'),
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
