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
  import { columns, searchFormSchema } from './loginlog.data';
  import { getLoginLogPage } from '/@/api/system/loginlog';

  export default defineComponent({
    name: 'LoginLog',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '登录日志',
        api: getLoginLogPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
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
