## Get events list
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper/event  
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
        <td>shopperId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
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

## Load event
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper/event/:id  
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

## Create new event
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
        <td>shopperId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>dueDate</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td>You should use ISO format</td>
    </tr>
    <tr>
        <td>images</td>
        <td>yes</td>
        <td>array</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>name</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>detail</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>originalPrice</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>lowestPrice</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>totalQuantity</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>avialableQuantity</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>rules</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>    
</table>    



## Update event

Location: http://kuaikan.ppcgclub.com/api/kankan/shopper/event  
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
        <td>dueDate</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td>You should use ISO format</td>
    </tr>
    <tr>
        <td>images</td>
        <td>no</td>
        <td>array</td>
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
        <td>detail</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>originalPrice</td>
        <td>no</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>lowestPrice</td>
        <td>no</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>totalQuantity</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>avialableQuantity</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>rules</td>
        <td>no</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>    
</table>

## Event delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/shopper/event  
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