import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import List from "../components/List/List";
import store from '../utils/store';
import StoreApi from '../utils/storeApi';
import InputContainer from '../components/input/InputContainer';
import {makeStyles} from '@material-ui/core/styles';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: 'green',
    }
}))

export default function Wrapper() {
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
        const {destination, source, draggableId, type} = result;
        if (!destination) {
            return;
        }

        if (type === "list") {
            const newListIds = data.listsIds;
            newListIds.splice(source.index, 1);
            newListIds.splice(destination.index, 0, draggableId);
            return;
        }
        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId];
        const draggingCard = sourceList.cards.filter((card) => {
            return card.id === draggableId
        })[0];

        let newState;
        sourceList.cards.splice(source.index, 1);
        destinationList.cards.splice(destination.index, 0, draggingCard);
        if (source.droppableId === destination.droppableId) {
            newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: destinationList
                }
            }
        } else {
            newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: sourceList,
                    [destinationList.id]: destinationList,
                }
            }
        }
        console.log(newState);
        setData(newState);
    }

    return (
        <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="app" type="list" direction="horizontal">
                    {(provided) => (
                        <div className={classes.root} ref={provided.innerRef} {...provided.droppableProps}>
                            {data.listsIds.map((id, index) => {
                                const list = data.lists[id];
                                return <List list={list} key={id} index={index}/>
                            })}
                            <InputContainer type="list" />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </StoreApi.Provider>
    );
}

