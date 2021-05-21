import React, {useReducer} from 'react'
import ItemData from '../data/ItemData.json'

interface List {
    name: string;
    id: number;
    image: string;
    price: number;
    added: boolean;
    amount: number;
}

type State = List[];

type Actions = 
    | { type : 'DISPLAY_LIST'; name: string; id: number; image: string; price: number; added: boolean; amount: number;}

const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'DISPLAY_LIST':
            return[...state,{
                name: action.name,
                id: action.id,
                image: action.image,
                price: action.price,
                added: action.added,
                amount: action.amount
            }]
          
    
        default:
           return state
    }
}



export const ItemsList: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, ItemData)

    return (
        <div>
            {/* {JSON.stringify(state)} */}
            {
                state.map(item => 
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.image}</div>
                </div>)
            }adsfs
        </div>
    )
}

export default ItemsList
