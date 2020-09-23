import { Card } from '@account/components';
import { deleteAvatar, uploadAvatar } from '@app/redux/account';
import { Avatar, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UploadAvatarProps } from './upload-avatar.props';
import * as styles from './upload-avatar.scss';

/**
 * Renders UploadAvatar
 */
const UploadAvatar: React.FC<UploadAvatarProps> = ({ className, user }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const isAvatarSource = user?.src?.length > 0;

  return (
    <Card
      className={classNames(styles.uploadAvatar, className)}
      title='Avatar'
      offsetTop={26}
    >
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
          <Avatar className={styles.avatar} user={user} />

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
      </Preloader>
    </Card>
  );
};

export { UploadAvatar };
