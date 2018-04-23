import * as ReadableAPI from '../utils/ReadableAPI';

import {
  LOAD_POST_COMMENTS,
  LOAD_NEW_COMMENT
} from './actionTypes';

// LOAD_POST_COMMENTS
export const loadPostComments = (parentId, comments) => ({
  type: LOAD_POST_COMMENTS,
  parentId,
  comments
});

export const fetchPostComments = parentId => dispatch => (
  ReadableAPI
      .fetchPostComments(parentId)
      .then(comments => dispatch(loadPostComments(parentId, comments)))
);

// LOAD_NEW_COMMENT
export const loadNewComment = (comment) => {
  return {
    type: LOAD_NEW_COMMENT,
    comment
  }
}

export const addNewComment = ( comment ) => dispatch => (
  ReadableAPI
      .addComment( comment )
      .then(dispatch(loadNewComment(comment)))
);