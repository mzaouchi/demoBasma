// const TestA =(props)=>{
    const TestA =({city,tab})=>{
    // console.log(props)
    return(
        <>
        <h1>Component A</h1>
        {/* <h2>{props.city}</h2> */}
        <h2>{city}</h2>
        
        <ul>
            {
                tab.map((el,i,t)=> <li>{el}</li>)
            }
        </ul>
        </>
    )
}

export default TestA