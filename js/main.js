//попытка создать что-то адекватное (пример от кураторов ниже)
var data_ = [];
/*
const getData = function() {
  createRequest({ path: "/api/v001/books", method: "GET" })
    .then(response => {
		//запихать данные запроса в var data_[];
		
      document.querySelector("#books").innerHTML = response
        .map(renderBook)
        .join("");
		
      console.log("Результат запроса книг", response);
    })
    .catch(err => {
		
      document.querySelector("#books").innerHTML =
        "Не удалось получить список книг";
		
      console.log("Ошибка при получении списка книг", err);
    });
};

getData();
*/
/*
const editForm = document.querySelector("#edit-request");
editForm.addEventListener("submit", event => {
  event.preventDefault();

  const data = getFieldData(event.target);
  console.log("main", "data", data);

  toggleClass(".edit", "loading");

  createRequest({ path: `/api/v001/books`, method: "POST" }, {}, data)
    .then(response => {
      toggleClass(".edit", "loading");
      console.log("Данные обновлены", response);
    })
    .catch(() => {
      toggleClass(".edit", "loading");
      console.log("Ошибка");
    });
});

*/

/*
const spendForm = document.querySelector("#spend-request");

spendForm.addEventListener("submit", event => {
  event.preventDefault();

  const data = getFieldData(event.target);
  console.log("main", "data", data);

  toggleClass(".spend", "loading");

  createRequest({ path: `/api/v001/books`, method: "POST" }, {}, data)
    .then(response => {
      toggleClass(".spend", "loading");
      console.log("Данные обновлены", response);
    })
    .catch(() => {
      toggleClass(".spend", "loading");
      console.log("Ошибка");
    });
});


const deleteForm = document.querySelector("#delete-request");

deleteForm.addEventListener("submit", event => {
  event.preventDefault();

  const data = getFieldData(event.target);
  console.log("main", "data", data);

  toggleClass(".delete", "loading");

  createRequest({ path: `/api/v001/books`, method: "POST" }, {}, data)
    .then(response => {
      toggleClass(".delete", "loading");
      console.log("Категория удалена", response);
    })
    .catch(() => {
      toggleClass(".delete", "loading");
      console.log("Ошибка");
    });
});

// Пример получения и вывода списка книг
*/

const renderBook = Category => `
<tr>
<td class="bc"><p class="bc">${Category.name}</p></td> <td>${Category.limit}</td> <td><button class="button" class="btn btn-success" id="delete" type="submit" style="width: 100%;">Удалить</button></td>
</tr>
`;
const getAllcategories = function() {
  createRequest({ path: "api/v001/category?userid="+userId, method: "GET" })
    .then(response => {
      document.querySelector("#main_table").innerHTML ='<tr><th>Категория</th><th>Лимит</th><th></th></tr>' + response
          .map(renderBook)
        .join("");
      console.log("Результат запроса ", response);
    })
    .catch(err => {
      document.querySelector("#categories").innerHTML =
        "Не удалось получить список ";
      console.log("Ошибка при получении списка ", err);
    });
};



const bindAddFormListener = () => {
    const addBookForm = document.querySelector("#add-request");
    addBookForm.addEventListener("submit", event => {
        event.preventDefault();

        const data = getFieldData(event.target);
        console.log("main", "data", data);

        toggleClass(".add-request", "loading");

        createRequest({ path:"api/v001/category?userid="+userId, method: "POST" }, {}, data)
            .then(response => {
                toggleClass(".add-request", "loading");
                console.log("Категория добавлена", response);
            })
            .catch(() => {
                toggleClass(".add-request", "loading");
                console.log("Не удалось добавить");
            });
    });

    const addExpenses = document.querySelectorAll('.add-expenses')[0];
    const addExpense = () => {
        console.log(document.querySelectorAll('.fields')[0])
        const filed = document.createElement('input');
        filed.className = 'field_control';
        filed.name = 'expenses';
        document.querySelectorAll('.fields')[0].append(filed)
    };
    addExpenses.addEventListener('click', addExpense);
}

const bindDeleteListener = () => {
    const deleteForm = document.querySelector("#delete");
    deleteForm.addEventListener("submit", event => {
        event.preventDefault();

        const data = getFieldData(event.target);
        console.log("main", "data", data);

        toggleClass(".delete", "loading");

        createRequest({ path:"api/v001/category?userid="+userId, method: "DELETE" }, {}, data)
            .then(response => {
                toggleClass(".delete", "loading");
                console.log("Категория удалена", response);
            })
            .catch(() => {
                toggleClass(".add-request", "loading");
                console.log("Не удалось удалить");
            });
    });
}




const userSelector = document.querySelector('.select_control-user');
userSelector.addEventListener('change', event => {
  userId = event.target.value;
  getAllcategories();
});

