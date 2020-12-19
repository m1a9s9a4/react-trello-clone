const cards = [
    {
        id: 'card-1',
        title: 'title1 goes here',
    },
    {
        id: 'card-2',
        title: 'title2 goes here',
    },
    {
        id: 'card-3',
        title: 'title3 goes here',
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
                    title: 'title4 goes here',
                },
                {
                    id: 'card-5',
                    title: 'title5 goes here',
                },
            ],
        },
    },
    listsIds: ['list-1', 'list-2'],
}

export default data;