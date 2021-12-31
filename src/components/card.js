import React from 'react'

const Card = (props) => {
    const {character} = props;
    return (
        <div key={character.char_id} className=" bg-black max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105">
            <img src={character.img} alt='' className="w-full hover:opacity-80 cursor-pointer"/>
            <ul className="font-bold text-yellow-50 text-xl mb-2">
                <li key={1}><strong>Name:</strong> {character.name}</li>
                <li key={2}><strong>Birthday:</strong>  {character.birthday}</li>
                <li key={3}><strong>Status:</strong>  {character.status}</li>
            </ul>
        </div>
    )
}

export default Card

