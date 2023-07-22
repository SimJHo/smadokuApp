import './Alert.Module.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { alertSlice, showAlert } from '../slices/alertSlice';
import { useEffect } from 'react';

function Alert() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);

  const handleCancel = () => {
    if (alert.callbackCancel) {
      alert.callbackCancel();
    }
    dispatch(showAlert(alertSlice.getInitialState()));
  };

  const handleConfirm = () => {
    if (alert.callbackConfirm) {
      alert.callbackConfirm();
    }
    dispatch(showAlert(alertSlice.getInitialState()));
  };

  useEffect(() => {}, [alert]);

  return (
    <>
      {(alert.title || alert.message) && (
        <div className={'alert'}>
          <div className={'alert_content'}>
            {alert.title && <h3>{alert.title}</h3>}
            {alert.message && <p>{alert.message}</p>}

            <div className={'alert_button_container'}>
              {alert.cancelText && (
                <button
                  className={'button'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCancel();
                  }}
                >
                  {alert.cancelText}
                </button>
              )}

              {alert.confirmText && (
                <button
                  className={'button button_primary'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleConfirm();
                  }}
                >
                  {alert.confirmText}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
