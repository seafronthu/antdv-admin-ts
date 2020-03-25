const PersonalInformation = {
  path: "personal-information",
  name: "PersonalInformation",
  component: () =>
    import(
      /* webpackChunkName: "PersonalInformation" */ "@v/setting/account-management/personal-information.vue"
    )
};
const UserList = {
  path: "user-list",
  name: "UserList",
  component: () =>
    import(
      /* webpackChunkName: "UserList" */ "@v/setting/account-management/user-list.vue"
    )
};
export default {
  PersonalInformation,
  UserList
};
