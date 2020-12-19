import { j } from "../j";
import { defineComponent } from "@vue/composition-api";

export const ElementWithSlots = defineComponent({
  render() {
    const { header, footer } = this.$scopedSlots;
    return (
      <div>
        <h2>Element with slots</h2>
        {header ? <header>{header(this.$props)}</header> : null}
        {footer ? <header>{footer(this.$props)}</header> : null}
      </div>
    );
  },
});
