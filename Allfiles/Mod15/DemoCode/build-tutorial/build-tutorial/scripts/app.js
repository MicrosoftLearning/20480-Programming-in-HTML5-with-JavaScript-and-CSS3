async function request(obj, successHandler, errorHandler) {
    const options = {
        method: obj.method || 'GET'
    }

    const response = await fetch(obj.url, options);

    if (response.ok) {
        var results = await response.json();
        successHandler(results);
    } else {
        errorHandler(response.statusText);
    }
}

request({ url: "employees.json" },
    function (data) {
        var employees = data;
        var html = "";
        employees.forEach(function (employee) {
            html += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
        });
        document.getElementById("list").innerHTML = html;
    },
    function (error) {
        console.log(error);
    }
);