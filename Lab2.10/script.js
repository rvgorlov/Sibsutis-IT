// задержка в секунду
var delay = 1000; 
// строка для времени
var ClockString;
// выполняется в фоне
clock();

function reloadMe() {
	document.location.reload(true);
}

// проверка длинны строки, чтобы корректно отображалось.
function checkLength(item) {
	if (item< 10) {
		item = "0" + item;
	}
	else {
		item = "" + item;
	}

	return (item);
}

function clock() {
	// путь до картинок
	var OpenImg = '<img src=images/'+'dg';
	var CloseImg='.gif class=\"DigitImage\" />';
	
	// обнуляем строку
	ClockString = "";

	// получаем дату
	now = new Date();
	var CurHour = now.getHours();
	var CurMinute = now.getMinutes();
	var CurMonth = now.getMonth() + 1; // !!!потому что отсчет месаца с 0
	var CurDay = now.getDate();
	var CurYear = now.getYear();
	// на всякий случай затираем
	now = null;

	// устанавливаем половину суток
	if (CurHour >= 12) {
		CurHour = CurHour - 12;
		Ampm = "pm";
	}
	else {
		Ampm = "am";
	}

	// потому что нуль это 12
	if (CurHour == 0) {
		CurHour = "12";
	}

	// проверяем время для правильного отображения
	CurHour = checkLength(CurHour);
	CurMinute = checkLength(CurMinute);
	CurMonth = checkLength(CurMonth);
	CurDay = checkLength(CurDay);
	CurYear = checkLength(CurYear);

	// часы
	CurHour = "" + CurHour;
	for (Count = 0; Count < CurHour.length; Count++) {
		ClockString += OpenImg + CurHour.substring(Count, Count + 1) + CloseImg;
	}

	// разделитель в часах
	ClockString += OpenImg + "c" + CloseImg;

	// минуты
	for (Count = 0; Count < CurMinute.length; Count++) {
		ClockString += OpenImg + CurMinute.substring(Count, Count + 1) + CloseImg;
	}

	// половина суток
	ClockString += OpenImg + Ampm + CloseImg;

	// месяц
	for (Count = 0; Count < CurMonth.length; Count++) {
		ClockString += OpenImg + CurMonth.substring(Count, Count + 1) + CloseImg;
	}

	// разделитель в дате
	ClockString += OpenImg + "p" + CloseImg;

	// день
	for (Count = 0; Count < CurDay.length; Count++) {
		ClockString += OpenImg + CurDay.substring(Count, Count + 1) + CloseImg;
	}

	// разделитель в дате
	ClockString += OpenImg + "p" + CloseImg;

	// год
	for (Count = 1; Count < CurYear.length; Count++) { /* цикл начинается с 1 потому что getYear() возвращает текущий год - 1900 */
		ClockString += OpenImg + CurYear.substring(Count, Count + 1) + CloseImg;
	}
}

