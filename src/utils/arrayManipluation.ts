import { IHeartStoneCard, IHeartStoneResponse } from "../interfaces";

export const convertHeartStoneResponseToArray = (object: IHeartStoneResponse): Array<IHeartStoneCard> => {
    const rawValue = Object.values(object)
    const dataArray = rawValue.reduce((prevValue, currentValue) => {
        return [...prevValue, ...currentValue]
    }, [])
    return dataArray
}

export const exportMechanicsFromHeartStoneCards = (cards: Array<IHeartStoneCard>): Array<string> => {
    const cardsThatHaveMechanic = cards.filter(item => item.mechanics)
    const allMechanics = cardsThatHaveMechanic.reduce((prevValue, currentValue) => {
        if (currentValue.mechanics) {
            currentValue.mechanics.map((mechanic) => {
                prevValue.push(mechanic.name)
            })
        }
        return prevValue
    }, [] as Array<string>)

    const uniqueMechanics = [...new Set(allMechanics)].sort()

    return uniqueMechanics
}