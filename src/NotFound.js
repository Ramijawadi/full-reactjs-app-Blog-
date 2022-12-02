
import React from 'react';
import { Link } from 'react-router-dom';
import { Title , TitleWrapper ,WrapperLink} from './styles/styled';

const NotFound = () => {
  return (
    <div>

  <Title>404</Title>
  <TitleWrapper> the page you were looking for doesn't exist ...</TitleWrapper>
  <Link to='/'> <WrapperLink> Go back to home page </WrapperLink> </Link>

    </div>
  )
}

export default NotFound