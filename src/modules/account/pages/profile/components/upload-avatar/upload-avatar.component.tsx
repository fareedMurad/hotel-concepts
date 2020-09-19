import * as React from 'react';
import { UploadAvatarProps } from './upload-avatar.props';
import * as styles from './upload-avatar.scss';
import { Avatar, Preloader } from '@core/components';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { uploadAvatar, deleteAvatar } from '@app/redux/account';
import { useRef } from 'react';
import { Preloaders } from '@ui/models';

/**
 * Renders UploadAvatar
 */
const UploadAvatar: React.FC<UploadAvatarProps> = ({ className, user }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const isAvatarSource = user?.src?.length > 0;

  return (
    <div className={classNames(styles.uploadAvatar, className)}>
      <div className={styles.title}>Avatar</div>
      <Preloader
        className={styles.preloader}
        id={Preloaders.profileAvatar}
        size={100}
        thickness={5}
      >
        <div
          className={styles.upload}
          onClick={() => {
            ref.current.click();
          }}
        >
          <Avatar user={user} className={styles.avatar} />

          {isAvatarSource && (
            <div
              className={styles.delete}
              onClick={() => dispatch(deleteAvatar())}
            >
              Delete avatar
            </div>
          )}
          <input
            className={styles.input}
            ref={ref}
            id='avatar'
            name='image'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={event => {
              const {
                target: { files }
              } = event;

              dispatch(uploadAvatar(files[0]));
            }}
          />
        </div>
        {/* <div className={styles.avatarCaption}>
          {isAvatarSource ? 'Edit' : 'Upload'}
        </div> */}
      </Preloader>
    </div>
  );
};

export { UploadAvatar };