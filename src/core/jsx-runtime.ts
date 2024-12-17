export function jsx(type: any, props: any, key: any) {
  return {
    type,
    props: {
      ...props,
      children: props?.children || null,
    },
    key,
  };
}

export const jsxs = jsx;
export const Fragment = Symbol('Fragment');
