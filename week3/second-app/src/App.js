import 'semantic-ui-css/semantic.min.css';
import './App.css';

import CommentItem from './Comment';
import {
  CommentGroup,
  Header
} from 'semantic-ui-react';

import commentlist from './CommentList'

function commentComponent(comment1, i){
  return <CommentItem
      key={comment1.key}
      name= {comment1.name}
      time= {comment1.time}
      text= {comment1.text}
      comment= {comment1.comment} />
}

function App() {
  return (
    <CommentGroup>
      <Header as='h3' dividing>
        Comments
      </Header>

    {/* <CommentItem
      name="Pooja"
      time="Entered on 5:45 PM"
      text="Hi, This is Pooja and it's nice to meet you."
      comment="Reply" /> */}
    
    { commentlist.map(commentComponent)}

    {/* <CommentItem
      name= {commentlist[0].name}
      time= {commentlist[0].time}
      text= {commentlist[0].text}
      comment= {commentlist[0].comment} /> */}

    <CommentItem
      name="Amin"
      time="Entered on 5:48 PM"
      text="Hi, This is Amin and it's nice to meet you Pooja."
      comment="Reply" />

    <CommentItem 
      name="Leon"
      time="Entered on 5:50 PM"
      text="Hi, This is Leon and it's nice to meet you both."
      comment="Reply"
      />

    </CommentGroup>
  );
}

export default App;
