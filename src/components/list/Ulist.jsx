import moment from "moment";
import React from "react";

import Items from "../listitems/Items";
import "bootstrap/dist/css/bootstrap.css";


const a = {
  name:"dilum",
  marks : [ {grade:"A" , class:"11"}]
}

const{marks} = a;

console.log(marks[0].class);

const list = () => {
  var object = [
    {
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },

      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },

        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },

      email: "brad.gibson@example.com",

      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      phone: "011-962-7516",
      cell: "081-454-0666",
      id: {
        name: "PPS",
        value: "0390dd511T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },

    {
      gender: "male",
      name: {
        title: "mr",
        first: "Prasanna",
        last: "Herath",
      },

      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },

        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },

      email: "brad.gibson@example.com",

      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      phone: "011-962-7516",
      cell: "081-454-0666",
      id: {
        name: "PPS",
        value: "0390511T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },

    {
      gender: "male",
      name: {
        title: "mr",
        first: "Prasanna",
        last: "Herath",
      },

      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },

        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },

      email: "brad.gibson@example.com",

      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      phone: "011-962-7516",
      cell: "081-454-0666",
      id: {
        name: "PPS",
        value: "039051f1T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
  ];

  //generating person ----------------------------------

 

  let generatePerson = () => {

    const Items = (props) => {

      const { name , id , email , phone , picture , dob } = props;
    
      return (
        <li className="mb-4">
          <p className="personName">
            <img src={picture.medium} width="60px" height="60px" alt={name.first} />{" "}
            Name : {name.first}
          </p>
    
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
          <p>DOB : {moment(dob).format("DD-YYYY-MM")} </p>
          <p>ID : {id.value} </p>
          <button className="btn btn-primary">Cheking</button>
        </li>
      );
    };

    return (
      <div className="container ">
        <ul className="mt-4">
          <div className="row align-items-center">

        {object.map(Items)}

            {object.map((person) => {
              return (
                <div className="col-lg-4 col-md-3 border">

                  <Items
                    key={person.id.value}
                    id={person.id.value}
                    name={`${person.name.title}. ${person.name.first} ${person.name.last}`}
                    email={person.email}
                    phone={person.phone}
                    DOB={moment(person.dob.date).format("DD-MMMM-YYYY")}
                    src={person.picture.medium}
                  />

                  <h1> <p>d</p> <p>q</p> </h1>
                  
                </div>
              );
            })}
            
          </div>
        </ul>
      </div>
    );
  };

  // ---------------------------------------------------

  return generatePerson();
};

export default list;
