$(() => {

    const handleFoodData = (data) => {
        console.log(data);
        console.log(data.hints[0].food.label);
        for (let i =0; i < data.hints.length; i++){
            const foodName = $('<h2>')
            foodName.text(data.hints[i].food.label);
            console.log(foodName);
            console.log(data); 
            $('.food').append(foodName)
            // const foodImage = $()
        }
        
    };

    console.log(`https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=d3fffd5d&app_key=00e87c777fc94342a9cf888e21dfbcf3`)

    $('#searchButton').on('click', () =>{
        let searchBar = $('#searchBar').val();
        console.log(searchBar);
        let uri = encodeURI(searchBar);
        console.log(uri);

        const endpoint = `https://api.edamam.com/api/food-database/parser?ingr=${uri}&app_id=d3fffd5d&app_key=00e87c777fc94342a9cf888e21dfbcf3`

        console.log(endpoint);

        $.ajax({ url: endpoint}).then(handleFoodData)

})

})

