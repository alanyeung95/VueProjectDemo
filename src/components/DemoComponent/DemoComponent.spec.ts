import { Wrapper, shallowMount } from "@vue/test-utils";
import DemoComponent from "./DemoComponent.vue";
import { mockDemoMessage } from "@/mocks/models";

describe("DemoComponent.vue", () => {
  test("renders props.msg when passed", () => {
    const mockMessage = mockDemoMessage();
    const wrapper = shallowMount(DemoComponent, {
      propsData: { mockMessage },
    });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
