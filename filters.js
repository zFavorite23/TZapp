import moment from "moment";

/**

 * 普通日期格式化函数

 * data: yyyy-MM-dd

 * time: hh:mm:ss

 * yyyy-MM-dd hh:mm:ss 默认

 * 或者传入需要的格式

*/

export const datetime = (time, pattern) => {
  let value = moment(time);

  let tempPattern = "YYYY-MM-DD HH:mm:ss";

  if (!pattern) {
    return value.format(tempPattern);
  }

  switch (pattern) {
    case "date":
      tempPattern = "YYYY-MM-DD";

      break;

    case "time":
      tempPattern = "HH:mm:ss";

      break;

    default:
      tempPattern = pattern;

      break;
  }

  return value.format(tempPattern);
};
