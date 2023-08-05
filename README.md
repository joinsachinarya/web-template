
api.addToCart(function () {
    api.doPayment(function () {
        api.showSummery(function () {
            api.showSimilarProduct()    
            //1: this syntax is called  "CALLBACK HELL", this is first issue with callback that 
            //if we have several callbacks to do one after another we get an unmaintainable syntax which grow horizontaly instead of verticaly.

            //2: Also if we write callback like this, we get dependent on previous functions/api to run our next api/function,
            // in this case we kind of loose the control of our code, This situation is called "INVERSION OF CONTROL".
        })
    })
})

# Promise is an object which represent eventual complition an asynchronous operation. 
