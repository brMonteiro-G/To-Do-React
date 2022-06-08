import style from './list.module.scss'
import Item from './Item/item';
import { useState } from 'react';

function List() {
  const [tasks, setTasks] = useState([{
    task:"typescript",
    time:"02:00:00"
  },
  {
    task:"javascript",
    time:"02:00:00"
  },
  {
    task:"react",
    time:"02:00:00"
  }
])

  return (
    <aside className={style["newTask"]}>
      <h2 onClick = {() => {
        console.log("h2 clicado");
        
        setTasks([...tasks, {task:"Estudar states", time:"03:00:00"}]) 
      }}>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => ( // object to HTML
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;