import { CreateElement } from "vue/types/umd";

const Test = {
  functional: true,
  name: "Test",
  render: function(h: CreateElement, context: any) {
    // console.log(context.props);
    return <div>测试</div>;
  }
};
export default Test;
