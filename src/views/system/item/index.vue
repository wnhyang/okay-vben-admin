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
  import { columns, searchFormSchema } from './dictData.data';
  import { getDictDataPage } from '/@/api/system/dictData';

  export default defineComponent({
    name: 'DictData',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '字典数据',
        api: getDictDataPage,
        rowKey: 'id',
        showIndexColumn: false,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          fieldMapToTime: [['dateTime', ['startTime', 'endTime'], 'YYYY-MM-DD HH:mm:ss']],
          autoSubmitOnEnter: true,
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
