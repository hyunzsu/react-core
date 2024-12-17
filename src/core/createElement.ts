export function createElement(
  type: string | Function,
  props: any,
  ...children: any[]
) {
  return {
    type,
    props: {
      ...props,
      children: children.length <= 1 ? children[0] : children,
    },
  };
}

export const Fragment = Symbol('Fragment');
