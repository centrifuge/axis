import React from 'react'
import { mount, shallow } from 'enzyme'
import { SelectContainer } from 'grommet/components/Select/SelectContainer'
import SearchSelect from './SearchSelect'
import { Select, TextInput } from 'grommet'
import { act } from 'react-dom/test-utils'

describe('Search Select', () => {
  const inputProps = {
    labelKey: 'label',
    valueKey: 'value',
    name: 'dropdown',
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    value: undefined,
  }

  const items = [
    {
      label: 'water',
      value: 'h20',
    },
    {
      label: 'coffee',
      value: 'COFFEE',
    },
    {
      label: 'cola',
      value: 'COLA',
    },
  ]

  describe('Child rendering and interaction', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<SearchSelect {...inputProps} options={items} />)
      ;['onBlur', 'onChange', 'onFocus'].forEach(cb => inputProps[cb].mockClear())
    })

    it('should open the drop on click and contain 3 items and SearchBar', () => {
      expect(
        wrapper
          .find(TextInput)
          .first()
          .props().placeholder
      ).toEqual('Select')
      wrapper.simulate('click')

      const container = wrapper.find(SelectContainer)
      expect(container.length).toEqual(1)
      expect(
        container
          .find(TextInput)
          .first()
          .props().placeholder
      ).toEqual('Search')
      expect(container.find('SelectContainer__OptionBox').length).toEqual(3)
    })

    it('should open the drop on click and contain 2 items when changing the options prop', () => {
      wrapper.setProps({
        options: [items[0], items[1]],
      })

      wrapper.simulate('click')
      const container = wrapper.find(SelectContainer)
      expect(container.length).toEqual(1)
      expect(container.find('SelectContainer__OptionBox').length).toEqual(2)
    })

    it('should select the proper element', () => {
      wrapper.simulate('click')
      wrapper
        .find('SelectContainer__OptionBox')
        .first()
        .simulate('click')
      expect(inputProps.onChange).toHaveBeenCalledWith(items[0])
    })

    it('should filter out items to 1', () => {
      wrapper.simulate('click')
      act(() => {
        wrapper.find(Select).prop('onSearch')('Coffee')
      })
      wrapper.update()
      expect(wrapper.find('SelectContainer__OptionBox').length).toEqual(1)
    })
  })
})
