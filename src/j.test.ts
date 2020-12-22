import { defineComponent } from "@vue/composition-api";
import test from "ava";
import {
  getAttributeByName,
  getAttributes,
  getEventNames,
  getJArgumentsWithOptions,
  isElementAComponent,
  mapEventNamesToHandlerPairs,
  Options,
} from "./j.js";

const options: Options = {
  class: "p-4",
  onClick: () => alert("hello"),
  ref: "div",
  title: "hello world",
  "v-slot": "header",
};

test("get attribute by name", (t) => {
  t.is(getAttributeByName(options, "class"), "p-4");
  t.is(getAttributeByName(options, "className"), undefined);
});

test("get event names only returns options starting with 'on'", (t) => {
  t.deepEqual(getEventNames(options), ["onClick"]);
});

test("map event names to handler pairs", (t) => {
  const eventNames = getEventNames(options);
  t.deepEqual(mapEventNamesToHandlerPairs(options, eventNames), {
    click: options.onClick,
  });
});

test("get attributes minus reserved names", (t) => {
  t.deepEqual(getAttributes(options, ["class", "ref", "onClick", "v-slot"]), {
    title: "hello world",
  });
});

test("element is a component when it is not a string", (t) => {
  t.is(isElementAComponent("div"), false);
  t.is(isElementAComponent(defineComponent({})), true);
});

test("construct options with props for component JSX arguments", (t) => {
  const component = defineComponent({});
  t.deepEqual(getJArgumentsWithOptions(component, options), [
    component,
    {
      class: "p-4",
      ref: "div",
      slot: "header",
      on: {
        click: options.onClick,
      },
      props: {
        title: "hello world",
      },
    },
    [],
  ]);
});

test("construct options with attributes for non-component JSX arguments", (t) => {
  t.deepEqual(getJArgumentsWithOptions("div", options), [
    "div",
    {
      class: "p-4",
      ref: "div",
      slot: "header",
      on: {
        click: options.onClick,
      },
      attrs: {
        title: "hello world",
      },
    },
    [],
  ]);
});
