import { Card } from '@account/components';
import { deleteAvatar, uploadAvatar } from '@app/redux/account';
import { Avatar, Button, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useUploadAvatarData } from './upload-avatar.hook';
import { UploadAvatarProps } from './upload-avatar.props';
import * as styles from './upload-avatar.scss';

/**
 * Renders UploadAvatar
 */
const UploadAvatar: React.FC<UploadAvatarProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { avatarData, isAvatarSource } = useUploadAvatarData();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Card className={classNames(styles.uploadAvatar, className)} title='Avatar'>
      <Preloader
        className={styles.preloader}
        id={Preloaders.profileAvatar}
        size={100}
        thickness={5}
      >
        <div className={styles.upload}>
          <div className={styles.controls}>
            <Button
              onClick={() => {
                ref.current.click();
              }}
            >
              {isAvatarSource ? 'Upload new' : 'Upload'}
            </Button>
            {isAvatarSource && (
              <Button
                onClick={() => {
                  dispatch(deleteAvatar());
                }}
              >
                Delete
              </Button>
            )}
          </div>
          <Avatar className={styles.avatar} user={avatarData} />

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
