
import Swal from "sweetalert2";

export function showAlert(message: string) {
    Swal.fire({
        title: 'Thông báo',
        text: message,
        icon: 'info'
    });
}



export function showAlertSuccess(message: string) {
    Swal.fire({
        title: 'Chúc mừng',
        text: message,
        icon: 'success'
    });
}


export function showAlertError(message: string) {
    Swal.fire({
        title: 'Cảnh báo',
        text: message,
        icon: 'error'
    });
}

export function showAcceptAlert(title: string, messenger: string, callBack: Function) {
    Swal.fire({
        title: title,
        icon: 'info',
        text: messenger,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            'Tiếp tục',
        cancelButtonText:
            'Đóng',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            callBack();
        } else if (result.isDenied) {
            // Swal.fire('Changes are not saved', '', 'info')
        }
    })
};


export function showPermissAccessAlert(callBack: Function) {
    Swal.fire({
        title: "Cảnh báo",
        icon: 'error',
        text: "Bạn không có quyền truy cập chức năng này ?",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            'Chuyển tài khoản',
        cancelButtonText:
            'Đóng',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            callBack();
        } else if (result.isDenied) {
            //Swal.fire('Changes are not saved', '', 'info')
        }
    })
};
