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
const MessageCenter = {
  path: "message-center",
  name: "MessageCenter",
  component: () =>
    import(
      /* webpackChunkName: "MessageCenter" */ "@v/message-center/message-center.tsx"
    ),
  meta: {
    // title: "错误日志",
    hideMenu: true,
    showNav: true,
    notCache: true
  }
};
export default {
  ErrorLog,
  MessageCenter
};
