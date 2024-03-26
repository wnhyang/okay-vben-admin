<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { userFormSchema } from './user.data';
  import { createUser, getUser, updateUser } from '/@/api/system/user';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useMessage } from '@/hooks/web/useMessage';

  const { t } = useI18n();
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'UserModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: userFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const res = await getUser(data.record.id);
          setFieldsValue({
            ...res,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          if (unref(isUpdate)) {
            await updateUser(values);
          } else {
            await createUser(values);
          }
          console.log(values);
          closeModal();
          emit('success');
          createMessage.success(
            unref(isUpdate) ? t('common.updateSuccessText') : t('common.createSuccessText'),
          );
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
