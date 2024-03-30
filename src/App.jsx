
import Model from "./components/model/Model";
import Week1 from "./pages/Week1/Week1"
import Week2 from "./pages/week2/Week2"

import { useState } from "react"

function App() {
  const [page,setPage] = useState(0);
  const [isModalOpen, setModel] = useState(false);

  function nextPage(){
    setPage((prev)=>{
        return 1
    })
  }

  function prevPage(){
    setPage((prev)=>{
        return 0
    })
  }

  function setIsModalOpen(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.classList.toggle('modal-open');
      setModel((prev)=> !prev)
  }

  if(page == 0)
    return <>
      <Model isModalOpen={isModalOpen} setIsModal={setIsModalOpen}/>
      <Week1 nextPage={nextPage} />
    </>
  else
    return <>
      <Model setIsModal={setIsModalOpen} isModalOpen={isModalOpen}/>
      <Week2 nextPage={nextPage} prevPage={prevPage} setIsModal={setIsModalOpen}/>
    </>

}

export default App
