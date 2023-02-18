import { notification } from "antd";
import { Notification } from "../constants";

export const openNotification = ({
  type = Notification.Success,
  message,
}: {
  type?: Notification;
  message: string;
}) => {
  notification.open({
    message: type,
    description: message,
  });
};
