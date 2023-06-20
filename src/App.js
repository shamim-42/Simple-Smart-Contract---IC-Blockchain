import { Table } from 'antd';
import { useState } from "react";
import "./App.css";
import CreateNewData from './CreateNewData';

export default function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("No data");
  const [inputCount, setInputCount] = useState([1]);
  const [inputData, setInputData] = useState([{}]);

  const changeInputCount = () => {
    setInputCount([...inputCount, 1]);
    setInputData((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp.push({});
      return temp
    })
  }

  const handleChangeInputData = (e, i) => {
    const { name, value } = e.target;

    setInputData((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[i][name] = value;
      return temp;
    })
  }

  const handleSubmit = () => {
    console.log(inputData)
  }

  // const fetchDataFromBackend = async () => {
  //   let result = await rust_backend.get();
  //   console.log(result);
  //   setResponse(result.toString());
  //   setData(result);
  // };

  // const incrementDataInBackend = async () => {
  //   await rust_backend.inc();
  // };



  // useEffect(() => {
  //   setData(JSON.stringify(data));
  //   setResponse(rust_backend.get());
  // }, []);

  const dataSource = [
    {
      key: '1',
      product: 3234,
      customer: 78987,
      selling_date: '10-12-2022',
      return_date: '15-12-2022',
      comment: "Build quality is poor"
    },
    {
      key: '2',
      product: 3234,
      customer: 67823,
      selling_date: '18-12-2022',
      return_date: '24-12-2022',
      comment: "Color finishing is not good"
    },
    {
      key: '3',
      product: 3234,
      customer: 78987,
      selling_date: '30-12-2022',
      return_date: '',
      comment: ""
    },
    {
      key: '3',
      product: 3909,
      customer: 13432,
      selling_date: '13-01-2023',
      return_date: '',
      comment: "Build quality is poor"
    }
  ];

  const columns = [
    {
      title: 'Porduct',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Selling Date',
      dataIndex: 'selling_date',
      key: 'selling_date',
    },
    {
      title: 'Return Date',
      dataIndex: 'return_date',
      key: 'return_date',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
  ];


  return (
    <div className="body">
      <h2 className="headline" header>
        {" "}
        This Frontend deployed in IC Blockchain
      </h2>
      <Table
        dataSource={dataSource}
        columns={columns}
      />

      <CreateNewData
        handleChangeInputData={handleChangeInputData}
        inputCount={inputCount}
        changeInputCount={changeInputCount}
        handleSubmit={handleSubmit}
      />



      {/* <button className="inputField" onClick={fetchDataFromBackend}>Fetch Data From Canister</button> */}
      {/* <button className="inputField" onClick={incrementDataInBackend}>Increment</button> */}
      <h4>response: {response}</h4>
      <h4>data: {data}</h4>
    </div>
  );
}
