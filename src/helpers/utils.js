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
  }