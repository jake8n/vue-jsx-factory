# Vue JSX Factory

![NPM](https://img.shields.io/npm/v/vue-jsx-factory/latest.svg)

Compile Vue JSX and TSX with `tsc` or `esbuild`.

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

```jsx
// j must be in scope, even though it looks unused
import { j } from "vue-jsx-factory";
import CompositionApi, { defineComponent } from "@vue/composition-api";
import Vue from "vue";

Vue.use(CompositionApi);

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

new Vue({ render: (h) => h(App) }).$mount("#app");
```

`yarn start` will create a development server, with even more examples from `/src/components`.

## To do

- Hot module reloading
