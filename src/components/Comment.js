import React from "react";

export default function Comment({ comment, hat, callback }) {
  const { data, recordId } = comment;
  const { date, value } = data;

  const updateComment = async (event) => {
    event.preventDefault();
    comment.data.value += " updated!";
    await hat.hatData().update([comment]);
    callback(comment)
  };

  const deleteComment = async (event) => {
    event.preventDefault();
    const response = await hat.hatData().delete([recordId]);

    if (response.parsedBody) {
      callback(comment)
    }
  }

  return (
    <div key={date} className="comment">
      <div className="content">
        <a className="text">{value}</a>
        <div className="metadata">
          <span className="date">{new Date(date).toLocaleTimeString()}</span>
        </div>
        <div className="actions">
          <a href="" className="edit" onClick={updateComment}>
            Edit
          </a>
          <a href="" className="delete" onClick={deleteComment}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
