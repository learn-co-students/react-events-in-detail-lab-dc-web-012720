import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import CoordinatesButton from '../src/components/CoordinatesButton';
import DelayedButton from '../src/components/DelayedButton';

Enzyme.configure({ adapter: new Adapter() })

const MOCKED_EVENT = {
  clientX: 5,
  clientY: 5,
  screenX: 5,
  screenY: 5,
  pageX: 5,
  pageY: 5,
  persist: sinon.spy()
};

const DELAY = 50;

describe('<CoordinatesButton />', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<CoordinatesButton onReceiveCoordinates={spy} />);

  afterEach(function () {
    spy.reset();
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).to.equal(1);
  });

  
});

describe('<DelayedButton />', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<DelayedButton onDelayedClick={spy} delay={DELAY} />);

  afterEach(function () {
    spy.reset();
    MOCKED_EVENT.persist.reset();
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).to.equal(1);
  });

  
});
