import type { App } from 'vue';
import {
  create,
  NMessageProvider,
  NDialogProvider,
  NConfigProvider,
  NInput,
  NButton,
  NForm,
  NFormItem,
  NCheckboxGroup,
  NCheckbox,
  NIcon,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NMenu,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NSpace,
  NTooltip,
  NAvatar,
  NTabs,
  NTabPane,
  NCard,
  NRow,
  NCol,
  NDrawer,
  NDrawerContent,
  NDivider,
  NSwitch,
  NBadge,
  NAlert,
  NElement,
  NTag,
  NNotificationProvider,
  NProgress,
  NDatePicker,
  NGrid,
  NGridItem,
  NList,
  NListItem,
  NThing,
  NDataTable,
  NPopover,
  NPagination,
  NSelect,
  NRadioGroup,
  NRadio,
  NSteps,
  NStep,
  NInputGroup,
  NResult,
  NDescriptions,
  NDescriptionsItem,
  NTable,
  NInputNumber,
  NLoadingBarProvider,
  NModal,
  NUpload,
  NTree,
  NSpin,
  NTimePicker,
  NBackTop,
  NSkeleton,
  NCascader,
} from 'naive-ui';

// https://www.naiveui.com/en-US/os-theme/docs/import-on-demand
const naive = create({
  components: [
    NMessageProvider,
    NDialogProvider,
    NConfigProvider,
    NInput,
    NButton,
    NForm,
    NFormItem,
    NCheckboxGroup,
    NCheckbox,
    NIcon,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NMenu,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NSpace,
    NTooltip,
    NAvatar,
    NTabs,
    NTabPane,
    NCard,
    NRow,
    NCol,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NBadge,
    NAlert,
    NElement,
    NTag,
    NNotificationProvider,
    NProgress,
    NDatePicker,
    NGrid,
    NGridItem,
    NList,
    NListItem,
    NThing,
    NDataTable,
    NPopover,
    NPagination,
    NSelect,
    NRadioGroup,
    NRadio,
    NSteps,
    NStep,
    NInputGroup,
    NResult,
    NDescriptions,
    NDescriptionsItem,
    NTable,
    NInputNumber,
    NLoadingBarProvider,
    NModal,
    NUpload,
    NTree,
    NSpin,
    NTimePicker,
    NBackTop,
    NSkeleton,
    NCascader,

    //add by fs
    NRadioButton,
    NTreeSelect,
    NImageGroup,
    NImage,
    NCollapse,
    NCollapseItem,
  ],
});

export function setupNaive(app: App<Element>) {
  app.use(naive);
}
