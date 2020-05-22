class GetDatas{



    ajaxRequest() {
        //let that = this;
        $.ajax({
            //url: "https://httpbin.org/get",
            url: "http://localhost/KARADENIZ_BE_Uebung3/index.php?action=listTypes",

            methot: "GET",
            success: function (response) {
                
                console.log(response);
            },
            error: function (error) {
                console.log("ERROR........", error);
            }



        });

    }
}