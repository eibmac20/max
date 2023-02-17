import {ITodo} from "../../model/ITodo";


window.onload = () =>{
  console.log("hello");
  fetch('./todos')
  .then(response => response.json())
  .then(data => {
    let todos:ITodo[] = data as ITodo[];
    todos.forEach(t => console.log(`Todo: ${t.name} - ${t.description}`))

    const table = document.createElement("table");

    // Create table headers
    const headers = ["Name", "Description"];
    const headerRow = table.insertRow();
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    // Create table rows
    // @ts-ignore
    data.forEach(item => {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      nameCell.textContent = item.name;
      const descriptionCell = row.insertCell();
      descriptionCell.textContent = item.description;
    });

    let parent:HTMLDivElement = document.querySelector("#out");
    parent.appendChild(table);

    // todos.forEach(t => {
    //   let child:HTMLDivElement = document.createElement("div");
    //   child.innerText = `${t.name} - ${t.description}`;
    //   parent.appendChild(child);
    // })
  });
}