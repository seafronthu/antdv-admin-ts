/** 消息 **/
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MessageCenter extends Vue {
  /** data **/
  /** prop **/
  /** computed **/
  /** watch **/
  /** methods **/
  handleTabChange() {}
  /** lifecle **/
  /** render **/
  render() {
    return (
      <container-fluid>
        <a-tabs defaultActiveKey="1" onChange={this.handleTabChange.bind(this)}>
          <a-tab-pane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane tab="Tab 2" key="2" forceRender>
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </container-fluid>
    );
  }
}
