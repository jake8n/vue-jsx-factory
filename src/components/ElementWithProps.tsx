import { j } from "../j";
import { defineComponent } from "@vue/composition-api";

export const ElementWithProps = defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  render() {
    return <h2>{this.text}</h2>;
  },
});
