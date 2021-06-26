$(document).ready(function () {
    
    let sett = {
        "url": "https://restcountries.eu/rest/v2/all",
        "method":"GET"
    }
    

    $.ajax(sett).done(res => {
        
        $('#btn-search').click(function (e) { 
            e.preventDefault();
            let select = $('#select-country').val().toLowerCase();
            res.map(item => {
                if(item.name.toLowerCase() == select){
                    $('#show').html(
                      `       <div class="accordion my-5" id="accordionExample">
                      <div class="card text-white">
                        <div class="card-header " id="headingOne">
                          <h1 class="mb-2 row justify-content-between align-items-center px-5">
                            
                              <img src="${item['flag']}" alt="" class="img-fluid" id="flag"><span>${item['name']}</span>
                    
                          </h1>
                        </div>
                        
                        <div id="#country" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div class="card-body ">
                            
                            <div class="row justify-content-between">
                              
                              <div class="col-12 col-lg-4 text-right">
                                <div class="row">
                                  
                                  <div class="col-12">
                                    <h4>منطقه: <span id="name">${item['region']}</span></h4>
                                    
                                  </div>
                                
                                  <div class="col-12">
                                    <h4>جمعیت : <span id="name">${item['population'].toLocaleString()}</span></h4>
                                  </div>
                                  <div class="col-12">
                                    <h4>واحد پول : <span id="name">${item['currencies'][0]['name']}</span></h4>
                                  </div>
                                  <div class="col-12">
                                    <h4>پایتخت  : <span id="name">${item['capital']}</span></h4>
                                  </div>
                                  <div class="col-12">
                                    <h4>کد کشور  : <span id="name">${item['callingCodes']}+</span></h4>
                                  </div>
                                </div>
                                
                              </div>
                              <div class="col-12 col-lg-8 text-left border rounded" id="show-map">
              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`
                       
                    )
                }
            });
    })
    

        
    });
    
});



