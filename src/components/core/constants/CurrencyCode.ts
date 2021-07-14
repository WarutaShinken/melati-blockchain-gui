import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.MELATI]: IS_MAINNET ? 'XMX' : 'TXMX',
};
