<template>
  <CollapseContainer title="安全设置" :canExpan="false">
    <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div class="extra" v-if="item.extra">
                <a-button type="link" @click="handleEdit(item.title)">
                  {{ item.extra }}
                </a-button>
              </div>
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </CollapseContainer>
  <PasswordModal @register="registerModal" @success="handleSuccess" />
</template>
<script lang="ts">
  import { List } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useModal } from '/@/components/Modal';
  import PasswordModal from './PasswordModal.vue';
  import { secureSettingList } from './data';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useMessage } from '@/hooks/web/useMessage';

  const { t } = useI18n();
  const { createMessage } = useMessage();

  export default defineComponent({
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      PasswordModal,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();

      function handleEdit(title: string) {
        if (title === '账户密码') openModal(true, {});
      }

      function handleSuccess() {
        createMessage.success(t('common.updateSuccessText'));
      }

      return {
        registerModal,
        handleEdit,
        handleSuccess,
        list: secureSettingList,
      };
    },
  });
</script>
<style lang="less" scoped>
  .extra {
    margin-top: 10px;
    margin-right: 30px;
    float: right;
    color: #1890ff;
    font-weight: normal;
    cursor: pointer;
  }
</style>
