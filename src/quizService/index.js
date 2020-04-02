const qBank = [
  {
    question:
      "Berapakah nomor absen saya (Rivo Fausta Valiano)",
    answers: ["27", "12", "01", "25"],
    correct: "27",
    questionId: "000001"
  },
  {
    question:
      "Siapakah ketua kelas TI3A yang sekarang?",
    answers: ["Faiq", "Yoga", "Firman", "Arifany"],
    correct: "Firman",
    questionId: "000002"
  },
  {
    question:
      "Apa nama ibukota Australia?",
    answers: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    correct: "Canberra",
    questionId: "000003"
  },
  {
    question:
      "Tanggal berpakah kejadian Teror World Trade Center?",
    answers: ["9 September 2001", "11 September 2001", "12 September 2001", "10 September 2001"],
    correct: "11 September 2001",
    questionId: "000004"
  },
  {
    question:
      "Siapakah suami dari Kyle Jenner?",
    answers: ["Machine Gun Kelly", "Kendrick Lammar", "Post Malone", "Travis Scott"],
    correct: "Travis Scott",
    questionId: "000005"
  },
  {
    question: "Apa Kepanjangan dari POLINEMA?",
    answers: [
      "Politeknik Nelayan Malang",
      "Politeknik Negeri Malaysia",
      "Poliklinik Negeri Malang",
      "Politeknik Negeri Malang"
    ],
    correct: "Politeknik Negeri Malang",
    questionId: "000006"
  },
  {
    question:
      "25 x 25 adalah?",
    answers: ["1000", "225", "655", "625"],
    correct: "625",
    questionId: "000007"
  },
  {
    question:
      "Siapakah nama presiden Russia? ",
    answers: ["Donald Trump", "Vladimir Putin", "Recep Tayip", "Dmitry Medvedev"],
    correct: "Vladimir Putin",
    questionId: "000008"
  },
  {
    question:
      "Berapakah panjang sungai amazon?",
    answers: ["6400 km", "5400 km", "5 m", "6100 km"],
    correct: "6400 km",
    questionId: "000009"
  },
  {
    question:
      "Apakah nama ibukota Jawa Timur Indonesia?",
    answers: ["Banyuwangi", "Pasuruan", "Malang", "Surabaya"],
    correct: "Surabaya",
    questionId: "000010"
  },
  {
    question:
      "Berapa Jumlah Provinsi yang ada di Indonesia?",
    answers: ["30", "28", "34", "20"],
    correct: "34",
    questionId: "000011"
  },
  {
    question:
      "Siapakah nama istri Presiden Joko Widodo?",
    answers: ["Mariana", "Jessica", "Dewi", "Iriana"],
    correct: "Iriana",
    questionId: "000012"
  },
  {
    question:
      "Dimanakah letak keajaiban dunia Taj Mahal?",
    answers: ["Palestina", "India", "Jepang", "Australia"],
    correct: "India",
    questionId: "000013"
  },
  {
    question:
      "Siapakah pendiri Microsoft?",
    answers: ["Rivo Fausta", "Mark Zuckenberg", "Steve Jobs", "Bill Gates"],
    correct: "Bill Gates",
    questionId: "000014"
  },
  {
    question:
      "Berapakah jumlah lantai yang ada di Gedung Sipil Polinema?",
    answers: ["10", "9", "8", "7"],
    correct: "8",
    questionId: "0000015"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
