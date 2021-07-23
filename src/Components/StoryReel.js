import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                profileSrc="https://wallpaperaccess.com/full/2213424.jpg"
                image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "
                title="JodHacker"
            />
            <Story
                image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://i.pinimg.com/originals/b8/17/b5/b817b5ac2463a48e6732a0bc42148543.png "
                title="Eliza Vancamp"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiPTPNO99qinuO6Co33WxSSrHaNgxdEYtWw&usqp=CAU"
                profileSrc="https://wallpapercave.com/wp/wp7810664.jpg"
                title="CrazyGirl"
            />
            <Story
                image="https://cdnb.artstation.com/p/assets/images/images/022/910/223/large/guilherme-correia-pain.jpg?1577211956&dl=1"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTgneEQcUq7bnHLXiR55MtyLUov4wjEH3CA&usqp=CAU"
                title="Pain"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783102_960_720.png"
                profileSrc="https://i.pinimg.com/originals/2a/92/06/2a9206a4a0d1d23cf92636c42115d054.jpg"
                title="Naruto"
            />
        </div>
    )
}

export default StoryReel
