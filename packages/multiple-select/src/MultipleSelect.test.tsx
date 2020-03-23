import React from 'react';
import {mount, shallow} from 'enzyme';
import {SelectContainer} from 'grommet/components/Select/SelectContainer'
import {SelectOption} from 'grommet/components/Select/SelectOption'
import MultipleSelect, {defaultThemeProps} from './MultipleSelect';
import {Select, TextInput} from "grommet";
import {act} from 'react-dom/test-utils';

describe('Multiple Select', () => {
  const inputProps = {
    labelKey: 'label',
    valueKey: 'value',
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    value: [],
  };

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
  ];


  describe('Child rendering and interaction', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <MultipleSelect
          {...inputProps}
          options={items}
        />,
      );

      ['onBlur', 'onChange', 'onFocus'].forEach(cb =>
        inputProps[cb].mockClear(),
      );
    });


    it('should open the drop on click and contain 3 items and SearchBar', () => {

    expect(wrapper.find(TextInput).first().props().placeholder).toEqual('Select');
      wrapper.simulate('click');

      const container = wrapper.find(SelectContainer);
      expect(container.length).toEqual(1);
      expect(container.find(TextInput).first().props().placeholder).toEqual('Search');
      expect(container.find(SelectOption).length).toEqual(3);
    });


    it('should open the drop on click and contain 2 items when changing the options prop', () => {

      wrapper.setProps({
        options: [items[0],items[1]]
      })

      wrapper.simulate('click');
      const container = wrapper.find(SelectContainer);
      expect(container.length).toEqual(1);
      expect(container.find(SelectOption).length).toEqual(2);
    });

    it('should select the proper elements', () => {
      wrapper.simulate('click');
      wrapper.find(SelectOption).first().find('button').first().simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[0]]);

      wrapper.simulate('click');
      wrapper.find(SelectOption).at(1).find('button').first().simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[1]]);
    });


    it('should select and remove a element from the drop', () => {
      wrapper.setProps({
        value: [items[0],items[1]]
      })
      wrapper.simulate('click');
      wrapper.find(SelectOption).first().find('button').first().simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[1]]);
      wrapper.simulate('click');
      wrapper.find(SelectOption).at(1).find('button').first().simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[0]]);
    });


    it('should  remove a element by clicking the close icons on a selected element', () => {
      wrapper.setProps({
        value: [items[0],items[1]]
      })

      wrapper.find(defaultThemeProps.multipleSelect.icons.close).first().simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[1]]);

      wrapper.find(defaultThemeProps.multipleSelect.icons.close).at(1).simulate('click');
      expect(inputProps.onChange).toHaveBeenCalledWith([items[0]]);

    });


    it('should filter out items to 1', () => {
      wrapper.simulate('click');
      act(() => {
        wrapper.find(Select).prop('onSearch')('Coffee')
      });
      wrapper.update()
      expect(wrapper.find(SelectOption).length).toEqual(1);
    });
  })

});



