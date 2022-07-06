
//import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

const data = [
  {
    title: "Title 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 1
  },
  {
    title: "Title 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 2
  }
]
//const data2 = [];

function App() {
  //const [UserData, setUserData] = useState(data2);

  function saveHandler(inputdata){
    fetch("https://simplewebapp-98af2-default-rtdb.firebaseio.com/users.json" , {
      method: "POST",
      body: JSON.stringify(inputdata),
      header:{
        "Content-Type" : "application-json"
      }
    });
    // setUserData((previousState)=>{
    //   return [inputdata, ...previousState]
    // })
  }

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <section className="mainbody-content">
        {data.map((data) => (
          <Content key={data.id} name={data.title} description={data.description} />))}
      </section>
      <Form onSave={saveHandler}></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
