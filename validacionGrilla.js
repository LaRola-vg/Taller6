//console.log('correcto')

$(document).ready(
function cargarDatos(){
    //console.log('entramos')
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhttp.send();
    xhttp.onreadystatechange =function(){
        if (this.readyState == 4 && this.status ==200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            let data = document.querySelector('#data');
            data.innerHTML = '';
            

            for (let item of datos) {
                
                console.log(item['address']['geo']['lat']);
                data.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item['address']['street']}</td>
                        <td>${item['address']['suite']}</td>
                        <td>${item['address']['city']}</td>
                        <td>${item['address']['zipcode']}</td>
                        <td>${item['address']['geo']['lat']}</td>
                        <td>${item['address']['geo']['lng']}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item['company']['name']}</td>
                        <td>${item['company']['catchPhrase']}</td>
                        <td>${item['company']['bs']}</td>
                    </tr>

                `
            }
            //console.log(datos)
        }
    }
}

);
