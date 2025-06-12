import { shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import Toast from '../Toast.vue'

const props = {
  text: 'hello toast',
  duration: 2500,
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers() // clear the fake timers after each test
})

describe('toast.vue', () => {
  it('toast set', async () => {
    const wrapper = shallowMount(Toast, {
      props,
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.findAll('div').length).toBe(0)

    const init = vi.getTimerCount()
    expect(init).toBe(0)

    await wrapper.setProps({
      modelValue: true,
    })

    const count = vi.getTimerCount()
    expect(count).toBe(1)

    expect(wrapper.text()).contain(props.text)

    vi.advanceTimersByTime(props.duration - 1)
    expect(vi.getTimerCount()).not.toBe(0)
    vi.runAllTimers()
    expect(vi.getTimerCount()).toBe(0)

    await wrapper.setProps({
      modelValue: false,
    })

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)

    // @ts-ignore
    const value = wrapper.emitted('update:modelValue')[0]

    expect(value).toEqual([false])
  })
})
