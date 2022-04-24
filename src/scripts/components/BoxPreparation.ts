
import { setHeader } from './Header';

export const createBoxPreparation = (title: string, counter: number | string, className: string) => {
  setHeader(title);
  return ` <div id="box-timer" class="box-preparation">
            <div id="preparation-counter" class="preparation-counter ${className}">${counter}</div>
            <div class="footer">
            <button id="reset-timer" class="reset-btn ${className}">сброс</button>
            </div>
            </div>`;
};

