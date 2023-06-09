// const isEmail =
//   /^[A-Za-z0-9ĐÀÁẢẠÃẦẤẨẬẪÂẮẰẶẴĂẲÈÉẸẺẼỂẾỀỆỄÊỊÌÍĨỈÒÓỎỌÕÔỐỒỔỘỖỜỚỠỢỞƠÙÚỤỦŨỨỪỬỮỰƯÝỲỶỸỴđàáảạãầấẩậẫâắằặẵăẳèéẹẻẽểếềệễêịìíĩỉòóỏọõôốồổộỗờớỡợởơùúụủũứừửữựưýỳỷỹỵ]{1}[A-Za-z0-9ĐÀÁẢẠÃẦẤẨẬẪÂẮẰẶẴĂẲÈÉẸẺẼỂẾỀỆỄÊỊÌÍĨỈÒÓỎỌÕÔỐỒỔỘỖỜỚỠỢỞƠÙÚỤỦŨỨỪỬỮỰƯÝỲỶỸỴđàáảạãầấẩậẫâắằặẵăẳèéẹẻẽểếềệễêịìíĩỉòóỏọõôốồổộỗờớỡợởơùúụủũứừửữựưýỳỷỹỵ.@]{2,40}$$/i; // bat dau bang chu cai hoac so, theo sau la chu cai, so hoac dau .
const isEmail = /(^(([\w]*[\w.]{1,})+([a-zA-Z]|([0-9]+[a-zA-Z])|([a-zA-Z]+[0-9]{1,})))|(^[a-zA-Z]+[\w]{2,}))+@([\w-]+\.)+[\w-]{2,4}$/;
// (^([\w][\w\.]+([a-zA-Z]|([0-9]+[a-zA-Z])|([a-zA-Z]+[0-9]{1,})))|(^[a-zA-Z]+[\w]{2,}))+@([\w-]+\.)+[\w-]{2,4}$
const isPhone = /^(((\+|)84)|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const noSpace = /^\S*$/; // check dinh dang so dien thoai,
const isFullName =
  /^[a-zA-ZĐÀÁẢẠÃẦẤẨẬẪÂẮẰẶẴĂẲÈÉẸẺẼỂẾỀỆỄÊỊÌÍĨỈÒÓỎỌÕÔỐỒỔỘỖỜỚỠỢỞƠÙÚỤỦŨỨỪỬỮỰƯÝỲỶỸỴđàáảạãầấẩậẫâắằặẵăẳèéẹẻẽểếềệễêịìíĩỉòóỏọõôốồổộỗờớỡợởơùúụủũứừửữựưýỳỷỹỵ ]+$/;
const isUserName = /^[a-zA-Z0-9_-]+$/;

const isEmails = /^[a-zA-Z0-9](\.?[a-z0-9-_]){2,}([a-zA-Z0-9]{0,})@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const emailRegEx = /^[a-zA-Z0-9@._ ]+$/;
// const timeRegEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$|[0-9]/;
const timeRegEx = /(([0-9]{1,2})[:]{1}([0-9]{1,2}))|([0-9]{1,2}[:])|([0-9]{1,2})/;
const passwordRegEx = /^.+$/;
const linkRegEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export { isEmail, isEmails, isPhone, isFullName, isUserName, emailRegEx, passwordRegEx, noSpace, timeRegEx, linkRegEx };
