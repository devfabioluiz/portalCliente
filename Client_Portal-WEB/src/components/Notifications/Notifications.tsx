import { useRecoilState } from 'recoil';

import Notification from 'src/components/Notifications/Notification';
import { notificationAtom } from 'src/recoil/notifications';

export default function Notifications(): React.ReactElement {
  const [notifications] = useRecoilState(notificationAtom);

  return (
    <>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </>
  );
}
