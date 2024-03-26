<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <div class="mb-2">头像</div>
          <CropperAvatar
            :uploadApi="uploadApi"
            :value="avatar"
            btnText="更换头像"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateAvatar"
            width="150"
          />
        </div>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Button, Row, Col } from 'ant-design-vue';
  import { computed, defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperAvatar } from '/@/components/Cropper';

  import headerImg from '/@/assets/images/header.jpg';
  import { getUserProfile, updateUserProfile } from '/@/api/base/profile';
  import { baseSetSchemas } from './data';
  import { useUserStore } from '/@/store/modules/user';
  import { uploadApi } from '/@/api/base/upload';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useMessage } from '@/hooks/web/useMessage';

  const { t } = useI18n();

  export default defineComponent({
    components: {
      BasicForm,
      CollapseContainer,
      Button,
      ARow: Row,
      ACol: Col,
      CropperAvatar,
    },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();

      const [register, { setFieldsValue, validate }] = useForm({
        labelWidth: 120,
        schemas: baseSetSchemas,
        showActionButtonGroup: false,
      });

      onMounted(async () => {
        const data = await getUserProfile();
        setFieldsValue(data);
      });

      const avatar = computed(() => {
        const { avatar } = userStore.getUserInfo.user;
        console.log(avatar);
        return avatar || headerImg;
      });

      async function updateAvatar({ src, data }) {
        const userInfo = userStore.getUserInfo;
        userInfo.user.avatar = src;
        userStore.setUserInfo(userInfo);
        console.log('data', data);
      }
      async function handleSubmit() {
        const values = await validate();
        // TODO custom api
        await updateUserProfile(values);
        console.log(values);
        createMessage.success(t('common.updateSuccessText'));
      }

      return {
        avatar,
        register,
        uploadApi: uploadApi as any,
        updateAvatar,
        handleSubmit,
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
