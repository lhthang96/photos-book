import React, { useState } from 'react';
import { FullStory } from 'src/common/interfaces';
import { StyledDevDataStoryItem } from './DevDataStoryItem.styles';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteTwoTone
} from '@ant-design/icons';
import { AntdMessageDuration, AppColor } from 'src/common/constants';
import { Button, message } from 'antd';
import { dbDeleteStory } from 'src/services/database';

type DevDataStoryItemProps = {
  story: FullStory;
};

export const DevDataStoryItem: React.FC<DevDataStoryItemProps> = ({
  story
}) => {
  const { title, date, isPrivate, content } = story;

  const [deleteLoading, setDeleteLoading] = useState(false);

  const onDeleteStory = async (): Promise<void> => {
    setDeleteLoading(true);

    try {
      await dbDeleteStory(story);

      message.success('Delete story successfully !', AntdMessageDuration);
    } catch (error) {
      console.error('DevDataStoryItem.tsx -> onDeleteStory -> error ', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <StyledDevDataStoryItem>
      <div className="story-content">
        <p className="story-title">{title}</p>
        <p className="story-date">{`Date: ${date}`}</p>
        <div className="story-private">
          <p className="story-private-label">Is private : </p>
          {isPrivate ? (
            <CheckCircleTwoTone twoToneColor={AppColor.TwoToneSuccess} />
          ) : (
            <CloseCircleTwoTone twoToneColor={AppColor.TwoToneError} />
          )}
        </div>

        <div className="book-content">
          <p>{JSON.stringify(content)}</p>
        </div>
      </div>

      <div>
        <Button
          icon={<DeleteTwoTone twoToneColor={AppColor.TwoToneError} />}
          type="default"
          danger
          loading={deleteLoading}
          onClick={onDeleteStory}
        />
      </div>
    </StyledDevDataStoryItem>
  );
};
