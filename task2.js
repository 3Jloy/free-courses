let dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let text = process.argv[2], offset = parseInt(process.argv[3]) % dictionary.length;
let head = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let tail = head.splice(0, offset);
let encrypted_dictionary = head.concat(tail);
let encrypted_dictionary_hash = {};
dictionary.forEach(function (word, index) {
    encrypted_dictionary_hash[word] = encrypted_dictionary[index];
});

let encrypted_text = '';
for (let i = 0; i <= text.length - 1; i++) {
    char = text.charAt(i);
    if (encrypted_dictionary_hash[char.toUpperCase()]) {
        if (char == char.toUpperCase()) {
            encrypted_text += encrypted_dictionary_hash[char];    
        } else {
            encrypted_text += encrypted_dictionary_hash[char.toUpperCase()].toLowerCase();
        }   
    } else {
        encrypted_text += char;
    }
    
}
process.stdout.write(encrypted_text);
