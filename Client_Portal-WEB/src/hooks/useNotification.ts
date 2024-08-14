import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';

import { type INotification, notificationAtom } from 'src/recoil/notifications';

interface IUseNotification {
  addNotification: (notification: Omit<INotification, 'id'>) => void;
  dismissNotification: (id: INotification['id']) => void;
}

export function useNotification(): IUseNotification {
  const [, setNotifications] = useRecoilState(notificationAtom);

  const addNotification = (notification: Omit<INotification, 'id'>): void => {
    setNotifications((current) => [
      ...current,
      { id: nanoid(), ...notification },
    ]);
  };

  const dismissNotification = (id: INotification['id']): void => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id),
    );
  };

  return { addNotification, dismissNotification };
}
