const companies = [
  { name: "Alpha", category: "Finance", start: 1999, end: 2007 },
  { name: "Beta", category: "Tech", start: 2001, end: 2015 },
  { name: "Gamma", category: "Retail", start: 1995, end: 2003 },
  { name: "Delta", category: "Auto", start: 2000, end: 2010 }
];

// Tạo bản sao, sắp xếp theo end tăng dần
const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

// Lấy 3 công ty đầu
const top3 = sortedCompanies.slice(0, 3);

// In ra theo định dạng "Company - EndYear"
top3.forEach(c => console.log(`${c.name} - ${c.end}`));
// Kết quả:
// Gamma - 2003
// Alpha - 2007
// Delta - 2010