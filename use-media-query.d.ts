import { ReactNode } from 'react'

declare module '@tevhooks/use-media-query' {
  export type BreakPointObject = string[] | number[]

  export type Query = string | BreakPointQueryObject

  export interface MediaQueryResponseObject {
    matches: boolean
    addListener: (fn: VoidObjectParamReturn) => void
    removeListener: (fn: VoidObjectParamReturn) => void
    matchMedia: (fn: VoidObjectParamReturn) => void
  }

  export function oidObjectParamReturn(Object): void

  export type BreakPointQueryFunction = (breakpoint: string) => string

  export interface BreakPointQueryObject {
    up: BreakPointQueryFunction
    down: BreakPointQueryFunction
  }

  export function useMediaQuery(query: string | ((query: BreakPointQueryObject) => string)): boolean

  export function breakpointsFormatter(breakpoints: BreakPointObject): BreakPointQueryObject

  export function QueryProvider({ children: ReactNode, breakpoints: BreakPointObject }): never

  export function RenderUseMediaQuery({ children: ReactNode, query: Query }): never

  export default useMediaQuery
}
