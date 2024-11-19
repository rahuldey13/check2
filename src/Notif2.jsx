import React from 'react'
import { Notifications } from 'react-notifications';

const Notif2 = () => {

        // let cakeNotification = "cake-notification";

        // /*

        // CAKE_INTERVAL is set to 6 seconds in this example.
        // Such a short period is chosen to make the extension's behavior
        // more obvious, but this is not recommended in real life.
        // Note that in Chrome, alarms cannot be set for less
        // than a minute.

        // */
        // let CAKE_INTERVAL = 0.1;

        // browser.alarms.create("", { periodInMinutes: CAKE_INTERVAL });

        // browser.alarms.onAlarm.addListener((alarm) => {
        // browser.notifications.create(cakeNotification, {
        //     type: "basic",
        //     iconUrl: browser.runtime.getURL("icons/cake-96.png"),
        //     title: "Time for cake!",
        //     message: "Something something cake",
        // });
        // });

        // browser.browserAction.onClicked.addListener(() => {
        // const clearing = browser.notifications.clear(cakeNotification);
        // clearing.then(() => {
        //     console.log("cleared");
        // });
        // });

        const check=()=>{
            
            const img1 = "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg";
            const text = `HEY! Your task is now overdue.`;
            const img2= "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg";

            const f0=()=>{
            
                Notification.requestPermission().then((result) => {
                    console.log(result);
                  });

                // if (Notification.requestPermission.result==="Granted")
                //     console.log (1);
                

            }

            const f1=()=>{
                if (!("Notification" in window)) {
                    // Check if the browser supports notifications
                    alert("This browser does not support desktop notification");
                }  else if (Notification.permission !== "denied") {
                    // We need to ask the user for permission
                    Notification.requestPermission().then((permission) => {
                        // If the user accepts, let's create a notification
                        console.log(permission)
                        if (permission === "granted") {
                            // const notification = new Notification("permission granted");

                            const notification = new Notification("title: heres the notification", { 
                                body: text, 
                                icon: img1,
                                image: img2 });
                        }
                        
                    });
                } else if (Notification.permission === "granted") {
                    // Check whether notification permissions have already been granted;
                    // if so, create a notification

                    const notification = new Notification("Hi there!");

                    
                    // …
                }
                else if (Notification.permission === "denied") {
                    console.log(0);
                    Notification.requestPermission();
                    // .then((result) => {
                    //     console.log(1);
                    //     if (result === "denied")
                    //     {
                    //         Notification.requestPermission().then((result) => {
                    //             console.log(2);
                    //           });
                    //     }
                    //   }

                    // .then((permission) => {
                    //     // If the user accepts, let's create a notification
                    //     if (permission === "granted") {
                    //         const notification = new Notification("Hi there!");
                    //         // …
                    //     }
                    // })
                    
                }
            }
            // let browser =chrome;

            // const list =()=>{
            //     permissions:["notifications"];
            // }

            //  const rem =()=> {
                
            //     console.log (typeof chrome);
            //     // const removed= await 
            //     // chrome.permissions.remove(
            //     chrome.permissions.remove({
                    
            //         permissions: ['notifications'],
            //         origins: ['http://localhost:5173/']
            //     }, (removed) =>{
            //         if (removed)
            //             console.log(1);
            //         else
            //             console.log(0);
            //     });
            //     // console.log(removed);
            // }



            // setTimeout(f1, 500);
            f1();
            // f0();
            // rem();
        }

  return (
    <div>
        <br />  
        <p>notif2</p>
        <button onClick={check}>check</button>

    </div>
  )
}

export default Notif2
