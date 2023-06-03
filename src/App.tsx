import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TasksBlock from './components/tasksBlock/TasksBlock';

function App() {
	return (
		<div className="App">
			<Header />
			<TasksBlock />
		</div>
	);
}

export default App;
