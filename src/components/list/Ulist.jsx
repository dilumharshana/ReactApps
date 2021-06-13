import moment from "moment";
import React from "react";

import Items from "../listitems/Items";
import '../../css2/'


var list = () => {
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
    return (
      <div className="container">
        <ul>
          {object.map((person) => {
            return (
              <Items
                key={person.id.value}
                id={person.id.value}
                name={`${person.name.title}. ${person.name.first} ${person.name.last}`}
                email={person.email}
                phone={person.phone}
                DOB={moment(person.dob.date).format("DD-MMMM-YYYY")}
                src={person.picture.medium}
              />
            );
          })}
        </ul>
      </div>
    );
  };

  // ---------------------------------------------------

  return generatePerson();
};

export default list;
