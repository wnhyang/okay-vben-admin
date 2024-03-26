<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menuIds="{ model, field }">
        <BasicTree
          v-model:checkedKeys="model[field]"
          :treeData="treeData"
          :fieldNames="{ title: 'title', key: 'id' }"
          checkable
          toolbar
          search
          defaultExpandAll
          :show-strictly-button="false"
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { t } from '@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createRole, updateRole, getRole } from '/@/api/system/role';
  import { getMenuSimpleList } from '/@/api/system/menu';

  const { createMessage } = useMessage();
  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const treeData = ref<TreeItem[]>([]);

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(treeData).length === 0) {
      treeData.value = (await getMenuSimpleList()) as any as TreeItem[];
    }
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      const role = await getRole(data.record.id);
      setFieldsValue({
        ...role,
      });
    }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

  async function handleSubmit() {
    try {
      const values = await validate();
      console.log(values);
      setDrawerProps({ confirmLoading: true });

      if (unref(isUpdate)) {
        await updateRole(values);
      } else {
        await createRole(values);
      }
      closeDrawer();
      emit('success');
      createMessage.success(
        unref(isUpdate) ? t('common.updateSuccessText') : t('common.createSuccessText'),
      );
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
