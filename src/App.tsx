import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false},
    { id: 2, name: 'Comprar o bolo na padaria', done: true}
  ])
  
    const handleAddTask = (taskName: string) => {
      let newList = [...list]
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      })

      setList(newList)
    }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => {
         return <ListItem key={index} item={item} />
        })}

      </C.Area>
    </C.Container>
  );
}

export default App;
