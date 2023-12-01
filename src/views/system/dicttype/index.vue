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
  import { columns, searchFormSchema } from './dictType.data';
  import { getDictTypePage } from '/@/api/system/dictType';

  export default defineComponent({
    name: 'DictType',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '字典类型',
        api: getDictTypePage,
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
