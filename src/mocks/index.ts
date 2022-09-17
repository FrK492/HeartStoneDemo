import { IHeartStoneCard } from "../interfaces"

export const mockCard: IHeartStoneCard = {
    cardId: '123',
    cardSet: 'testSet',
    dbfId: '123',
    faction: 'testFaction',
    locale: 'tr',
    name: 'testName',
    playerClass: 'testClass',
    text: 'testText',
    type: 'testType'
}

export const mockCard2: IHeartStoneCard = {
    cardId: '1234',
    cardSet: 'testSet2',
    dbfId: '1234',
    faction: 'testFaction3',
    locale: 'en',
    name: 'testName2',
    playerClass: 'testClass2',
    text: 'testText2',
    type: 'testType2',
    img: 'https://dummyimage.com/300',
    mechanics: [
        { name: 'testMechanic' }
    ]
}

export const mockApiResponse = {
    testProp: [mockCard],
    testProp2: [mockCard2]
}

export const mockCardArray = [
    mockCard, mockCard2
]
