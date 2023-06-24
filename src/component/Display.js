import React, { Fragment,useState} from "react";
import {Button,Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import User from './User'
import { Link,useNavigate} from "react-router-dom"
import data from "./User"

export default function Display() {

    const [currentPage,setCurrentPage]=useState(1)
    const recordsPerPage=5;
    const lastIndex=currentPage * recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=data.slice(firstIndex,lastIndex);
    const npage=Math.ceil(data.length/recordsPerPage);
    const numbers=[...Array(npage+1).keys()].slice(1);


    var history=useNavigate();
    const handleDelete=(id)=>{
        var index=User.map(function(e){
            return e.id
        }).indexOf(id)
        User.splice(index,1)  

        history('/');
    }
    const handleEdit=(id,name,email,phoneno)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('PhoneNo',phoneno);
        localStorage.setItem('Id',id);

    }
  return (
    <div>
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table  responsive="lg" striped bordered hover size="lg" stripped variant="dark">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone No.
                            </th>
                            <th>
                                Functionality
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            User && User.length >0 ?
                            records.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            {item.PhoneNo}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button size="lg" onClick={()=>handleEdit(item.id,item.Name,item.Email,item.PhoneNo)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button size="lg" onClick={()=>handleDelete(item.id)}>DELETE</Button>

                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data"
                     }
                    </tbody>
                </Table>
               <br></br>
              <Link className='btn btn-primary' class to="/add">
                <Button size="lg">Add</Button>
              </Link>

              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={prePage}>Prev
                    </button>
                  </li>   
                  {
                    numbers.map((n,i)=>(
                        <li className={`page-item ${currentPage === n ? 'active' :''}`} key={i} >
                            <button className="page-link" onClick={()=>changeCPage(n)}>{n}</button>
                        </li>
                    ))
                  }
                  <li className="page-item">
                    <button className="page-link" onClick={nextPage}>Next</button>
                  </li>
                </ul>
              </nav>

             </div>
        </Fragment>
    </div>
  )

  function prePage(){

    if(currentPage !== 1)
    {
        setCurrentPage(currentPage-1)
    }
  }

  function nextPage(){
      if(currentPage !== npage)
      {
        setCurrentPage(currentPage+1)
      }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }
}
