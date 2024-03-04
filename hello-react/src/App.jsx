import React from "react";
import Student from "./student.jsx"


function app(){
  return(

    <>
    <Student name="John" age="20" isStudent={true}/>
    <Student name="Jane" age="22" isStudent={false}/>
    <Student name="Doe" age="25" isStudent={true}/>
    </>
  );

}

export default app;