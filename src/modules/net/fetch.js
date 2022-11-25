/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络请求实体
 */

export async function network(options) {
  const option = {method: options.method, headers: options.headers};
  if(option.method == "POST") {
    option.body = JSON.stringify(options.data);
  }
  const res = await fetch(options.url, option);
  return await res.json();
}