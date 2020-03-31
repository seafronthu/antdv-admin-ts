import httpReq from "@l/http-req";
// 获取路由信息
function getUserInfoApi() {
  return httpReq.getQuery({ url: "/getUserInfo", data: { a: 1 } });
  // return httpReq.postJson({ url: "/getRoute", notLogin: true });
}
export { getUserInfoApi };
