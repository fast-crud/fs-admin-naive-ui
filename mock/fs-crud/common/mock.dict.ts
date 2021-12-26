import cascaderData from './cascader-data';
import pcaDataLittle from './pca-data-little';
import { TreeNodesLazyLoader, getPcaData } from './pcas-data';

const openStatus = [
  { value: '1', label: '打开', color: 'success' },
  { value: '2', label: '停止', color: 'warning' },
  { value: '0', label: '关闭', color: 'error' },
];

const moreOpenStatus = [
  { value: '1', label: '打开(open)', color: 'success' },
  { value: '2', label: '停止(stop)', color: 'warning' },
  { value: '0', label: '关闭(close)', color: 'error' },
];

const textStatus = [
  { id: '1', text: '打开', color: 'success' },
  { id: '2', text: '停止', color: 'warning' },
  { id: '0', text: '关闭', color: 'error' },
];

export function GetTreeChildrenByParentId(parentId) {
  return TreeNodesLazyLoader.getChildren(parentId);
}

export function GetNodesByValues(values) {
  return TreeNodesLazyLoader.getNodesByValues(values);
}

export default [
  {
    url: '/api/crud/dicts/OpenStatusEnum',
    method: 'get',
    response() {
      return {
        code: 0,
        message: 'success',
        data: openStatus,
      };
    },
  },
  {
    url: '/api/crud/dicts/_OpenStatusEnum2',
    method: 'get',
    response() {
      return {
        code: 0,
        message: 'success',
        data: textStatus,
      };
    },
  },
  {
    url: '/api/crud/dicts/moreOpenStatusEnum',
    method: 'get',
    response() {
      return {
        code: 0,
        message: 'success',
        data: moreOpenStatus,
      };
    },
  },
  {
    url: '/api/crud/dicts/cascaderData',
    method: 'get',
    response() {
      return {
        code: 0,
        message: 'success',
        data: cascaderData,
      };
    },
  },
  {
    url: '/api/crud/dicts/pca',
    method: 'get',
    async response() {
      const data = await getPcaData();
      return {
        code: 0,
        message: 'success',
        data: data,
      };
    },
  },
  {
    url: '/api/crud/dicts/littlePca',
    method: 'get',
    response() {
      return {
        code: 0,
        message: 'success',
        data: pcaDataLittle,
      };
    },
  },
  {
    url: '/api/crud/tree/GetTreeChildrenByParentId',
    method: 'get',
    response({ query }) {
      const list = GetTreeChildrenByParentId(query.parentId);
      return {
        code: 0,
        message: 'success',
        data: list,
      };
    },
  },
  {
    url: '/api/crud/tree/GetNodesByValues',
    method: 'get',
    response(req) {
      console.log('req', req);
      const list = GetNodesByValues(req.query.values);
      return {
        code: 0,
        message: 'success',
        data: list,
      };
    },
  },
];
