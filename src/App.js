import React, {useState} from 'react';
import './App.css';
import List from "./components/List/List";
import store from './utils/store'

export default function App() {
    const [data, setData] = useState(store)

    return (
        <div className="App">
            {data.listsIds.map((id) => {
                const list = data.lists[id];
                return <List list={list} key={id} />
            })}
        </div>
    );
}

