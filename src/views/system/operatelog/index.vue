<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar> </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { columns, searchFormSchema } from './operateLog.data';
  import { getOperateLogPage } from '/@/api/system/operateLog';

  export default defineComponent({
    name: 'LoginLog',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '操作日志',
        api: getOperateLogPage,
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
        showIndexColumn: false,
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
