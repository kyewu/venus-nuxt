import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Card from '../Card.vue'

type imageTypeType = 'default' | 'rounded' | 'avatar'

const imageTypeValue: imageTypeType = 'default'

const propsValue = {
  title: 'test',
  subTitle: 'test subtitle',
  titleClass: 'p-4',
  height: 'h-60',
  url: 'www.imooc.com',
  imageType: imageTypeValue,
}
let wrapperInstance: any
describe('card.vue', () => {
  beforeEach(() => {
    wrapperInstance = shallowMount(Card, {
      props: propsValue,
    })
  })
  it('computed函数是否存在', () => {
    expect(computed).toBeDefined()
  })

  it('test default title of the card', () => {
    expect(wrapperInstance.text()).toMatch('test')
    expect(wrapperInstance.text()).toMatch('test subtitle')
    expect(wrapperInstance.find('.title-wrapper').classes()).toContain('p-4')
  })

  it('test icon', () => {
    wrapperInstance.setProps({
      icon: 'i-mdi-account',
    })
    expect(wrapperInstance.html().match(/i-mdi-account/))
    console.log(wrapperInstance.html())
  })

  it('test slot', () => {
    const propsTmpl = { ...propsValue, icon: 'i-mdi-account' }
    const wrapper = shallowMount(Card, {
      props: propsTmpl,
      slots: {
        default: item => `<div>${JSON.stringify(item)}</div>`,
      },
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toMatch(propsTmpl.icon)
  })
})
