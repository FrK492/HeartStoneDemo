import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { mockApiResponse, mockCard, mockCard2, mockCardArray } from '../src/mocks';

// Components
import { CenteredLoader } from '../src/components/CenteredLoader';
import { SearchInput } from '../src/components/SearchInput';
import { MechanicCard } from '../src/components/MechanicCard';
import { HeartStoneCard } from '../src/components/HeartStoneCard';

// Utils
import {
  convertHeartStoneResponseToArray,
  exportMechanicsFromHeartStoneCards,
  filterHeartStoneCardsByMechanic
} from '../src/utils/arrayManipluation';


describe('Components', () => {
  it('Loader renders corretly', () => {
    const jsonTree = renderer.create(<CenteredLoader size='large' />).toJSON()
    expect(jsonTree).toMatchSnapshot()
  });

  it('SearchInput renders correctly', () => {
    const jsonTree = renderer.create(<SearchInput value='' onSubmit={() => {}} onValueChange={() => {}} />).toJSON()
    expect(jsonTree).toMatchSnapshot()
  })

  it('MechacnicCard renders correctly', () => {
    const jsonTree = renderer.create(<MechanicCard mechanicName='' onCardPress={() => {}} />).toJSON()
    expect(jsonTree).toMatchSnapshot()
  })

  it('HeartStoneCard renders correctly', () => {
    const jsonTree = renderer.create(<HeartStoneCard card={mockCard2} />).toJSON()
    expect(jsonTree).toMatchSnapshot()
  })
})

describe('Utils', () => {
  it('filterHeartStoneCardsByMechanic functions correctly', () => {
    const result = filterHeartStoneCardsByMechanic('testMechanic', mockCardArray)
    expect(result[0]).toBe(mockCard2)
  })

  it('exportMechanicsFromHeartStoneCards functions correctly', () => {
    const result = exportMechanicsFromHeartStoneCards(mockCardArray)
    expect(result[0]).toBe(mockCard2.mechanics!![0].name)
  })

  it('convertHeartStoneResponseToArray functions correctly', () => {
    const result = convertHeartStoneResponseToArray(mockApiResponse)
    expect(result[0]).toBe(mockCard)
  })

})

