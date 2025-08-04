import React from 'react';

import {
  CommentText,
  CommentMetadata,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  Comment,
} from 'semantic-ui-react';

function CommentItem(props){
    return(
    <Comment>
        <CommentAvatar src='./logo192.png' />
        <CommentContent>
          <CommentAuthor as='a'>{props.name}</CommentAuthor>
          <CommentMetadata>.. 
            <div>{props.time}</div>
          </CommentMetadata>
          <CommentText>{props.text}</CommentText>
          <CommentActions>
            <CommentAction>{props.comment}</CommentAction>
          </CommentActions>
        </CommentContent>
      </Comment>
    )
}

export default CommentItem