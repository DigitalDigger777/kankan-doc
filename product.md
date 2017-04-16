## Get product list
Location: http://kuaikan.ppcgclub.com/api/kankan/product  
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
        <td>1..n</td>
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

## Load product
Location: http://kuaikan.ppcgclub.com/api/kankan/product/:id  
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

## Create new product
Location: http://kuaikan.ppcgclub.com/api/kankan/product  
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
        <td>shopperId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>images</td>
        <td>yes</td>
        <td>array</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>description</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>price</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
</table>

## Update product

Location: http://kuaikan.ppcgclub.com/api/kankan/product/:id  
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
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>images</td>
        <td>yes</td>
        <td>array</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>description</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>price</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
</table>

## product delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/product  
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