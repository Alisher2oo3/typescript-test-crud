import { ChangeEvent, useState } from 'react';
import styles from './home.module.css';
import { IData } from './interfaces';
import { data } from './constants';

const App = (): JSX.Element => {
  

  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubmet = (): void => {
    if (!title?.length) return;
    setTitle('')
    const newData = {
      id: new Date().getTime(),
      name: title,
      description: 'lorem'
    }

    setArr([...arr, newData])
  }

  const delItem = (id: number): void => {
    const newData = arr.filter(c => c.id !== id)
    setArr(newData)
  }

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App todo</h1>
      <input
        onChange={changeHandler}
        value={title}
        placeholder='Enter todo'
        className={styles.input} />
      <button
        className={styles.button}
        onClick={handleSubmet}
      >
        Add todo
      </button>

      <div className={styles.card}>
        {arr.map(item => (
          <div key={item.id} className={styles.cardItem}>
            <p>{item.name}</p>
            <div className={styles.delBtn}>
              <button onClick={() => delItem(item.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App