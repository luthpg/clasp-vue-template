import { inject } from 'vue';
interface ToasterOptions {
  type?: 'success' | 'info' | 'warning' | 'error' | 'default';
  position?: 'top' | 'bottom' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  duration?: number | false;
  dismissible?: boolean;
  onClick?: (...arg: any[]) => any;
  onClose?: (...arg: any[]) => any;
  queue?: boolean;
  maxToasts?: number | false;
  pauseOnHover?: boolean;
  useDefaultCss?: boolean;
}
type ToasterFunction = (message: string, options?: ToasterOptions) => void;
export interface Toast {
  show: ToasterFunction;
  success: ToasterFunction;
  error: ToasterFunction;
  warning: ToasterFunction;
  info: ToasterFunction;
  clear: () => void;
}
export default inject('toast') as Toast;
