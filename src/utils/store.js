const cards = [
    {
        id: 'card-1',
        content: 'contents goes here',
    },
    {
        id: 'card-2',
        content: 'contents goes here',
    },
    {
        id: 'card-3',
        content: 'contents goes here',
    }
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'Doing',
            cards: [
                {
                    id: 'card-4',
                    content: 'contents goes here',
                },
                {
                    id: 'card-5',
                    content: 'contents goes here',
                },
            ],
        },
    },
    listsIds: ['list-1', 'list-2'],
}

export default data;