window.addEventListener("load", function() {​​​​​​​​

    let name_input = document.getElementById("userInput");
    name_input.addEventListener("keyup", function(event) {​​​​​​​​
        searchUser(event);
    }​​​​​​​​)
    window.userSearchHhr = new XMLHttpRequest();
}​​​​​​​​)

function searchUser(event) {​​​​​​​​
    let input = event.target;
    const min_char = 4;
    if (input.value.length < min_char) {​​​​​​​​
        closeExistingLists();
        return undefined;
    }​​​​​​​​
    else {​​​​​​​​
        console.log(input.value);
        window.userSearchHhr.abort();
        let auto_div = document.getElementById("userSuggestion");
        window.userSearchHhr.onreadystatechange = function() {​​​​​​​​
            if (this.readyState == 4 && this.status == 200) {​​​​​​​​
                var response = JSON.parse(this.responseText);
                console.log(response);
                response.items.forEach(item => {​​​​​​​​
                    let div_item = document.createElement('div');
                    div_item.setAttribute("class", 'col-md-12');
                    div_item.innerHTML = "<span class='name'>" + item.login + "</span>";
                    div_item.innerHTML += "<img class='img-thumbnail' src='" + item.avatar_url + "'/>"
                    div_item.addEventListener("click", function(e) {
                        alert("Hello");
                    })
                    auto_div.appendChild(div_item);
                }​​​​​​​​);
            }​​​​​​​​

        }​​​​​​​​
        window.userSearchHhr.open("GET", "https://api.github.com/search/users?q=" + input.value, true);
        window.userSearchHhr.send();
    }​​​​​​​​
    function closeExistingLists(element) {
        var foo = document.getElementById("userSuggestion");
        while (foo.firstChild) {
            foo.removeChild(foo.firstChild)
        }
    }
}​​​​​​​​