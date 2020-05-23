class GetDatas{
        constructor(){
            this.data;
        }


    ajaxRequest() {
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

                function send(){
                    return response[0].productType;
                }

                //ajaxRequest.productFirst = response[0].productType;
                let prodType = response[0].productType;

                console.log('1: ',response);
                console.log('2: ',response);
                console.log('3: ',response[0].productType);
                console.log('4: ',prodType);
                console.log('5: ',response);
                
                //console.log(response);
                that.makeTable();
                
            },
            error: function (error) {
                console.log("ERROR........", error);
            }
        });
    }

    showDatas(){
        // FOR TEST
        let that = this;
        let divKey = $('#divKey');
        let divValue = $('#divValue');
        let productType = this.ajaxRequest.productFirst;

        divKey.html("blabla");
        // divValue.html('.html:', that.data.productType);
        // console.log('showData(log): ',that.data);
        // console.log('response', that.ajaxRequest.response);
        // divValue.html(divKey.html());
        divValue.html(JSON.stringify(productType));
    }

    makeTable(){
        let that = this;
        let table = $("table tbody");
        let data = that.data;
        let markup = "";

        for(let e in data){
            markup = "<tr><td><a href=\"" + data[e].url + "\">" + data[e].productType + "</a></td></tr>";
            table.append(markup);
        }



    }






}