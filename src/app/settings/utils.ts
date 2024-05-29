import { Observable } from "rxjs";
import { ResultInfo } from "../models/data.model";
import { showAcceptAlert, showAlertError } from "./alert.util";
import { USER_LOCAL_KEY } from "./config";



export function showLoading(isShow: boolean) {
  let loaderEl = document.getElementById("loader");
  if (loaderEl) {
    if (isShow) {
      loaderEl.style.display = "block";
    } else {
      loaderEl.style.display = "none";
    }
  }

}

export function callServiceHttp(serviceCall: Observable<any>, callBack: Function, isShowLoaing = false) {

  if (isShowLoaing) {
    showLoading(true);
  }

  serviceCall.subscribe((p: ResultInfo) => {

    if (isShowLoaing) {
      showLoading(false);
    }

    if (p.result === 'success') {
      callBack(p);
    } else if (p.result === 'error_params') {
      showAlertError('Error paser info');
    } else if (p.result === 'error_server') {
      showAlertError('Something look wrong');
    } else if (p.result === 'error_auth') {
      showAlertError('Sai tên đăng nhập và mật khẩu');
    } else if (p.result === 'error_verify_captcha') {
      showAlertError('Wrong check session');
    } else if (p.result === 'error_verify_otp') {
      showAlertError('Sai mã OTP');
    } else if (p.result === 'error_account_is_pending') {
      showAlertError('Tài khoản đang đợi duyệt');
    } else if (p.result == 'error_password_format_wrong') {
      showAlertError('Mật khẩu không đúng định dạng');
    } else if (p.result == 'error_account_invalid') {
      showAlertError('Tài khoản không hợp lệ');
    } else if (p.result === 'error_exist') {
      showAlertError('Đã thực hiện hoặc dữ liệu đã tồn tại');
    } else if (p.result === 'error_check_wrong') {
      showAlertError('Thông tin không hợp lệ hoặc đã được sử dụng');
    } else {
      showAlertError('Lỗi mất kết nối internet hoặc 3G');
    }
  }, (error: any) => {
    if (isShowLoaing) {
      showLoading(false);
    }
    switch (error.status) {
      case 403:
        showAcceptAlert("Hết hạn đăng nhập", "Bạn cần đăng nhập lại để tiếp tục thao tác!!!", () => {
          localStorage.removeItem(USER_LOCAL_KEY);
          window.open('/user/login');
        });
        break;
      case 500:
        showAlertError('Request not valid');
        break;
      case 404:
        showAlertError('Do you choose wrong way ?');
        break;
      default:
        showAlertError('Something is not right, please try agian');
        break;
    }
  });
}


export class DGkToolUtil {

  getStatus(statusId: number) {
    switch (statusId) {
      case 1:
        return 'Mới khởi tạo';
      case 2:
        return 'Đang thực hiện';
      case 3:
        return 'Tạm hoãn';
      case 4:
        return 'Hoàn thành';
      case 5:
        return 'Hủy';
      default:
        return 'Không xác định';
    }
  }


  checkEmail(emailStr: string): boolean {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const result: boolean = expression.test(emailStr); // true
    return result;
  }


}


