// Khai báo state cho modal
// state là một object, chứa các thuộc tính là các modal

// các giá trị dưới là giá trị mặc định của state

// muốn lấy giá trị của state thì dùng useSelector hook của react-redux
// muốn update thì dùng reducer tương ứng của state đó
const state = {
    // giá trị mặc định của modal loading ban đầu là false, 
    //  show loading thì sẽ chuyển thành true
    modalLoading: {
        show: false,
    },
    modalConfirm: {
        // kiểu dữ liệu bình js
        show: false,
        title: null,
        // callback là một hàm, có thể truyền vào một hàm bất kỳ
        callback: null,
        // callback khi cancel
        cancalCallback: null,
    },
    // Modal post chỉ ảnh hưởng hưởng trạng thái hiển thị của modal post
    // chức năng liên quan đến data của post mà tương tác với backend thì phải dùng reducer của post
    modalPost: {
        show: false,
        data: {
            id: null,
            title: null,
        },
    }
}

export default state