import React from "react";

import Items from "../listitems/Items";
import "./ul.css";

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
        value: "0390511T",
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
        value: "0390511T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
  ];

  const person = () => {
    return object.map((obj) => {
      return (
        <Items
          name={obj.name.first}
          email={obj.email}
          phone={obj.phone}
          image={obj.picture.medium}
        />
      );
    });
  };

  return (
    person()
    )
};

export default list;
