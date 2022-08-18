# predator-quotes-api

A selection of quotes from Arnold Schwarzenegger's classic movie Predator.

***Please note some quotes feature profane language.***


### GET `/quotes`

https://predator-quotes.herokuapp.com/quotes/

Returns a random quote:
```
{
	"quote": "There's something out there waiting for us, and it ain't no man. We're all gonna die.",
	"character": "Billy"
}
```


### GET `/quotes/bycharacter/(charactername)`

Returns an array with quotes on file by that character e.g. `/quotes/bycharacter/Poncho`

https://predator-quotes.herokuapp.com/quotes/bycharacter/Poncho

```
[
	{
		"quote": "She says the jungle... it just came alive and took him.",
		"character": "Poncho"
	},
	{
		"quote": "You got time to duck?",
		"character": "Poncho"
	},
	{
		"quote": "Major... you'd better take a look at this.",
		"character": "Poncho"
	},
	{
		"quote": "Do you think you could have found something bigger?",
		"character": "Poncho"
	}
]
```

If character name does not exist on file, the following message is returned:

`Sorry we only have a selection of quotes for the following characters: Dutch, Dillon, Blain, Billy, Mac, Anna, Poncho`


### GET `/quotes/search/(word)`

Returns an array with quotes on file that include the specified word e.g. `/quotes/search/stick`

https://predator-quotes.herokuapp.com/quotes/search/stick

```
[
	{
		"quote": "Stick around.",
		"character": "Dutch"
	}
]
```
 
### GET `/quotes/all`

Returns an array of all available quotes

https://predator-quotes.herokuapp.com/quotes/all

