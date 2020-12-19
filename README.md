# Vue JSX Factory

Forget about Babel. Instead compile Vue JSX and TSX with tsc/esbuild.

## tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "j"
  }
}
```

## Example

```tsx
// j must be in scope, even though it looks like it is undefined
import { j } from "vue-jsx-factory";
import VueCompositionApi, { defineComponent } from "@vue/composition-api";
import Vue, { CreateElement } from "vue";

Vue.use(VueCompositionApi);

const App = defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  render() {
    return (
      <div>
        <h1>Count {this.count}</h1>
        <button onClick={() => this.count++}>Increment</button>
      </div>
    );
  },
});

new Vue({ render: (h: CreateElement) => h(App) }).$mount("#app");
```

## Playground

Example components in `/src/components/` are served on `yarn start`.

## To do

- HMR
