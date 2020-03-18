import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement, PropOptions } from "vue/types/umd";
import { RouteGlobal } from "@/types/route";
import { Menu } from "ant-design-vue";

export default function SubItem(
  h: CreateElement,
  subMenuInfo: RouteGlobal.ArrageMenuObjINF
): VNode {
  console.log(subMenuInfo);
  return <div>牛皮</div>;
}
// @Component
// export default class SubItem extends Vue {
//   functional = true;
//   @Prop({
//     type: Object
//   })
//   subMenuInfo!: SubMenuInfoINF;
//   render(h: CreateElement) {
//     const { subMenuInfo } = this;
//     return (
//       <a-sub-menu key={subMenuInfo.name}>
//         <span slot="title">
//           {subMenuInfo.icon ? <a-icon type={subMenuInfo.icon} /> : null}
//           <span>{subMenuInfo.title}</span>
//         </span>
//         {(subMenuInfo.children as SubMenuInfoINF[]).map(items => {
//           return (
//             <template>
//               {items.children ? (
//                 <SubItem subMenuInfo={items} key={items.name} />
//               ) : (
//                 <a-menu-item key={items.name}>
//                   {items.icon ? <a-icon type={items.icon} /> : null}
//                   <span>{items.title}</span>
//                 </a-menu-item>
//               )}
//             </template>
//           );
//         })}
//       </a-sub-menu>
//     );
//   }
// }
// <a-sub-menu key={subMenuInfo.name}>
// <span slot="title">
//   {subMenuInfo.icon ? <a-icon type={subMenuInfo.icon} /> : null}
//   <span>{subMenuInfo.title}</span>
// </span>
// {(subMenuInfo.children as SubMenuInfoINF[]).map(items => {
//   return (
//     <template>
//       {items.children ? <SubItem subMenuInfo={items} key={items.name} /> : (
//         <a-menu-item key={items.name}>
//           {items.icon ? <a-icon type={items.icon} /> : null}
//           <span>{items.title}</span>
//         </a-menu-item>
//       )}
//     </template>
//   );
// })}
// </a-sub-menu>
