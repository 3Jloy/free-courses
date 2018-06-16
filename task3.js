function sumTime(sec1, sec2) {
    let sum = sec1 + sec2;
    let hours = parseInt(sum/3600);
    let minutes = parseInt(sum/60) - hours * 60;
    let seconds = sum - hours * 60 * 60 - minutes * 60;
    let string_time = '';
    let words_of_seconds = ['секунд','секунда','секунды','секунды','секунды','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд','секунд'];
    let words_of_minutes = ['минут','минута','минуты','минуты','минуты','минут','минут','минут','минут','минут', 'минут', 'минут', 'минут', 'минут', 'минут', 'минут','минут','минут','минут','минут'];
    let words_of_hours = ['часов','час','часа','часа','часа','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','часов','час','часа','часа'];
    let days = parseInt(hours / 24);
    hours = hours - days * 24;
    if (hours > 0) {
        string_time += hours.toString() + " " + words_of_hours[hours] + " ";
    }
    if (minutes > 0) {
        string_time += minutes.toString() + " " + words_of_minutes[minutes % 20] + " ";
    }
    if (seconds > 0) {
        string_time += seconds.toString() + " " + words_of_seconds[seconds % 20];
    }

    process.stdout.write(string_time.trim());
}

let sec1 = parseInt(process.argv[2]), sec2 = parseInt(process.argv[3]);
sumTime(sec1, sec2);
