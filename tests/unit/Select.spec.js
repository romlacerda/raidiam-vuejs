import { mount } from '@vue/test-utils';
import Select from '@/components/Select';
import { ParticipantMock } from './mock';

describe('Select', () => {
  it('should be a vue component', () => {

    const wrapper = mount(Select, {
      props: { 
        selectedOrganisation: '', 
        participants: [],
      }
    })
    

    expect(wrapper.vm).toBeDefined();
  });

  it('should change its selected value', async () => {
    const wrapper = mount(Select, {
      props: {
        selectedOrganisation: '',
      }
    });

    await wrapper.setProps({ selectedOrganisation: 'fefac57d-1d50-5615-89b2-0b2d80623a28' });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.selected).toEqual('fefac57d-1d50-5615-89b2-0b2d80623a28');
  });


  it('should have a list of participants', async () => {
    const wrapper = mount(Select, {
      props: {
        participants: [],
      }
    });

    await wrapper.setProps({ participants: ParticipantMock });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.participants).toEqual(ParticipantMock);
  });

  it('should show loading while response is coming', () => {
    const wrapper = mount(Select, {
      data() {
        return {
          loading: true,
        }
      }
    });

    expect(wrapper.text()).toBe('Loading...')
  });

  it('should not show loading while response is coming', () => {
    const wrapper = mount(Select, {
      data() {
        return {
          loading: false,
        }
      }
    });

    expect(wrapper.text()).not.toBe('Loading...')
  })
})
