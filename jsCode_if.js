function nameCheck (name) {
    var letters = /^[a-zA-Z]+$/;
    if (name != null && name != undefined) {
        if (letters.test(name)) {
            console.log('成功しました');
        }else {
            console.log('文字のみ入力してください');
        }
    }else {
        console.log('名前を入力してください');
    }
}

var name = '';
name = 'Mr.James$';
console.log(name);
nameCheck(name);
name = 'James';
console.log(name);
nameCheck(name);