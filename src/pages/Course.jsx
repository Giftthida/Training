import React from 'react'
import MainLayout from '../Layouts/MainLayout'

const Course = (props) => {
  return (
    <MainLayout>
      <div style={divStyle}>
        <p style={textStyle}>
          {props.name} 
        </p>
        <p style={textStyle}>
          Duration: {props.duration}
        </p>
        <p style={textStyle}>
          Price1preson: {props.price1person}
        </p>
        <p style={textStyle}>
          Price2person: {props.price2person}
        </p>
      </div>
    </MainLayout>
  )
}

const course = [
  { name: "Basic React Native", duration: "5 day", price1person: "7500", price2person: "6900" },
  { name: "Power BI Dashboard", duration: "4 day", price1person: "5500", price2person: "4800" },
  { name: "UI Design with Figma", duration: "3 day", price1person: "5000", price2person: "4500" }
]

const CourseList = () => {
  return (
    <>
      {course.map(c =>
        <Course name={c.name} duration={c.duration} price1person={c.price1person} price2person={c.price2person} />
      )}
    </>
  )
}

const divStyle = {
  border: '1px solid black',
  borderRadius: 5,
  padding: 20,
  marginLeft: '20%',
  marginRight: '20%',
  marginBottom: 15 ,
  fontWeight: 'bold',
  fontFamily: 'courier'
}

const textStyle = {
  marginBottom: 10,
}

export default CourseList
