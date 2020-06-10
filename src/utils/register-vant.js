import Vue from "vue";

import {
  Button,
  Cell,
  CellGroup,
  NavBar,
  Field,
  Popup,
  Tab,
  Tabs,
  Divider,
  Uploader,
  DropdownMenu,
  DropdownItem,
  List,
  Toast,
  ActionSheet,
  DatetimePicker,
  picker,
  Grid,
  GridItem,
  Panel,
  Image as VanImage,
  lazyload,
  Icon,
  Dialog,
  ImagePreview,
  NoticeBar,
  Form
} from "vant";

Vue.use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Field)
  .use(Popup)
  .use(Tab)
  .use(Tabs)
  .use(Divider)
  .use(Uploader)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(List)
  .use(Toast)
  .use(ActionSheet)
  .use(DatetimePicker)
  .use(picker)
  .use(Grid)
  .use(GridItem)
  .use(Panel)
  .use(VanImage)
  .use(lazyload)
  .use(Icon)
  .use(Dialog)
  .use(ImagePreview)
  .use(NoticeBar)
  .use(Form);
