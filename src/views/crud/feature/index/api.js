import http from '@/utils/http/axios';
const request = (req) => {
  return http.request(req);
};
const apiPrefix = '/crud/FeatureIndex';
export function GetList(query) {
  return request({
    url: apiPrefix + '/page',
    method: 'post',
    data: query,
  });
}

export function AddObj(obj) {
  return request({
    url: apiPrefix + '/add',
    method: 'post',
    data: obj,
  });
}

export function UpdateObj(obj) {
  return request({
    url: apiPrefix + '/update',
    method: 'post',
    data: obj,
  });
}

export function DelObj(id) {
  return request({
    url: apiPrefix + '/delete',
    method: 'post',
    params: { id },
  });
}

export function GetObj(id) {
  return request({
    url: apiPrefix + '/info',
    method: 'post',
    params: { id },
  });
}

export function BatchDelete(ids) {
  return request({
    url: apiPrefix + '/batchDelete',
    method: 'post',
    data: { ids },
  });
}
