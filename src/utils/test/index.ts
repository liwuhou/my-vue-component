import { VueWrapper } from '@vue/test-utils'

export const getClasses = (Elms: VueWrapper): string[] => {
  return Elms.classes().map((cls) => cls.replace('\n', ''))
}

export const checkInClasses = (Elms: VueWrapper, cls: string): boolean => {
  return getClasses(Elms).includes(cls)
}
