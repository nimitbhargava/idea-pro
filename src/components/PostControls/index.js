import React, { Component } from 'react';
import VoteControl from '../VoteControl';
import CommentsCountControl from '../CommentsCountControl';
import EditDeleteControls from '../EditDeleteControls';

export default class PostControls extends Component {

  handleDeletePost = () => {
    console.log('Delete post id: ' + this.props.post.id);
  }

  handleEditPost = () => {
    console.log('Edit post id: ' + this.props.post.id);
  }

  render () {

    const { post } = this.props;

    return (
      <div className="PostControls">
        <div className="btn-toolbar">
          <VoteControl entry={ post } />
          <CommentsCountControl parentId={post.id} />
          <EditDeleteControls
            onDeleteClick={ () => { this.handleDeletePost() } }
            onEditClick={ () => { this.handleEditPost() } }
          />
        </div>
      </div>
    );
  }
}