import { Input, DatePicker, Form, Button } from 'antd';
import React from 'react';
import moment from 'moment';
import { dbPushStory } from '../../services/database';
import { StyledDevData, StyledPostStoryForm } from './DevData.styles';
import { PostStoryPayload } from '../../common/interfaces';
import { getCurrentUser } from '../../common/utils';

const { TextArea } = Input;

export const DevData: React.FC = () => {
  const onFinishForm = async (formValues: any): Promise<void> => {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const newDiary: PostStoryPayload = {
      uid: currentUser.uid,
      title: formValues.title,
      isPrivate: false,
      date: moment(formValues.date).toISOString()
    };

    try {
      await dbPushStory(newDiary);
    } catch (error) {
      console.log('log error : ', error);
    }
  };

  return (
    <StyledDevData>
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
    </StyledDevData>
  );
};
