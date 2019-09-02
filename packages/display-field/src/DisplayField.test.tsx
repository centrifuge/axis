import React from "react";
import DisplayField from "./DisplayField";
import {mount} from 'enzyme';
import {Anchor, Paragraph} from "grommet";

describe("Sample Component test", () => {
  describe('Child rendering and interaction', () => {
    let wrapper;
    const value = 'some value we want to display'
    beforeEach(() => {
      wrapper = mount(
        <DisplayField
          value={value}
        />,
      );

    });

    it('should display the value in a paragraph',() => {
      const p = wrapper.find(Paragraph);
      expect(p.length).toEqual(1);
      expect(p.text()).toEqual(value);
    })

    it('should display a label in a label',() => {
      wrapper.setProps({
        label: "Some Random Label"
      })
      const label = wrapper.find('label');
      expect(label.length).toEqual(1);
      expect(label.text()).toEqual('Some Random Label');
    })

    it('should display the value wrapped in an Anchor',() => {
      wrapper.setProps({
        link: "http://example.com"
      })
      const anchor = wrapper.find(Anchor);
      expect(anchor.length).toEqual(1);
      expect(anchor.prop('href')).toEqual('http://example.com');
      expect(anchor.text()).toEqual(value);
    })

    it('should display the value wrapped in an Anchor with a target _blank',() => {
      wrapper.setProps({
        link: {
          href:"http://example.com",
          target:'_blank'
        }
      })
      const anchor = wrapper.find(Anchor);
      expect(anchor.length).toEqual(1);
      expect(anchor.prop('href')).toEqual('http://example.com');
      expect(anchor.prop('target')).toEqual('_blank');
      expect(anchor.text()).toEqual(value);
    })
  });
});
