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
        data.forEach(usr => {
            console.log(usr.id)
            $('#tbodyUser').append("<tr><th>"+usr.id+"</th><td>"+usr.name+"</td> <td>"+usr.username+"</td><td>"+usr.email+"</td><td> <button class='btn btn-primary'><i class='bi bi-map-fill'></i></button></td></tr>");
        });
    });
}

init();
