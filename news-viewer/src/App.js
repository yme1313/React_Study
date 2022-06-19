import { useState,useCallback } from "react";
import Categories from "./component/Categories";
import NewList from "./component/NewsList";

const App =() => {
  const [category, setCatecory] = useState('all');
  const onSelect = useCallback(category => setCatecory(category), [])
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewList category={category} />
    </>
  )
}

export default App;