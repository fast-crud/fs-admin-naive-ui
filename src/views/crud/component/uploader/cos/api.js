import { requestForMock } from '@/utils/http/service';
const request = (req) => {
  return requestForMock(req);
};
const apiPrefix = '/mock/CosUploader';
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
    url: apiPrefix + '/get',
    method: 'post',
    params: { id },
  });
}
