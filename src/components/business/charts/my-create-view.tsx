/** 视图 **/
import { Component, Vue, ProvideReactive } from "vue-property-decorator";
@Component
export default class MyCreateView extends Vue {
  /** data **/
  @ProvideReactive("viewOptions")
  viewOptions: any = {};
  /** prop **/
  /** computed **/
  /** watch **/
  /** methods **/
  /** lifecle **/
  /** render **/
  render() {
    return <div></div>;
  }
}
