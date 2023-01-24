import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Navigation from '../navbar/Navbar';




const EmployeeInfo = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
  fetch("record.json")
  .then((response) => {
    return response.json();
  })
  .then((convertedData) => {
    console.log("++++++++",convertedData);
    setData(convertedData);
 
  })
  .catch((error) => {
    console.log("this is error=", error);
  });
  },[])




  return (
    <>
      <div className="cardFlex">
          {
              data.map((data: any, index: any) => {
              return (

                <div key={index} className="cardRow" >

                  <Col className='card'>
                    <Card style={{ width: '18rem' }} className="grid">
                      <Card.Img variant="top" src={data.imageUrl} />
                      <Card.Body>
                        <Card.Title >{data.name}</Card.Title>
                        <Card.Text>
                          {data.designation} <br />
                          {data.email}  
                        </Card.Text>
                        <Button variant="primary">View Profile</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                </div>

              )
            })
           
          }
      </div>

      <Navigation state={data} />
    </>

  );

}


export default EmployeeInfo;