import {
  Input,
  DatePicker,
  Form,
  Button,
  message,
  Checkbox,
  Space,
  Select
} from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { dbPostStory } from 'src/services/database';
import { StyledPostStory, StyledPostStoryForm } from './PostStory.styles';
import {
  PostBookContentPayload,
  PostStoryPayload
} from 'src/common/interfaces';
import { getCurrentUser } from 'src/common/utils';
import { useHistory } from 'react-router-dom';
import { AntdMessageDuration, DevDataPaths } from 'src/common/constants';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const PostStory: React.FC = () => {
  const history = useHistory();

  const [form] = Form.useForm();
  const [formLoading, setFormLoading] = useState(false);

  const onPostStory = async (formValues: any): Promise<void> => {
    setFormLoading(true);

    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const newStory: PostStoryPayload = {
      uid: currentUser.uid,
      title: formValues.title,
      isPrivate: formValues.isPrivate || false,
      date: moment(formValues.date).toISOString()
    };

    const newBookContent: PostBookContentPayload = {
      content: JSON.stringify(formValues.content)
    };

    try {
      await dbPostStory(newStory, newBookContent);

      message.success('Post story successfully !', AntdMessageDuration);
      history.push(DevDataPaths.GetStory);
    } catch (error) {
      console.error('PostStory.tsx -> onPostStory -> error : ', error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <StyledPostStory>
      <StyledPostStoryForm form={form} onFinish={onPostStory}>
        <Form.Item name="date">
          <DatePicker style={{ marginBottom: 24 }} />
        </Form.Item>

        <Form.Item name="title">
          <Input placeholder="Diary title" style={{ marginBottom: 24 }} />
        </Form.Item>

        <Form.Item name="isPrivate" valuePropName="checked">
          <Checkbox defaultChecked={false}>Is private</Checkbox>
        </Form.Item>

        <Form.Item name="content">
          <TextArea
            autoSize={{ minRows: 4, maxRows: 8 }}
            style={{ marginBottom: 24 }}
          />
        </Form.Item>

        <Button loading={formLoading} type="primary" htmlType="submit">
          Post
        </Button>
      </StyledPostStoryForm>
    </StyledPostStory>
  );
};
