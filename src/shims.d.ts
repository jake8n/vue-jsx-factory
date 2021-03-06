// declare namespace JSX {
//   interface IntrinsicElements {
//     [element: string]: any;
//   }
// }

import { VNode } from "vue";
import { ComponentRenderProxy } from "@vue/composition-api";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
