import MyProviders, { MyContext } from "./context/MyContext";
import Display from "./Display";
import Total from "./Total";
import Input from "./Input";
import "./Home.css";

function Home() {
  
  return (
    <>
      <MyProviders>    
        <div className="parent">
        <Input/>
        <Display/>
        </div>
        
      <div className="total">
        <Total />
      </div> 

      </MyProviders>
      
    </>
  );
}

export default Home;
