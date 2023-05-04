import {addIcon} from '../svg/add';
import {arrowdropdownIcon} from '../svg/arrowdropdown';
import {checkIcon} from '../svg/check';
import {homeIcon} from '../svg/home';
import {organizationIcon} from '../svg/organization';
import {settingsIcon} from '../svg/settings';
import {eventIcon} from "../svg/event";
import {accessIcon} from "../svg/access";
import {groupsIcon} from "../svg/groups";
import {subscriptionIcon} from "../svg/subscription";
import {accountcircleIcon} from "../svg/accountcircle";
import { addCircleNewIcon } from '../svg/add-circle-new';
import { editIcon } from '../svg/edit';
import { keyIcon } from '../svg/key';

const ICONS = [
  checkIcon,
  homeIcon,
  checkIcon,
  addIcon,
  organizationIcon,
  settingsIcon,
  arrowdropdownIcon,
  eventIcon,
  accessIcon,
  groupsIcon,
  subscriptionIcon,
  accountcircleIcon,
  addCircleNewIcon,
  editIcon,
  keyIcon,

];
export const ICON_CONFIG = {
  sizes: {
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '25px',
    xxl: '30px',
  },
  defaultSize: 'xl',
  icons: ICONS
};
