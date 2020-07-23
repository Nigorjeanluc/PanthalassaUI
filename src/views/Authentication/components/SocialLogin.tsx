import React, { ReactNode } from 'react';
import Svg, { Path } from "react-native-svg";
import { Box, useTheme } from '../../../components/Theme';

interface SocialIconProps {
  children: ReactNode;
}

const Google = () => (
  <Svg height={20} viewBox="0 0 512 512" width={20}>
    <Path
      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
      fill="#fbbd00"
    />
    <Path
      d="M256 392l-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
      fill="#0f9d58"
    />
    <Path
      d="M139.131 325.477l-86.308 86.308a260.085 260.085 0 0022.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
      fill="#31aa52"
    />
    <Path
      d="M512 256a258.24 258.24 0 00-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 01-51.884 55.638l86.216 86.216a260.085 260.085 0 0025.235-22.158C485.371 388.667 512 324.38 512 256z"
      fill="#3c79e6"
    />
    <Path
      d="M352.167 159.833l10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
      fill="#cf2d48"
    />
    <Path
      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 00-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
      fill="#eb4132"
    />
  </Svg>
);
const Facebook = () => (
  <Svg height={20} width={22} viewBox="0 0 512 512">
    <Path
      d="M320 85.333h64c5.891 0 10.667-4.776 10.667-10.667v-64C394.667 4.776 389.891 0 384 0h-64c-64.772.071-117.263 52.561-117.333 117.333V192H128c-5.891 0-10.667 4.776-10.667 10.667v64c0 5.891 4.776 10.667 10.667 10.667h74.667v224c0 5.891 4.776 10.667 10.667 10.667h64c5.891 0 10.667-4.776 10.667-10.667v-224h74.667a10.666 10.666 0 0010.112-7.296l21.333-64c1.862-5.589-1.16-11.629-6.749-13.491a10.676 10.676 0 00-3.363-.547h-96v-74.667c-.001-17.673 14.326-32 31.999-32z"
      fill="#2196f3"
    />
  </Svg>
);

const SocialIcon = ({children}: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="m"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
        {children}
    </Box>
  );
}

const SocialLogin = () => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
    >
      <SocialIcon>
        <Facebook/>
      </SocialIcon>
      <SocialIcon>
        <Google/>
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;