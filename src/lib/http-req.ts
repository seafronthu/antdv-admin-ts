import HttpRequest from "./request";
const httpReq = new HttpRequest(
  process.env.VUE_APP_ORIGIN || window.location.origin
);
export default httpReq;
