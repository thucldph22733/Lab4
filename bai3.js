var app = angular.module("myinf", []);
app.controller("myController", function ($scope) {
            $scope.hocsinh = [{
                ten:"Lê Đăng Thực",
                ngaysanh: "16/10/2002",
                gioitinh: "Nam",
                diemTB: 10,
                anh:"1.jpg"
            },{
                ten:"Lê Đăng Thành",
                ngaysinh: "22/06/2002",
                gioitinh: "Nam",
                diemTB: "8",
                anh:"2.jpg"
            },{
                ten:"Lê Anh Dũng",
                ngaysinh: "22/06/2003",
                gioitinh: "Nam",
                diemTB: "9",
                anh:"3.jpg"
            }];
});