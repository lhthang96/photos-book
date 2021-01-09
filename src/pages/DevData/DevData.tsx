import { Input, DatePicker, Form, Button } from 'antd';
import React from 'react';
import moment from 'moment';
import { postStory } from '../../services';
import { StyledDevData, StyledPostStoryForm } from './DevData.styles';
import { IPostDiaryData } from '../../common/interfaces';

const { TextArea } = Input;

export const DevData: React.FC = () => {
  const onFinishForm = async (formValues: any): Promise<void> => {
    const postDiary: IPostDiaryData = {
      title: formValues.title,
      content: formValues.content,
      date: moment(formValues.date).toISOString(),
    };

    try {
      await postStory(postDiary);
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
          <TextArea rows={12} style={{ marginBottom: 24 }} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Post
        </Button>
      </StyledPostStoryForm>
    </StyledDevData>
  );
};
