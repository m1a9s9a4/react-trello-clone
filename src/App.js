import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import List from "./components/List/List";
import store from './utils/store';
import StoreApi from './utils/storeApi';

export default function App() {
    const [data, setData] = useState(store)
    const addMoreCard = (title, listId) => {
        const newCardId = uuid();
        const newCard = {
            id: newCardId,
            title
        }
    };

    return (
        <StoreApi.Provider value={{ addMoreCard }}>
            <div>
                {data.listsIds.map((id) => {
                    const list = data.lists[id];
                    return <List list={list} key={id} />
                })}
            </div>
        </StoreApi.Provider>
    );
}

