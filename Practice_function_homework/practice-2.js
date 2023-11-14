/**
 * Bài 2: Viết hàm transformStr() nhận vào tham số string và 
 * in ra string ở dạng uppercase và lowercase. Ví dụ: 
 * 
 * transformStr('Function Is Magic!')
 * 
 * Output:
 * Lowercase: function is magic!
 * Uppercase: FUNCTION IS MAGIC!
 */
function transformStr(string) {
    const lowercaseString = string.toLowerCase();
    console.log(`Lowercase: `, lowercaseString);

    const uppercaseString = string.toUpperCase();
    console.log(`Uppercase: `, uppercaseString);
}

transformStr('ác quỷ 666');