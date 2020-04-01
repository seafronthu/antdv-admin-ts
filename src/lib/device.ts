import enquireJs from "enquire.js";
const DEVICE_TYPE = {
  XS: "screen and (max-width: 575.999px)", // 手机
  SM: "screen and (min-width: 576px) and (max-width: 767.999px)", // 平板
  MD: "screen and (min-width: 768px) and (max-width: 991.999px)", // 笔记本
  LG: "screen and (min-width: 920px) and (max-width: 1199.999px)", // 笔记本
  XL: "screen and (min-width: 1200px) and (max-width: 1599.999px)", // 笔记本
  XXL: "screen and (min-width: 1200px)" // 台式
};
const deviceEnquire = function(callback: (type: string) => void) {
  const matchXS = {
    match: () => {
      callback && callback(DEVICE_TYPE.XS);
    }
  };

  const matchSM = {
    match: () => {
      callback && callback(DEVICE_TYPE.SM);
    }
  };
  const matchMD = {
    match: () => {
      callback && callback(DEVICE_TYPE.MD);
    }
  };

  const matchLG = {
    match: () => {
      callback && callback(DEVICE_TYPE.LG);
    }
  };
  const matchXL = {
    match: () => {
      callback && callback(DEVICE_TYPE.XL);
    }
  };
  const matchXXL = {
    match: () => {
      callback && callback(DEVICE_TYPE.XXL);
    }
  };

  // screen and (max-width: 1087.99px)
  enquireJs
    .register(DEVICE_TYPE.XS, matchXS)
    .register(DEVICE_TYPE.SM, matchSM)
    .register(DEVICE_TYPE.MD, matchMD)
    .register(DEVICE_TYPE.LG, matchLG)
    .register(DEVICE_TYPE.XL, matchXL)
    .register(DEVICE_TYPE.XXL, matchXXL);
};
export { DEVICE_TYPE, deviceEnquire };
