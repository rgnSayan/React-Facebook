import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from '../firebase'
import firebase from 'firebase'
import './MessageSender.css'

function MessageSender() {
    const [input, setInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [{ user }, dispatch] = useStateValue();

    const handleUpload = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageInput,
            profilePic: user.photoURL,
            username: user.displayName,
        })

        setInput("")
        setImageInput("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text" placeholder={`Whats on your mind ${user.displayName} ? `} className="messageSender__input" value={input} onChange={event => setInput(event.target.value)} />

                    <input type="text" placeholder="image URL (optional)"
                        value={imageInput} onChange={event => setImageInput(event.target.value)} />

                    <button type="submit" onClick={handleUpload}>Hidden</button>
                </form>

            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feelings/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
