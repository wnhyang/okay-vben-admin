<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar> </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '详情',
                onClick: handleView.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <OperateLogModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, searchFormSchema } from './operateLog.data';
  import { getOperateLogPage } from '/@/api/system/operateLog';
  import { useModal } from '/@/components/Modal';
  import OperateLogModal from './OperateLogModal.vue';

  export default defineComponent({
    name: 'OperateLog',
    components: { BasicTable, OperateLogModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable] = useTable({
        title: '操作日志',
        api: getOperateLogPage,
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
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleView(record: Recordable) {
        openModal(true, record);
      }

      return {
        registerTable,
        registerModal,
        openModal,
        handleView,
      };
    },
  });
</script>
