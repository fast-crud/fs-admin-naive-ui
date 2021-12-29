import { App } from 'vue';

import { FastCrud } from '@fast-crud/fast-crud';
import '@fast-crud/fast-crud/dist/style.css';
import { FsExtendsUploader, FsExtendsEditor } from '@fast-crud/fast-extends';
import '@fast-crud/fast-extends/dist/style.css';
import UiNaive from '@fast-crud/ui-naive';
import http from '@/utils/http/axios';
function install(app, options: any = {}) {
  app.use(UiNaive);
  app.use(FastCrud, {
    i18n: options.i18n,
    async dictRequest({ url }) {
      // if (url && url.startsWith('/mock')) {
      //   //如果是crud开头的dict请求视为mock
      // }
      return await http.request({ url, method: 'get' });
    },
    /**
     * useCrud时会被执行
     * @param context，useCrud的参数
     */
    commonOptions(context: any = {}) {
      console.log('commonOptions execute ,context:', context);
      const opts = {
        table: {
          size: 'small',
          pagination: false,
        },
        search: {
          options: {
            size: 'medium',
          },
        },
        rowHandle: {
          buttons: {
            view: { text: null, icon: 'EyeOutlined', size: 'small' },
            edit: { text: null, icon: 'EditOutlined', size: 'small' },
            remove: { type: 'error', text: null, icon: 'DeleteOutlined', size: 'small' },
          },
          dropdown: {
            more: { size: 'small' },
          },
        },
        request: {
          // 查询参数转换
          transformQuery: ({ page, form, sort }) => {
            const limit = page.pageSize;
            const currentPage = page.currentPage ?? 1;
            const offset = limit * (currentPage - 1);

            sort = sort == null ? {} : sort;

            return {
              page: {
                limit,
                offset,
              },
              query: form,
              sort,
            };
          },
          // page请求结果转换
          transformRes: ({ res }) => {
            const pageSize = res.limit;
            let currentPage = res.offset / pageSize;
            if (res.offset % pageSize === 0) {
              currentPage++;
            }
            return { currentPage, pageSize, ...res };
          },
        },
        form: {
          display: 'flex', //表单布局
          labelWidth: '100px', //表单label宽度
        },
      };

      return opts;
      // 从 useCrud({permission}) 里获取permission参数，去设置各个按钮的权限
      // const crudPermission = useCrudPermission(context);
      // return crudPermission.merge(opts);
    },
  });

  // fast-extends里面的扩展组件均为异步组件，只有在使用时才会被加载，并不会影响首页加载速度
  //安装editor
  app.use(FsExtendsEditor, {
    //编辑器的公共配置
    wangEditor: {},
  });
  //安装uploader 公共参数
  app.use(FsExtendsUploader, {
    defaultType: 'cos',
    cos: {
      domain: 'https://d2p-demo-1251260344.cos.ap-guangzhou.myqcloud.com',
      bucket: 'd2p-demo-1251260344',
      region: 'ap-guangzhou',
      secretId: '', //
      secretKey: '', // 传了secretKey 和secretId 代表使用本地签名模式（不安全，生产环境不推荐）
      async getAuthorization() {
        // 不传secretKey代表使用临时签名模式,此时此参数必传（安全，生产环境推荐）
        return await http
          .request({
            url: 'http://www.docmirror.cn:7070/api/upload/cos/getAuthorization',
            method: 'get',
          })
          .then((ret) => {
            // 返回结构如下
            // ret.data:{
            //   TmpSecretId,
            //   TmpSecretKey,
            //   XCosSecurityToken,
            //   ExpiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
            // }
            return ret;
          });
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log('success handle:', ret);
        return ret;
      },
    },
    alioss: {
      domain: 'https://d2p-demo.oss-cn-shenzhen.aliyuncs.com',
      bucket: 'd2p-demo',
      region: 'oss-cn-shenzhen',
      accessKeyId: '',
      accessKeySecret: '',
      async getAuthorization() {
        // 不传accessKeySecret代表使用临时签名模式,此时此参数必传（安全，生产环境推荐）
        const ret = await http.request({
          url: 'http://www.docmirror.cn:7070/api/upload/alioss/getAuthorization',
          method: 'get',
        });
        console.log('ret', ret);
        return ret;
      },
      sdkOpts: {
        // sdk配置
        secure: true, // 默认为非https上传,为了安全，设置为true
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log('success handle:', ret);
        return ret;
      },
    },
    qiniu: {
      bucket: 'd2p-demo',
      async getToken() {
        const ret = await http.request({
          url: 'http://www.docmirror.cn:7070/api/upload/qiniu/getToken',
          method: 'get',
        });
        return ret; // {token:xxx,expires:xxx}
      },
      successHandle(ret) {
        // 上传完成后可以在此处处理结果，修改url什么的
        console.log('success handle:', ret);
        return ret;
      },
      domain: 'http://d2p.file.docmirror.cn',
    },
    form: {
      action: 'http://www.docmirror.cn:7070/api/upload/form/upload',
      name: 'file',
      withCredentials: false,
      uploadRequest: async ({ action, file }) => {
        // @ts-ignore
        const data = new FormData();
        data.append('file', file);
        return await http.request({
          url: action,
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data,
        });
      },
      successHandle(ret) {
        // 上传完成后的结果处理， 此处应返回格式为{url:xxx}
        return { url: 'http://www.docmirror.cn:7070' + ret };
      },
    },
  });
}

export default {
  install,
};

export function setupFastCrud(app: App<Element>, options: any = {}) {
  install(app, options);
}
