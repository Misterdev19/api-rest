var url = './controllers/api.php';

const init = () => {
    getListUser();
}
/*
[Fuctions get list user ]
@return  JSON
*/
const getListUser = () => {
    let op = 'getUserList';
    $.post(url, { accion: op }, (resp) => {
        const data = JSON.parse(resp);
        console.log(resp );
        data.forEach(usr => {
            const {id , name , username ,  email , address } = usr;
            $('#tbodyUser').append("<tr><th>"+id+"</th><td>"+name+"</td> <td>"+username+"</td><td>"+email+"</td><td> <button class='btn btn-primary'><i class='bi bi-map-fill' onclick='showAddres("+'"'+address.street+'"'+")'></i></button></td></tr>");
        });
    });
}
/* Function to show address */
const showAddres = (address ) =>{
     $("#AddressLi").modal("show");
     $("#adrressImf").text(address);
}

init();
