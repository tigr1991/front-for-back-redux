import React from 'react'
import TodosList from 'containers/TodosListContainer'
import DoneTodosList from 'containers/DoneTodosListContainer'
import CreateForm from 'containers/CreateFormContainer'

import styles from './Home.styl'

const Home = () => (
  <div className={styles.wrapper}>
    <h1>Add new ticket</h1>
      <CreateForm />
      <h1>In progress</h1>
      <TodosList />
      <h1>Done</h1>
      <DoneTodosList />
  </div>
)

export default Home
