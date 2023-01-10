import { useState } from "react";

// Ajax를 사용하여 localhost:8080에 접근하여 값을 가져옴
const DBBox = () => {
  // 가져온 값을 저장할 state
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  async function fetchData(){
    // 실행하자마자 값을 가져옴
    const response = await fetch(`/Test/selectProduct.jsp?name=${search}`);
    const data = await response.json();
    setData(data);
  }
  
  return ( 
    <div>
      <h1>DBBox 컴포넌트가 실행중입니다</h1>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
        fetchData()}}>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        <input type="submit" />
      </form>

      <p>
      { data && data.name } 
      {/* 빈공간에서는 속성으로 접근하면 undefined이 나옴... 그래서 안 되는 거여따!*/}
      </p>
      <p>
      { data && data.count}
      </p>
      
    </div>
  );
}

export default DBBox;