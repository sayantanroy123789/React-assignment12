
import React, { useState, useEffect } from "react";

function List() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let users = data.results;
        console.log(users);
        setUser(users);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      

      <div>
        <table
          cellPadding={10}
          style={{ width: "100%", boxShadow: "0 0 10px black" }}
        >
          <thead>
            <tr style={{ background: "black", color: "white" }}>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>CITY</th>
              
            </tr>
          </thead>
          <tbody align="center">
            {user.map((data) => (
              <tr>
                <td>
                  <img src={data.picture.medium} alt="" />
                </td>
                
                <td>{  data.name.title+" "+data.name.first + " " + data.name.last}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.location.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default List;

