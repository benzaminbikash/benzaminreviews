import React, { useState } from 'react'
import reviews from '../Data'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';



const Components = () => {
    const [user, setUser] = useState(0);
    const { image, text, name, job } = reviews[user]

    const checkdata = (number) => {
        if (number > reviews.length - 1) {
            return 0
        }
        if (number < 0) {
            return reviews.length - 1
        }
        return number
    }

    const nextdata = () => {
        setUser((user) => {
            let newUser = user + 1
            return checkdata(newUser)
        })
    }
    const predata = () => {
        setUser((user) => {
            let newUser = user - 1
            return checkdata(newUser)
        })
    }
    return (
        <div className='main-container'>
            <div className='container'>
                <h1>Our Reviews</h1>
                <div className='Image'>
                    <img src={image} alt="randomImage" />
                </div>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p className='text'>{text}</p>
                <div className='btn-btn'>
                    <button className='previousbutton' onClick={predata} >
                        <BsFillCaretLeftFill size="40px" />
                    </button>
                    <button className='previousbutton' onClick={nextdata}>
                        <BsFillCaretRightFill size="40px" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Components