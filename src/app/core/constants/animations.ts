import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const SideNavAnimation = trigger('sideNavAnimation', [
  state('open', style({ transform: 'translateX(0)', opacity: 1 })),
  state('closed', style({ transform: 'translateX(-100%)', opacity: 0 })),
  transition('closed => open', [animate('300ms ease-in')]),
  transition('open => closed', [animate('300ms ease-out')]),
]);
