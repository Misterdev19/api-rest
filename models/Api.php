<?php
class  User
{

    /**
     * Function get user list
     *
     * @return  array
     */
    public  function  getUserList()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://jsonplaceholder.typicode.com/users',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $List_user = curl_exec($curl);

        curl_close($curl);

        return $List_user;
    }
}


