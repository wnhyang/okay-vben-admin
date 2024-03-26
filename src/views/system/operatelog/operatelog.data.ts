import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from '@/components/Icon/Icon.vue';
import { SystemMenuTypeEnum } from '/@/enums/menuEnum';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { useRender } from '/@/hooks/web/useRender';

export const columns: BasicColumn[] = [
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
    width: 180,
  },
  {
    title: '执行时长(ms)',
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
    label: '操作类型',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.SYSTEM_OPERATE_TYPE, 'number'),
    },
    colProps: { span: 8 },
  },
  {
    label: '结果码',
    field: 'resultCode',
    component: 'Input',
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
