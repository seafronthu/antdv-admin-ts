const PersonalInformation = {
  path: "personal-information",
  name: "PersonalInformation",
  component: () =>
    import(
      /* webpackChunkName: "PersonalInformation" */ "@v/setting/account-management/personal-information.vue"
    )
};
export default {
  PersonalInformation
};
