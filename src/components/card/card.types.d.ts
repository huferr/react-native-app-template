import {GeneralStyleProps} from '../../typings/generalstyles';

interface CardProps extends GeneralStyleProps {
  title?: string;
  text?: string;
  children?: Element | undefined;
}
