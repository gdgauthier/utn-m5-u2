import React from 'react'
import Description  from './description'
import Image  from './image'
import Title  from './title'
import './container.css';

const Container = (props) => {

  let {image, title, description}  = props;

  return (
    <div className="container">
      <div>
        <Image image={image} />
      </div>
      <div className="text">
        <Title title={title} />
        <Description description={description} />
      </div>
    </div>
    );
};

export default Container;