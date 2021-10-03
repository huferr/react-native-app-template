import {GeneralStyleProps} from '../../typings/generalstyles';

interface CardProps extends GeneralStyleProps {
  width?: number | string;
  height?: number | string;
  title?: string;
  children?: Element | undefined;
}
