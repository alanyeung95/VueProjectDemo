import { Wrapper, shallowMount } from "@vue/test-utils";
import DemoComponent from "./DemoComponent.vue";

describe("DemoComponent.vue", () => {
  test("renders props.msg when passed", () => {
    const msgFromParent = "new message1";
    const wrapper = shallowMount(DemoComponent, {
      propsData: { msgFromParent },
    });
    expect(wrapper.text()).toMatch(msgFromParent);
  });
});
