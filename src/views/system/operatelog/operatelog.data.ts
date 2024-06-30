import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { useRender } from '/@/hooks/web/useRender';
import type { DescItem } from '@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '模块',
    dataIndex: 'module',
    width: 200,
  },
  {
    title: '操作名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_OPERATE_TYPE);
    },
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
    title: '结果码',
    dataIndex: 'resultCode',
    width: 100,
  },
  {
    title: '执行时长(ms)',
    dataIndex: 'duration',
    width: 100,
  },
  {
    title: '操作时间',
    dataIndex: 'startTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'module',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '操作模块',
    },
  },
  {
    field: 'userNickName',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '操作人',
    },
  },
  {
    field: 'type',
    component: 'Select',
    componentProps: {
      placeholder: '操作类型',
      options: getDictOptions(DICT_TYPE.SYSTEM_OPERATE_TYPE, 'number'),
    },
    colProps: { span: 3 },
  },
  {
    field: 'resultCode',
    component: 'Input',
    colProps: { span: 3 },
    componentProps: {
      placeholder: '结果码',
    },
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

const httpMethods = [
  { value: 'GET', color: '#108ee9' },
  { value: 'POST', color: '#2db7f5' },
  { value: 'PUT', color: 'warning' },
  { value: 'DELETE', color: '#f50' },
];

export const infoSchema: DescItem[] = [
  {
    field: 'module',
    label: '操作模块',
  },
  {
    field: 'name',
    label: '操作名',
  },
  {
    field: 'userNickname',
    label: '操作人',
    render(_, data) {
      const { userNickname, userId } = data;
      // return useRender.renderText(userNickname, 'uid: ' + userId)
      return useRender.renderTags([userNickname, `uid: ${userId}`]);
    },
  },
  {
    field: 'resultCode',
    label: '结果码',
  },
  {
    field: 'resultMsg',
    label: '响应信息',
    show(data) {
      return data && data.resultMsg && data.resultMsg !== '';
    },
    render(value) {
      return h('span', { style: { color: 'red', fontWeight: 'bold' } }, value);
    },
  },
  {
    field: 'userIp',
    label: '请求ip',
  },
  {
    field: 'startTime',
    label: '请求时间',
    render(value) {
      return useRender.renderDate(value);
    },
  },
  {
    field: 'requestUrl',
    label: '请求路径',
    render(_, data) {
      if (!data) return '';

      const { requestMethod, requestUrl } = data;
      const current = httpMethods.find((item) => item.value === requestMethod.toUpperCase());
      const methodTag = current ? useRender.renderTag(requestMethod, current.color) : requestMethod;
      return h('span', {}, [methodTag, requestUrl]);
    },
  },
  {
    field: 'javaMethod',
    label: '操作方法',
    labelMinWidth: 80,
  },
  {
    field: 'javaMethodArgs',
    label: '请求参数',
    render(value) {
      return useRender.renderJsonPreview(value);
    },
  },
  {
    field: 'userAgent',
    label: 'userAgent',
  },
  {
    field: 'duration',
    label: '请求耗时',
    render(value) {
      return useRender.renderText(value, 'ms');
    },
  },
];
