import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";

const UserCard = (props) => {
    console.log(props)
  return (
    <div className='card-body'>
        <div className="top" style={{background:`url(${props.backgroundImg})`}}>
            <div className="profile" style={{background:`url(${props.profilePic})`}}>

            </div>
        </div>

        <div className="middle">
            <div className='middle-details'>
                <div className="details">
                    <h2 className='name'>{props.name}</h2>
                    <p className="post">{props.jobPost}</p>
                </div>
                <CiBookmark size={37} className='save'/>
            </div>
            <div className="skills">
                <div className="skill-tag">{props.skill1}</div>
                <div className="skill-tag">{props.skill2}</div>
                <div className="skill-tag">{props.skill3}</div>
                <div className="more skill-tag">+{props.number}</div>
            </div>
        </div>

        <div className="bottom">
            <div className="info">
                <div className="rating">
                    <h2><FaStar/> {props.rating}</h2>
                    <p>Rating</p>
                </div>
                <div className="divider"></div>
                <div className="clients">
                    <h2><PiMedalBold/> {props.clients}+</h2>
                    <p>Clients</p>
                </div>
                <div className="divider"></div>
                <div className="rate">
                    <h2>{props.rate}</h2>
                    <p>Rate</p>
                </div>
            </div>
            <button>Get in Touch</button>
        </div>
    </div>
  )
}

export default UserCard