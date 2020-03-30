const ErrorLog = {
  path: "error-log",
  name: "ErrorLog",
  component: () =>
    import(/* webpackChunkName: "ErrorLog" */ "@v/log/error-log.vue"),
  meta: {
    // title: "错误日志",
    hideMenu: true,
    showNav: true,
    notCache: true
  }
};
export default {
  ErrorLog
};
