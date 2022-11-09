import 'jest-canvas-mock';

import { mount } from '@vue/test-utils'

import BarChart from '@/components/BarChart'

describe('BarChart', () => {
  const props = ['MercadoPago', 'Brazil'];

  it('should be a vue component', () => {

    const wrapper = mount(BarChart, {
      props: { 
        data: [],
      }
    })
    

    expect(wrapper.vm).toBeDefined();
  });

  it('should pass data as props', async () => {
    const wrapper = mount(BarChart, {
      props: {
        data: props,
      },
    });

    await wrapper.setProps({ data: [...props] });

    expect(wrapper.vm.data).toEqual(props);
  })

  
})
