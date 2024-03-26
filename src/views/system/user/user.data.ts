import { getSimpleRoleList } from '/@/api/system/role';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useRender } from '/@/hooks/web/useRender';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

/**
 * transform mock data
 * {
 *  0: '华东分部',
 * '0-0': '华东分部-研发部'
 * '0-1': '华东分部-市场部',
 *  ...
 * }
 */
export const deptMap = (() => {
  const pDept = ['华东分部', '华南分部', '西北分部'];
  const cDept = ['研发部', '市场部', '商务部', '财务部'];

  return pDept.reduce((map, p, pIdx) => {
    map[pIdx] = p;

    cDept.forEach((c, cIndex) => (map[`${pIdx}-${cIndex}`] = `${p}-${c}`));

    return map;
  }, {});
})();

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: 200,
    customRender: ({ text }) => {
      return useRender.renderTags(text);
    },
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS);
    },
  },
  {
    title: '最后登录IP',
    dataIndex: 'loginIp',
    width: 100,
  },
  {
    title: '最后登录时间',
    dataIndex: 'loginDate',
    width: 100,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 150,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const userFormSchema: FormSchema[] = [
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
      options: getDictOptions(DICT_TYPE.COMMON_SEX),
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
    label: '角色',
    field: 'roleIds',
    component: 'ApiSelect',
    componentProps: {
      api: () => getSimpleRoleList(),
      labelField: 'name',
      valueField: 'id',
      mode: 'tags',
    },
    required: true,
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
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
