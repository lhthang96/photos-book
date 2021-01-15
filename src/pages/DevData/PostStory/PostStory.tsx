import { Input, DatePicker, Form, Button, message } from 'antd';
import React from 'react';
import moment from 'moment';
import { dbPushStory } from 'src/services/database';
import { StyledPostStory, StyledPostStoryForm } from './PostStory.styles';
import { PostStoryPayload } from 'src/common/interfaces';
import { getCurrentUser } from 'src/common/utils';
import { useHistory } from 'react-router-dom';
import { DevDataPaths } from 'src/common/constants';

const { TextArea } = Input;

export const PostStory: React.FC = () => {
  const history = useHistory();

  const onFinishForm = async (formValues: any): Promise<void> => {
    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const newStory: PostStoryPayload = {
      uid: currentUser.uid,
      title: formValues.title,
      isPrivate: false,
      date: moment(formValues.date).toISOString()
    };

    try {
      const storyKey = await dbPushStory(newStory);
      console.log('log story key : ', storyKey);

      message.success('Post story successfully !', 2);
      history.push(DevDataPaths.GetStory);
    } catch (error) {
      console.log('log error : ', error);
    }
  };

  return (
    <StyledPostStory>
      <StyledPostStoryForm onFinish={onFinishForm}>
        <Form.Item name="date">
          <DatePicker style={{ marginBottom: 24 }} />
        </Form.Item>

        <Form.Item name="title">
          <Input placeholder="Diary title" style={{ marginBottom: 24 }} />
        </Form.Item>

        <Form.Item name="content">
          <TextArea
            autoSize={{ minRows: 4, maxRows: 8 }}
            style={{ marginBottom: 24 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Post
        </Button>
      </StyledPostStoryForm>
    </StyledPostStory>
  );
};
