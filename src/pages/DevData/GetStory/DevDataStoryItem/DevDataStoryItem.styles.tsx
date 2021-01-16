import styled from 'styled-components';

export const StyledDevDataStoryItem = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 18px;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-bottom: 8px;

  &:first-child {
    margin-top: 1em;
  }

  .story-content {
    flex: 1;

    .story-title {
      font-weight: bold;
    }

    .story-date {
    }

    .story-private {
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      .story-private-label {
        margin: 0;
        margin-right: 8px;
      }
    }
  }

  .story-action-container {
    padding: 16px;
  }
`;
