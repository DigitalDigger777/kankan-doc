## Get coupons list
Location: http://kuaikan.ppcgclub.com/api/kankan/coupon  
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
        <td>productId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>    
    <tr>
        <td>page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1 .. n</td>
        <td></td>
    </tr>
    <tr>
        <td>items_on_page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1 .. n</td>
        <td>Count items on page</td>
    </tr>    
</table>    

## Load coupon
Location: http://kuaikan.ppcgclub.com/api/kankan/coupon/:id  
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

## Create new coupon
Location: http://kuaikan.ppcgclub.com/api/kankan/coupon  
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
        <td>productId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>startTime</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td>You should use ISO format</td>
    </tr>
    <tr>
        <td>expiredTime</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td>You should use ISO format</td>
    </tr>
    <tr>
        <td>couponCode</td>
        <td>yes</td>
        <td>string</td>
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
        <td>image</td>
        <td>yes</td>
        <td>string</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>couponPrice</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>couponValue</td>
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
</table>    



## Coupon delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/coupon  
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