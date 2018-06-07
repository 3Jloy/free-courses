let sec1 = parseInt(process.argv[2]), sec2 = parseInt(process.argv[3]);
let sum = sec1 + sec2;
let hours = parseInt(sum/3600);
let minutes = parseInt(sum/60) - hours * 60;
let seconds = sum - hours * 60 * 60 - minutes * 60
let string_time = '';
if (hours > 0) {
    string_time += hours.toString() + " час ";
}
if (minutes > 0) {
    string_time += minutes.toString() + " минут ";
}
string_time += seconds.toString() + " секунды"; 

process.stdout.write(string_time);
