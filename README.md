TOP BILLLIONAIRES API 

This is 

To see all of the billionaires that are avaibale here are the request method:

`/billionaires` - GET 
- Returns a list of all avaiable billionaires

`/baskets/:id` - GET 
- Returns a single billionaire by id
- example respone from `/billionaires/2`

```
{
    "id": "2",
    "name": "Elon Musk",
    "networth": "174B",
    "source": "Tesla, SpaceX"
  }
  
```

`/billionaires` - POST 
- Accepts a `billionaire` object
- example of object 

```
    {
        "id": "4",
        "name": "Bill Gates",
        "networth": "115B",
        "source": "Microsoft"
    }

```
