import React from 'react';
import { useAppSelector } from '../app/hooks';
import './Progress.Module.css';
import ProgressImage from '../assets/images/progress.png';

function Progress() {
  const ui = useAppSelector((state) => state.ui);

  return (
    <>
      {ui.showProgress ? (
        <div className={'progress'}>
          <div className={'progress_img_wrap'}>
            <img className={'progress_img'} src={ProgressImage} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Progress;
