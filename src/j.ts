import { h } from "@vue/composition-api";
import Vue, { VNodeChildren, VueConstructor } from "vue";

const V_SLOT = "v-slot";
const CLASS_NAME = "class";

type Element = string | VueConstructor<Vue>;
export type Options = { [option: string]: any };

export const getAttributeByName = (options: Options, name: string) =>
  options[name];

export const getEventNames = (options: Options) =>
  Object.keys(options).filter((option) => option.startsWith("on"));

export const mapEventNamesToHandlerPairs = (
  options: Options,
  eventNames: string[]
) =>
  Object.fromEntries(
    eventNames.map((eventName) => [
      eventName.substring(2).toLowerCase(),
      options[eventName],
    ])
  );

export const getAttributes = (options: Options, excluded: string[]) =>
  Object.fromEntries(
    Object.entries(options).filter(([option]) => !excluded.includes(option))
  );

export const isElementAComponent = (element: Element) =>
  typeof element !== "string";

export const getJArgumentsWithOptions = (
  element: Element,
  options: Options,
  ...children: VNodeChildren[]
): [Element, Options, ...VNodeChildren[]] => {
  const eventNames = getEventNames(options);
  const props = getAttributes(options, [CLASS_NAME, V_SLOT, ...eventNames]);
  const elementIsAComponent = isElementAComponent(element);
  const data = {
    class: getAttributeByName(options, CLASS_NAME),
    slot: getAttributeByName(options, V_SLOT),
    on: mapEventNamesToHandlerPairs(options, eventNames),
    [elementIsAComponent ? "props" : "attrs"]: props,
  };
  return [element, data, children];
};

export const j = (
  element: Element,
  options: Options | null,
  ...children: VNodeChildren[]
) =>
  options
    ? h(...getJArgumentsWithOptions(element, options, ...children))
    : h(element, children);
