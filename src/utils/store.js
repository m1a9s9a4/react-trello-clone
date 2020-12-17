const cards = [
    {
        id: 'card-1',
        title: 'titles goes here',
    },
    {
        id: 'card-2',
        title: 'titles goes here',
    },
    {
        id: 'card-3',
        title: 'titles goes here',
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
                    title: 'titles goes here',
                },
                {
                    id: 'card-5',
                    title: 'titles goes here',
                },
            ],
        },
    },
    listsIds: ['list-1', 'list-2'],
}

export default data;