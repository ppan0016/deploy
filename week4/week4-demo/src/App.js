import 'semantic-ui-css/semantic.min.css';
import './App.css';

import CommentItem from './Comment';

import {
  CommentGroup,
  Header
} from 'semantic-ui-react';

import commentlist from './CommentList'

function commentComponent(comments, i){
  return <CommentItem 
      key={comments.key}
      name={comments.name}
      time={comments.time}
      text={comments.text} />
}

function App() {
  return (
    <CommentGroup>
      <Header as='h3' dividing>
        Comments
      </Header>

    { commentlist.map(commentComponent)}

    </CommentGroup>
  );
}

export default App;
