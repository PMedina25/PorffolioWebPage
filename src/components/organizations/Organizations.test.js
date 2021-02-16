import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SliderCard from './SliderCard';

configure({ adapter: new Adapter});

describe('<SliderCard />', () => {
    it('should render some <SliderCard /> elements', () => {
        const wrapper = shallow(<SliderCard />);
        expect(wrapper.find(SliderCard)).toHaveLenght(2);
    });
});



