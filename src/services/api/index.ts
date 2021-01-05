import axios from 'axios';
import { IPostDiaryData } from '../../common/interfaces';

const BASE_URL = 'https://photos-book-d0cc9-default-rtdb.firebaseio.com';
const diaryUrl = `${BASE_URL}/diary.json`;

export const postStory = async (data: IPostDiaryData): Promise<void> => {
  return await axios.post(diaryUrl, data);
};
