import { Notification } from '@constants';
import { notification } from 'antd';

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
