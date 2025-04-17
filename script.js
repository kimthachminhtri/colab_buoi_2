// script.js

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", () => {
        if (document.getElementById("team-table")) return;

        const members = [
            { name: "Tom", image: "images/tom.jpg" },
            { name: "Jerry", image: "images/jerry.jpg" },
            { name: "Spike", image: "spike.jpg" }
        ];

        const main = document.querySelector("main");

        const title = document.createElement("h2");
        title.textContent = "Thành viên nhóm";
        title.style.textAlign = "center";
        main.appendChild(title);

        // Tạo container để căn giữa bảng
        const tableContainer = document.createElement("div");
        tableContainer.classList.add("table-container");

        const table = document.createElement("table");
        table.id = "team-table";

        const nameRow = document.createElement("tr");
        const imageRow = document.createElement("tr");

        members.forEach(member => {
            // Cột tên
            const nameTd = document.createElement("td");
            nameTd.textContent = member.name;
            nameRow.appendChild(nameTd);

            // Cột ảnh
            const imgTd = document.createElement("td");
            const img = document.createElement("img");
            img.src = member.image;
            img.alt = `Selfie của ${member.name}`;
            img.classList.add("selfie");
            imgTd.appendChild(img);
            imageRow.appendChild(imgTd);
        });

        table.appendChild(nameRow);
        table.appendChild(imageRow);
        tableContainer.appendChild(table);
        main.appendChild(tableContainer);
    });
});
