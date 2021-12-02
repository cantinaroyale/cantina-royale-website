import React from "react";
import ReactPlayer from 'react-player'

interface Props {
  url: string;
  id?: string;
  className?: string;
}


function Video({ url , id = '', className = ''}: Props) {
  return (
    <ReactPlayer id ={id} className = {className ? `${className} video`  :'video'}  url = {url} />
  );
}

export default Video;
