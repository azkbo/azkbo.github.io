/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络请求实体
 */

export async function network(options) {
  const option = { method: options.method, headers: options.headers };
  if (option.method == "POST") {
    option.body = JSON.stringify(options.data);
  }
  const res = await fetch(options.url, option);
  return await res.json();
}

// 上传
export function upload(photos, type) {

  const data = new FormData();
  data.append('name', 'file');
  // formData 只接受文件、Blob 或字符串，不能直接传递数组，所以必须循环嵌入
  data.append('photo', photos)
  data.append('type', type + '')
  return new Promise((resolve) => [
    fetch('/timebank/file/uploadImage', { method: 'POST', body: data, headers: { 'token': '' } })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        let data = JSON.parse(res.data);
        resolve({
          code: -1,
          message: data.message,
          status: data.success,
          data: data.result,
        });
      })
      .catch((err) => {
        console.log(err);
        resolve({
          code: -1,
          message: err,
          status: false,
          data: null,
        });
      })
      .finally(() => {

      })
  ]);
}

// 下载
export function download(path, params) {
  console.log(path);
  const param = JSON.stringify(params)
  const post = param.length > 5
  const option = {
    method: post ? 'POST' : 'GET',
    headers: { 'token': '' }
  }
  if (post) {
    const body = new FormData()
    for (const key in params) {
      const value = params[key];
      body.append(key, value)
    }
    option.body = body;
  }
  return new Promise((resolve) => {
    fetch(`${baseURL}${path}`, option)
      .then((data) => data.blob() || data.json())
      .then((res) => {
        console.log('下载成功', res);
        let fileName = window.URL.createObjectURL(res);
        console.log(fileName);
        resolve({
          status: true,
          data: fileName
        });
      })
      .catch((err) => {
        console.log(err);
        resolve({
          status: false,
          message: ''
        });
      })
      .finally(() => {

      })
  });
}