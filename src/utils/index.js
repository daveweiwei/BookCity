exports.verify = (str) => {
  if (_str == '') return false;
  let _str = parseInt(str);//如果能转换成数字，那就是初次判断是要输入手机号
  return !isNaN(_str) ? (/^1[3|4|5|7|8][0-9]{9}$/.test(str) ? true : false) : (/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str) ? true : false);
};
