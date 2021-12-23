import http from '@/utils/http/axios';
const apiPrefix = '/crud/FormCompute';
export function GetList(query) {
  return http.request({
    url: apiPrefix + '/page',
    method: 'post',
    data: query,
  });
}

export function AddObj(obj) {
  return http.request({
    url: apiPrefix + '/add',
    method: 'post',
    data: obj,
  });
}

export function UpdateObj(obj) {
  return http.request({
    url: apiPrefix + '/update',
    method: 'post',
    data: obj,
  });
}

export function DelObj(id) {
  return http.request({
    url: apiPrefix + '/delete',
    method: 'post',
    params: { id },
  });
}

export function GetObj(id) {
  return http.request({
    url: apiPrefix + '/info',
    method: 'post',
    params: { id },
  });
}
