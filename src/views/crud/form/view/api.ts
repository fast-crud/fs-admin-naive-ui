import { requestForMock } from '@/utils/http/service';
const request = (req: any) => {
  return requestForMock(req);
};
const apiPrefix = '/mock/FormView';
export function GetList(query: any) {
  return request({
    url: apiPrefix + '/page',
    method: 'post',
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
    url: apiPrefix + '/info',
    method: 'post',
    params: { id },
  });
}
