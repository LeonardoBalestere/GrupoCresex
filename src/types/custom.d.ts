// Custom module declarations for Vite aliases used in this project
declare module 'figma:asset/*';
declare module 'sonner@*';
declare module 'react-router-dom*';
declare module 'motion/react';
declare module 'lucide-react';
declare module '@/assets/*';
declare module '@/*';
declare module 'react' {
  export type ChangeEvent<T = any> = { target: T & { value: string; checked: boolean } };
  export type ReactNode = any;
  export type FormEvent<T = any> = any;
  export type SetStateAction<T> = T | ((prevState: T) => T);
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useState<T>(initialState: T | (() => T)): [T, (value: SetStateAction<T>) => void];
}
declare module 'react/jsx-runtime' {
  export const Fragment: any;
  export const jsx: any;
  export const jsxs: any;
}
declare namespace JSX {
  interface IntrinsicElements {
	[elemName: string]: any;
  }
}
// Generic image module declarations to allow importing PNG/JPG/SVG files without TS errors
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';


