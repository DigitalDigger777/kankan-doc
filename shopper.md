## Get shoppers list
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper  
Method: GET  

<table>
    <tr>
        <th>Parameter</th>
        <th>Required</th>
        <th>Type</th>
        <th>Options</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>method</td>
        <td>yes</td>
        <td>string</td>
        <td>LIST</td>
        <td></td>
    </tr>
    <tr>
        <td>page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1..n</td>
        <td></td>
    </tr>
    <tr>
        <td>items_on_page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1..n</td>
        <td>Count items on page</td>
    </tr>    
</table>  

#### Response shoppers array  
``` 
{
  "items":[
    {
      "id":2888,
      "email":"shopper357@test.com",
      "password":"",
      "status":1,
      "role":"ROLE_SHOPPER",
      "name":"Shopper #631",
      "tel":"+380501555230",
      "dtype":"shopper"
    }],"count_pages":20
}
```  


## Load shopper
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper/:id  
Method: GET   


<table>
    <tr>
        <th>Parameter</th>
        <th>Required</th>
        <th>Type</th>
        <th>Options</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>id</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
</table>

## Create new shopper
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper  
Method: POST  



<table>
    <tr>
        <th>Parameter</th>
        <th>Required</th>
        <th>Type</th>
        <th>Options</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>name</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>tel</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>email</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>password</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>    
</table>

## Update shopper

Location: http://kuaikan.ppcgclub.com/api/kankan/shopper  
Method: PUT  

<table>
    <tr>
        <th>Parameter</th>
        <th>Required</th>
        <th>Type</th>
        <th>Options</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>id</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>    
    <tr>
        <td>name</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>tel</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>    
    <tr>
        <td>password</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>status</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
</table>

## Shopper delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper  
Method: DELETE

<table>
    <tr>
        <th>Parameter</th>
        <th>Required</th>
        <th>Type</th>
        <th>Options</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>id</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
</table>