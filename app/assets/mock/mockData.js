const categories = [
  { id: 1, name: "Animals" },
  { id: 2, name: "Food" },
  { id: 3, name: "Everyday Objects" },
  { id: 4, name: "Travel" },
  { id: 5, name: "Emotions" },
];

const wordPairs = {
  Animals: [
    { arabic: "قطة", english: "Cat" },
    { arabic: "كلب", english: "Dog" },
    { arabic: "فيل", english: "Elephant" },
    { arabic: "أسد", english: "Lion" },
    { arabic: "نمر", english: "Tiger" },
  ],
  Food: [
    { arabic: "تفاح", english: "Apple" },
    { arabic: "خبز", english: "Bread" },
    { arabic: "جبن", english: "Cheese" },
    { arabic: "بيضة", english: "Egg" },
    { arabic: "موز", english: "Banana" },
  ],
  "Everyday Objects": [
    { arabic: "كتاب", english: "Book" },
    { arabic: "مفتاح", english: "Key" },
    { arabic: "كرسي", english: "Chair" },
    { arabic: "ساعة", english: "Clock" },
    { arabic: "قلم", english: "Pen" },
  ],
  Travel: [
    { arabic: "طائرة", english: "Airplane" },
    { arabic: "قطار", english: "Train" },
    { arabic: "سيارة", english: "Car" },
    { arabic: "جواز سفر", english: "Passport" },
    { arabic: "فندق", english: "Hotel" },
  ],
  Emotions: [
    { arabic: "سعادة", english: "Happiness" },
    { arabic: "حزن", english: "Sadness" },
    { arabic: "غضب", english: "Anger" },
    { arabic: "خوف", english: "Fear" },
    { arabic: "دهشة", english: "Surprise" },
  ],
};

module.exports = { categories, wordPairs };
