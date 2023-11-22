import axios from "axios";
import { useEffect, useState } from "react";

export default function NotificationCounter() {
  const [count, setCount] = useState(0);

  const checkNotifications = () => {
    axios
      .get("http://localhost:9999/api/check-notification")
      .then((response) => {
        setCount(parseInt(response.data));
        console.info("Notification data", response.data);
      })
      .catch((error) => {
        console.error("Error fetching notification data error: ", error);
      });
  };

  useEffect(() => {
    // Fetch the customer data with probability scores when the component mounts
    checkNotifications();

    // Set up a timer to call checkNotifications every 1 minute (60,000 milliseconds)
    const intervalId = setInterval(checkNotifications, 60000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return count;
}
