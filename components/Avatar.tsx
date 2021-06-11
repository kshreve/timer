import Image from 'next/image';
import styled from 'styled-components';
import gravatar from 'gravatar';

import UserType from 'types/userType';
import { quadSpacer } from 'utils/size';
import theme from 'utils/theme';

type AvatarProps = {
  user: UserType;
  width?: number;
  height?: number;
};

const AvatarWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  height: ${quadSpacer};
  width: ${quadSpacer};
  /* min-width ensures it doesnt get resized when in a flexed parent */
  min-width: ${quadSpacer};

  /* If image fails to load, provide some fallback styling to make it look better */
  & img {
    position: relative;
  }

  & img:after {
    content: '👤';
    font-size: ${quadSpacer};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background-color: ${theme.colors.gray};
  }
`;

const Avatar = ({
  user: { email },
  width = 100,
  height = 100,
}: AvatarProps) => {
  const src = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true);

  return (
    <>
      <AvatarWrapper>
        <Image src={src} alt="Avatar" width={width} height={height} />
      </AvatarWrapper>
    </>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
