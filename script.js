const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=02e194ed6cb637efa2b3e56a49d2425e&page=1';
const IMGPATH='https://image.tmdb.org/t/p/w500';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?api_key=02e194ed6cb637efa2b3e56a49d2425e&query=';

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url)
{
    fetch(url).then(response => response.json())
    .then(function(data)
    {
        console.log(data.results);
        data.results.forEach(element => {

            const div_row=document.createElement('div');
            div_row.setAttribute('class','row');

            const div_column=document.createElement('div');
            div_column.setAttribute('class','column');

            const div_card=document.createElement('div');
            div_card.setAttribute('class','card');

            const center=document.createElement('center');

            const image=document.createElement('img');
            image.setAttribute('class','thumbnail');

            const title=document.createElement('h3');

            title.innerHTML=`${element.title}`;
            image.src= IMGPATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    }); 
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        main.innerHTML='';

        const searchItem=search.value;

        if(searchItem)
        {
            returnMovies(SEARCHAPI + searchItem);
            search.value="";
        }
    });
}