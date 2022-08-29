import Button from '../Button'

import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { checkInClasses } from '@test'

describe('Button', () => {
  // mount
  test('mount @vue/test-utils', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.text()).toBe('Button')
  })
})

describe('Color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })

    expect(checkInClasses(wrapper, 'bg-blue-500')).toBeTruthy()
  })

  test('red', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    })

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBeTruthy()
  })
})
