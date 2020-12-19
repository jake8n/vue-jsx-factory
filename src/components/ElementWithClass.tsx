import { j } from "../j";
import { defineComponent } from "@vue/composition-api";

export const ElementWithClass = defineComponent({
  render() {
    return <p class="red important">Element with class</p>;
  },
});
