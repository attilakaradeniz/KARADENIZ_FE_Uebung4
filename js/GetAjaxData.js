class GetDatas {
    constructor() {
        this.data;
        this.productsData;
        this.table = $("table tbody");
    }

    showProducts() {
        let that = this;
        let buttonProductTypes = $("#btnProductTypes");
        buttonProductTypes.on("click", function () {
            that.ajaxProductTypes();
        });
    }

    ajaxProductTypes() {
        let that = this;
        $.ajax({
            //url: "https://httpbin.org/get",
            //url: "http://localhost/KARADENIZ_BE_Uebung3/index.php?action=listTypes", // working
            url: "http://localhost/KARADENIZ_FE_Uebung4/index.php?action=listTypes", // working too

            methot: "GET",
            success: function (response) {
                that.data = response;
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
                console.log('from ajaxProducts (WHOLE RESPONSE)', response);
                that.makeTableForProducts();
            },
            error: function (error) {
                console.log("ERROR........", error);
            }
        });
    }

    makeTableForProductTypes() {
        let that = this;
        let data = that.data;
        let markup = "";
        that.resetTable();
        for (let e in data) {
            markup = $("<tr><td id=" + data[e].productType + ">" + data[e].productType + "</td></tr>").on("click", function () { that.ajaxProducts(data[e].url);  });
            that.table.append(markup);
        }
    }

    makeTableForProducts() {
        let that = this;
        let productsData = that.productsData;
        let markup = "";
        //console.log('TEST', JSON.stringify(productsData.productType)); // TEST
        let clear = $("#clear");
        let emptyValue = JSON.stringify(productsData.productType);
        console.log(emptyValue);

        if(emptyValue == "No products in this category"){
            clear.text(emptyValue);
        }

        that.resetTable();
        for (let e in productsData) {
            if (e == "products") {
                productsData.products.forEach((element) => {
                markup = $("<tr><td>" + element.name + "</td></tr>").on("click", function () { $(this).fadeOut(1000); /* here comes later add to cart function may be*/ });
                    that.table.append(markup);
                });
            }
            that.table.append(markup);
        }
    }

    resetTable() {
        this.table.empty();
    }
}