import React from 'react'
import TodosList from 'containers/TodosListContainer'
import DoneTodosList from 'containers/DoneTodosListContainer'
import CreateForm from 'containers/CreateFormContainer'

import styles from './Home.styl'

const Home = () => (
  <div className={styles.wrapper}>
    <CreateForm />
    <hr />
    <TodosList />
    <hr />
    <DoneTodosList />
  </div>
)

export default Home
