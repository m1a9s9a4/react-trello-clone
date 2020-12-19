import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import List from "./components/List/List";
import store from './utils/store';
import StoreApi from './utils/storeApi';
import InputContainer from './components/input/InputContainer';
import {makeStyles} from '@material-ui/core/styles';
import {DragDropContext} from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: 'green',
    }
}))

export default function App() {
    const [data, setData] = useState(store);
    const classes = useStyle();
    const addMoreCard = (title, listId) => {
        console.log(title, listId);
        const newCardId = uuid();
        const newCard = {
            id: newCardId,
            title
        }

        const list = data.lists[listId];
        list.cards = [...list.cards, newCard];

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            }
        }
        setData(newState)
    };

    const addMoreList = (title)　=> {
        const newListId = uuid();
        const newList = {
            id: newListId,
            title,
            cards: [],
        }

        const newState = {
            listsIds: [...data.listsIds, newListId],
            lists: {
                ...data.lists,
                [newListId]: newList,
            }
        }

        setData(newState);
    }

    const updateListTitle = (title, listId) => {
        const list = data.lists[listId];
        list.title = title;
        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list
            },
        }
        setData(newState);
    }

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if (!destination) {
            return;
        }
        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId];
        const draggingCard = sourceList.cards.filter((card) => {
            return card.id === draggableId
        })[0];

        console.log(source.droppableId);
        console.log(destination.droppableId);
        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);
            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: destinationList
                }
            }
            console.log(newState);
            setData(newState);
        }
    }

    return (
        <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={classes.root}>
                    {data.listsIds.map((id) => {
                        const list = data.lists[id];
                        return <List list={list} key={id} />
                    })}
                    <InputContainer type="list" />
                </div>
            </DragDropContext>
        </StoreApi.Provider>
    );
}

