import React from 'react';
// import { Notifications } from 'react-push-notifications';
// import { notify } from 'react-push-notifications';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notif = () => {

    const notify1 = () => {
        // notify({
        //     title: 'Warning',
        //     subtitle: 'This is a subtitle',
        //     message: 'This is a very long message',
        //     theme: 'darkblue',
        //     native: true // when using native, your OS will handle theming.
        // });

        // NotificationManager.info('Info message')

        toast("check notif");
    };

  return (
    <div>
      <br />
      <p>notif section</p>
        <button onClick={notify1}>
          check notif
        </button>
        <ToastContainer />

        {/* <NotificationContainer /> */}
    </div>
  )
}

export default Notif;
