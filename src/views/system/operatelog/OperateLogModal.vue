<template>
  <BasicModal v-bind="$attrs" width="800px" title="操作日志详情" @register="registerModalInner">
    <Description @register="registerDescription" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description, useDescription } from '/@/components/Description';
  import { infoSchema } from './operateLog.data';

  export default defineComponent({
    components: { BasicModal, Description },
    setup() {
      const logData = ref();
      const [registerModalInner] = useModalInner((record: Recordable) => {
        logData.value = record;
      });

      const [registerDescription] = useDescription({
        column: 1,
        schema: infoSchema,
        data: logData,
      });
      return { registerModalInner, registerDescription };
    },
  });
</script>
