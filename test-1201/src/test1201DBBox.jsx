const tst1201DBBox = () => {
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

    </div>
  );
}

export default tst1201DBBox;