var btclick = document.querySelectorAll(".bt-click");
var contentbox = document.querySelectorAll(".content-box")


btclick[0].classList.add("bt-click-color");
btclick.forEach(

    function (btn, index) {

        btn.addEventListener(
            "click",
            function () {
                contentbox.forEach(

                    function (value, i) {

                        if (index == i) {


                            contentbox[i].classList.add("tab-show")
                            btclick[i].classList.add("bt-click-color")


                        } else {

                            contentbox[i].classList.remove("tab-show")
                            btclick[i].classList.remove("bt-click-color")



                        }

                    }

                )

            }

        )

    }

)