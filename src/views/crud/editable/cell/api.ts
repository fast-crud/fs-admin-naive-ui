import { requestForMock } from '@/utils/http/service';
const request = (req) => {
  return requestForMock(req);
};
const apiPrefix = '/mock/EditableCell';
export function GetList(query: any) {
  return request({
    url: apiPrefix + '/page',
    method: 'get',
    data: query,
  });
}

export function AddObj(obj: any) {
  return request({
    url: apiPrefix + '/add',
    method: 'post',
    data: obj,
  });
}

export function UpdateObj(obj: any) {
  return request({
    url: apiPrefix + '/update',
    method: 'post',
    data: obj,
  });
}

export function DelObj(id: any) {
  return request({
    url: apiPrefix + '/delete',
    method: 'post',
    params: { id },
  });
}

export function GetObj(id: any) {
  return request({
    url: apiPrefix + '/get',
    method: 'get',
    params: { id },
  });
}

export function BatchDelete(ids: any) {
  return request({
    url: apiPrefix + '/batchDelete',
    method: 'post',
    data: { ids },
  });
}

export function UpdateCell(id: number, key: string, value: any) {
  return request({
    url: apiPrefix + '/cellUpdate',
    method: 'post',
    data: { id, key, value },
  });
}
export function UpdateColumn(data) {
  return request({
    url: apiPrefix + '/columnUpdate',
    method: 'post',
    data,
  });
}
