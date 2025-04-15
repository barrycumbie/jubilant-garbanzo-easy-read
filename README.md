# updated: dev george data read
_reading data for dev easy 🦭_

## 1️⃣ Get your data. 

- For this one, I already got a start on dev-able with my "parking log" app. 
- I went back to check it the [app](https://barrycumbie.github.io/supreme-sniffle-solutions/dev-able-solution.html) 
  - and found my "data", currently hardcoded in `html`

```html
  <!-- now for my list items! -->
  <li class="list-group-item">Th 30 Jan. 9:33 made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back</li>
  <li class="list-group-item">Tu Jan 28. 10:23. Well thank my lucky stars. Ran later today but a gift of the last spot, 4th from right on back wall!</li>
  <li class="list-group-item">Th Jan 23. 9:47 by the mailboxes o'er in those first block of apartments. Am I in mailman's way? No signs. Maybe like 9:44 when made the loop, didn't write down. </li>
  <li class="list-group-item">Tu Jan 21. 9:41. hallelujah! Got the last one. Third or so from right facing Wesleyan.</li>
  <li id="firstLog" class="list-group-item">Tu 16 JAN. 10:49 in that spot right by Student Publication building</li>
  <li class="list-group-item">
    <strong>14 JAN.</strong> Made the loop at 10:01, parked at Nobles, in office ~10:12. <em>Clear, sunny, chilly day.</em> Spot opened up by time I walked by it.
  </li>
</ul>
```
> [link to repo code]https://github.com/barrycumbie/supreme-sniffle-solutions/blob/4ef01f6869ccce2acbc6af0d11a1febc739e1b13/dev-able-solution.html#L94-L103

## 2️⃣ Encode it as a data object

- Now I gotta "encode" this hardcoded data into a data object
- I got two choices
  - 1/ a .js data object, or 
  - 2/ a JSON one. 
- I'll end up using both, but gonna start with the JSON 
  - (and later "feed" it into my .js one)
- First, strip out the 'html'

```diff
- <!-- now for my list items! --> remember, no comments in a "pure" JSON thingy
- <li class="list-group-item">Th 30 Jan. 9:33 made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back</li>
+ Th 30 Jan. 9:33 made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back
- <li class="list-group-item">Tu Jan 28. 10:23. Well thank my lucky stars. Ran later today but a gift of the last spot, 4th from right on back wall!</li>
+ Tu Jan 28. 10:23. Well thank my lucky stars. Ran later today but a gift of the last spot, 4th from right on back wall!
- <li class="list-group-item">Th Jan 23. 9:47 by the mailboxes o'er in those first block of apartments. Am I in mailman's way? No signs. Maybe like 9:44 when made the loop, didn't write down. </li>
+ Th Jan 23. 9:47 by the mailboxes o'er in those first block of apartments. Am I in mailman's way? No signs. Maybe like 9:44 when made the loop, didn't write down. 
- <li class="list-group-item">Tu Jan 21. 9:41. hallelujah! Got the last one. Third or so from right facing Wesleyan.</li>
+ Tu Jan 21. 9:41. hallelujah! Got the last one. Third or so from right facing Wesleyan.
- <li id="firstLog" class="list-group-item">Tu 16 JAN. 10:49 in that spot right by Student Publication building</li>
+ Tu 16 JAN. 10:49 in that spot right by Student Publication building
-<li class="list-group-item">
-   <strong>14 JAN.</strong> Made the loop at 10:01, parked at Nobles, in office ~10:12. 
-   <em>Clear, sunny, chilly day.</em> Spot opened up by time I walked by it.
-  </li>
-</ul>
+ 14 JAN.Made the loop at 10:01, parked at Nobles, in office ~10:12. 
+ Clear, sunny, chilly day.</em> Spot opened up by time I walked by it.
```

- Got the data isolated! 
- Now to give it the JSON form:
  - add in "key" identifiers for each value with lotta quotation marks and colons and commas

```JSON 
{   
    "date" : "Th 30 Jan",
    "time" : "9:33",
    "note" : "made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back"
},
{   
    "date" : "Tu Jan 28",
    "time" : "10:23",
    "note" : "Well thank my lucky stars. Ran later today but a gift of the last spot, 4th from right on back wall!"
},
{
    "date" : "Th Jan 23", 
    "time" : "9:47", 
    "note" : "by the mailboxes o'er in those first block of apartments. Am I in mailman's way? No signs. Maybe like 9:44 when made the loop, didn't write down."
},
{
    "date" : "Tu Jan 21", 
    "time" : "9:41", 
    "note" : "hallelujah! Got the last one. Third or so from right facing Wesleyan."
},
{
    "date" : "Tu 16 JAN", 
    "time" : "10:49", 
    "note" : "in that spot right by Student Publication building"
},
{
    "date" : "14 JAN", 
    "time" : "10:01", 
    "note" : "Made the loop at 10:01, parked at Nobles, in office ~10:12. Clear, sunny, chilly day.</em> Spot opened up by time I walked by it."
}  
```

**😎 Cool! **

- Note: I could "refactor" this and get my dates/times consistent or add in other fields
- Anyone try ChatGPT to spit out some sample json? Why not? 

- These are all objects of the same type (all parking log info)
  - notice not "data" anymore. Organized with form = info. 
  - but really I need each of these to be their own thing
- Enter in: an `array of objects`
- One more time, first making it an array

```diff
+ [
{   
    "date" : "Th 30 Jan",
    "time" : "9:33",
    "note" : "made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back"
},
{   
    "date" : "Tu Jan 28",
    "time" : "10:23",
    "note" : "Well thank my lucky stars. Ran later today but a gift of the last spot, 4th from right on back wall!"
},
{
    "date" : "Th Jan 23", 
    "time" : "9:47", 
    "note" : "by the mailboxes o'er in those first block of apartments. Am I in mailman's way? No signs. Maybe like 9:44 when made the loop, didn't write down."
},
{
    "date" : "Tu Jan 21", 
    "time" : "9:41", 
    "note" : "hallelujah! Got the last one. Third or so from right facing Wesleyan."
},
{
    "date" : "Tu 16 JAN", 
    "time" : "10:49", 
    "note" : "in that spot right by Student Publication building"
},
{
    "date" : "14 JAN", 
    "time" : "10:01", 
    "note" : "Made the loop at 10:01, parked at Nobles, in office ~10:12. Clear, sunny, chilly day.</em> Spot opened up by time I walked by it."
}
+ ]
```

**💥 Boom! Now an array**

- And now, `objectify` this array

```diff
- [
+ { "parkingData" : [
{   
    "date" : "Th 30 Jan",
    "time" : "9:33",
    "note" : "made the loop, parked down street, on street across from golf house, 9:44 in the bldg. They got a whole row blocked off for new const. parking lot but now worky being done...we'll see if they did anything on my walk back"
},

... 

]
+ }
```

**📝 the `...` is just the elipses to say `more code goes here` **

- Now we've got our hardcoded raw data into a nice JSON format
  - an `object` with `{ ... }`
  - a `key` of `parkingData`
  - with a `value` of an `array` `[ ... ]`
  - where each `array element` is an `object` `{ ... }`
  - each with its own `key/value` pairs: `"date" ... "time" ... "note" ...`

## 3️⃣ save that in your repo.

- I take my `JSON` data object and 
- put it in a file in my repo
- mine is `data/parkingData.json` 
  
**👀 see [the code blob](https://github.com/barrycumbie/jubilant-garbanzo-easy-read/blob/main/data/parkingData.json) **

## 4️⃣ Now to consume the data in our script

- I'll start a new file, call it `scripts/readParkingData.js`
- I'll drop in a `fetch` function 
- I sometimes use an `ajax` call but not this time
- what's the [difference?](https://www.geeksforgeeks.org/difference-between-ajax-and-fetch-api/) 
- 👆🏻 In that article, I ~steal~ borrow their sample code

  ```js
  fetch('/data_endpoint')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Fetch Error :-S', error);
    }); 
```

- but then gotta point it to my data file. 
- easy!

```diff
- fetch('/data_endpoint')
+ fetch('../data/parkingData.json')

...

```

- Now I can just call that `script` from my `index.html`:
- `<script type="module" src="scripts/readParkingData.js"></script>`

## 5️⃣ test it!

- I give 'er a quick spin in my `Live Server` 
- check the `console`
- and 💰 payoff! 
- I see my `data object` in all it's glory
  - make sure to toggle the `▶️ Object` to open it up and see the goodies. 

## 6️⃣ Now what? Oh ya, load the `json` to the `.js`

- I got coding awhile, so might not have caught every little step
- but essentially in the 'fetch'
- call a `f/n` w/ the parameter that loads in the `json key` (that variable name)

```diff
 .then(data => {
        //use to check data object returned okay
        //console.log(data.parkingData);

+       displayParkingData(data.parkingData);
    })
```

- and the `f/n` it calls, maybe:

```js
function displayParkingData(parkingData) {
   
    for (const log of parkingData) {
        console.log(`date: ${log.date}`);
        console.log(`time: ${log.time}`);
        console.log(`note: ${log.note}`);

        document.getElementById('body').innerHTML += `date: ${log.date}, time: ${log.time}, note: ${log.note} <br>`; 

 }
}
```

- but, of course, this is where you get your fancy `dom` stuff 
- and load it into the good l👀king part of your `html` page
  - which you've probably `wireframed` and 
  - got it looking good with some sample `hard coded html`
- That just reminded me back in step 1️⃣,
  - didn't I "extract" my `data` from the `html`? 
  - yes, yes I did. 
  - lemme just try that!

```js

    document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.date}, ${log.time}: </strong>${log.note}</li>`; 
```

- Hey, it's something!
- Now I'd consume more of my old app and interface from my [original hard coded dev able](https://barrycumbie.github.io/supreme-sniffle-solutions/dev-able-solution.html)

## 7️⃣ lastly: TEST TEST TEST

- it was all working on my friendly, local dev box via `Live Server`
- move everything up to my repo
- and failed miserable on `GitHub Pages` deployment
- the trusty `console` helped me track it down 
- and I thought I could have a `CORS` (cross origin resource sharing) error
- so I pointed my `fetch` to the real `url`

```diff
- fetch('../data/parkingData.json')
+ fetch('https://barrycumbie.github.io/jubilant-garbanzo-easy-read/data/parkingData.json')
```

- and (after lotta waiting for the changes to show up), working again 👏🏻👏🏻👏🏻
- you can 🛑stop there, or mess around with the commented out code I have:

```js
// {
//     mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin':'*'
//     }
//   }
```

- what you would do is add in that `code` 
- and toggle back to just the `'../data/parkingData.json'` 
- and see if that works
- (mine was working so I stopped there)

🍻Cheers!
(👆🏻those are sodas)



