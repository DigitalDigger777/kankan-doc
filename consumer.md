## Get consumers list
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer  
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

#### Response consumers array  
``` 
{"items": [
        {
            "id":2788,
            "email":"consumer887@test.com",
            "password":"",
            "status":1,
            "role":"ROLE_CONSUMER",
            "snUnionId":"00000351",
            "snData":{"name":"John 412"},
            "dtype":"consumer"
        }  
    ], "count_pages":100}
```  


## Load consumer
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/:id  
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

## Create new consumer
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer  
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
        <td>snData</td>
        <td>yes</td>
        <td>array</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>unionId</td>
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

## Update consumer

Location: http://kuaikan.ppcgclub.com/api/kankan/consumer  
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
        <td>snData</td>
        <td>no</td>
        <td>array</td>
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

## Consumer delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer  
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