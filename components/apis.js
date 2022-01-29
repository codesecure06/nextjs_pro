const url = 'uneefy.in'

export function getUrl(){
    return url
}

export function readIMG(input, div) {
    if (input.files && input.files[0]) {
        var imageArray = input.files;
        Array.from(imageArray).forEach((image) => {
            console.log(image);
            var reader = new FileReader();

            reader.onload = function (e) {
                $("#" + div).css({
                    "background-image": "url(" + e.target.result + ")",
                    "background-position": "center",
                    "background-size": "contain",
                    backgroundRepeat: "no-repeat",
                });
            };

            reader.readAsDataURL(image);
        });
    }
}

export function maskPhoneNumber(phone_number) {
    let mobile = phone_number;
    for (let i = 2; i < phone_number.length - 2; i++) {
        mobile =
            mobile.substr(0, i) + "*" + mobile.substr(i + 1, phone_number.length);
    }
    return mobile;
}

export function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

export function showSearchResult(input, query) {
    input = input.toLowerCase().replace(query, "<b>" + query + "</b>");
    return input;
}

export function filterArrayGroup(array, query) {
    if (query != null) {
        let filteredArray = array.filter((item) => {
            return (
                item.product_group_name.toLowerCase().indexOf(query.toLowerCase()) == 0
            );
        });
        return filteredArray;
    }
}

export function filterArrayBrand(array, query) {
    if (query != null) {
        let filteredArray = array.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) == 0;
        });
        return filteredArray;
    }
}

export function filterArrayCity(array, query) {
    if (query != null) {
        let filteredArray = array.filter((item) => {
            return item.city_name.toLowerCase().indexOf(query.toLowerCase()) == 0;
        });
        return filteredArray;
    }
}

export function calculateTime(hour) {
    if (hour > 24) {
        return {
            time: Math.floor(hour / 24),
            title: `${Math.floor(hour / 24)} days ago`,
        };
    }
    return {
        latest: true,
        time: hour,
        title: `${hour} hours ago`,
    };
}

export function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                long: position.coords.longitude,
            };
            return pos;
        });
    }
}

export function showPrice(price) {
    return Math.floor(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function ShowPdf({ link }) {
    return (
        <Document file={link}>
            <Page pageNumber={1} />
        </Document>
    );
}
