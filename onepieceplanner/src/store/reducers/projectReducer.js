const initState = {
	projects: [
		{id: '1', title: 'find treasure', content: 'blah blah blah'},
		{id: '2', title: 'beat kaido', content: 'blah blah blah'},
		{id: '3', title: 'find the One Piece', content: 'blah blah blah'},
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
	}
	return state;
};

export default projectReducer;
