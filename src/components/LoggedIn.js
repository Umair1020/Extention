import React from 'react'

const LoggedIn = () => {
    return (
        <div>
            <div id="main2" class="logui extra" style={{ display: "none;" }}>
                <div class="timg" style={{ textAlign: "left !important" }}><img src="./images/badge2.png" style={{ display: "none;" }} /></div>
                <div class="title2">
                    You are now logged in
                </div>
                <div class="sminfo">You can go back to the previous page to continue using the extension</div>
            </div>
        </div>
    )
}

export default LoggedIn