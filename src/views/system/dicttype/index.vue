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
  import { columns, searchFormSchema } from './dicttype.data';
  import { getDictTypePage } from '/@/api/system/dicttype';

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
