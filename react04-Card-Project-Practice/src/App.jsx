import React from 'react'
import UserCard from './components/UserCard'

const App = () => {
  const arr = [
      {
        "backgroundImg": "https://img.magnific.com/free-vector/abstract-colorful-technology-dotted-wave-background_1035-17450.jpg?semt=ais_hybrid&w=740&q=80",
        "profilePic": "https://randomuser.me/api/portraits/men/32.jpg",
        "name": "Aarav Mehta",
        "jobPost": "UI Designer",
        "skills": ["Figma", "UI/UX", "Branding"],
        "number": 4,
        "rating": 4.8,
        "clients": 120,
        "rate": "$45/hr"
      },
      {
        "backgroundImg": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        "profilePic": "https://randomuser.me/api/portraits/women/45.jpg",
        "name": "Sophia Khan",
        "jobPost": "React Dev",
        "skills": ["React", "Redux", "NodeJS"],
        "number": 7,
        "rating": 4.9,
        "clients": 210,
        "rate": "$60/hr"
      },
      {
        "backgroundImg": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "profilePic": "https://randomuser.me/api/portraits/men/12.jpg",
        "name": "Rohan Verma",
        "jobPost": "Backend Dev",
        "skills": ["Python", "Django", "MongoDB"],
        "number": 3,
        "rating": 4.7,
        "clients": 98,
        "rate": "$50/hr"
      },
    ]
  
    
  return (
    <div className='parent'>
      {arr.map(function(elem,id){
        return(
          <div key={id}>
            <UserCard backgroundImg={elem.backgroundImg} profilePic={elem.profilePic} name={elem.name} jobPost={elem.jobPost} skill1={elem.skills[0]} skill2={elem.skills[1]} skill3={elem.skills[2]} number={elem.number} rate={elem.rate} clients={elem.clients} rating={elem.rating}/>
          </div>
        );
    })}
    </div>
  )
}

export default App