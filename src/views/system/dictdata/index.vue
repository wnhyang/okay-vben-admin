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
  import { columns, searchFormSchema } from './dictdata.data';
  import { getDictDataPage } from '/@/api/system/dictdata';

  export default defineComponent({
    name: 'DictData',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '字典数据',
        api: getDictDataPage,
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
