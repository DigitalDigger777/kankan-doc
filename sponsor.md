## Get sponsors list
Location: http://kuaikan.ppcgclub.com/api/kankan/sponsor  
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

#### Response sponsor array  
``` 
```  

## Load sponsor
Location: http://kuaikan.ppcgclub.com/api/kankan/sponsor/:id  
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

## Create new sponsor
Location: http://kuaikan.ppcgclub.com/api/kankan/sponsor  
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
        <td>email</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>    
</table>

## Update sponsor

Location: http://kuaikan.ppcgclub.com/api/kankan/sponsor  
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
        <td>status</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
</table>

## Sponsor delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/sponsor  
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