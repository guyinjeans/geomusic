import React from 'react';

const PlaylistItem = (props) => (
  <div className="jumbotron">
    <h3 className="display-3">
    { props.item.title }
    <input className="btn btn-lg pull-right" type="checkbox" onChange={function(){ props.songSelected(props.item) }} />
    </h3>
  </div>
)

export default PlaylistItem;