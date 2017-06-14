// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

function fetchPerson(id){

  fetch(`https://randomuser.me/api/?nat=us`)
    .then( function(response){
      return response.json()
    })
    .then( function(json){
      console.log("data", json)

      var custo = {}
      custo.name = json.results[0].name.first + " " + json.results[0].name.last;
      custo.street = json.results[0].location.street;
      custo.email = json.results[0].email;
      custo.address2 = json.results[0].location.city + ", " + json.results[0].location.state + " " + json.results[0].location.postcode;
      custo.phone = json.results[0].phone;
      custo.icon = json.results[0].picture.large;
      custo.ssn = json.results[0].id.value;

      const html = `
        <div class="customer">
          <div class="custoimg"><img src="${custo.icon}"></div>
          <div class="name">
            <a href="${json.url}">${custo.name}</a>
          </div>
          <div class="email">
            <a href="${custo.email}">${custo.email}</a>
          </div>
          <div class="street">${custo.street}</div>
          <div class="address2">${custo.address2}</div>
          <div class="phone">${custo.phone}</div>
          <div class="ssn">${custo.ssn}</div>
        </div>
        `

      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
}
for (var i = 1; i <= 12; i++) {
  fetchPerson(i)
}
