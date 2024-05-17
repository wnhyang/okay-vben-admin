<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar></template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { columns, searchFormSchema } from './loginLog.data';
  import { getLoginLogPage } from '/@/api/system/loginLog';

  export default defineComponent({
    name: 'LoginLog',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '登录日志',
        api: getLoginLogPage,
        rowKey: 'id',
        showIndexColumn: false,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          fieldMapToTime: [['dateTime', ['startTime', 'endTime'], 'YYYY-MM-DD HH:mm:ss']],
        },
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
