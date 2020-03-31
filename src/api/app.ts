import httpReq from "@l/http-req";
// 获取路由信息
function getRoutesApi() {
  return httpReq.getQuery({ url: "/getRoute" });
  // return httpReq.postJson({ url: "/getRoute", notLogin: true });
}
// 获取路由信息
function getErrorData() {
  return httpReq.postJson({ url: "/getErrorData" });
  // return httpReq.postJson({ url: "/getRoute", notLogin: true });
}
export { getRoutesApi, getErrorData };
