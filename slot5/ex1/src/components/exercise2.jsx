
export function Exercise2() {
    //khai bao people chua danh sach 10 nguoi
    const people = [
        { id: 1, name: "Nguyen Van A", age: 20 },
        { id: 2, name: "Tran Thi B", age: 21 },
        { id: 3, name: "Le Van C", age: 22 },
        { id: 4, name: "Pham Thi D", age: 23 },
        { id: 5, name: "Hoang Van E", age: 24 },
        { id: 6, name: "Do Thi F", age: 25 },
        { id: 7, name: "Bui Van G", age: 26 },
        { id: 8, name: "Ngo Thi H", age: 27 },
        { id: 9, name: "Vu Van I", age: 28 },
        { id: 10, name: "Dang Thi J", age: 29 }
    ];
    //bien total
    const numberList = [1, -2, 3, 4, -5, 6];
    // tinh tong cac so nguyen
    const total = numberList.reduce((sum, num) => sum + num, 0);
    // sap xep cac so nguyen tang dan
    const sortedNumbers = [...numberList].sort((a, b) => a - b);
    //khai bao chuoi ten
    const ten = "Nguyen Van A";
    // sap xep chuoi ten tang dan
    const sortedNames = [...people].sort((a, b) => a.name.localeCompare(b.name));
    // loc ra nhung nguoi co do tuoi tu 13-19 tuoi
    const teens = people.filter(person => person.age >= 13 && person.age <= 19);
    // dem co bao nhieu nguoi
    const peopleCount = people.length;
    // tinh trung binh tuoi
    const avgAge = (people.reduce((sum, person) => sum + person.age, 0) / people.length).toFixed(2);
    return (
        <div>
            <p>Hello <strong>Exercise2</strong></p>
            <p>So luong nguoi: <strong>{peopleCount}</strong></p>
            <p>Tuoi trung binh: <strong>{avgAge}</strong></p>
            <p>Tong cac so nguyen: <strong>{total}</strong></p>
            <p>So nguyen tang dan:</p>
            <ul>
                {sortedNumbers.map((num, idx) => (
                    <li key={idx}>{num}</li>
                ))}
            </ul>
            <p>Chuoi ten tang dan:</p>
            <ul>
                {sortedNames.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
            <p>Nhung nguoi co do tuoi tu 13-19:</p>
            <ul>
                {teens.length > 0 ? (
                    teens.map(person => (
                        <li key={person.id}>
                            ID: {person.id}, Name: {person.name}, Age: {person.age}
                        </li>
                    ))
                ) : (
                    <li>Khong co nguoi nao trong do tuoi nay.</li>
                )}
            </ul>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        ID: {person.id}, Name: {person.name}, Age: {person.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

    