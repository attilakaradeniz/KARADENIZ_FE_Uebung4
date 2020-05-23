class GetDatas {
    constructor() {
        this.data;
        this.productsData;
        this.table = $("table tbody");
    }

    showProducts() {
        let that = this;
        let buttonProductTypes = $("#btnProductTypes");
        let buttonProducts = $("#btnProducts");

        buttonProductTypes.on("click", function () {
            that.ajaxProductTypes();



        });
    }


    ajaxProductTypes() {
        let that = this;
        let productFirst;
        $.ajax({
            //url: "https://httpbin.org/get",
            //url: "http://localhost/KARADENIZ_BE_Uebung3/index.php?action=listTypes", // working
            url: "http://localhost/KARADENIZ_FE_Uebung4/index.php?action=listTypes", // working too

            methot: "GET",
            success: function (response) {

                that.data = response;
                productFirst = response[0].productType;

                function send() {
                    return response[0].productType;
                }

                //ajaxRequest.productFirst = response[0].productType;
                let prodType = response[0].productType;

                console.log('1: ', response);
                console.log('2: ', response);
                console.log('3: ', response[0].productType);
                console.log('4: ', prodType);
                console.log('5: ', response);

                //console.log(response);
                that.resetTable();
                that.makeTableForProductTypes();

            },
            error: function (error) {
                console.log("ERROR........", error);
            }
        });
    }

    ajaxProducts(url) {
        let that = this;
        let givenUrl = url;

        $.ajax({
            //url: "https://httpbin.org/get",
            //url: "http://localhost/KARADENIZ_BE_Uebung3/index.php?action=listTypes", // working
            url: givenUrl, // working too

            methot: "GET",
            success: function (response) {
                that.productsData = response;
                //that.data = response;
                 console.log('from ajaxProducts (WHOLE RESPONSE)', response);
                // console.log('from ajaxProducts: ', response.productType);
                // console.log('from ajaxProducts: ', response.products);
                
                
                that.makeTableForProducts();


            },
            error: function (error) {
                console.log("ERROR........", error);
            }
        });


    }

    showDatas() {
        // FOR TEST
        let that = this;
        let divKey = $('#divKey');
        let divValue = $('#divValue');
        let productType = this.ajaxProductTypes.productFirst;

        divKey.html("blabla");
        // divValue.html('.html:', that.data.productType);
        // console.log('showData(log): ',that.data);
        // console.log('response', that.ajaxRequest.response);
        // divValue.html(divKey.html());
        divValue.html(JSON.stringify(productType));
    }

    makeTableForProductTypes() {
        let that = this;
        //let table = $("table tbody");
        let data = that.data;
        let markup = "";

        that.resetTable();
        //let forID = "$(#" + data[e].productType + ")";
        //let a = $("#" + data[e].productType + ");

        for (let e in data) {
            //            markup = "<tr><td><a  id=" + data[e].productType + "\" href=\"" + data[e].url + "\">" + data[e].productType + "</a></td></tr>";
            //markup = $("<tr><td id=" + data[e].productType + ">" + data[e].productType + "</td></tr>").on("click", function() {that.justAlert();});
            markup = $("<tr><td id=" + data[e].productType + ">" + data[e].productType + "</td></tr>").on("click", function () { that.ajaxProducts(data[e].url); });
            that.table.append(markup);
        }
    }


    makeTableForProducts() {
        let that = this;
        //let table = $("table tbody");
        let productsData = that.productsData;
        let markup = "";
        //console.log('teybıldan', JSON.stringify(productsData));
        that.resetTable();
        for (let e in productsData) {
            markup = "<tr><td>" + productsData[e].productType + "</td></tr>";

            if(e == "products"){
               
            console.log('blablabla');
            console.log(e);
            productsData.products.forEach((element) => {
                console.log(element.name);
                markup = "<tr><td>" + element.name + "</td></tr>";
                that.table.append(markup);
                
            });
           
            }
            that.table.append(markup);
        }


    }
    

    resetTable(){
            this.table.empty();
    }



    justAlert() {
        alert('just alert!!!!! from justAlert()');

    }






}