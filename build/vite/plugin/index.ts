import type { Plugin, PluginOption } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { configHtmlPlugin } from './html';
import { configCompressPlugin } from './compress';

import PurgeIcons from 'vite-plugin-purge-icons';
import DefineOptions from 'unplugin-vue-define-options/vite';
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins: (Plugin | Plugin[] | PluginOption[])[] = [
    DefineOptions(),
    // have to
    vue(),
    // have to
    vueJsx(),

    // 按需引入NaiveUi且自动创建组件声明
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    }),
    PurgeIcons({
      // iconSource: 'local',
      remoteDataAPI: 'https://gitee.com/fast-crud/collections-json/raw/master/json',
      // includedCollections: ["ion"]
    }),
  ];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );
  }

  return vitePlugins;
}
