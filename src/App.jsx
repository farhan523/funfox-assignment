
import Week1 from "./pages/Week1/Week1"
import Week2 from "./pages/week2/Week2"
import { useState } from "react"

function App() {
  const [page,setPage] = useState(0);

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

  if(page == 0)
    return <Week1 nextPage={nextPage} />
  else
    return <Week2 nextPage={nextPage} prevPage={prevPage}/>

}

export default App
