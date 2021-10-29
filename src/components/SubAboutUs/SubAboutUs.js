import React from 'react'
import './SubAboutUs.css'

const SubAboutUs = () => {
    return (
        <div class="container_mhr">
        <div class="box_mhr flex_mhr">
            <div>
                <h2>Grow Together</h2>
                <p>
                    Generate meaningful discussions with your audience and build a
                    strong, loyal community. Think of the insightful conversations you
                    miss out on with a feedback form.
                </p>
            </div>
            <div>
                <img
                    class='img_mhr'
                    src="https://cdn.pixabay.com/photo/2017/03/31/17/39/avatar-2191918_960_720.png"
                    alt="grow-together"
                />
            </div>
        </div>

        <div class="box_mhr flex_mhr box-reverse-mobile_mhr">
            <div>
                <img
                    class='img_mhr'
                    src="https://cdn.pixabay.com/photo/2017/03/31/17/39/avatar-2191918_960_720.png"
                    alt="flowing-conversation"
                />
            </div>
            <div>
                <h2>Flowing Conversations</h2>
                <p>
                    You wouldn't paginate a conversation in real life, so why do it
                    online? Our threads have just-in-time loading for a more natural
                    flow.
                </p>
            </div>
        </div>

        <div class="box_mhr flex_mhr">
            <div>
                <h2>Your Users in control</h2>
                <p>
                    It takes no time at all to integrate Huddle with your app's
                    authentication solution. This means, once signed in to your app,
                    your users can start chatting immediately.
                </p>
            </div>
            <div>
                <img 
                    class='img_mhr'
                    src="https://cdn.pixabay.com/photo/2017/03/31/17/39/avatar-2191918_960_720.png" 
                    alt="users" />
            </div>
        </div>
    </div>
    )
}

export default SubAboutUs;