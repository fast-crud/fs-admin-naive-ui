import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';
import { OUTPUT_DIR } from './build/constant';
import { createProxy } from './build/vite/proxy';
import pkg from './package.json';
import { format } from 'date-fns';
import path from 'path';

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
};

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  let devServerFs: any = {};
  let devAlias: any[] = [];
  if (mode.startsWith('debug')) {
    devAlias = [
      { find: /@fast-crud\/fast-crud\/dist/, replacement: path.resolve('../../fast-crud/src/') },
      { find: /@fast-crud\/fast-crud$/, replacement: path.resolve('../../fast-crud/src/') },
      {
        find: /@fast-crud\/fast-extends\/dist/,
        replacement: path.resolve('../../fast-extends/src/'),
      },
      { find: /@fast-crud\/fast-extends$/, replacement: path.resolve('../../fast-extends/src/') },
      { find: /@fast-crud\/ui-naive$/, replacement: path.resolve('../../ui/ui-naive/src/') },
      {
        find: /@fast-crud\/ui-interface$/,
        replacement: path.resolve('../../ui/ui-interface/src/'),
      },
    ];
    devServerFs = {
      // 这里配置dev启动时读取的项目根目录
      //allow: ['../../'],
    };
    console.log('devAlias', devAlias);
  }

  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY } = viteEnv;
  const isBuild = command === 'build';
  return {
    base: VITE_PUBLIC_PATH,
    esbuild: {},
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
        ...devAlias,
      ],
      dedupe: ['vue'],
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      __APP_INFO__: JSON.stringify(__APP_INFO__),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
      ...devServerFs,
    },
    optimizeDeps: {
      include: [],
      exclude: ['vue-demi'],
    },
    build: {
      target: 'es2018',
      cssTarget: 'chrome90',
      outDir: OUTPUT_DIR,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 50000,
    },
  };
};
