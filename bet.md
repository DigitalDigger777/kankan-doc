## Get bets list
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/bet  
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
        <td>consumerId</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td>you need set (consumerId or sponsorId) or (consumerId and sponsorId)</td>
    </tr>
    <tr>
        <td>sponsorId</td>
        <td>no</td>
        <td>integer</td>
        <td></td>
        <td>you need set (consumerId or sponsorId) or (consumerId and sponsorId)</td>
    </tr>
    <tr>
        <td>page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1..n</td>
        <td>Number of page</td>
    </tr>
    <tr>
        <td>items_on_page</td>
        <td>yes</td>
        <td>integer</td>
        <td>1..n</td>
        <td>Count items on page</td>
    </tr>    
</table>    

## Load Bet  
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/bet/:id  
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
        <td>Bet ID</td>
    </tr>
</table>  

## Create new bet
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/bet  
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
        <td>sponsorId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td>Sponsor ID</td>
    </tr>
    <tr>
        <td>consumerId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td>Consumer ID</td>
    </tr>
    <tr>
        <td>eventId</td>
        <td>yes</td>
        <td>integer</td>
        <td></td>
        <td>Event ID</td>
    </tr>    
    <tr>
        <td>betValue</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td>bet value</td>
    </tr>
    <tr>
        <td>currentPrice</td>
        <td>yes</td>
        <td>float</td>
        <td></td>
        <td>current price</td>
    </tr>   
</table>    



## Update bet

Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/bet  
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
        <td>Bet ID</td>
    </tr>    
    <tr>
        <td>betValue</td>
        <td>no</td>
        <td>float</td>
        <td></td>
        <td>bet value</td>
    </tr>
    <tr>
        <td>currentPrice</td>
        <td>no</td>
        <td>float</td>
        <td></td>
        <td>current price</td>
    </tr>   
</table>

## Bet delete  
Location: http://kuaikan.ppcgclub.com/api/kankan/consumer/bet  
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
        <td>Bet ID</td>
    </tr>
</table>