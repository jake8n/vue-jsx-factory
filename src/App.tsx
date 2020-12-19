import { j } from "./j";
import Vue, { CreateElement } from "vue";
import VueCompositionApi, { defineComponent } from "@vue/composition-api";
import { ElementWithSlots } from "./components/ElementWithSlots";
import { ElementWithClass } from "./components/ElementWithClass";
import { ElementWithProps } from "./components/ElementWithProps";
import { ButtonWithClick } from "./components/ButtonWithClick";

Vue.use(VueCompositionApi);

const App = defineComponent({
  created() {
    console.log("🚀");
  },
  render() {
    return (
      <div>
        <h1>Vue JSX Factory</h1>
        <input
          autofocus
          value={10}
          type="number"
          onChange={() => console.log("onChange")}
        />
        <ElementWithClass />
        <ElementWithProps text="Element with props" />
        <ButtonWithClick />
        <ElementWithSlots>
          <h2 v-slot="header">Header slot</h2>
          <h2 v-slot="footer">Footer slot</h2>
        </ElementWithSlots>
      </div>
    );
  },
});

new Vue({
  render: (h: CreateElement) => h(App),
}).$mount("#app");
