import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProjectSelectionPage from '../src/components/ProjectSelectionPage/ProjectSelectionPage';
import TaskPage from '../src/components/TaskPage/TaskPage';
import './App.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes >
          <Route path="/" element={<ProjectSelectionPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
