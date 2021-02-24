module.exports = {
    convertDate: (strDate) => {
        let date = new Date(strDate);
        let dateFormated = formatNumber(date.getDate()) + "/" + formatNumber(date.getMonth() + 1) + "/" + date.getFullYear()
            + ' à ' + formatNumber(date.getUTCHours() )+ 'h' + formatNumber(date.getMinutes());
        return dateFormated;
    }
}

function formatNumber(number) {
    let formatNumber = '0' + number.toString();
    return formatNumber.substring(formatNumber.length - 2, formatNumber.length);
}