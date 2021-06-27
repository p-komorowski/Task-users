const container = document.querySelector('.blogs');
const renderUsers = async () => {
  let usersuri = 'http://localhost:3000/users';
  const res = await fetch(usersuri);
  const users = await res.json();
  let companyuri = 'http://localhost:3000/companies';
  const response = await fetch(companyuri);
  const companies = await response.json(); /* tablica przechowująca obiekty */

  function findCompanyName(toFind) {
    for (let i = 0; i < companies.length; i++) {
      let currentcompany = companies[i];
      if (currentcompany.uri === toFind) return currentcompany.name;
    }
  }
  
  let template = '';
  users.forEach((user) => {
    template += `
    <div class="user">
      <h2>${user.name}</h2>
      <p>E-mail: ${user.email} </p>
      <p> Company: ${findCompanyName(user.uris.company)} </p>
    </div>
    `;
  });
  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderUsers());
