import Mock from "mockjs";
const list = [
  {
    parentId: 0,
    id: 1,
    description: "@cparagraph(1, 2)",
    type: "PAGE",
    component: "Home",
    path: "home",
    icon: "home",
    title: "首页"
  },
  {
    parentId: 0,
    id: 2,
    description: "@cparagraph(1, 2)",
    type: "MENU",
    component: "Setting",
    path: "setting",
    icon: "setting",
    title: "设置"
  },
  {
    parentId: 2,
    id: 3,
    description: "@cparagraph(1, 2)",
    type: "MENU",
    component: "AccountManagement",
    path: "account-management",
    icon: "",
    title: "账户管理"
  },
  {
    parentId: 3,
    id: 4,
    description: "@cparagraph(1, 2)",
    type: "PAGE",
    component: "PersonalInformation",
    path: "personal-information",
    icon: "",
    title: "个人信息"
  }
];
export function getRoute() {
  // let item = {
  //   // "parentId|0-6": 0,
  //   description: "@cparagraph(1, 2)",
  //   "type|+1": ["MENU", "PAGE"],
  //   "component|+1": [
  //     "MENU1",
  //     "Home",
  //     "MENU2",
  //     "About",
  //     "MENU3",
  //     "Concat",
  //     "MENU4",
  //     "Introduce",
  //     "MENU5",
  //     "Setting",
  //     "MENU6",
  //     "PersonalInformation",
  //     "Other"
  //   ],
  //   "path|+1": [
  //     "menu1",
  //     "home",
  //     "menu2",
  //     "about",
  //     "menu3",
  //     "concat",
  //     "menu4",
  //     "introduce",
  //     "menu5",
  //     "setting",
  //     "menu6",
  //     "personal-information",
  //     "other"
  //   ],
  //   icon: "",
  //   title: "@ctitle(3, 5)"
  // };
  // let item1 = {
  //   // "parentId|0-6": 0,
  //   description: "@cparagraph(1, 2)",
  //   "type|+1": ["TAB", "BUTTON", "MODE"],
  //   "component|+1": [
  //     "BasicInfo",
  //     "OperationalParameters",
  //     "AlarmParameters",
  //     "OtherParameters"
  //   ],
  //   icon: "",
  //   title: "@ctitle(3, 5)"
  // };
  // let parentId = 0;
  // let data = {};
  // let addI = [3, 5, 7, 9, 10];
  // let addIcon = [0, 1, 2];
  // data.list = [...Array(16)].map((v, i) => {
  //   if (addI.includes(i)) {
  //     ++parentId;
  //   }
  //   if (i < 12) {
  //     let items = {
  //       ...item,
  //       id: i + 1,
  //       parentId
  //     };
  //     if (addIcon.includes(i)) {
  //       items.icon = "el-icon-location";
  //     }
  //     return items;
  //   }
  //   return {
  //     ...item1,
  //     id: i + 1,
  //     parentId
  //   };
  // });
  // data.list.push();
  return [
    /\/getRoute.*/,
    "get",
    {
      code: 1000,
      message: "success",
      data: {
        list
      }
    }
  ];
}
