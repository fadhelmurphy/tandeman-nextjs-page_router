export const getCurrentDateTime = () => {
  // Dapatkan objek tanggal saat ini
  const currentDate = new Date();

  // Buat fungsi untuk menambahkan nol di depan angka jika kurang dari 10
  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  // Dapatkan tahun, bulan, dan tanggal
  const year = currentDate.getFullYear();
  const month = addLeadingZero(currentDate.getMonth() + 1); // Perlu ditambah 1 karena bulan dimulai dari 0
  const day = addLeadingZero(currentDate.getDate());

  // Dapatkan jam, menit, dan detik
  const hours = addLeadingZero(currentDate.getHours());
  const minutes = addLeadingZero(currentDate.getMinutes());
  const seconds = addLeadingZero(currentDate.getSeconds());

  // Buat format "YYYY-MM-DD HH:MM:SS"
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

export const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const getCurrDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  const currentDate = `${year}-${month}-${day}`; // "2022-06-17"
  return currentDate;
};

export const toCapitalize = (text) => {
  // Membagi teks menjadi array kata
  var words = text.split(" ");

  // Loop melalui setiap kata dan melakukan capitalize pada huruf pertama
  for (var i = 0; i < words.length; i++) {
      // Memastikan kata tidak kosong
      if (words[i]) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
  }

  // Menggabungkan kembali array kata menjadi satu teks
  var capitalizedText = words.join(" ");

  return capitalizedText;
}

export const formatCompactNumber = (number) => {
  // Definisikan opsi untuk pemformatan angka
  let options = {
    notation: "compact",     // Gunakan notasi compact
    compactDisplay: "short", // Gunakan bentuk singkat untuk notasi compact
  };
  
  // Buat instance Intl.NumberFormat dengan lokal "en-US" dan opsi yang ditentukan
  const usformatter = Intl.NumberFormat("en-US", options);
  
  // Format angka yang diberikan menggunakan formatter yang dibuat
  return usformatter.format(number);
}

export const random_rgba = (opacity = null) => {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + (opacity ? opacity : r().toFixed(1)) + ')';
}