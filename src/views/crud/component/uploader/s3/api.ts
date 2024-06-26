import { generateSignedUrl } from './s3-server';
import { FsUploaderS3SignedUrlType } from '@fast-crud/fast-extends';

import { requestForMock } from '@/utils/http/service';

const request = (req: any) => {
  return requestForMock(req);
};

const apiPrefix = '/mock/ComponentUploaderS3';
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

/**
 * 向后端请求获取预签名url
 * @param bucket
 * @param key
 * @param type
 * @constructor
 */
export async function GetSignedUrl(bucket: string, key: string, type: FsUploaderS3SignedUrlType) {
  //此处模拟获取预签名url
  return await generateSignedUrl(bucket, key, type);
}
