import { j } from "../j";
import { defineComponent, PropType } from "@vue/composition-api";

// @ts-ignore
// import.meta.hot.accept(() => console.log("🔥"));

export let ButtonWithClick = defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  render() {
    return <button onClick={() => this.count++}>Clicked {this.count}</button>;
  },
});
