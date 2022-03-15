import {Theme} from '../interfaces/theme';
import dark from './dark';
import light from './light';

const theme = (): Theme => {
  return true ? light : dark;
};

export default theme();
