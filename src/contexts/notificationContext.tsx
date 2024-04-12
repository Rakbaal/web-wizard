import { createContext, useContext } from "react";
import { INotification } from "../interfaces/notification";

interface INotificationContext {
    notification: INotification | undefined
    setNotification: (notification:INotification)=>void
}

export const NotificationContext = createContext<INotificationContext>({
    notification: undefined,
    setNotification: ()=>{}
})