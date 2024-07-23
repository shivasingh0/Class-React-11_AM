import React, { useEffect, useState } from 'react'

const Test = () => {

    const [test, setTest] = useState('')

    useEffect(()=>{
        console.log('test')
    },[])

    function handlevalue(e){
        setTest(e.target.value)
    }

  return (
    <>
    <input type="text" onChange={handlevalue} />
    <div>test</div>
    <div>test</div>
    <div>test</div>
    <div>test</div>
    </>
  )
}

export default Test